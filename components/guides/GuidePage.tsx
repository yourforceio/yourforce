import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { products } from "@/data/products";
import { site } from "@/data/site";
import type { Guide } from "@/types/guide";

const DATE = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

/** One guide: a readable article, then how the product helps, FAQs, and Article/FAQ/Breadcrumb data for Google. */
export default function GuidePage({ guide }: { guide: Guide }) {
  const product = products.find((p) => p.slug === guide.product)!;
  const url = `${site.url}/guides/${guide.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title,
        description: guide.description,
        dateModified: guide.updated,
        datePublished: guide.updated,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: site.name, url: site.url },
        publisher: { "@id": `${site.url}/#organization` },
        about: { "@type": "SoftwareApplication", name: product.name, url: `${site.url}${product.href}` },
      },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: guide.faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides` },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[860px] px-6 pb-14 pt-12">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-bold text-mist hover:text-paper"><ArrowLeft aria-hidden className="h-4 w-4" />All guides</Link>
          <div className="mt-8"><p className="yf-label text-mist">Guide · {product.name.replace("YourForce ", "")}</p></div>
          <h1 className="mt-4 font-display text-[clamp(34px,4.4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.03em]">{guide.title}</h1>
          <p className="mt-5 text-sm font-bold text-mist">Updated {DATE.format(new Date(guide.updated))} · {guide.readMinutes} min read</p>
        </div>
      </section>

      <article className="mx-auto max-w-[860px] px-6 py-14">
        <div className="space-y-5 text-[18px] leading-8 text-muted">{guide.intro.map((p) => <p key={p}>{p}</p>)}</div>
        {guide.sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="font-display text-[clamp(24px,2.6vw,32px)] font-extrabold leading-tight tracking-[-0.02em] text-ink">{s.heading}</h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-muted">
              {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
              {s.bullets && (
                <ul className="space-y-2.5">
                  {s.bullets.map((b) => <li key={b} className="flex gap-3"><span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-gold" /><span>{b}</span></li>)}
                </ul>
              )}
            </div>
          </section>
        ))}

        <section className="mt-14 rounded-[28px] bg-ink p-8 text-paper sm:p-10">
          <p className="yf-label text-mist">{product.name}</p>
          <h2 className="mt-3 font-display text-[clamp(24px,2.6vw,32px)] font-extrabold leading-tight">{guide.product_section.heading}</h2>
          <div className="mt-4 space-y-4 text-[17px] leading-8 text-[#C9CED4]">{guide.product_section.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={product.href} className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-[14px] font-bold text-ink hover:bg-[#f7c561]">See {product.name} <ArrowRight aria-hidden className="h-4 w-4" /></Link>
            <a href={product.demoHref} className="inline-flex rounded-full border-[1.5px] border-[#4A525B] px-6 py-3.5 font-bold text-paper hover:border-paper">{product.demoLabel}</a>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-[clamp(24px,2.6vw,32px)] font-extrabold tracking-[-0.02em]">Questions</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {guide.faq.map((f) => (
              <details key={f.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[18px] font-bold">{f.question}<span aria-hidden className="text-2xl leading-none text-subtle group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-[17px] leading-8 text-muted">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
