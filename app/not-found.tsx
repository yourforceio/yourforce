import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/products", label: "Our 13 products", note: "Ready-made software with live demos" },
  { href: "/services/commerce", label: "Commerce engineering", note: "Salesforce, Shopify and Magento" },
  { href: "/operations", label: "Operations support", note: "Back-office desks for US teams" },
  { href: "/contact", label: "Contact us", note: "A real person reads every message" },
];

/** The page shown for an address that doesn't exist (2026 design). */
export default function NotFound() {
  return (
    <main className="bg-ink text-paper">
      <section className="mx-auto max-w-[1240px] px-6 pb-24 pt-20">
        <p className="yf-label text-mist">Error 404</p>
        <h1 className="mt-5 font-display text-[clamp(40px,5.4vw,72px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
          This page doesn&apos;t exist<span className="text-gold">.</span>
        </h1>
        <p className="mt-6 max-w-[620px] text-[18px] leading-relaxed text-mist">The link may be old or mistyped. Here&apos;s where most people are heading:</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="group rounded-3xl border border-ink-line bg-ink-2 p-6 hover:border-[#4A525B]">
              <span className="block font-display text-[22px] font-extrabold leading-tight">{l.label} →</span>
              <span className="mt-2 block text-[15px] text-mist">{l.note}</span>
            </Link>
          ))}
        </div>
        <Link href="/" className="mt-10 inline-flex rounded-full bg-gold px-6 py-[15px] font-bold text-ink hover:bg-[#f7c561]">Back to the home page</Link>
      </section>
    </main>
  );
}
