import { CheckCircle2 } from "lucide-react";

import Container from "@/components/layout/Container";

import { whyChoose } from "@/data/whyChoose";

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-0 hidden h-[460px] w-[460px] rounded-full bg-blue-600/15 blur-[140px] md:block" />

        <div className="absolute -right-40 bottom-0 hidden h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px] md:block" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <Container>
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 md:backdrop-blur-sm">
              {whyChoose.badge}
            </span>

            <h2
              id="why-us-heading"
              className="mt-7 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl"
            >
              {whyChoose.heading}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {whyChoose.description}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {whyChoose.items.map((item, index) => {
              const Icon = item.icon;
              const isFeatured = index === 1;

              return (
                <article
                  key={item.title}
                  className={`
                    group
                    flex
                    h-full
                    flex-col
                    rounded-3xl
                    border
                    p-7
                    transition-all
                    duration-300
                    sm:p-8
                    ${
                      isFeatured
                        ? "border-blue-500/50 bg-blue-600/15 shadow-xl shadow-blue-950/20"
                        : "border-slate-800 bg-slate-900/55 hover:border-slate-700 hover:bg-slate-900/75"
                    }
                  `}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/15 text-blue-300">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-slate-800 pt-6">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-300"
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 shrink-0 text-blue-400"
                        />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-slate-400">
            {whyChoose.supportingText}
          </p>
        </div>
      </Container>
    </section>
  );
}
