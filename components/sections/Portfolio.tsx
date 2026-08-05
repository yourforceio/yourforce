import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";

import Container from "@/components/layout/Container";
import PortfolioCard from "@/components/portfolio/PortfolioCard";

import { projects } from "@/data/projects";

export default function Portfolio() {
  const featuredProjects = projects.items
    .filter((project) => project.featured)
    .slice(0, 2);

  return (
    <section
      id="portfolio"
      className="
        scroll-mt-24
        border-y
        border-slate-200/70
        bg-slate-50
        py-20
        lg:py-24
      "
    >
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
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

          <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            {projects.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {projects.description}
          </p>
        </div>

        {/* Featured projects */}
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <PortfolioCard
              key={project.slug}
              project={project}
              variant="featured"
              showLiveLink={false}
            />
          ))}
        </div>

        {/* Portfolio page link */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-slate-950
              px-7
              py-4
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-blue-600
              hover:shadow-lg
              hover:shadow-blue-600/20
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2
            "
          >
            Explore All Case Studies

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
