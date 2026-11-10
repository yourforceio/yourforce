import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardPlus, FileText, ShieldCheck, Truck } from "lucide-react";

import { operations } from "@/data/home";
import { site } from "@/data/site";

const title = "US Back-Office Support: Dispatch, Billing, Data Entry";
const description = "Dedicated back-office desks for US carriers, healthcare practices and growing businesses: trucking dispatch, medical billing, data entry and insurance paperwork.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/operations" },
  openGraph: { type: "website", url: "/operations", siteName: site.name, title: `${title} | ${site.name}`, description, images: [{ url: site.image, width: 1200, height: 630, alt: "YourForce operations support" }] },
};

const icons = { truck: Truck, billing: ClipboardPlus, documents: FileText, insurance: ShieldCheck } as const;

/** Overview of the four US operations desks (replaces backoffice.yourforce.io's home page). */
export default function OperationsPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1240px] px-6 pb-16 pt-16">
          <p className="yf-label text-mist">{operations.label}</p>
          <h1 className="mt-5 max-w-[900px] font-display text-[clamp(40px,5.4vw,72px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            {operations.heading.replace(/\.$/, "")}<span className="text-gold">.</span>
          </h1>
          <p className="mt-6 max-w-[680px] text-[19px] leading-relaxed text-mist">{operations.description} Every batch or file is checked before it comes back, and pricing is agreed in writing first.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.bookCall} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-6 py-[15px] font-bold text-ink hover:bg-[#f7c561]">Book a call</a>
            <Link href="/contact?service=data-entry#form" className="rounded-full border-[1.5px] border-[#4A525B] px-6 py-3.5 font-bold text-paper hover:border-paper">Request a pilot</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1240px] gap-4 px-6 py-[88px] lg:grid-cols-2">
        {operations.desks.map((d) => {
          const Icon = icons[d.icon];
          return (
            <Link key={d.title} href={d.href} className="flex flex-col items-start gap-[18px] rounded-3xl border border-line bg-white p-7 hover:border-ink sm:flex-row sm:gap-[22px]">
              <span aria-hidden className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold-soft text-ink"><Icon className="h-7 w-7" strokeWidth={1.9} /></span>
              <span className="flex flex-col gap-2.5">
                <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                  <span className="font-display text-[25px] font-extrabold leading-tight">{d.title}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.06em] text-subtle">{d.category}</span>
                </span>
                <span className="text-[15px] text-muted">{d.description}</span>
                <span className="text-[15px] font-bold">{d.cta} →</span>
              </span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
