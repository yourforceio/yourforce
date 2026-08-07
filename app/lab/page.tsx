import type { Metadata } from "next";

import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FlaskConical,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { lab } from "@/data/lab";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title:
    lab.metadata.title,

  description:
    lab.metadata.description,

  alternates: {
    canonical:
      "/lab",
  },

  openGraph: {
    type:
      "website",

    url:
      "/lab",

    title:
      lab.metadata.title,

    description:
      lab.metadata.description,

    images: [
      {
        url:
          site.image,

        width:
          1200,

        height:
          630,

        alt:
          "YourForce Lab",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      lab.metadata.title,

    description:
      lab.metadata.description,

    images: [
      site.image,
    ],
  },
};

export default function LabPage() {
  return (
    <main>
      <section
        aria-labelledby="lab-heading"
        className="
          relative
          overflow-hidden
          border-b
          border-white/10
          bg-slate-950
          py-20
          text-white
          sm:py-24
          lg:py-28
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="
              absolute
              -left-40
              top-0
              h-[460px]
              w-[460px]
              rounded-full
              bg-blue-600/20
              blur-[150px]
            "
          />

          <div
            className="
              absolute
              -right-40
              bottom-0
              h-[420px]
              w-[420px]
              rounded-full
              bg-cyan-500/10
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              [background-size:48px_48px]
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-40
              bg-gradient-to-t
              from-slate-950
              to-transparent
            "
          />
        </div>

        <Container>
          <div
            className="
              relative
              z-10
              mx-auto
              max-w-5xl
              text-center
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-blue-400/25
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-blue-200
                backdrop-blur-sm
              "
            >
              <FlaskConical
                aria-hidden="true"
                className="h-4 w-4"
              />

              {lab.hero.badge}
            </div>

            <h1
              id="lab-heading"
              className="
                mt-8
                text-5xl
                font-black
                leading-[1.03]
                tracking-[-0.04em]
                sm:text-6xl
                lg:text-7xl
              "
            >
              <span className="text-white">
                {lab.hero.heading.primary}
              </span>{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-cyan-300
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                {lab.hero.heading.accent}
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-7
                max-w-3xl
                text-lg
                leading-8
                text-slate-300
                sm:text-xl
                sm:leading-9
              "
            >
              {lab.hero.description}
            </p>

            <div
              className="
                mt-9
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >
              {lab.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-900/70
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="experiments-heading"
        className="
          relative
          overflow-hidden
          bg-slate-50
          py-20
          sm:py-24
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <Container>
          <div className="relative">
            <div className="max-w-3xl">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-blue-600
                "
              >
                {lab.introduction.eyebrow}
              </p>

              <h2
                id="experiments-heading"
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
                {lab.introduction.heading}
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-8
                  text-slate-600
                  sm:text-lg
                "
              >
                {lab.introduction.description}
              </p>
            </div>

            <div
              className="
                mt-12
                grid
                gap-6
                lg:mt-16
              "
            >
              {lab.items.map((item) => {
                const Icon = item.icon;

                const available =
                  item.status === "available";

                return (
                  <article
                    key={item.slug}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-[2rem]
                      border
                      bg-white
                      p-7
                      shadow-sm
                      transition-all
                      duration-300
                      sm:p-9
                      lg:p-10
                      ${
                        available
                          ? "border-blue-200 hover:-translate-y-1 hover:shadow-xl"
                          : "border-slate-200"
                      }
                    `}
                  >
                    {item.featured && (
                      <div
                        className="
                          absolute
                          right-0
                          top-0
                          rounded-bl-2xl
                          bg-blue-600
                          px-4
                          py-2
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-white
                        "
                      >
                        Featured Lab
                      </div>
                    )}

                    <div
                      className="
                        grid
                        gap-8
                        lg:grid-cols-[1fr_0.55fr]
                        lg:items-center
                        lg:gap-16
                      "
                    >
                      <div>
                        <div
                          className="
                            flex
                            items-center
                            gap-4
                          "
                        >
                          <div
                            className="
                              flex
                              h-14
                              w-14
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

                          <div>
                            <p
                              className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-blue-600
                              "
                            >
                              {item.eyebrow}
                            </p>

                            <p
                              className="
                                mt-1
                                text-sm
                                font-semibold
                                text-slate-400
                              "
                            >
                              Lab {item.number}
                            </p>
                          </div>
                        </div>

                        <h3
                          className="
                            mt-7
                            text-2xl
                            font-bold
                            tracking-tight
                            text-slate-950
                            sm:text-3xl
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-4
                            max-w-3xl
                            text-base
                            leading-8
                            text-slate-600
                          "
                        >
                          {item.description}
                        </p>

                        <div
                          className="
                            mt-6
                            flex
                            flex-wrap
                            gap-2
                          "
                        >
                          {item.technologies.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="
                                  rounded-full
                                  border
                                  border-slate-200
                                  bg-slate-50
                                  px-3.5
                                  py-1.5
                                  text-xs
                                  font-semibold
                                  text-slate-600
                                "
                              >
                                {technology}
                              </span>
                            ),
                          )}
                        </div>
                      </div>

                      <div>
                        <p
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-slate-400
                          "
                        >
                          Demonstrates
                        </p>

                        <ul className="mt-5 space-y-3">
                          {item.capabilities.map(
                            (capability) => (
                              <li
                                key={capability}
                                className="
                                  flex
                                  items-center
                                  gap-3
                                  text-sm
                                  font-medium
                                  text-slate-700
                                "
                              >
                                <CheckCircle2
                                  aria-hidden="true"
                                  className="
                                    h-4
                                    w-4
                                    shrink-0
                                    text-blue-600
                                  "
                                />

                                {capability}
                              </li>
                            ),
                          )}
                        </ul>

                        <div className="mt-7">
                          {available ? (
                            <Link
                              href={item.href}
                              className="
                                inline-flex
                                items-center
                                gap-2
                                font-semibold
                                text-blue-600
                                transition-colors
                                hover:text-blue-700
                              "
                            >
                              Enter Lab

                              <ArrowUpRight
                                aria-hidden="true"
                                className="h-4 w-4"
                              />
                            </Link>
                          ) : (
                            <span
                              className="
                                inline-flex
                                rounded-full
                                border
                                border-slate-200
                                bg-slate-100
                                px-4
                                py-2
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-slate-500
                              "
                            >
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="lab-philosophy-heading"
        className="
          bg-white
          py-20
          sm:py-24
        "
      >
        <Container>
          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-slate-200
              bg-slate-50
              p-8
              sm:p-10
              lg:p-14
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-blue-100/70
                blur-[100px]
              "
            />

            <div
              className="
                relative
                grid
                gap-10
                lg:grid-cols-[0.8fr_1.2fr]
                lg:gap-16
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-blue-600
                  "
                >
                  {lab.philosophy.eyebrow}
                </p>

                <h2
                  id="lab-philosophy-heading"
                  className="
                    mt-4
                    text-3xl
                    font-bold
                    tracking-tight
                    text-slate-950
                    sm:text-4xl
                  "
                >
                  {lab.philosophy.heading}
                </h2>
              </div>

              <div
                className="
                  space-y-5
                  text-base
                  leading-8
                  text-slate-600
                "
              >
                {lab.philosophy.paragraphs.map(
                  (paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  ),
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="lab-cta-heading"
        className="
          bg-white
          pb-20
          sm:pb-24
        "
      >
        <Container>
          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-blue-500/20
              bg-slate-950
              px-7
              py-12
              text-center
              text-white
              shadow-2xl
              shadow-blue-950/10
              sm:px-10
              sm:py-14
              lg:px-16
              lg:py-16
            "
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div
                className="
                  absolute
                  -left-24
                  top-0
                  h-72
                  w-72
                  rounded-full
                  bg-blue-600/20
                  blur-[110px]
                "
              />

              <div
                className="
                  absolute
                  -right-24
                  bottom-0
                  h-72
                  w-72
                  rounded-full
                  bg-cyan-500/10
                  blur-[110px]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.03]
                  [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                  [background-size:48px_48px]
                "
              />
            </div>

            <div
              className="
                relative
                mx-auto
                max-w-3xl
              "
            >
              <h2
                id="lab-cta-heading"
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {lab.cta.heading}
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-base
                  leading-8
                  text-slate-300
                  sm:text-lg
                "
              >
                {lab.cta.description}
              </p>

              <div
                className="
                  mt-9
                  flex
                  flex-col
                  justify-center
                  gap-4
                  sm:flex-row
                "
              >
                <Link
                  href={lab.cta.primary.href}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-7
                    py-4
                    text-base
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-950/20
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-blue-500
                  "
                >
                  {lab.cta.primary.label}

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </Link>

                <Link
                  href={lab.cta.secondary.href}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-7
                    py-4
                    text-base
                    font-semibold
                    text-white
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-blue-400/50
                    hover:bg-slate-800
                  "
                >
                  {lab.cta.secondary.label}

                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
