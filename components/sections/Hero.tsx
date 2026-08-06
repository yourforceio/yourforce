import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
} from "lucide-react";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

import { hero } from "@/data/hero";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        border-b
        border-white/10
        bg-slate-950
        text-white
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 top-0 h-[540px] w-[540px] rounded-full bg-blue-600/20 blur-[160px]" />

        <div className="absolute -right-44 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute left-[45%] top-20 h-64 w-64 rounded-full bg-blue-500/[0.06] blur-[110px]" />

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
            py-20
            sm:py-24
            lg:min-h-[calc(100svh-72px)]
            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-16
            lg:py-20
            xl:gap-20
          "
        >
          {/* Left content */}
          <div className="min-w-0">
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

              {hero.badge}
            </div>

            <h1
              id="hero-heading"
              className="
                mt-8
                max-w-4xl
                text-5xl
                font-black
                leading-[1.03]
                tracking-[-0.04em]
                sm:text-6xl
                lg:text-[3.5rem]
                xl:text-[4rem]
              "
            >
              <span className="block text-white">
                {hero.heading.primary}
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
                {hero.heading.accent}
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
              {hero.description}
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {hero.actions.map((action) => {
                const isSecondary =
                  action.variant === "secondary";

                const ActionIcon = isSecondary
                  ? ArrowUpRight
                  : ArrowRight;

                return (
                  <Link
                    key={`${action.label}-${action.href}`}
                    href={action.href}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant={action.variant}
                      className={`
                        w-full
                        px-7
                        py-4
                        text-base
                        sm:w-auto

                        ${
                          isSecondary
                            ? `
                              border
                              border-slate-700
                              bg-slate-900/80
                              text-white
                              hover:border-blue-400/50
                              hover:bg-slate-800
                            `
                            : ""
                        }
                      `}
                    >
                      <span className="inline-flex items-center gap-2">
                        {action.label}

                        <ActionIcon
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                      </span>
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* Platform expertise */}
            <div className="mt-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {hero.technologies.title}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2.5">
                {hero.technologies.items.map(
                  (technology) => (
                    <li key={technology.name}>
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2.5
                          rounded-full
                          border
                          border-slate-800
                          bg-slate-900/70
                          px-3.5
                          py-2
                          text-xs
                          font-semibold
                          text-slate-300
                          backdrop-blur-sm
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:border-blue-500/40
                          hover:bg-slate-900
                          hover:text-blue-300
                        "
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                        {technology.name}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative min-w-0 lg:pl-4">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[3rem] bg-blue-600/10 blur-3xl"
            />

            {/* Browser frame */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-slate-900/90
                p-2
                shadow-2xl
                shadow-black/40
                backdrop-blur-xl
              "
            >
              {/* Browser toolbar */}
              <div className="flex h-12 items-center gap-2 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />

                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />

                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

                <div
                  className="
                    ml-3
                    flex
                    h-7
                    min-w-0
                    flex-1
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-slate-700/80
                    bg-slate-800/80
                    px-3
                  "
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />

                  <span className="truncate text-[10px] font-medium text-slate-400">
                    www.yourforce.io
                  </span>
                </div>
              </div>

              {/* Project image */}
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-800">
                <Image
                  src={hero.visual.image}
                  alt={hero.visual.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-slate-950/10" />

                <div className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent" />

                {/* Visual content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-lg">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300 drop-shadow">
                      {hero.visual.eyebrow}
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-white drop-shadow-lg sm:text-3xl">
                      {hero.visual.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-200 drop-shadow-md sm:text-base sm:leading-7">
                      {hero.visual.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating delivery card */}
            <div
              className="
                absolute
                -left-5
                top-20
                hidden
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-slate-900/95
                px-4
                py-3.5
                shadow-xl
                backdrop-blur-xl
                xl:flex
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-400/20
                  bg-blue-500/10
                  text-blue-300
                "
              >
                <Globe2
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Global Delivery
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Remote-first • Time-zone aligned
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    group
                    min-h-[118px]
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/70
                    px-5
                    py-5
                    backdrop-blur
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:border-blue-500/30
                    hover:bg-slate-900
                    hover:shadow-lg
                    hover:shadow-blue-950/20
                  "
                >
                  <p className="text-3xl font-black tracking-tight text-white transition-colors group-hover:text-blue-300">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[10px] font-semibold uppercase leading-4 tracking-[0.13em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
