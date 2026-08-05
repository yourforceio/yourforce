import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

import { hero } from "@/data/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-0 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />

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
        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-16
            py-20
            lg:min-h-[calc(100vh-4rem)]
            lg:grid-cols-[1.02fr_0.98fr]
            lg:py-24
          "
        >
          {/* Left content */}
          <div className="min-w-0">
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
              {hero.badge}
            </span>

            <h1
              className="
                mt-8
                max-w-4xl
                text-5xl
                font-black
                leading-[1.03]
                tracking-tight
                sm:text-6xl
                lg:text-7xl
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
                  via-cyan-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                {hero.heading.accent}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              {hero.description}
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {hero.actions.map((action) => (
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
                        action.variant === "secondary"
                          ? "border border-slate-700 bg-slate-900 text-white hover:border-slate-600 hover:bg-slate-800"
                          : ""
                      }
                    `}
                  >
                    <span className="inline-flex items-center gap-2">
                      {action.label}

                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </Link>
              ))}
            </div>

            {/* Commerce expertise */}
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
                          gap-2
                          rounded-full
                          border
                          border-slate-800
                          bg-slate-900/70
                          px-3.5
                          py-2
                          text-xs
                          font-semibold
                          text-slate-300
                          transition
                          duration-200
                          hover:border-blue-500/40
                          hover:text-blue-300
                        "
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-400" />

                        {technology.name}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Right visual and statistics */}
          <div className="relative min-w-0 lg:pl-4">
            <div className="absolute -inset-8 rounded-[3rem] bg-blue-600/10 blur-3xl" />

            {/* Browser frame */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-slate-900
                p-2
                shadow-2xl
                shadow-black/40
              "
            >
              {/* Browser toolbar */}
              <div className="flex h-11 items-center gap-2 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />

                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />

                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

                <div className="ml-3 h-6 flex-1 rounded-md border border-slate-700/80 bg-slate-800/80" />
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

                {/* Soft readability overlay */}
                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent" />

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

            {/* Floating capability card */}
            <div
              className="
                absolute
                -left-6
                top-24
                hidden
                rounded-2xl
                border
                border-white/10
                bg-slate-900/95
                px-5
                py-4
                shadow-xl
                backdrop-blur-xl
                xl:block
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Commerce Delivery
              </p>

              <p className="mt-1 font-semibold text-white">
                Platform to Experience
              </p>
            </div>

            {/* Statistics */}
            <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    min-h-[118px]
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/70
                    px-5
                    py-5
                    backdrop-blur
                    transition
                    duration-200
                    hover:border-blue-500/30
                    hover:bg-slate-900
                  "
                >
                  <p className="text-3xl font-black tracking-tight text-white">
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
