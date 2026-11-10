import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { commercePage as c } from "@/data/commerce-services";
import { site } from "@/data/site";

const title = "Salesforce, Shopify Plus & Magento Engineering";
const description =
  "Founder-led engineering for Salesforce Commerce Cloud, Shopify Plus, Adobe Commerce and WooCommerce: builds, headless, migrations and integrations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/commerce" },
  openGraph: {
    type: "website",
    url: "/services/commerce",
    siteName: site.name,
    title: `${title} | ${site.name}`,
    description,
    images: [{ url: site.image, width: 1200, height: 630, alt: `${site.name} commerce engineering` }],
  },
  twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [site.image] },
};

const container = "mx-auto max-w-[1240px] px-6";
const h2 = "font-display font-extrabold leading-none tracking-[-0.03em]";

// FAQ structured data so Google can show the questions in results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: c.faq.items.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  })),
};

export default function CommerceServicesPage() {
  return (
    <main className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <div className="bg-ink text-paper">
        <section className={`${container} pb-16 pt-16`}>
          <p className="yf-label text-mist">{c.hero.label}</p>
          <h1 className="mt-5 max-w-[960px] font-display text-[clamp(38px,5vw,70px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            {c.hero.heading}
            <span className="text-gold">.</span>
          </h1>
          <p className="mt-6 max-w-[680px] text-[19px] leading-relaxed text-mist">{c.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={c.hero.primary.href} className="rounded-full bg-gold px-6 py-[15px] font-bold text-ink hover:bg-[#f7c561]">{c.hero.primary.label}</Link>
            <Link href={c.hero.secondary.href} className="rounded-full border-[1.5px] border-[#4A525B] px-6 py-3.5 font-bold text-paper hover:border-paper">{c.hero.secondary.label}</Link>
          </div>
        </section>
        <nav aria-label="On this page" className="border-t border-white/[0.07]">
          <div className={`${container} flex flex-wrap gap-x-6 gap-y-2 py-5 text-[15px] font-bold`}>
            {c.jump.map((j) => (
              <Link key={j.label} href={j.href} className="text-mist hover:text-paper">{j.label}</Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Service sections */}
      <div className={`${container} flex flex-col gap-5 py-[88px]`}>
        {c.sections.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-24 rounded-[28px] border border-line bg-white p-8 md:p-10">
            <div className="flex flex-wrap gap-x-14 gap-y-8">
              <div className="min-w-0 flex-[1.1_1_420px]">
                <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.06em] text-subtle">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink font-display text-[15px] font-extrabold text-gold">{String(i + 1).padStart(2, "0")}</span>
                  {s.label}
                </p>
                <h2 className={`${h2} mt-5 text-[clamp(28px,3.2vw,40px)] leading-[1.04]`}>{s.heading}</h2>
                <p className="mt-4 text-[17px] text-muted">{s.description}</p>
                <p className="mt-6 rounded-2xl bg-paper p-4 text-[15px]">
                  <strong>A good fit if:</strong> <span className="text-muted">{s.fit}</span>
                </p>
              </div>
              <div className="min-w-0 flex-[1_1_320px]">
                <p className="text-xs font-bold uppercase tracking-[0.06em] text-subtle">What we do</p>
                <ul className="mt-3 flex flex-col">
                  {s.does.map((d) => (
                    <li key={d} className="flex items-start gap-3 border-b border-line-soft py-3 text-[15px] font-bold last:border-0">
                      <Check aria-hidden className="mt-0.5 h-[18px] w-[18px] shrink-0" strokeWidth={2.4} />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?service=${s.contact}`} className="mt-5 inline-block font-bold hover:underline">Talk to us about {s.label.toLowerCase()} →</Link>
              </div>
            </div>
          </section>
        ))}

        <Link href="/services/php" className="flex flex-wrap items-center justify-between gap-4 rounded-[28px] bg-ink p-8 text-paper hover:bg-ink-2 md:p-10">
          <span>
            <span className="yf-label text-mist">PHP upgrades and security</span>
            <span className="mt-3 block font-display text-[clamp(24px,2.6vw,32px)] font-extrabold leading-tight">Running Magento or WooCommerce? Start with a free PHP health check.</span>
          </span>
          <span className="rounded-full bg-gold px-6 py-[15px] font-bold text-ink">See the PHP page →</span>
        </Link>
      </div>

      {/* Platforms */}
      <section className="border-y border-line bg-white">
        <div className={`${container} py-[88px]`}>
          <h2 className={`${h2} text-[clamp(30px,3.6vw,46px)]`}>{c.platforms.heading}</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {c.platforms.items.map((p) => (
              <div key={p.name} className="border-t-2 border-ink py-5">
                <p className="font-display text-[21px] font-bold">{p.name}</p>
                <p className="mt-2 text-[15px] text-muted">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`${container} py-[88px]`}>
        <h2 className={`${h2} text-[clamp(30px,3.6vw,46px)]`}>{c.process.heading}</h2>
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.process.steps.map((s, i) => (
            <li key={s.title} className="flex min-h-[200px] flex-col justify-between gap-6 rounded-3xl bg-ink p-7 text-paper">
              <span className="font-display text-[44px] font-extrabold leading-none text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-display text-2xl font-bold">{s.title}</span>
                <span className="mt-1.5 block text-[15px] text-mist">{s.description}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-white">
        <div className={`${container} grid gap-10 py-[88px] lg:grid-cols-[0.8fr_1.2fr]`}>
          <h2 className={`${h2} text-[clamp(30px,3.6vw,46px)]`}>{c.faq.heading}</h2>
          <div>
            {c.faq.items.map((q) => (
              <details key={q.question} className="group border-b border-line py-5 first:pt-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-bold [&::-webkit-details-marker]:hidden">
                  {q.question}
                  <span aria-hidden className="mt-1 text-2xl leading-none text-subtle transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[640px] text-base text-muted">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-[88px]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 rounded-[32px] bg-ink px-8 py-12 text-paper md:px-12">
          <div className="max-w-[640px]">
            <h2 className={`${h2} text-[clamp(32px,4vw,52px)]`}>
              {c.cta.heading}
              <span className="text-gold">.</span>
            </h2>
            <p className="mt-4 text-lg text-mist">{c.cta.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={c.cta.primary.href} className="rounded-full bg-gold px-6 py-[15px] font-bold text-ink hover:bg-[#f7c561]">{c.cta.primary.label}</Link>
            <a href={`mailto:${c.cta.email}`} className="rounded-full border-[1.5px] border-[#4A525B] px-6 py-3.5 font-bold text-paper hover:border-paper">{c.cta.email}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
