import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { guides } from "@/data/guides";
import { products } from "@/data/products";
import { site } from "@/data/site";

const url = `${site.url}/guides`;
export const metadata: Metadata = {
  title: "Guides for Running a Business in Pakistan",
  description: "Practical guides for Pakistani schools, clinics, gyms, shops, restaurants, salons, property agencies, societies, rent-a-car companies, academies, event organisers and websites.",
  alternates: { canonical: url },
  openGraph: { type: "website", url, title: "Guides | YourForce", description: "Practical guides for running a business in Pakistan.", images: [{ url: site.image, width: 1200, height: 630, alt: "YourForce guides" }] },
};

/** The guides index: one practical guide per product. */
export default function GuidesPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1240px] px-6 pb-14 pt-16">
          <p className="yf-label text-mist">Guides</p>
          <h1 className="mt-5 max-w-[900px] font-display text-[clamp(36px,4.8vw,66px)] font-extrabold leading-[0.98] tracking-[-0.035em]">Practical guides for running a business in Pakistan<span className="text-gold">.</span></h1>
          <p className="mt-6 max-w-[720px] text-[18px] leading-relaxed text-mist">Straight answers to the questions owners ask us most, from collecting school fees to stopping no-shows at a salon. Useful whether or not you use our software.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1240px] gap-4 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => {
          const p = products.find((x) => x.slug === g.product)!;
          return (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="group flex flex-col rounded-[24px] border border-line bg-white p-7 hover:border-ink">
              <span className="yf-label text-subtle">{p.name.replace("YourForce ", "")} · {g.readMinutes} min read</span>
              <span className="mt-3 font-display text-[22px] font-extrabold leading-tight tracking-[-0.01em]">{g.title}</span>
              <span className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{g.summary}</span>
              <span className="mt-5 inline-flex items-center gap-1.5 font-bold">Read the guide <ArrowRight aria-hidden className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
