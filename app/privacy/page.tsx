import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

import { privacyPolicy } from "@/data/privacy";
import { site } from "@/data/site";

const pageUrl = `${site.url.replace(/\/$/, "")}/privacy`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how YourForce collects, uses, protects, and shares personal information submitted through its website and contact form.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Privacy Policy | YourForce",
    description: "Learn how YourForce handles personal information submitted through its website and contact form.",
    images: [{ url: site.image, width: 1200, height: 630, alt: "YourForce privacy policy" }],
  },
};

/** Privacy policy (2026 redesign). The wording lives in data/privacy.ts and is unchanged by the redesign. */
export default function PrivacyPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1240px] px-6 pb-14 pt-16">
          <p className="yf-label text-mist">{privacyPolicy.badge}</p>
          <h1 className="mt-5 font-display text-[clamp(40px,5.4vw,72px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            {privacyPolicy.title}
          </h1>
          <p className="mt-6 max-w-[760px] text-[18px] leading-relaxed text-mist">{privacyPolicy.description}</p>
          <p className="mt-6 text-sm font-bold text-mist">Last updated: {privacyPolicy.lastUpdated}</p>
        </div>
      </section>

      {/* Policy */}
      <section className="mx-auto grid max-w-[1240px] items-start gap-10 px-6 py-[72px] lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
        <aside className="hidden lg:sticky lg:top-28 lg:block">
          <div className="rounded-[22px] border border-line bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-subtle">On this page</p>
            <nav aria-label="Privacy policy sections" className="mt-4">
              <ul className="flex flex-col gap-2.5">
                {privacyPolicy.sections.map((section) => (
                  <li key={section.id}>
                    <Link href={`#${section.id}`} className="text-sm leading-6 text-muted hover:text-ink hover:underline">
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="min-w-0 rounded-[28px] border border-line bg-white px-7 py-4 sm:px-10">
          {privacyPolicy.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-line-soft py-8 last:border-0">
              <h2 className="font-display text-[clamp(22px,2.4vw,28px)] font-extrabold leading-tight tracking-[-0.02em]">{section.title}</h2>
              <div className="mt-4 flex flex-col gap-4 text-base leading-7 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="flex flex-col gap-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-gold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.id === "contact" && (
                  <a href={`mailto:${privacyPolicy.contactEmail}`} className="inline-flex items-center gap-2 self-start font-bold text-ink hover:underline">
                    <Mail aria-hidden className="h-4 w-4" />
                    {privacyPolicy.contactEmail}
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
