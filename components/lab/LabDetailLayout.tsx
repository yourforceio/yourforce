import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, type LucideIcon } from "lucide-react";

import { site } from "@/data/site";

/** The shape every lab's data file shares (data/headless-commerce.ts and friends). */
export type LabData = {
  metadata: { title: string; description: string };
  lab: { number: string; eyebrow: string; title: string; description: string };
  architecture: { heading: string; description: string; items: readonly { title: string; description: string }[] };
};

type LabDetailLayoutProps = {
  data: LabData;
  /** The box beside the hero heading, e.g. "Lab environment". */
  aside: { label: string; items: readonly string[] };
  /** Above the interactive demo. */
  demo: { label: string; heading: string; hint: string };
  /** The interactive demo component itself (left as it is). */
  children: React.ReactNode;
  icon: LucideIcon;
  cta: { label: string; heading: string; description: string };
};

export function labMetadata(data: LabData, path: string, alt: string): Metadata {
  return {
    title: data.metadata.title,
    description: data.metadata.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: data.metadata.title,
      description: data.metadata.description,
      images: [{ url: site.image, width: 1200, height: 630, alt }],
    },
    twitter: { card: "summary_large_image", title: data.metadata.title, description: data.metadata.description, images: [site.image] },
  };
}

const container = "mx-auto max-w-[1240px] px-6";
const h2 = "font-display font-extrabold tracking-[-0.03em]";

/** Shared page around each Labs demo (2026 redesign). The demos themselves keep their own styling. */
export default function LabDetailLayout({ data, aside, demo, children, icon: Icon, cta }: LabDetailLayoutProps) {
  const { lab, architecture } = data;

  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className={`${container} pb-16 pt-12`}>
          <Link href="/lab" className="inline-flex items-center gap-2 text-sm font-bold text-mist hover:text-paper">
            <ArrowLeft aria-hidden className="h-4 w-4" />
            All Labs
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:items-end lg:gap-16">
            <div>
              <p className="yf-label text-mist">
                Lab {lab.number} · {lab.eyebrow}
              </p>
              <h1 className="mt-5 max-w-[900px] font-display text-[clamp(36px,4.8vw,64px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
                {lab.title}
              </h1>
              <p className="mt-6 max-w-[680px] text-[18px] leading-relaxed text-mist">{lab.description}</p>
            </div>
            <div className="rounded-[24px] border border-ink-line bg-ink-2 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-mist">{aside.label}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {aside.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-bold text-[#DCE0E4]">
                    <Check aria-hidden className="h-4 w-4 shrink-0 text-gold" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The demo */}
      <section className="border-b border-line">
        <div className={`${container} py-14`}>
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="yf-label">{demo.label}</p>
              <h2 className={`${h2} mt-3 text-[clamp(26px,3vw,36px)] leading-tight`}>{demo.heading}</h2>
            </div>
            <p className="max-w-[460px] text-[15px] text-muted">{demo.hint}</p>
          </div>
          {children}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className={`${container} grid gap-12 py-[88px] lg:grid-cols-[0.65fr_1.35fr] lg:gap-20`}>
          <div>
            <span aria-hidden className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-gold">
              <Icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <h2 className={`${h2} mt-6 text-[clamp(28px,3.4vw,42px)] leading-[1.04]`}>{architecture.heading}</h2>
            <p className="mt-5 text-base leading-7 text-muted">{architecture.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {architecture.items.map((item, index) => (
              <article key={item.title} className="rounded-[22px] border border-line bg-paper/50 p-7">
                <p className="font-display text-[15px] font-extrabold text-subtle">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-[21px] font-bold">{item.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-[88px]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 rounded-[32px] bg-ink px-8 py-12 text-paper md:px-12">
          <div className="max-w-[680px]">
            <p className="yf-label text-mist">{cta.label}</p>
            <h2 className={`${h2} mt-4 text-[clamp(28px,3.6vw,46px)] leading-[1.02]`}>{cta.heading}</h2>
            <p className="mt-4 text-lg text-mist">{cta.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?service=commerce-platform-engineering" className="rounded-full bg-gold px-7 py-4 font-bold text-ink hover:bg-[#f7c561]">Discuss your project</Link>
            <Link href="/services/commerce" className="rounded-full border-[1.5px] border-[#4A525B] px-6 py-[15px] font-bold text-paper hover:border-paper">Commerce engineering</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
