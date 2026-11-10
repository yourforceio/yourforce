import Image from "next/image";
import Link from "next/link";

import { doors, hero, platforms } from "@/data/home";

/** Dark hero: headline, the two Labs images, and the three ways to work with us. */
export default function HomeHero() {
  return (
    <div className="bg-ink text-paper">
      <section id="top" className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-12 px-6 pb-14 pt-16">
        <div className="min-w-0 flex-[1_1_540px]">
          <p className="yf-label mb-6 normal-case tracking-normal text-[#C9CED4]">{hero.badge}</p>
          <h1 className="font-display text-[clamp(40px,4.6vw,66px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            {hero.heading}
            <span className="text-gold">.</span>
          </h1>
          <p className="mt-6 max-w-[580px] text-[19px] leading-relaxed text-mist">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={hero.primary.href} className="rounded-full bg-gold px-6 py-[15px] font-bold text-ink hover:bg-[#f7c561]">
              {hero.primary.label}
            </Link>
            <Link href={hero.secondary.href} className="rounded-full border-[1.5px] border-[#4A525B] px-6 py-3.5 font-bold text-paper hover:border-paper">
              {hero.secondary.label}
            </Link>
          </div>
        </div>

        <div className="relative h-[clamp(300px,36vw,460px)] min-w-0 flex-[1_1_460px]" aria-hidden>
          <div className="absolute left-0 right-[14%] top-0 overflow-hidden rounded-2xl border border-ink-line bg-ink-2 shadow-[0_14px_32px_rgba(0,0,0,.35)]">
            <div className="flex items-center gap-2 border-b border-ink-line px-3.5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4249]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4249]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4249]" />
            </div>
            <div className="relative aspect-video">
              <Image src="/images/lab/headless-commerce-preview.png" alt="" fill sizes="(min-width: 1024px) 520px, 90vw" className="object-cover object-top" />
            </div>
          </div>
          <div className="absolute bottom-[34px] right-0 w-[52%] overflow-hidden rounded-[14px] border border-ink-line bg-ink-2 shadow-[0_14px_32px_rgba(0,0,0,.45)]">
            <div className="relative aspect-[16/10]">
              <Image src="/images/lab/omnichannel-fulfilment-preview.png" alt="" fill sizes="(min-width: 1024px) 320px, 50vw" className="object-cover object-left-top" />
            </div>
          </div>
          <span className="absolute bottom-0 left-0 text-[13px] font-bold text-mist">{hero.caption}</span>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3">
        {doors.map((d) => (
          <a key={d.title} href={d.href} className="group flex min-h-[240px] flex-col gap-6 rounded-3xl border border-ink-line bg-ink-2 p-7 text-paper hover:border-[#4A525B]">
            <span className="yf-label normal-case tracking-normal text-mist">{d.who}</span>
            <span>
              <span className="block font-display text-[32px] font-extrabold leading-none tracking-[-0.02em] md:min-h-[64px]">{d.title}</span>
              <span className="mt-3 block text-base text-[#C9CED4]">{d.description}</span>
              <span className="mt-4 inline-flex border-b-2 border-[#4A525B] font-bold group-hover:border-paper">{d.cta} →</span>
            </span>
          </a>
        ))}
      </div>

      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-3.5 px-6 py-[22px] font-display text-[19px] font-bold text-muted">
          <span className="font-sans text-[13px] uppercase tracking-[0.08em] text-subtle">Platforms we engineer</span>
          {platforms.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
