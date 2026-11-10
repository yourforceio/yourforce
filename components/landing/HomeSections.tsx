import Image from "next/image";
import Link from "next/link";
import { Check, FileText, ClipboardPlus, Shield, ShieldCheck, Truck } from "lucide-react";

import {
  contactSection,
  engineering,
  founder,
  healthCheck,
  homeProducts,
  labs,
  operations,
  productsSection,
  why,
} from "@/data/home";

const container = "mx-auto max-w-[1240px] px-6";
const h2 = "font-display font-extrabold leading-none tracking-[-0.03em]";
const pad2 = (i: number) => String(i + 1).padStart(2, "0");

function SmartLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return href.startsWith("http") || href.startsWith("mailto:") ? (
    <a href={href} className={className}>{children}</a>
  ) : (
    <Link href={href} className={className}>{children}</Link>
  );
}

export function Engineering() {
  return (
    <section id="engineering" className={`${container} scroll-mt-24 pb-8 pt-[104px]`}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[760px]">
          <p className="yf-label">{engineering.label}</p>
          <h2 className={`${h2} mt-3.5 text-[clamp(36px,5vw,60px)]`}>{engineering.heading}</h2>
        </div>
        <p className="max-w-[380px] text-[17px] text-muted">{engineering.description}</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {engineering.services.map((s, i) => (
          <Link key={s.title} href={s.href} className="flex min-h-[210px] flex-col gap-3.5 rounded-[22px] border border-line bg-white p-7 hover:border-ink">
            <span className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink font-display text-base font-extrabold text-gold">{pad2(i)}</span>
              <span className="text-xs font-bold uppercase tracking-[0.06em] text-subtle">{s.tag}</span>
            </span>
            <span className="font-display text-[23px] font-bold leading-tight">{s.title}</span>
            <span className="flex-grow text-[15px] text-muted">{s.description}</span>
            <span className="text-[15px] font-bold">Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HealthCheck() {
  return (
    <section id="health" className={`${container} scroll-mt-24 pb-[104px] pt-4`}>
      <div className="flex flex-wrap items-center gap-x-12 gap-y-8 rounded-[28px] border border-line bg-white p-10">
        <div className="min-w-0 flex-[1_1_420px]">
          <p className="yf-label">{healthCheck.label}</p>
          <h2 className={`${h2} mt-3 text-[clamp(28px,3.4vw,42px)] leading-[1.02]`}>{healthCheck.heading}</h2>
          <p className="mt-3.5 text-[17px] text-muted">{healthCheck.description}</p>
          <Link href={healthCheck.cta.href} className="mt-6 inline-block rounded-full bg-gold px-6 py-[15px] font-bold text-ink hover:bg-[#f7c561]">
            {healthCheck.cta.label}
          </Link>
        </div>
        <ul className="grid min-w-0 flex-[1_1_360px] grid-cols-1 gap-3 sm:grid-cols-2">
          {healthCheck.items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl bg-paper p-[18px] text-[15px] font-bold">
              <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.4} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WhyBand() {
  return (
    <section aria-label={why.label} className="px-6">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-x-16 gap-y-12 rounded-[32px] bg-ink px-8 py-14 text-paper md:px-12">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-8">
          <div>
            <p className="yf-label">{why.label}</p>
            <h2 className={`${h2} mt-4 text-[clamp(36px,4.4vw,58px)] leading-[0.98]`}>
              {why.heading}
              <span className="text-gold">.</span>
            </h2>
            <p className="mt-[18px] max-w-[420px] text-lg text-mist">{why.description}</p>
          </div>
          <Link href={why.cta.href} className="self-start rounded-full bg-paper px-[22px] py-3.5 font-bold text-ink hover:bg-white">
            {why.cta.label}
          </Link>
        </div>
        <ol className="grid min-w-0 flex-[2_1_560px] grid-cols-1 gap-x-10 sm:grid-cols-2">
          {why.points.map((p, i) => (
            <li key={p.title} className="flex items-baseline gap-4 border-t border-ink-line pb-6 pt-[22px]">
              <span className="shrink-0 font-display text-[15px] font-extrabold text-gold">{pad2(i)}</span>
              <span>
                <span className="block font-display text-[21px] font-bold leading-tight">{p.title}</span>
                <span className="mt-1.5 block text-[15px] text-mist">{p.description}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Labs() {
  return (
    <section id="labs" className={`${container} scroll-mt-24 pb-10 pt-[104px]`}>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-[760px]">
          <p className="yf-label">{labs.label}</p>
          <h2 className={`${h2} mt-3 text-[clamp(30px,3.6vw,46px)]`}>{labs.heading}</h2>
        </div>
        <Link href="/lab" className="font-bold hover:underline">All Labs →</Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {labs.items.map((l) => (
          <SmartLink key={l.title} href={l.href} className="group flex flex-col">
            <span className="relative block aspect-[16/10] overflow-hidden rounded-[18px] bg-line">
              <Image src={l.image} alt={`${l.title} demo`} fill sizes="(min-width: 1024px) 290px, (min-width: 640px) 45vw, 90vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
            </span>
            <span className="mt-3.5 font-display text-[21px] font-bold leading-tight">{l.title}</span>
            <span className="mt-1 text-[15px] text-muted">{l.description}</span>
          </SmartLink>
        ))}
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section id="founder" className={`${container} scroll-mt-24 pb-[104px] pt-14`}>
      <div className="flex flex-wrap gap-x-14 gap-y-10 rounded-[28px] border border-line bg-white p-8 md:p-10">
        <div className="min-w-0 flex-[1_1_380px]">
          <p className="yf-label">{founder.label}</p>
          <h2 className={`${h2} mt-3 text-[clamp(28px,3.2vw,40px)] leading-[1.02]`}>{founder.heading}</h2>
          {founder.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-base text-muted first-of-type:mt-4">{p}</p>
          ))}
          <ul className="mt-5 flex flex-col gap-2.5">
            {founder.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[15px] font-bold">
                <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.4} />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-7 border-t border-line-soft pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.06em] text-subtle">Hands-on with</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {founder.stack.map((s) => (
                <span key={s} className="rounded-full bg-paper px-3 py-[7px] text-[13px] font-bold">{s}</span>
              ))}
            </div>
            <Link href={founder.cta.href} className="mt-5 inline-block rounded-full bg-ink px-5 py-[13px] text-[15px] font-bold text-paper hover:bg-ink-2">
              {founder.cta.label}
            </Link>
          </div>
        </div>
        <div className="min-w-0 flex-[1.3_1_480px]">
          <p className="text-sm font-bold uppercase tracking-[0.06em] text-subtle">{founder.experienceTitle}</p>
          <p className="mt-1.5 text-sm text-subtle">{founder.experienceNote}</p>
          <div className="mt-[18px] grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {founder.experience.map((x) => (
              <div key={x.title} className="overflow-hidden rounded-2xl border border-line bg-white">
                <div className="relative aspect-[2/1]">
                  <Image src={x.image} alt={`${x.title}, the founder's previous work`} fill sizes="(min-width: 1024px) 320px, 90vw" className="object-cover object-[center_20%]" />
                </div>
                <div className="px-4 pb-4 pt-3.5">
                  <p className="text-xs font-bold uppercase tracking-[0.06em] text-subtle">{x.category}</p>
                  <p className="mt-1 font-display text-lg font-bold leading-tight">{x.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section id="products" className="scroll-mt-24 border-y border-line bg-white">
      <div className={`${container} py-[104px]`}>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[720px]">
            <p className="yf-label">{productsSection.label}</p>
            <h2 className={`${h2} mt-3.5 text-[clamp(36px,5vw,60px)]`}>{productsSection.heading}</h2>
          </div>
          <div className="max-w-[380px]">
            <p className="text-[17px] text-muted">{productsSection.description}</p>
            <Link href={productsSection.compare.href} className="mt-3 inline-block font-bold hover:underline">{productsSection.compare.label} →</Link>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {homeProducts.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="flex flex-col gap-3 rounded-[18px] border border-line bg-white px-2.5 pb-4 pt-2.5 hover:border-ink">
              <span className="relative block aspect-[16/10] overflow-hidden rounded-[10px] border border-line">
                <Image src={`/images/products/${p.slug}-demo.webp`} alt={`${p.demoName}, the YourForce ${p.name} demo`} fill sizes="(min-width: 1024px) 230px, 45vw" className="object-cover object-top" />
              </span>
              <span className="flex flex-col gap-0.5 px-1.5">
                <span className="flex items-center gap-2 font-display text-xl font-extrabold tracking-[-0.01em]">
                  <span aria-hidden className="h-[9px] w-[9px] rounded-[3px]" style={{ background: p.color }} />
                  {p.name}
                </span>
                <span className="text-[13px] text-subtle">{p.kind}</span>
              </span>
            </Link>
          ))}
        </div>

        <h3 className="mt-16 font-display text-[28px] font-extrabold tracking-[-0.02em]">{productsSection.localHeading}</h3>
        <div className="mt-[22px] grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {productsSection.local.map((l) => (
            <div key={l.title} className="border-t-2 border-ink pt-4">
              <p className="font-display text-xl font-bold">{l.title}</p>
              <p className="mt-2 text-[15px] text-muted">{l.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const deskIcons = { truck: Truck, billing: ClipboardPlus, documents: FileText, insurance: ShieldCheck } as const;

export function Operations() {
  return (
    <section id="operations" className="scroll-mt-24 bg-paper">
      <div className={`${container} py-[104px]`}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[800px]">
            <p className="yf-label">{operations.label}</p>
            <h2 className={`${h2} mt-3.5 text-[clamp(36px,5vw,60px)]`}>{operations.heading}</h2>
          </div>
          <p className="max-w-[380px] text-[17px] text-muted">{operations.description}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {operations.desks.map((d) => {
            const Icon = deskIcons[d.icon];
            return (
              <a key={d.title} href={d.href} className="flex flex-col items-start gap-[18px] rounded-3xl border border-line bg-white p-6 hover:border-ink sm:flex-row sm:gap-[22px] sm:p-7">
                <span aria-hidden className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold-soft text-ink">
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </span>
                <span className="flex min-w-0 flex-auto flex-col gap-2.5">
                  <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                    <span className="font-display text-[25px] font-extrabold leading-tight tracking-[-0.01em]">{d.title}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.06em] text-subtle">{d.category}</span>
                  </span>
                  <span className="text-[15px] text-muted">{d.description}</span>
                  <span className="flex flex-wrap gap-1.5">
                    {d.tags.map((t) => (
                      <span key={t} className="whitespace-nowrap rounded-full bg-paper px-[11px] py-1.5 text-xs font-bold text-[#2C3137]">{t}</span>
                    ))}
                  </span>
                  <span className="mt-1 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5 border-t border-line-soft pt-3.5">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2C3137]">
                      <Shield aria-hidden className="h-4 w-4" strokeWidth={2.2} />
                      {d.trust}
                    </span>
                    <span className="text-[15px] font-bold">{d.cta} ↗</span>
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactBlock() {
  const { engineering: eng, software } = contactSection;
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line bg-paper px-6 py-[104px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-x-14 gap-y-10 rounded-[32px] border border-line bg-white p-8 md:p-12">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-8">
          <div>
            <p className="yf-label">{contactSection.label}</p>
            <h2 className={`${h2} mt-3.5 text-[clamp(36px,4.4vw,56px)] leading-[0.98]`}>
              {contactSection.heading}
              <span className="text-gold">.</span>
            </h2>
            <p className="mt-4 max-w-[440px] text-[17px] text-muted">{contactSection.description}</p>
          </div>
          <ol className="flex flex-col gap-3.5 border-t border-line-soft pt-7">
            {contactSection.steps.map((s, i) => (
              <li key={s.title} className="flex items-baseline gap-3.5 text-[15px]">
                <span className="shrink-0 font-display text-[15px] font-extrabold text-subtle">{pad2(i)}</span>
                <span><strong>{s.title}</strong> <span className="text-muted">{s.description}</span></span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex min-w-0 flex-[1.2_1_440px] flex-col gap-3.5">
          <div className="flex flex-col gap-3.5 rounded-[22px] bg-paper p-7">
            <p className="text-xs font-bold uppercase tracking-[0.06em] text-subtle">{eng.eyebrow}</p>
            <p className="font-display text-[26px] font-extrabold leading-tight">{eng.title}</p>
            <p className="text-[15px] text-muted">{eng.description}</p>
            <div className="mt-1 flex flex-wrap gap-2.5">
              <Link href={eng.primary.href} className="rounded-full bg-gold px-[22px] py-3.5 font-bold text-ink hover:bg-[#f7c561]">{eng.primary.label}</Link>
              <a href={`mailto:${eng.email}`} className="rounded-full border-[1.5px] border-ink px-5 py-3 font-bold hover:bg-ink hover:text-paper">{eng.email}</a>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 rounded-[22px] bg-paper p-7">
            <p className="text-xs font-bold uppercase tracking-[0.06em] text-subtle">{software.eyebrow}</p>
            <p className="font-display text-[26px] font-extrabold leading-tight">{software.title}</p>
            <p className="text-[15px] text-muted">{software.description}</p>
            <div className="mt-1 flex flex-wrap gap-2.5">
              <Link href={software.primary.href} className="rounded-full bg-ink px-[22px] py-3.5 font-bold text-paper hover:bg-ink-2">{software.primary.label}</Link>
              <Link href={software.secondary.href} className="rounded-full border-[1.5px] border-ink px-5 py-3 font-bold hover:bg-ink hover:text-paper">{software.secondary.label}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
