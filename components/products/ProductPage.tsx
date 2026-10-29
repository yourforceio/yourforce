import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/layout/Container";

import type { ProductPageData } from "@/types/product";

/** Icons for the "Why it matters", "Features" and "How it works" cards, in content order. */
export type ProductPageIcons = {
  challenges: readonly LucideIcon[];
  features: readonly LucideIcon[];
  process: readonly LucideIcon[];
};

/** The layout shared by every product page; each page passes its own content and icons. */
function SectionHeading({
  eyebrow,
  heading,
  description,
  dark = false,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-black leading-tight tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-8 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function ProductPage({
  data,
  icons,
}: {
  data: ProductPageData;
  icons: ProductPageIcons;
}) {
  const {
    hero,
    overview,
    liveDemo,
    challenges,
    features,
    process,
    audiences,
    faq,
    finalCta,
  } = data;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-32 text-white md:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"
        />

        <Container>
          <Link
            href="/products"
            className="relative inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            All products
          </Link>

          <div className="relative mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                {hero.badge}
              </span>

              <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                {hero.heading}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {hero.description}
              </p>

              <ul
                aria-label="Who it is for"
                className="mt-6 flex flex-wrap gap-2"
              >
                {hero.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={hero.primaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-white transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                >
                  {hero.primaryCta}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>

                <a
                  href={hero.secondaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-bold text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                >
                  {hero.secondaryCta}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Walkthrough card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                {overview.eyebrow}
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                {overview.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {overview.description}
              </p>

              <ul className="mt-6 space-y-3">
                {overview.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-200"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <Check
                        aria-hidden="true"
                        className="h-3 w-3"
                        strokeWidth={3}
                      />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Live demo */}
      <section className="border-b border-emerald-100 bg-emerald-50/60 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-600">
                {liveDemo.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl">
                {liveDemo.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {liveDemo.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={liveDemo.primaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-white transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-4"
                >
                  {liveDemo.primaryCta}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href={liveDemo.secondaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-4"
                >
                  {liveDemo.secondaryCta}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-4">
              {liveDemo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
                >
                  <dt className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-4xl font-black tracking-tight text-slate-950">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Why it matters */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow={challenges.eyebrow}
            heading={challenges.heading}
            description={challenges.description}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {challenges.items.map((item, index) => {
              const Icon = icons.challenges[index % icons.challenges.length];

              return (
                <article
                  key={item.title}
                  className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section
        id={features.id}
        className="scroll-mt-24 bg-slate-50 py-24"
      >
        <Container>
          <SectionHeading
            eyebrow={features.eyebrow}
            heading={features.heading}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.items.map((item, index) => {
              const Icon = icons.features[index % icons.features.length];

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-slate-950 py-24 text-white">
        <Container>
          <SectionHeading
            eyebrow={process.eyebrow}
            heading={process.heading}
            dark
          />

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, index) => {
              const Icon = icons.process[index % icons.process.length];

              return (
                <li
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold text-slate-500">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* Who it is for */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow={audiences.eyebrow}
            heading={audiences.heading}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.items.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <Container>
          <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} />

          <div className="mt-12 max-w-3xl space-y-4">
            {faq.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-slate-950 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="text-2xl font-normal text-slate-400 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"
        />

        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              {finalCta.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              {finalCta.description}
            </p>
            <Link
              href={finalCta.href}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 font-bold text-white transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            >
              {finalCta.ctaLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
