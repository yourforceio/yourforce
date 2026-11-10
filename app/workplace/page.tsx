import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { site } from "@/data/site";
import { workplace } from "@/data/workplace";

export const metadata: Metadata = {
  title: workplace.metadata.title,
  description: workplace.metadata.description,
  alternates: { canonical: "/workplace" },
  openGraph: {
    type: "website",
    url: "/workplace",
    title: `${workplace.metadata.title} | ${site.name}`,
    description: workplace.metadata.description,
    images: [{ url: site.image, width: 1200, height: 630, alt: `${site.name} remote-first workplace` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${workplace.metadata.title} | ${site.name}`,
    description: workplace.metadata.description,
    images: [site.image],
  },
};

const container = "mx-auto max-w-[1240px] px-6";
const h2 = "font-display font-extrabold tracking-[-0.03em]";

export default function WorkplacePage() {
  const { model, commitment, cta } = workplace;

  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className={`${container} pb-16 pt-16`}>
          <p className="yf-label text-mist">{workplace.badge}</p>
          <h1 className="mt-5 max-w-[900px] font-display text-[clamp(40px,5.4vw,76px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            {workplace.heading.primary} {workplace.heading.accent.replace(/\.$/, "")}
            <span className="text-gold">.</span>
          </h1>
          <p className="mt-6 max-w-[700px] text-[19px] leading-relaxed text-mist">{workplace.description}</p>
          <p className="mt-7 inline-flex rounded-full border border-ink-line px-4 py-2 text-sm font-bold text-[#C9CED4]">{workplace.status}</p>
        </div>
      </section>

      {/* Principles */}
      <section className={`${container} py-[88px]`}>
        <p className="yf-label">How we think</p>
        <h2 className={`${h2} mt-3.5 max-w-[760px] text-[clamp(30px,3.8vw,48px)] leading-[1.02]`}>The principles behind remote work that delivers</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workplace.principles.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.title} className="rounded-[22px] border border-line bg-white p-7">
                <span aria-hidden className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-gold">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-[21px] font-bold">{p.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{p.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-line bg-white">
        <div className={`${container} py-[88px]`}>
          <p className="yf-label">Working here</p>
          <h2 className={`${h2} mt-3.5 max-w-[760px] text-[clamp(30px,3.8vw,48px)] leading-[1.02]`}>Flexible by design</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {workplace.benefits.map((b) => {
              const Icon = b.icon;
              return (
                <article key={b.title} className="flex gap-5 rounded-3xl border border-line bg-paper/50 p-7">
                  <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-soft text-ink">
                    <Icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="font-display text-[21px] font-bold">{b.title}</h3>
                    <p className="mt-2 text-[15px] text-muted">{b.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work model */}
      <section className={`${container} py-[88px]`}>
        <p className="yf-label">{model.badge}</p>
        <h2 className={`${h2} mt-3.5 max-w-[760px] text-[clamp(30px,3.8vw,48px)] leading-[1.02]`}>{model.heading}</h2>
        <p className="mt-4 max-w-[700px] text-[17px] text-muted">{model.description}</p>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {model.steps.map((s) => (
            <li key={s.number} className="flex min-h-[200px] flex-col justify-between gap-6 rounded-3xl bg-ink p-7 text-paper">
              <span className="font-display text-[44px] font-extrabold leading-none text-gold">{s.number}</span>
              <span>
                <span className="block font-display text-[22px] font-bold">{s.title}</span>
                <span className="mt-1.5 block text-[15px] text-mist">{s.description}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Commitment */}
      <section className="border-y border-line bg-white">
        <div className={`${container} grid gap-10 py-[88px] lg:grid-cols-[0.8fr_1.2fr]`}>
          <div>
            <p className="yf-label">{commitment.badge}</p>
            <h2 className={`${h2} mt-3.5 text-[clamp(28px,3.4vw,42px)] leading-[1.04]`}>{commitment.heading}</h2>
            <p className="mt-4 text-[17px] text-muted">{commitment.description}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {commitment.items.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-paper p-5 text-[15px] font-bold">
                <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.4} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-[88px]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 rounded-[32px] bg-ink px-8 py-12 text-paper md:px-12">
          <div className="max-w-[680px]">
            <h2 className={`${h2} text-[clamp(28px,3.6vw,46px)] leading-[1.02]`}>{cta.heading}</h2>
            <p className="mt-4 text-lg text-mist">{cta.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={cta.primary.href} className="rounded-full bg-gold px-7 py-4 font-bold text-ink hover:bg-[#f7c561]">{cta.primary.label}</Link>
            <Link href={cta.secondary.href} className="rounded-full border-[1.5px] border-[#4A525B] px-6 py-[15px] font-bold text-paper hover:border-paper">{cta.secondary.label}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
