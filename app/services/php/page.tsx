import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Bug,
  Check,
  ClipboardCheck,
  Clock,
  Code2,
  FlaskConical,
  Layers,
  RefreshCw,
  Rocket,
  SearchCheck,
  Server,
  ShieldAlert,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { phpEngineering } from "@/data/services";
import { phpPage } from "@/data/php";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "PHP Upgrades, Security & Development",
  description:
    "PHP version upgrades, security patching, Magento 2 and WooCommerce hardening, custom PHP development, and legacy code rescue. Request a free PHP health check.",
  alternates: {
    canonical: "/services/php",
  },
  openGraph: {
    title: "PHP Upgrades, Security & Development | YourForce",
    description:
      "Move legacy PHP to supported versions, close security gaps, and keep your commerce platform fast and protected.",
    url: "/services/php",
    type: "website",
    images: [{ url: site.image, width: 1200, height: 630, alt: "YourForce PHP upgrades and security" }],
  },
};

const riskIcons = [ShieldAlert, Bug, Server, Clock];
const serviceIcons = [RefreshCw, ShieldCheck, Layers, Wrench, Code2, SearchCheck];
const processIcons = [ClipboardCheck, SearchCheck, FlaskConical, Rocket];

const container = "mx-auto max-w-[1240px] px-6";
const h2 = "font-display font-extrabold leading-none tracking-[-0.03em]";

function Heading({ label, heading, description, dark = false }: { label: string; heading: string; description?: string; dark?: boolean }) {
  return (
    <div className="max-w-[760px]">
      <p className={`yf-label ${dark ? "text-mist" : ""}`}>{label}</p>
      <h2 className={`${h2} mt-3.5 text-[clamp(30px,3.8vw,48px)] leading-[1.02]`}>{heading}</h2>
      {description && <p className={`mt-4 text-[17px] ${dark ? "text-mist" : "text-muted"}`}>{description}</p>}
    </div>
  );
}

// FAQ structured data so Google can show the questions in results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: phpPage.faq.items.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  })),
};

export default function PhpServicePage() {
  const { hero, risks, services, process, platforms, faq, finalCta } = phpPage;
  const { healthCheck } = phpEngineering;

  return (
    <main className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className={`${container} pb-20 pt-12`}>
          <Link href="/services/commerce" className="inline-flex items-center gap-2 text-sm font-bold text-mist hover:text-paper">
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Commerce engineering
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="yf-label text-mist">{hero.badge}</p>
              <h1 className="mt-5 font-display text-[clamp(36px,4.6vw,62px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
                {hero.heading}
                <span className="text-gold">.</span>
              </h1>
              <p className="mt-6 max-w-[620px] text-[18px] leading-relaxed text-mist">{hero.description}</p>
              <ul aria-label="Platforms covered" className="mt-6 flex flex-wrap gap-2">
                {hero.highlights.map((item) => (
                  <li key={item} className="rounded-full border border-ink-line px-3.5 py-2 text-sm font-bold text-[#C9CED4]">{item}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={hero.primaryHref} className="rounded-full bg-gold px-6 py-[15px] font-bold text-ink hover:bg-[#f7c561]">{hero.primaryCta}</Link>
                <a href={hero.secondaryHref} className="rounded-full border-[1.5px] border-[#4A525B] px-6 py-3.5 font-bold text-paper hover:border-paper">{hero.secondaryCta}</a>
              </div>
            </div>

            <div className="rounded-[28px] bg-paper p-7 text-ink md:p-8">
              <p className="yf-label">{healthCheck.eyebrow}</p>
              <h2 className="mt-3 font-display text-[26px] font-extrabold leading-tight">{healthCheck.title}</h2>
              <p className="mt-3 text-[15px] text-muted">{healthCheck.description}</p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {healthCheck.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-[15px] font-bold">
                    <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.4} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={hero.primaryHref} className="mt-6 inline-block font-bold hover:underline">Request yours →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className={`${container} py-[88px]`}>
        <Heading label={risks.eyebrow} heading={risks.heading} description={risks.description} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {risks.items.map((item, index) => {
            const Icon = riskIcons[index % riskIcons.length];
            return (
              <article key={item.title} className="flex gap-5 rounded-3xl border border-line bg-white p-7">
                <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-soft text-ink">
                  <Icon className="h-6 w-6" strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="font-display text-[21px] font-bold">{item.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* What we do */}
      <section id={services.id} className="scroll-mt-24 border-y border-line bg-white">
        <div className={`${container} py-[88px]`}>
          <Heading label={services.eyebrow} heading={services.heading} />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.items.map((item, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <article key={item.title} className="rounded-[22px] border border-line bg-paper/50 p-7">
                  <span aria-hidden className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-gold">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-[21px] font-bold">{item.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`${container} py-[88px]`}>
        <Heading label={process.eyebrow} heading={process.heading} />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => {
            const Icon = processIcons[index % processIcons.length];
            return (
              <li key={step.title} className="flex min-h-[220px] flex-col justify-between gap-6 rounded-3xl bg-ink p-7 text-paper">
                <span className="flex items-center justify-between">
                  <span className="font-display text-[44px] font-extrabold leading-none text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden className="h-6 w-6 text-mist" strokeWidth={1.9} />
                </span>
                <span>
                  <span className="block font-display text-[22px] font-bold">{step.title}</span>
                  <span className="mt-1.5 block text-[15px] text-mist">{step.description}</span>
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Platforms */}
      <section className="border-y border-line bg-white">
        <div className={`${container} py-[88px]`}>
          <Heading label={platforms.eyebrow} heading={platforms.heading} />
          <div className="mt-10 grid gap-x-10 md:grid-cols-3">
            {platforms.items.map((item) => (
              <article key={item.title} className="border-t-2 border-ink py-5">
                <h3 className="font-display text-[21px] font-bold">{item.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${container} grid gap-10 py-[88px] lg:grid-cols-[0.8fr_1.2fr]`}>
        <Heading label={faq.eyebrow} heading={faq.heading} />
        <div>
          {faq.items.map((item) => (
            <details key={item.question} className="group border-b border-line py-5 first:pt-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-bold [&::-webkit-details-marker]:hidden">
                {item.question}
                <span aria-hidden className="mt-1 text-2xl leading-none text-subtle transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-[640px] text-base text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-[88px]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 rounded-[32px] bg-ink px-8 py-12 text-paper md:px-12">
          <div className="max-w-[640px]">
            <h2 className={`${h2} text-[clamp(30px,3.8vw,48px)] leading-[1.02]`}>
              {finalCta.heading}
              <span className="text-gold">.</span>
            </h2>
            <p className="mt-4 text-lg text-mist">{finalCta.description}</p>
          </div>
          <Link href={finalCta.href} className="rounded-full bg-gold px-7 py-4 font-bold text-ink hover:bg-[#f7c561]">{finalCta.ctaLabel}</Link>
        </div>
      </section>
    </main>
  );
}
