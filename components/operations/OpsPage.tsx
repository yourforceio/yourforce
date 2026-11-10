import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";

import type { OpsPageData, OpsVisual } from "@/data/operations";
import { site } from "@/data/site";

const container = "mx-auto max-w-[1240px] px-6";
const h2 = "font-display font-extrabold tracking-[-0.03em]";

export function opsMetadata(d: OpsPageData): Metadata {
  return {
    title: { absolute: d.metadata.title },
    description: d.metadata.description,
    alternates: { canonical: d.path },
    openGraph: { type: "website", url: d.path, siteName: site.name, title: d.metadata.title, description: d.metadata.description, images: [{ url: site.image, width: 1200, height: 630, alt: d.name }] },
    twitter: { card: "summary_large_image", title: d.metadata.title, description: d.metadata.description, images: [site.image] },
  };
}

function Heading({ label, heading, description, dark = false }: { label?: string; heading: string; description?: string; dark?: boolean }) {
  return (
    <div className="max-w-[760px]">
      {label && <p className={`yf-label ${dark ? "text-mist" : ""}`}>{label}</p>}
      <h2 className={`${h2} ${label ? "mt-3.5" : ""} text-[clamp(30px,3.8vw,46px)] leading-[1.02]`}>{heading}</h2>
      {description && <p className={`mt-4 text-[17px] ${dark ? "text-mist" : "text-muted"}`}>{description}</p>}
    </div>
  );
}

const SmartLink = ({ href, className, children }: { href: string; className: string; children: React.ReactNode }) =>
  href.startsWith("http") || href.startsWith("mailto:") ? (
    <a href={href} className={className} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>
  ) : href.startsWith("#") ? (
    <a href={href} className={className}>{children}</a>
  ) : (
    <Link href={href} className={className}>{children}</Link>
  );

