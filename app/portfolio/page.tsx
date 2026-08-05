import type { Metadata } from "next";

import {
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/layout/Container";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import CTA from "@/components/sections/CTA";

import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",

  description:
    "Explore selected commerce transformations, storefront modernizations, integrations, and enterprise implementations delivered by YourForce.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      {/* Portfolio introduction */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-slate-50
          via-white
          to-white
          pb-10
          pt-14
          lg:pb-12
          lg:pt-16
        "
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-220px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-[140px]" />

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
          <div className="relative mx-auto max-w-5xl text-center">
            {/* Badge */}
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-200
                bg-blue-50/80
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
              "
            >
              <BriefcaseBusiness
                aria-hidden="true"
                className="h-4 w-4"
              />

              {projects.badge}
            </span>

            {/* Heading */}
            <h1
              className="
                mx-auto
                mt-7
                max-w-5xl
                text-4xl
                font-black
                leading-[1.12]
                tracking-tight
                text-slate-950
                md:text-5xl
                lg:text-6xl
              "
            >
              {projects.heading}
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {projects.description}
            </p>

            {/* Portfolio highlights */}
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {projects.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-slate-200
                    bg-white/70
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-slate-600
                    backdrop-blur-sm
                  "
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-blue-500"
                  />

                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Project listing */}
      <section
        aria-label="Portfolio projects"
        className="
          border-t
          border-slate-200/80
          bg-white
          pb-16
          pt-10
          lg:pb-20
          lg:pt-12
        "
      >
        <Container>
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {projects.items.map((project) => (
              <PortfolioCard
                key={project.slug}
                project={project}
                variant="listing"
              />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
