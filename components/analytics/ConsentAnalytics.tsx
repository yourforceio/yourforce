"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";

/**
 * Google Analytics that only loads after the visitor agrees (2026). Until then no analytics script is
 * downloaded and no analytics cookie is set. The choice is kept in localStorage on that device; the footer's
 * "Cookie settings" button clears it so the banner shows again.
 */

const KEY = "yf-analytics-consent";
const EVENT = "yf-consent-change";
type Choice = "granted" | "denied" | null;

function read(): Choice {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function write(value: Choice) {
  try {
    if (value) window.localStorage.setItem(KEY, value);
    else window.localStorage.removeItem(KEY);
  } catch {
    // Storage can be blocked (private mode); the banner simply shows again next visit.
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

// "pending" on the server and during hydration, so nothing analytics-related renders until we know the choice.
const useChoice = () => useSyncExternalStore<Choice | "pending">(subscribe, read, () => "pending");

export default function ConsentAnalytics({ measurementId, serviceAnalyticsValues }: { measurementId: string; serviceAnalyticsValues: Record<string, string> }) {
  const choice = useChoice();

  const decide = (value: "granted" | "denied") => {
    // Google's documented opt-out flag: stops a tag that is already running in this tab from sending anything.
    (window as unknown as Record<string, boolean>)[`ga-disable-${measurementId}`] = value !== "granted";
    write(value);
  };

  return (
    <>
      {choice === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
          <Script id="yourforce-google-analytics" strategy="afterInteractive">
            {`
              window['ga-disable-${measurementId}'] = false;
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}');

              const serviceAnalyticsValues = ${JSON.stringify(serviceAnalyticsValues)};
              document.addEventListener('click', function (event) {
                const target = event.target;
                const link = target instanceof Element ? target.closest('a') : null;
                if (!link) return;
                const service = serviceAnalyticsValues[link.hostname];
                if (!service) return;
                gtag('event', 'service_referral_click', { service: service, link_text: (link.textContent || '').trim() });
              });
            `}
          </Script>
        </>
      )}

      {choice === null && (
        <div role="region" aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-[760px] rounded-[22px] border border-line bg-white p-5 text-ink shadow-[0_20px_50px_rgba(15,18,21,.25)] sm:inset-x-6 sm:bottom-6 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] leading-relaxed text-muted">
              We&apos;d like to use Google Analytics to see how the site is used. It only runs if you agree.{" "}
              <Link href="/privacy#analytics-cookies" className="font-bold text-ink underline underline-offset-2">Privacy policy</Link>
            </p>
            <div className="flex shrink-0 gap-2.5">
              <button type="button" onClick={() => decide("denied")} className="rounded-full border-[1.5px] border-ink px-5 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink">
                Decline
              </button>
              <button type="button" onClick={() => decide("granted")} className="rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-[#f7c561] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2">
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Footer link that shows the consent banner again so a visitor can change their choice. */
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={() => write(null)} className={className}>
      Cookie settings
    </button>
  );
}
