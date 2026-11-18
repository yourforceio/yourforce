import Link from "next/link";
import { Mail } from "lucide-react";

import type { PrivacyPolicy } from "@/types/privacy";

/** A legal page (Terms of Service, Refund policy): the same layout as the privacy policy, from a data file. */
export default function LegalPage({ doc, navLabel }: { doc: PrivacyPolicy; navLabel: string }) {
  return (
    <main className="bg-paper text-ink">
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1240px] px-6 pb-14 pt-16">
          <p className="yf-label text-mist">{doc.badge}</p>
          <h1 className="mt-5 font-display text-[clamp(40px,5.4vw,72px)] font-extrabold leading-[0.98] tracking-[-0.035em]">{doc.title}</h1>
          <p className="mt-6 max-w-[760px] text-[18px] leading-relaxed text-mist">{doc.description}</p>
          <p className="mt-6 text-sm font-bold text-mist">Last updated: {doc.lastUpdated}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] items-start gap-10 px-6 py-[72px] lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
        <aside className="hidden lg:sticky lg:top-28 lg:block">
          <div className="rounded-[22px] border border-line bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-subtle">On this page</p>
            <nav aria-label={navLabel} className="mt-4">
              <ul className="flex flex-col gap-2.5">
                {doc.sections.map((section) => (
                  <li key={section.id}>
                    <Link href={`#${section.id}`} className="text-sm leading-6 text-muted hover:text-ink hover:underline">{section.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="min-w-0 rounded-[28px] border border-line bg-white px-7 py-4 sm:px-10">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-line-soft py-8 last:border-0">
              <h2 className="font-display text-[clamp(22px,2.4vw,28px)] font-extrabold leading-tight tracking-[-0.02em]">{section.title}</h2>
              <div className="mt-4 flex flex-col gap-4 text-base leading-7 text-muted">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
                  <a href={`mailto:${doc.contactEmail}`} className="inline-flex items-center gap-2 self-start font-bold text-ink hover:underline">
                    <Mail aria-hidden className="h-4 w-4" />
                    {doc.contactEmail}
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
