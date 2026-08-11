import Container from "@/components/layout/Container";

import { highlights } from "@/data/highlights";

export default function Highlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      className="
        relative
        overflow-hidden
        border-y
        border-slate-200
        bg-slate-50
        pt-20
        pb-16
        sm:pt-24
        sm:pb-20
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 hidden h-72 w-72 rounded-full bg-blue-500/[0.06] blur-[110px] md:block" />

        <div className="absolute -right-32 bottom-0 hidden h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[110px] md:block" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      <Container>
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-blue-600
              "
            >
              Why YourForce
            </p>

            <h2
              id="highlights-heading"
              className="
                mt-4
                text-3xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-4xl
                lg:text-5xl
              "
            >
              Engineering delivery built around your business
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
              "
            >
              Flexible, globally aligned engineering support for
              modern commerce platforms and enterprise software.
            </p>
          </div>

          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-2
              lg:mt-16
              xl:grid-cols-4
            "
          >
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <article
                  key={highlight.title}
                  className={`
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    bg-white
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    hover:shadow-xl

                    ${
                      highlight.featured
                        ? `
                          border-blue-300
                          shadow-md
                          ring-2
                          ring-blue-100
                        `
                        : `
                          border-slate-200
                          shadow-sm
                          hover:border-blue-200
                        `
                    }
                  `}
                >
                  {highlight.featured && (
                    <span
                      className="
                        absolute
                        right-5
                        top-5
                        rounded-full
                        border
                        border-blue-100
                        bg-blue-50
                        px-3
                        py-1
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-blue-700
                      "
                    >
                      Core Strength
                    </span>
                  )}

                  <div
                    className="
                      flex
                      h-13
                      w-13
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-blue-100
                      bg-blue-50
                      text-blue-600
                      transition-all
                      duration-300
                      group-hover:border-blue-200
                      group-hover:bg-blue-600
                      group-hover:text-white
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      tracking-tight
                      text-slate-950
                    "
                  >
                    {highlight.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    {highlight.description}
                  </p>

                  <div
                    className="
                      mt-7
                      h-0.5
                      w-10
                      rounded-full
                      bg-blue-600
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
