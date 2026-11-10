import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Clock3 } from "lucide-react";

import { lab } from "@/data/lab";
import { site } from "@/data/site";
import type { LabCategory } from "@/types/lab";

type LabPlatform = "all" | LabCategory;

type LabPageProps = {
  searchParams?: Promise<{ platform?: string }>;
};

// Filter tabs; the active one comes from ?platform= so each view has its own address.
// The "sfcc" category holds Next.js prototypes of storefront, search and fulfilment patterns (simulated data),
// so it is labelled "Commerce patterns" rather than claiming Salesforce Commerce Cloud builds.
const platformTabs: { label: string; value: LabPlatform }[] = [
  { label: "All", value: "all" },
  { label: "Shopify", value: "shopify" },
  { label: "Commerce patterns", value: "sfcc" },
  { label: "AI experiences", value: "ai-commerce" },
];

const platformHeading: Record<LabPlatform, string> = {
  all: "Every Labs experience",
  shopify: "Shopify commerce tools and storefront enhancements",
  sfcc: "Storefront, search and fulfilment patterns",
  "ai-commerce": "AI-assisted and conversational commerce",
};

export const metadata: Metadata = {
  title: lab.metadata.title,
  description: lab.metadata.description,
  alternates: { canonical: "/lab" },
  openGraph: {
    type: "website",
    url: "/lab",
    title: lab.metadata.title,
    description: lab.metadata.description,
    images: [{ url: site.image, width: 1200, height: 630, alt: "YourForce Engineering Lab" }],
  },
  twitter: { card: "summary_large_image", title: lab.metadata.title, description: lab.metadata.description, images: [site.image] },
};

const container = "mx-auto max-w-[1240px] px-6";
const h2 = "font-display font-extrabold tracking-[-0.03em]";

export default async function LabPage({ searchParams }: LabPageProps) {
  const requested = (await searchParams)?.platform;
  const active: LabPlatform = platformTabs.some((t) => t.value === requested) ? (requested as LabPlatform) : "all";

  const items = lab.items
    .filter((item) => active === "all" || item.categories?.includes(active))
    .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999));

  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className={`${container} pb-16 pt-16`}>
          <p className="yf-label text-mist">{lab.hero.badge}</p>
          <h1 className="mt-5 max-w-[900px] font-display text-[clamp(40px,5.4vw,76px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            {lab.hero.heading.primary} {lab.hero.heading.accent.replace(/\.$/, "")}
            <span className="text-gold">.</span>
          </h1>
          <p className="mt-6 max-w-[700px] text-[19px] leading-relaxed text-mist">{lab.hero.description}</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {lab.hero.tags.map((t) => (
              <li key={t} className="rounded-full border border-ink-line px-3.5 py-2 text-sm font-bold text-[#C9CED4]">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experiences */}
      <section className={`${container} py-[88px]`}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[760px]">
            <p className="yf-label">{lab.introduction.eyebrow}</p>
            <h2 className={`${h2} mt-3.5 text-[clamp(30px,3.8vw,48px)] leading-[1.02]`}>{lab.introduction.heading}</h2>
            <p className="mt-4 text-[17px] text-muted">{lab.introduction.description}</p>
          </div>
        </div>

        <nav aria-label="Filter Labs experiences by platform" className="mt-10 flex flex-wrap gap-2">
          {platformTabs.map((tab) => {
            const on = tab.value === active;
            return (
              <Link
                key={tab.value}
                href={tab.value === "all" ? "/lab" : `/lab?platform=${tab.value}`}
                scroll={false}
                aria-current={on ? "page" : undefined}
                className={`rounded-full border-[1.5px] px-4 py-2.5 text-sm font-bold ${on ? "border-ink bg-ink text-paper" : "border-[#CFCCC4] hover:border-ink"}`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
        <p className="mt-5 text-sm font-bold text-subtle">
          {platformHeading[active]} · {items.length} {items.length === 1 ? "experience" : "experiences"}
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            const LinkTag = item.external ? "a" : Link;
            return (
              <article key={item.slug} className="flex flex-col overflow-hidden rounded-[26px] border border-line bg-white">
                <LinkTag href={item.href} className="group relative block aspect-[16/10] border-b border-line bg-paper">
                  <Image src={item.preview.src} alt={item.preview.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 92vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1.5 font-display text-[13px] font-extrabold text-gold">Lab {item.number}</span>
                  {item.previewLabel && <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-ink">{item.previewLabel}</span>}
                </LinkTag>
                <div className="flex flex-1 flex-col p-6">
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.06em] text-subtle">
                    <Icon aria-hidden className="h-4 w-4" strokeWidth={2} />
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-[24px] font-extrabold leading-tight tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-2.5 text-[15px] text-muted">{item.description}</p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {item.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm font-bold">
                        <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.6} />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-1.5">
                    {item.technologies.map((t) => (
                      <li key={t} className="rounded-full bg-paper px-3 py-1.5 text-xs font-bold text-[#2C3137]">{t}</li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-subtle">
                      <Clock3 aria-hidden className="h-4 w-4" />
                      {item.duration}
                    </span>
                    <LinkTag href={item.href} className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper hover:bg-ink-2">
                      {item.ctaLabel ?? "Try the demo"}
                      {item.external && <ArrowUpRight aria-hidden className="h-4 w-4" />}
                    </LinkTag>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Coming next */}
      <section className="border-y border-line bg-white">
        <div className={`${container} grid gap-10 py-[88px] lg:grid-cols-[0.8fr_1.2fr]`}>
          <div>
            <p className="yf-label">{lab.roadmap.eyebrow}</p>
            <h2 className={`${h2} mt-3.5 text-[clamp(28px,3.4vw,42px)] leading-[1.04]`}>{lab.roadmap.heading}</h2>
            <p className="mt-4 text-[17px] text-muted">{lab.roadmap.description}</p>
          </div>
          <ol className="flex flex-col">
            {lab.upcomingShopify.map((f) => (
              <li key={f.title} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2 border-b border-line py-5 first:pt-0">
                <span className="max-w-[560px]">
                  <span className="block font-display text-xl font-bold">{f.title}</span>
                  <span className="mt-1.5 block text-[15px] text-muted">{f.description}</span>
                </span>
                <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${f.statusLabel === "In progress" ? "bg-gold-soft text-ink" : "bg-paper text-subtle"}`}>
                  Shopify · {f.statusLabel}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why the Lab */}
      <section className={`${container} py-[88px]`}>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="yf-label">{lab.philosophy.eyebrow}</p>
            <h2 className={`${h2} mt-3.5 text-[clamp(28px,3.4vw,42px)] leading-[1.04]`}>{lab.philosophy.heading}</h2>
          </div>
          <div className="flex flex-col gap-4 text-[17px] text-muted">
            {lab.philosophy.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-[88px]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 rounded-[32px] bg-ink px-8 py-12 text-paper md:px-12">
          <div className="max-w-[680px]">
            <h2 className={`${h2} text-[clamp(28px,3.6vw,46px)] leading-[1.02]`}>{lab.cta.heading}</h2>
            <p className="mt-4 text-lg text-mist">{lab.cta.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={lab.cta.primary.href} className="rounded-full bg-gold px-7 py-4 font-bold text-ink hover:bg-[#f7c561]">{lab.cta.primary.label}</Link>
            <Link href={lab.cta.secondary.href} className="rounded-full border-[1.5px] border-[#4A525B] px-6 py-[15px] font-bold text-paper hover:border-paper">{lab.cta.secondary.label}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
