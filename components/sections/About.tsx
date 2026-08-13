import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "@/components/layout/Container";

import { about } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-y border-slate-200/70 bg-slate-50 py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="min-w-0">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              {about.badge}
            </span>

            <h2
              id="about-heading"
              className="mt-7 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl"
            >
              {about.heading}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {about.description}
            </p>

            <Link
              href={about.action.href}
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {about.action.label}

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              What we bring
            </p>

            <ul className="mt-6 space-y-5">
              {about.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50">
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 text-blue-600"
                    />
                  </span>

                  <span className="font-semibold leading-7 text-slate-700">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
              {about.statsNote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
