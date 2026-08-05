import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { about } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-hidden bg-slate-50 py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Content */}
          <div className="min-w-0">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              {about.badge}
            </span>

            <h2 className="mt-7 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              {about.heading}
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              {about.description}
            </p>

            {/* Highlights */}
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {about.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-blue-200
                    hover:shadow-md
                  "
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100">
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 text-blue-600 transition-transform duration-200 group-hover:scale-110"
                    />
                  </span>

                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href={about.action.href}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-7
                  py-4
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-blue-500
                  hover:shadow-lg
                  hover:shadow-blue-600/20
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                  focus-visible:ring-offset-2
                "
              >
                {about.action.label}

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Experience panel */}
          <div className="relative min-w-0">
            <div className="absolute -inset-8 rounded-[3rem] bg-blue-600/10 blur-3xl" />

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-950
                p-7
                text-white
                shadow-2xl
                shadow-slate-950/15
                sm:p-8
              "
            >
              {/* Background decoration */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[90px]" />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.035]
                  [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                  [background-size:36px_36px]
                "
              />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                  YourForce
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {about.statsTitle}
                </h3>

                {/* Statistics */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {about.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="
                        min-h-[145px]
                        rounded-2xl
                        border
                        border-slate-800
                        bg-slate-900/70
                        p-5
                        backdrop-blur
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:border-blue-500/30
                        hover:bg-slate-900
                      "
                    >
                      <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        {stat.value}
                      </p>

                      <p className="mt-3 text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 border-t border-slate-800 pt-6 text-xs leading-6 text-slate-400">
                  {about.statsNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
