import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  GraduationCap,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { products, productsIntro } from "@/data/products";
import type { ProductIcon } from "@/types/product";

export const metadata: Metadata = {
  title: "Our Products — YourForce Schools, Commerce and Bookings",
  description:
    "Software products built and run by YourForce: YourForce Schools for school management, YourForce Commerce for online stores, YourForce Bookings for appointments and YourForce Dine for restaurant ordering. Try each live demo.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Our Products — YourForce",
    description:
      "School management, online stores, appointment booking and restaurant ordering, each with a live demo you can try today.",
    url: "/products",
    type: "website",
  },
};

// Every ProductIcon key must have a theme; TypeScript errors if one is missing.
const productThemes = {
  school: {
    Icon: GraduationCap,
    card: "hover:border-emerald-300",
    iconBox: "bg-emerald-50 text-emerald-600",
    eyebrow: "text-emerald-600",
    link: "bg-emerald-500 hover:bg-emerald-600 focus-visible:ring-emerald-400",
  },
  commerce: {
    Icon: ShoppingBag,
    card: "hover:border-blue-300",
    iconBox: "bg-blue-50 text-blue-600",
    eyebrow: "text-blue-600",
    link: "bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-400",
  },
  bookings: {
    Icon: CalendarCheck,
    card: "hover:border-violet-300",
    iconBox: "bg-violet-50 text-violet-600",
    eyebrow: "text-violet-600",
    link: "bg-violet-600 hover:bg-violet-700 focus-visible:ring-violet-400",
  },
  dine: {
    Icon: UtensilsCrossed,
    card: "hover:border-orange-300",
    iconBox: "bg-orange-50 text-orange-600",
    eyebrow: "text-orange-600",
    link: "bg-orange-600 hover:bg-orange-700 focus-visible:ring-orange-400",
  },
} as const satisfies Record<ProductIcon, unknown>;

export default function ProductsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 text-white md:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"
        />

        <Container>
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              {productsIntro.badge}
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              {productsIntro.heading}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              {productsIntro.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => {
              const theme = productThemes[product.icon];
              const { Icon } = theme;

              return (
                <article
                  key={product.slug}
                  className={`flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 md:p-8 ${theme.card}`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconBox}`}
                  >
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>

                  <p
                    className={`mt-7 text-sm font-bold uppercase tracking-[0.16em] ${theme.eyebrow}`}
                  >
                    {product.eyebrow}
                  </p>

                  <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                    {product.name}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <ul
                    aria-label={`${product.name} features`}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3 pt-8">
                    <Link
                      href={product.href}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 ${theme.link}`}
                    >
                      {product.ctaLabel}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>

                    <a
                      href={product.demoHref}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-4"
                    >
                      {product.demoLabel}
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