function Visual({ v }: { v: OpsVisual }) {
  const card = "rounded-[24px] border border-ink-line bg-ink-2 p-6 text-paper";
  if (v.kind === "steps")
    return (
      <div className={card}>
        <p className="font-display text-xl font-bold">{v.title}</p>
        <ol className="mt-4 flex flex-col">
          {v.rows.map((r) => (
            <li key={r.label} className="flex gap-4 border-t border-ink-line py-3.5 text-[15px] text-[#C9CED4]">
              <span className="w-24 shrink-0 text-xs font-bold uppercase tracking-[0.08em] text-gold">{r.label}</span>
              {r.text}
            </li>
          ))}
        </ol>
      </div>
    );
  if (v.kind === "ledger")
    return (
      <div className="rounded-[24px] bg-white p-6 text-ink">
        <p className="flex justify-between border-b border-line pb-3 text-xs font-bold uppercase tracking-[0.08em] text-subtle"><span>{v.title}</span><span>{v.note}</span></p>
        <ul>
          {v.rows.map((r) => (
            <li key={r.desc} className="flex items-center justify-between gap-3 border-b border-dashed border-line py-3.5 last:border-0">
              <span><span className="block text-[15px] font-bold">{r.desc}</span><span className="mt-0.5 block font-mono text-xs text-subtle">{r.code}</span></span>
              <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${r.ok ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>{r.status}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  if (v.kind === "tracker") {
    const tone = { ok: "bg-emerald-50 text-emerald-800", warn: "bg-amber-50 text-amber-900", bad: "bg-rose-50 text-rose-800" } as const;
    return (
      <div className="rounded-[24px] bg-white p-6 text-ink">
        <p className="flex justify-between border-b border-line pb-3 text-xs font-bold uppercase tracking-[0.08em] text-subtle"><span>{v.title}</span><span>Sample view</span></p>
        <table className="mt-2 w-full text-left text-[14px]">
          <thead className="text-xs uppercase tracking-[0.06em] text-subtle"><tr><th className="py-2 font-bold">Vendor</th><th className="font-bold">Insurer</th><th className="font-bold">Expires</th><th className="font-bold">Status</th></tr></thead>
          <tbody>
            {v.rows.map((r) => (
              <tr key={r.vendor} className="border-t border-line-soft">
                <td className="py-2.5 font-bold">{r.vendor}</td><td className="text-muted">{r.insurer}</td><td className="text-muted">{r.expires}</td>
                <td><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${tone[r.tone]}`}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-xs text-subtle">{v.note}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      <div className={card}>
        <p className="text-xs font-bold uppercase tracking-[0.08em] text-mist">{v.before.label}</p>
        <p className="mt-2 font-mono text-[14px] text-[#C9CED4]">{v.before.text}</p>
      </div>
      <ArrowRight aria-hidden className="mx-auto h-5 w-5 rotate-90 text-gold" />
      <div className="rounded-[24px] bg-white p-6 text-ink">
        <p className="text-xs font-bold uppercase tracking-[0.08em] text-subtle">{v.after.label}</p>
        <p className="mt-2 font-mono text-[14px]">{v.after.text}</p>
      </div>
    </div>
  );
}

/** One US operations desk page (2026 redesign). Content lives in data/operations.ts. */
export default function OpsPage({ d }: { d: OpsPageData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: d.serviceType,
        name: d.name,
        url: new URL(d.path, site.url).toString(),
        description: d.metadata.description,
        areaServed: { "@type": "Country", name: "United States" },
        audience: { "@type": "Audience", audienceType: d.audienceType },
        provider: { "@type": "Organization", name: site.name, url: site.url, email: d.email },
      },
      ...(d.faq
        ? [{ "@type": "FAQPage", mainEntity: d.faq.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) }]
        : []),
    ],
  };

  return (
    <main className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className={`${container} pb-20 pt-12`}>
          <Link href="/operations" className="inline-flex items-center gap-2 text-sm font-bold text-mist hover:text-paper">
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Operations support
          </Link>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="yf-label text-mist">{d.hero.label}</p>
              <h1 className="mt-5 font-display text-[clamp(36px,4.6vw,62px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
                {d.hero.heading}
                <span className="text-gold">.</span>
              </h1>
              <p className="mt-6 max-w-[620px] text-[18px] leading-relaxed text-mist">{d.hero.description}</p>
              {d.hero.chips && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {d.hero.chips.map((c) => <li key={c} className="rounded-full border border-ink-line px-3.5 py-2 text-sm font-bold text-[#C9CED4]">{c}</li>)}
                </ul>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <SmartLink href={d.hero.primary.href} className="rounded-full bg-gold px-6 py-[15px] font-bold text-ink hover:bg-[#f7c561]">{d.hero.primary.label}</SmartLink>
                <SmartLink href={d.hero.secondary.href} className="rounded-full border-[1.5px] border-[#4A525B] px-6 py-3.5 font-bold text-paper hover:border-paper">{d.hero.secondary.label}</SmartLink>
              </div>
            </div>
            <Visual v={d.visual} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`${container} scroll-mt-24 py-[88px]`}>
        <Heading heading={d.services.heading} description={d.services.description} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {d.services.items.map((s, i) => (
            <article key={s.title} className="rounded-[22px] border border-line bg-white p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink font-display text-[15px] font-extrabold text-gold">{String(i + 1).padStart(2, "0")}</span>
              {s.tag && !/^\d+$/.test(s.tag) && <p className="mt-5 text-xs font-bold uppercase tracking-[0.06em] text-subtle">{s.tag}</p>}
              <h3 className={`${s.tag && !/^\d+$/.test(s.tag) ? "mt-1.5" : "mt-5"} font-display text-[22px] font-bold`}>{s.title}</h3>
              <p className="mt-2 text-[15px] text-muted">{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      {d.fit && (
        <section className="border-y border-line bg-white">
          <div className={`${container} py-[88px]`}>
            <Heading heading={d.fit.heading} description={d.fit.description} />
            <div className="mt-10 grid gap-x-10 md:grid-cols-3">
              {d.fit.items.map((f) => (
                <article key={f.title} className="border-t-2 border-ink py-5">
                  <h3 className="font-display text-[21px] font-bold">{f.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{f.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section id="process" className={`${container} scroll-mt-24 py-[88px]`}>
        <Heading heading={d.process.heading} description={d.process.description} />
        <ol className={`mt-12 grid gap-4 sm:grid-cols-2 ${d.process.steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {d.process.steps.map((s, i) => (
            <li key={s.title} className="flex min-h-[200px] flex-col justify-between gap-6 rounded-3xl bg-ink p-7 text-paper">
              <span className="font-display text-[44px] font-extrabold leading-none text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-display text-[21px] font-bold">{s.title}</span>
                <span className="mt-1.5 block text-[15px] text-mist">{s.description}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Data handling / expectations */}
      {d.trust && (
        <section className="border-y border-line bg-white">
          <div className={`${container} py-[88px]`}>
            <Heading heading={d.trust.heading} description={d.trust.description} />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {d.trust.items.map((t) => (
                <article key={t.tag} className="rounded-[22px] bg-paper p-7">
                  <p className="yf-label">{t.tag}</p>
                  <p className="mt-3 text-[15px] text-muted">{t.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Boundaries */}
      {d.boundaries && (
        <section className="border-y border-line bg-white">
          <div className={`${container} grid gap-10 py-[88px] lg:grid-cols-[0.8fr_1.2fr]`}>
            <Heading heading={d.boundaries.heading} description={d.boundaries.description} />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] bg-paper p-7">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-subtle">What we do</p>
                <ul className="mt-4 flex flex-col gap-3">{d.boundaries.does.map((x) => <li key={x} className="flex gap-2.5 text-[15px] font-bold"><Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" strokeWidth={2.4} />{x}</li>)}</ul>
              </div>
              <div className="rounded-[22px] bg-paper p-7">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-subtle">What we don&apos;t do</p>
                <ul className="mt-4 flex flex-col gap-3">{d.boundaries.doesnt.map((x) => <li key={x} className="flex gap-2.5 text-[15px] font-bold"><X aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-rose-700" strokeWidth={2.4} />{x}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing models */}
      {d.pricing && (
        <section id="pricing" className={`${container} scroll-mt-24 py-[88px]`}>
          <Heading heading={d.pricing.heading} description={d.pricing.description} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {d.pricing.options.map((o) => (
              <article key={o.tag} className="rounded-3xl border border-line bg-white p-8">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-subtle">{o.tag}</p>
                <h3 className="mt-2 font-display text-[26px] font-extrabold leading-tight">{o.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{o.description}</p>
                <ul className="mt-5 flex flex-col gap-2.5">{o.points.map((p) => <li key={p} className="flex gap-2.5 text-[15px] font-bold"><Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.6} />{p}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {d.faq && (
        <section className="border-t border-line bg-white">
          <div className={`${container} grid gap-10 py-[88px] lg:grid-cols-[0.8fr_1.2fr]`}>
            <Heading heading="Questions" />
            <div>
              {d.faq.map((q) => (
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
      )}

      {/* CTA */}
      <section className="px-6 py-[88px]">
        <div className="mx-auto max-w-[1240px] rounded-[32px] bg-ink px-8 py-12 text-paper md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-[680px]">
              <h2 className={`${h2} text-[clamp(28px,3.6vw,46px)] leading-[1.02]`}>{d.cta.heading}<span className="text-gold">.</span></h2>
              <p className="mt-4 text-lg text-mist">{d.cta.description}</p>
            </div>
            <SmartLink href={d.cta.primary.href} className="rounded-full bg-gold px-7 py-4 font-bold text-ink hover:bg-[#f7c561]">{d.cta.primary.label}</SmartLink>
          </div>
          <dl className="mt-10 grid gap-6 border-t border-ink-line pt-7 sm:grid-cols-3">
            {d.cta.details.map((x) => (
              <div key={x.label}>
                <dt className="text-xs font-bold uppercase tracking-[0.08em] text-gold">{x.label}</dt>
                <dd className="mt-1.5 text-[15px] text-[#DCE0E4]">{x.href ? <a href={x.href} className="font-bold text-paper hover:underline">{x.value}</a> : x.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
