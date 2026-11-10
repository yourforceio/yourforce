import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, type LucideIcon } from "lucide-react";

import ProductStructuredData from "@/components/seo/ProductStructuredData";

import { homeProducts } from "@/data/home";
import type { ProductPageData } from "@/types/product";

/** Icons for the "Why it matters", "Features" and "How it works" cards, in content order. */
export type ProductPageIcons = {
  challenges: readonly LucideIcon[];
  features: readonly LucideIcon[];
  process: readonly LucideIcon[];
};

const container = "mx-auto max-w-[1240px] px-6";
const h2 = "font-display font-extrabold tracking-[-0.03em]";

function Heading({ label, heading, description, dark = false }: { label: string; heading: string; description?: string; dark?: boolean }) {
  return (
    <div className="max-w-[760px]">
      <p className={`yf-label ${dark ? "text-mist" : ""}`}>{label}</p>
      <h2 className={`${h2} mt-3.5 text-[clamp(30px,3.8vw,48px)] leading-[1.02]`}>{heading}</h2>
      {description && <p className={`mt-4 text-[17px] ${dark ? "text-mist" : "text-muted"}`}>{description}</p>}
    </div>
  );
}

/**
 * The layout shared by every product page (2026 redesign); each page passes its own content and icons.
 * The product's colour (from data/home.ts) is used only as a small marker; the demo screenshot is
 * public/images/products/<slug>-demo.webp.
 */
export default function ProductPage({ slug, data, icons }: { slug: string; data: ProductPageData; icons: ProductPageIcons }) {
  const { hero, overview, liveDemo, challenges, features, process, audiences, faq, finalCta } = data;
  const product = homeProducts.find((p) => p.slug === slug);
  const color = product?.color ?? "#F5B83D";

  return (
    <main className="bg-paper text-ink">
      <ProductStructuredData slug={slug} faq={faq.items} />

      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className={`${container} pb-20 pt-12`}>
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-mist hover:text-paper">
            <ArrowLeft aria-hidden className="h-4 w-4" />
            All products
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.06em] text-mist">
                <span aria-hidden className="h-2.5 w-2.5 rounded-[3px]" style={{ background: color }} />
                {hero.badge}
              </p>
              <h1 className="mt-5 font-display text-[clamp(36px,4.6vw,62px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
                {hero.heading}
                <span className="text-gold">.</span>
              </h1>
              <p className="mt-6 max-w-[620px] text-[18px] leading-relaxed text-mist">{hero.description}</p>
              <ul aria-label="Who it is for" className="mt-6 flex flex-wrap gap-2">
                {hero.highlights.map((item) => (
                  <li key={item} className="rounded-full border border-ink-line px-3.5 py-2 text-sm font-bold text-[#C9CED4]">{item}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={hero.primaryHref} className="rounded-full bg-gold px-6 py-[15px] font-bold text-ink hover:bg-[#f7c561]">{hero.primaryCta}</Link>
                <a href={hero.secondaryHref} className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-[#4A525B] px-6 py-3.5 font-bold text-paper hover:border-paper">
                  {hero.secondaryCta}
                  <ArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[28px] bg-paper p-7 text-ink md:p-8">
              <p className="yf-label">{overview.eyebrow}</p>
              <h2 className="mt-3 font-display text-[26px] font-extrabold leading-tight">{overview.title}</h2>
              <p className="mt-3 text-[15px] text-muted">{overview.description}</p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {overview.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-[15px] font-bold">
                    <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.4} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Live demo, with a screenshot of the demo site */}
      <section className="border-b border-line bg-white">
        <div className={`${container} grid gap-12 py-[88px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center`}>
          <a href={liveDemo.primaryHref} className="group block overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_60px_rgba(15,18,21,.12)]">
            <span className="flex items-center gap-2 border-b border-line px-3.5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-3 truncate text-xs font-bold text-subtle">{liveDemo.primaryHref.replace(/^https?:\/\//, "")}</span>
            </span>
            <span className="relative block aspect-[16/10]">
              <Image
                src={`/images/products/${slug}-demo.webp`}
                alt={`${product?.demoName ?? "The live demo"}, the YourForce ${product?.name ?? ""} demo`}
                fill
                sizes="(min-width: 1024px) 600px, 92vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </span>
          </a>

          <div>
            <p className="yf-label">{liveDemo.eyebrow}</p>
            <h2 className={`${h2} mt-3.5 text-[clamp(30px,3.6vw,46px)] leading-[1.02]`}>{liveDemo.heading}</h2>
            <p className="mt-4 text-[17px] text-muted">{liveDemo.description}</p>
            <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {liveDemo.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-paper p-4">
                  <dd className="font-display text-[30px] font-extrabold leading-none">{stat.value}</dd>
                  <dt className="mt-1.5 text-[13px] font-bold text-subtle">{stat.label}</dt>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={liveDemo.primaryHref} className="inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-[15px] font-bold text-paper hover:bg-ink-2">
                {liveDemo.primaryCta}
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
              <a href={liveDemo.secondaryHref} className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-ink px-6 py-3.5 font-bold hover:bg-ink hover:text-paper">
                {liveDemo.secondaryCta}
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className={`${container} py-[88px]`}>
        <Heading label={challenges.eyebrow} heading={challenges.heading} description={challenges.description} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {challenges.items.map((item, index) => {
            const Icon = icons.challenges[index % icons.challenges.length];
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

      {/* Features */}
      <section id={features.id} className="scroll-mt-24 border-y border-line bg-white">
        <div className={`${container} py-[88px]`}>
          <Heading label={features.eyebrow} heading={features.heading} />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.items.map((item, index) => {
              const Icon = icons.features[index % icons.features.length];
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

      {/* How it works */}
      <section className={`${container} py-[88px]`}>
        <Heading label={process.eyebrow} heading={process.heading} />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => {
            const Icon = icons.process[index % icons.process.length];
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

      {/* Who it is for */}
      <section className="border-y border-line bg-white">
        <div className={`${container} py-[88px]`}>
          <Heading label={audiences.eyebrow} heading={audiences.heading} />
          <div className="mt-10 grid gap-x-10 md:grid-cols-3">
            {audiences.items.map((item) => (
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
