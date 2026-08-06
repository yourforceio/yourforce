import type { Metadata } from "next";

import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
} from "lucide-react";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

import { site } from "@/data/site";
import { workplace } from "@/data/workplace";

export const metadata: Metadata = {
  title: workplace.metadata.title,

  description:
    workplace.metadata.description,

  alternates: {
    canonical:
      "/workplace",
  },

  openGraph: {
    type:
      "website",

    url:
      "/workplace",

    title:
      `${workplace.metadata.title} | ${site.name}`,

    description:
      workplace.metadata.description,

    images: [
      {
        url:
          site.image,

        width:
          1200,

        height:
          630,

        alt:
          `${site.name} remote-first workplace`,
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      `${workplace.metadata.title} | ${site.name}`,

    description:
      workplace.metadata.description,

    images: [
      site.image,
    ],
  },
};

export default function WorkplacePage() {
  return (
    <main>
      {/* Hero */}
      <section
        aria-labelledby="workplace-heading"
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
          <div className="absolute -left-40 top-0 h-[460px] w-[460px] rounded-full bg-blue-600/20 blur-[150px]" />

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

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <Container>
          <div
            className="
              relative
              z-10
              grid
              items-center
              gap-14
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-20
            "
          >
            <div>
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
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </span>

                {workplace.badge}
              </div>

              <h1
                id="workplace-heading"
                className="
                  mt-8
                  max-w-4xl
                  text-5xl
                  font-black
                  leading-[1.04]
                  tracking-[-0.04em]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                <span className="block text-white">
                  {workplace.heading.primary}
                </span>

                <span
                  className="
                    mt-2
                    block
                    bg-gradient-to-r
                    from-blue-400
                    via-cyan-300
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {workplace.heading.accent}
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-8
                  text-slate-300
                  sm:text-xl
                  sm:leading-9
                "
              >
                {workplace.description}
              </p>
            </div>

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-slate-900/75
                p-7
                shadow-2xl
                shadow-black/30
                backdrop-blur-xl
                sm:p-9
              "
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/15 blur-[80px]" />

              <div className="relative">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-blue-400/20
                    bg-blue-500/10
                    text-blue-300
                  "
                >
                  <Globe2
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  Workplace Model
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                  {workplace.status}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  We combine remote flexibility with clear
                  expectations, structured collaboration, and
                  accountability for outcomes.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Flexible hours",
                    "Remote delivery",
                    "Global collaboration",
                    "Clear ownership",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-950/50
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-slate-200
                      "
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-blue-400"
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section
        aria-labelledby="principles-heading"
        className="
          relative
          overflow-hidden
          border-b
          border-slate-200
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
                Workplace Principles
              </p>

              <h2
                id="principles-heading"
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
                How we create an effective remote workplace
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Flexibility works best when communication,
                ownership, collaboration, and delivery standards
                are clear.
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
              {workplace.principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className="
                      group
                      h-full
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-7
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1.5
                      hover:border-blue-200
                      hover:shadow-xl
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
                        group-hover:border-blue-600
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

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
                      {principle.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {principle.description}
                    </p>

                    <div className="mt-7 h-0.5 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section
        aria-labelledby="benefits-heading"
        className="bg-white py-20 sm:py-24"
      >
        <Container>
          <div
            className="
              grid
              items-start
              gap-12
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
            "
          >
            <div className="lg:sticky lg:top-28">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-blue-600
                "
              >
                Featured Benefits
              </p>

              <h2
                id="benefits-heading"
                className="
                  mt-4
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-950
                  sm:text-4xl
                "
              >
                Flexibility that supports meaningful work
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Our workplace benefits are designed to support
                productive remote work while maintaining strong
                collaboration and dependable delivery.
              </p>
            </div>

            <div className="space-y-5">
              {workplace.benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="
                      group
                      flex
                      flex-col
                      gap-6
                      rounded-3xl
                      border
                      border-slate-200
                      bg-slate-50
                      p-7
                      transition-all
                      duration-300
                      hover:border-blue-200
                      hover:bg-white
                      hover:shadow-lg
                      sm:flex-row
                      sm:items-start
                      sm:p-8
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-blue-100
                        bg-white
                        text-blue-600
                        shadow-sm
                      "
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-950">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 text-base leading-8 text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Work model */}
      <section
        aria-labelledby="model-heading"
        className="
          relative
          overflow-hidden
          border-y
          border-white/10
          bg-slate-950
          py-20
          text-white
          sm:py-24
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[140px]" />

          <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

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

        <Container>
          <div className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-blue-300
                "
              >
                {workplace.model.badge}
              </p>

              <h2
                id="model-heading"
                className="
                  mt-4
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {workplace.model.heading}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {workplace.model.description}
              </p>
            </div>

            <div
              className="
                mt-12
                grid
                gap-5
                md:grid-cols-2
                lg:mt-16
                xl:grid-cols-4
              "
            >
              {workplace.model.steps.map((step) => (
                <article
                  key={step.number}
                  className="
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900/70
                    p-7
                    backdrop-blur
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/30
                    hover:bg-slate-900
                  "
                >
                  <p className="text-sm font-black tracking-[0.18em] text-blue-400">
                    {step.number}
                  </p>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Commitment */}
      <section
        aria-labelledby="commitment-heading"
        className="bg-white py-20 sm:py-24"
      >
        <Container>
          <div
            className="
              overflow-hidden
              rounded-[2rem]
              border
              border-slate-200
              bg-slate-50
              shadow-sm
            "
          >
            <div
              className="
                grid
                gap-10
                p-7
                sm:p-10
                lg:grid-cols-[0.9fr_1.1fr]
                lg:gap-16
                lg:p-14
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
                  {workplace.commitment.badge}
                </p>

                <h2
                  id="commitment-heading"
                  className="
                    mt-4
                    text-3xl
                    font-bold
                    tracking-tight
                    text-slate-950
                    sm:text-4xl
                  "
                >
                  {workplace.commitment.heading}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  {workplace.commitment.description}
                </p>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {workplace.commitment.items.map((item) => (
                  <li
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-4
                    "
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                    />

                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="workplace-cta-heading"
        className="bg-white pb-20 sm:pb-24"
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
              <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[110px]" />

              <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

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

            <div className="relative mx-auto max-w-3xl">
              <h2
                id="workplace-cta-heading"
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {workplace.cta.heading}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {workplace.cta.description}
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href={workplace.cta.primary.href}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="primary"
                    className="w-full px-7 py-4 text-base sm:w-auto"
                  >
                    <span className="inline-flex items-center gap-2">
                      {workplace.cta.primary.label}

                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </span>
                  </Button>
                </Link>

                <Link
                  href={workplace.cta.secondary.href}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="secondary"
                    className="
                      w-full
                      border
                      border-slate-700
                      bg-slate-900
                      px-7
                      py-4
                      text-base
                      text-white
                      hover:border-blue-400/50
                      hover:bg-slate-800
                      sm:w-auto
                    "
                  >
                    <span className="inline-flex items-center gap-2">
                      {workplace.cta.secondary.label}

                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
