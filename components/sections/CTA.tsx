import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { cta } from "@/data/cta";

export default function CTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-24 overflow-hidden bg-white py-20 lg:py-24"
    >
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-800
            bg-slate-950
            px-6
            py-8
            text-white
            shadow-2xl
            shadow-slate-950/15
            sm:px-8
            sm:py-10
            lg:grid
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-center
            lg:gap-14
            lg:px-12
            lg:py-12
          "
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-blue-600/20 blur-[130px]" />

            <div className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[130px]" />

            <div
              className="
                absolute
                inset-0
                opacity-[0.035]
                [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                [background-size:42px_42px]
              "
            />
          </div>

          {/* CTA content */}
          <div className="relative min-w-0">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/30
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-blue-300
                backdrop-blur-sm
              "
            >
              <span aria-hidden="true">
                {cta.badge.icon}
              </span>

              <span>{cta.badge.text}</span>
            </div>

            <h2
              className="
                mt-7
                max-w-3xl
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-white
                md:text-5xl
              "
            >
              <span className="block">
                {cta.title}
              </span>

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-blue-400
                  via-cyan-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                {cta.highlight}
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {cta.description}
            </p>

            {/* Trust highlights */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {cta.highlights.map(
                (highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-300"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-4 w-4 text-blue-400"
                      />
                    </span>

                    {highlight}
                  </li>
                ),
              )}
            </ul>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {cta.buttons.map((button) => (
                <Link
                  key={`${button.label}-${button.href}`}
                  href={button.href}
                  className={`
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    px-7
                    py-4
                    font-semibold
                    transition-all
                    duration-200
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-slate-950

                    ${
                      button.variant ===
                      "primary"
                        ? `
                          bg-blue-600
                          text-white
                          shadow-lg
                          shadow-blue-950/30
                          hover:-translate-y-0.5
                          hover:bg-blue-500
                          hover:shadow-blue-600/20
                        `
                        : `
                          border
                          border-slate-700
                          bg-slate-900/70
                          text-white
                          hover:-translate-y-0.5
                          hover:border-slate-600
                          hover:bg-slate-900
                        `
                    }
                  `}
                >
                  {button.label}

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Next steps panel */}
          <div
            className="
              relative
              mt-12
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/80
              p-6
              backdrop-blur-xl
              sm:p-8
              lg:mt-0
            "
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/15 blur-[80px]" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                {cta.process.eyebrow}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {cta.process.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {cta.process.description}
              </p>

              {/* Process steps */}
              <ol className="mt-8 space-y-5">
                {cta.process.steps.map(
                  (step) => (
                    <li
                      key={step.number}
                      className="grid grid-cols-[44px_minmax(0,1fr)] gap-4"
                    >
                      <span
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-blue-500/30
                          bg-blue-500/10
                          text-xs
                          font-black
                          text-blue-400
                        "
                      >
                        {step.number}
                      </span>

                      <div className="min-w-0">
                        <h4 className="font-semibold text-white">
                          {step.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ),
                )}
              </ol>

              {/* Response information */}
              <div
                className="
                  mt-8
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  p-4
                "
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/15">
                  <Clock3
                    aria-hidden="true"
                    className="h-4 w-4 text-blue-400"
                  />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                    {
                      cta.process.response
                        .label
                    }
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-slate-200">
                    {
                      cta.process.response
                        .text
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
