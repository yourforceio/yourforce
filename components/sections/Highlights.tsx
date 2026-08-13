import Container from "@/components/layout/Container";

import { highlights } from "@/data/highlights";

export default function Highlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 top-0 hidden h-80 w-80 rounded-full bg-blue-600/15 blur-[120px] md:block" />

        <div className="absolute -right-36 bottom-0 hidden h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] md:block" />

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <Container>
        <div className="relative">
          <div className="grid gap-8 border-b border-slate-800 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Delivery Model
              </p>

              <h2
                id="highlights-heading"
                className="mt-4 max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl"
              >
                Built to work across teams, markets, and time zones.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end lg:text-lg">
              Senior commerce engineering delivered through a flexible,
              transparent model that fits distributed product and technology
              teams.
            </p>
          </div>

          <div className="mt-10 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;

              return (
                <article
                  key={highlight.title}
                  className={`
                    relative
                    lg:px-7
                    ${index === 0 ? "lg:pl-0" : "lg:border-l lg:border-slate-800"}
                    ${index === highlights.length - 1 ? "lg:pr-0" : ""}
                  `}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-400/20">
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-7 tracking-tight text-white">
                    {highlight.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {highlight.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
