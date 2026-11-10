import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { products, productsIntro } from "@/data/products";
import { homeProducts } from "@/data/home";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Products — YourForce Schools, Commerce, Bookings, Dine, Property, Clinic, Society, Rent-a-Car, Learn and Services",
  description:
    "Software products built and run by YourForce: YourForce Schools for school management, YourForce Commerce for online stores, YourForce Bookings for appointments, YourForce Dine for restaurant ordering, YourForce Property for real estate agencies, YourForce Clinic for clinics, YourForce Society for housing societies and YourForce Rent-a-Car for car rental companies, YourForce Learn for academies and tutors, and YourForce Services, our home-services marketplace. Try each live demo.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Our Products — YourForce",
    description:
      "School management, online stores, appointment booking, restaurant ordering, real estate, clinics, housing societies, car rental, online courses and home services, each with a live demo you can try today.",
    url: "/products",
    type: "website",
    images: [{ url: site.image, width: 1200, height: 630, alt: "YourForce products" }],
  },
};

const groups = ["Education", "Health", "Shops & food", "Property", "Vehicles & services"];

export default function ProductsPage() {
  // Join the full product summaries (data/products) with their group, colour and demo name (data/home).
  const cards = products.map((p) => ({ ...p, meta: homeProducts.find((h) => h.slug === p.slug) }));

  return (
    <main className="bg-paper text-ink">
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1240px] px-6 pb-14 pt-16">
          <p className="yf-label text-mist">{productsIntro.badge}</p>
          <h1 className="mt-5 max-w-[920px] font-display text-[clamp(36px,4.8vw,66px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            Ten products. Every one with a live demo<span className="text-gold">.</span>
          </h1>
          <p className="mt-6 max-w-[720px] text-[18px] leading-relaxed text-mist">{productsIntro.description}</p>
          <nav aria-label="Jump to an industry" className="mt-8 flex flex-wrap gap-2">
            {groups.map((g) => (
              <a key={g} href={`#${g.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="rounded-full border border-ink-line px-4 py-2.5 text-sm font-bold text-[#C9CED4] hover:border-paper hover:text-paper">
                {g}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-16 px-6 py-[88px]">
        {groups.map((group) => {
          const items = cards.filter((c) => c.meta?.group === group);
          return (
            <section key={group} id={group.toLowerCase().replace(/[^a-z]+/g, "-")} aria-label={group} className="scroll-mt-24">
              <h2 className="yf-label">{group}</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {items.map((product, i) => {
                  // In a group with an odd number of products, the last card spans the full row (screenshot beside text).
                  const wide = items.length % 2 === 1 && i === items.length - 1;
                  return (
                  <article key={product.slug} className={`flex flex-col overflow-hidden rounded-[26px] border border-line bg-white ${wide ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}>
                    <Link href={product.href} className={`group relative block aspect-[16/9] border-b border-line bg-paper ${wide ? "md:aspect-auto md:min-h-[360px] md:border-b-0 md:border-r" : ""}`}>
                      <Image
                        src={`/images/products/${product.slug}-demo.webp`}
                        alt={`${product.meta?.demoName ?? product.name}, the ${product.name} demo`}
                        fill
                        sizes="(min-width: 768px) 600px, 92vw"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.06em] text-subtle">
                        <span aria-hidden className="h-2.5 w-2.5 rounded-[3px]" style={{ background: product.meta?.color }} />
                        {product.eyebrow}
                      </p>
                      <h3 className="mt-3 font-display text-[28px] font-extrabold leading-tight tracking-[-0.02em]">{product.name}</h3>
                      <p className="mt-3 text-[15px] text-muted">{product.description}</p>
                      <ul aria-label={`${product.name} features`} className="mt-5 flex flex-wrap gap-1.5">
                        {product.features.map((feature) => (
                          <li key={feature} className="rounded-full bg-paper px-3 py-1.5 text-xs font-bold text-[#2C3137]">{feature}</li>
                        ))}
                      </ul>
                      <div className="mt-auto flex flex-wrap gap-2.5 pt-7">
                        <Link href={product.href} className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper hover:bg-ink-2">
                          {product.ctaLabel}
                        </Link>
                        <a href={product.demoHref} className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-ink px-5 py-2.5 text-sm font-bold hover:bg-ink hover:text-paper">
                          {product.demoLabel}
                          <ArrowUpRight aria-hidden className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <section className="px-6 pb-[88px]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 rounded-[32px] bg-ink px-8 py-12 text-paper md:px-12">
          <div className="max-w-[640px]">
            <h2 className="font-display text-[clamp(30px,3.8vw,48px)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              See one with your own data<span className="text-gold">.</span>
            </h2>
            <p className="mt-4 text-lg text-mist">Free trial, no setup fee, cancel any time. We reply within one working day.</p>
          </div>
          <Link href="/contact#form" className="rounded-full bg-gold px-7 py-4 font-bold text-ink hover:bg-[#f7c561]">Request a demo</Link>
        </div>
      </section>
    </main>
  );
}
