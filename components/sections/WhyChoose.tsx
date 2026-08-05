import { CheckCircle2 } from "lucide-react";

import Container from "@/components/layout/Container";

import { whyChoose } from "@/data/whyChoose";

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-0 h-[460px] w-[460px] rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      <Container>
        <div className="relative grid items-start gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Section introduction */}
          <div className="min-w-0 lg:self-start">
            <span
              className="
                inline-flex
                items-center
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
              {whyChoose.badge}
            </span>

            <h2 className="mt-7 max-w-xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              {whyChoose.heading}
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              {whyChoose.description}
            </p>

            <div className="mt-10 h-px max-w-sm bg-gradient-to-r from-blue-500/80 to-transparent" />

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              {whyChoose.supportingText}
            </p>

            {/* Supporting statement */}
            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Our Approach
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Select the right platform, modernize without unnecessary
                disruption, and remain involved beyond launch.
              </p>
            </div>
          </div>

          {/* Vertical differentiator timeline */}
          <div className="relative lg:pt-12">
            {/* Timeline rail */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-10
                left-7
                top-[88px]
                w-px
                bg-gradient-to-b
                from-blue-500/90
                via-blue-500/40
                to-blue-500/10
              "
            />

            <div className="space-y-6">
              {whyChoose.items.map((item, index) => {
                const Icon = item.icon;
                const number = String(index + 1).padStart(2, "0");
                const isFeatured = index === 1;

                return (
                  <article
                    key={item.title}
                    className="relative grid grid-cols-[56px_minmax(0,1fr)] gap-5 sm:gap-7"
                  >
                    {/* Timeline marker */}
                    <div
                      className={`
                        relative
                        z-10
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        text-sm
                        font-black
                        shadow-lg
                        transition-all
                        duration-300

                        ${
                          isFeatured
                            ? "border-blue-400 bg-blue-600 text-white shadow-blue-950/40"
                            : "border-slate-700 bg-slate-900 text-blue-400 shadow-black/20"
                        }
                      `}
                    >
                      {number}
                    </div>

                    {/* Timeline content */}
                    <div
                      className={`
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        p-6
                        transition-all
                        duration-300
                        sm:p-8

                        ${
                          isFeatured
                            ? `
                              border-blue-500/40
                              bg-gradient-to-br
                              from-blue-600/20
                              via-slate-900/90
                              to-slate-900/70
                              shadow-2xl
                              shadow-blue-950/20
                            `
                            : `
                              border-slate-800
                              bg-slate-900/45
                              hover:border-slate-700
                              hover:bg-slate-900/70
                            `
                        }
                      `}
                    >
                      {isFeatured && (
                        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/15 blur-[90px]" />
                      )}

                      <div className="relative">
                        {/* Item heading */}
                        <div className="flex items-start gap-4">
                          <div
                            className={`
                              flex
                              h-12
                              w-12
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border

                              ${
                                isFeatured
                                  ? "border-blue-400/30 bg-blue-500/20 text-blue-300"
                                  : "border-slate-700 bg-slate-950/60 text-blue-400"
                              }
                            `}
                          >
                            <Icon
                              aria-hidden="true"
                              className="h-5 w-5"
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                              {item.eyebrow}
                            </p>

                            <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-white">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-5 max-w-3xl leading-7 text-slate-300">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                          {item.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="
                                flex
                                items-start
                                gap-3
                                rounded-xl
                                border
                                border-slate-700/80
                                bg-slate-950/45
                                px-4
                                py-3
                              "
                            >
                              <CheckCircle2
                                aria-hidden="true"
                                className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                              />

                              <span className="text-xs font-semibold leading-5 text-slate-300">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
