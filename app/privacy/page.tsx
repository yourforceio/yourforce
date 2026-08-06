import type { Metadata } from "next";

import Link from "next/link";

import {
  ArrowLeft,
  Mail,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { privacyPolicy } from "@/data/privacy";
import { site } from "@/data/site";

const pageUrl = `${site.url.replace(
  /\/$/,
  "",
)}/privacy`;

export const metadata: Metadata = {
  title: "Privacy Policy | YourForce",

  description:
    "Learn how YourForce collects, uses, protects, and shares personal information submitted through its website and contact form.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Privacy Policy | YourForce",
    description:
      "Learn how YourForce handles personal information submitted through its website and contact form.",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="
          relative
          overflow-hidden
          border-b
          border-white/10
          bg-slate-950
          pb-16
          pt-12
          text-white
          lg:pb-20
          lg:pt-16
        "
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />

          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              [background-size:48px_48px]
            "
          />
        </div>

        <Container>
          <div className="relative mx-auto max-w-4xl">
            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-400
                transition-colors
                hover:text-white
              "
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4"
              />

              Back to Home
            </Link>

            <div className="mt-12">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-400/30
                  bg-blue-500/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-blue-300
                "
              >
                <ShieldCheck
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                {privacyPolicy.badge}
              </span>

              <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl">
                {privacyPolicy.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-300">
                {privacyPolicy.description}
              </p>

              <p className="mt-6 text-sm text-slate-500">
                Last updated:{" "}
                {privacyPolicy.lastUpdated}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Policy content */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            {/* Table of contents */}
            <aside className="hidden lg:sticky lg:top-28 lg:block">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  On This Page
                </p>

                <nav
                  aria-label="Privacy policy sections"
                  className="mt-5"
                >
                  <ul className="space-y-3">
                    {privacyPolicy.sections.map(
                      (section) => (
                        <li key={section.id}>
                          <Link
                            href={`#${section.id}`}
                            className="
                              text-sm
                              leading-6
                              text-slate-600
                              transition-colors
                              hover:text-blue-600
                            "
                          >
                            {section.title}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Main policy */}
            <div className="min-w-0 space-y-8">
              {privacyPolicy.sections.map(
                (section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="
                      scroll-mt-28
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-7
                      shadow-sm
                      sm:p-9
                    "
                  >
                    <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      {section.title}
                    </h2>

                    <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                      {section.paragraphs.map(
                        (paragraph) => (
                          <p key={paragraph}>
                            {paragraph}
                          </p>
                        ),
                      )}

                      {section.bullets && (
                        <ul className="space-y-3 pl-1">
                          {section.bullets.map(
                            (bullet) => (
                              <li
                                key={bullet}
                                className="flex items-start gap-3"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                                />

                                <span>{bullet}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      )}

                      {section.id ===
                        "contact" && (
                        <Link
                          href={`mailto:${privacyPolicy.contactEmail}`}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            font-semibold
                            text-blue-600
                            transition-colors
                            hover:text-blue-700
                          "
                        >
                          <Mail
                            aria-hidden="true"
                            className="h-4 w-4"
                          />

                          {
                            privacyPolicy.contactEmail
                          }
                        </Link>
                      )}
                    </div>
                  </section>
                ),
              )}

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-sm leading-7 text-blue-950">
                This policy describes the current
                website and contact-enquiry process.
                It should be reviewed whenever new
                analytics, advertising, payment,
                account, newsletter, or customer-data
                features are introduced.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
