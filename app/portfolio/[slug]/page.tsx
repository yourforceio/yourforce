import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers3,
  ShoppingBag,
  Target,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { projects } from "@/data/projects";

import type {
  PortfolioProject,
  ProjectCTA as ProjectCTAType,
} from "@/types/project";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type SummaryItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export function generateStaticParams() {
  return projects.items.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.items.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,

    description: project.description,

    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },

    openGraph: {
      type: "article",

      url: `/portfolio/${project.slug}`,

      title: `${project.title} | YourForce`,

      description: project.description,

      images: [
        {
          url: project.image,
          alt: `${project.title} case study`,
        },
      ],
    },
  };
}

function NarrativeSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
        {title}
      </h2>

      <div className="mt-6 text-lg leading-9 text-slate-600">
        {children}
      </div>
    </section>
  );
}

function CaseStudySidebar({
  project,
}: {
  project: PortfolioProject;
}) {
  const summaryItems: SummaryItem[] = [
    {
      label: "Platform",
      value: project.caseStudy.summary.platform,
      icon: Layers3,
    },
    {
      label: "Architecture",
      value:
        project.caseStudy.summary.architecture,
      icon: Workflow,
    },
    {
      label: "Commerce Model",
      value:
        project.caseStudy.summary.commerceModel,
      icon: ShoppingBag,
    },
    {
      label: "Delivery Focus",
      value:
        project.caseStudy.summary.deliveryFocus,
      icon: Target,
    },
  ];

  return (
    <aside className="h-fit lg:sticky lg:top-28">
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-slate-50
          p-7
          shadow-sm
          sm:p-8
        "
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          Case Study
        </p>

        <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
          At a Glance
        </h2>

        <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
          {summaryItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-start gap-4 py-5"
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-200
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <Icon
                    aria-hidden="true"
                    className="h-[18px] w-[18px]"
                  />
                </span>

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    {item.label}
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-slate-800">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              font-semibold
              text-blue-600
              transition-colors
              hover:text-blue-700
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
            "
          >
            Visit Live Project

            <ExternalLink
              aria-hidden="true"
              className="h-4 w-4"
            />
          </Link>
        )}
      </div>
    </aside>
  );
}

function ProjectNavigation({
  previousProject,
  nextProject,
}: {
  previousProject: PortfolioProject;
  nextProject: PortfolioProject;
}) {
  return (
    <nav
      aria-label="Case study navigation"
      className="
        grid
        gap-4
        border-t
        border-slate-200
        pt-10
        md:grid-cols-2
      "
    >
      <Link
        href={`/portfolio/${previousProject.slug}`}
        className="
          group
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-5
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:border-blue-200
          hover:bg-white
          hover:shadow-lg
        "
      >
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
          <ArrowLeft
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
          />

          Previous Case Study
        </span>

        <span className="mt-3 block font-bold text-slate-900">
          {previousProject.title}
        </span>
      </Link>

      <Link
        href={`/portfolio/${nextProject.slug}`}
        className="
          group
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-5
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:border-blue-200
          hover:bg-white
          hover:shadow-lg
          md:text-right
        "
      >
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
          Next Case Study

          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </span>

        <span className="mt-3 block font-bold text-slate-900">
          {nextProject.title}
        </span>
      </Link>
    </nav>
  );
}

function ProjectCTA({
  cta,
}: {
  cta: ProjectCTAType;
}) {
  return (
    <section className="bg-white pb-20 lg:pb-24">
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-[#071126]
            px-6
            py-14
            text-center
            text-white
            sm:px-10
            lg:py-16
          "
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[110px]" />

            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

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

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              {cta.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              {cta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {cta.description}
            </p>

            <Link
              href={`/contact?service=${encodeURIComponent(
                cta.service,
              )}`}
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-7
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-blue-500
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-slate-950
              "
            >
              Start Your Project

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const currentIndex = projects.items.findIndex(
    (item) => item.slug === slug,
  );

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects.items[currentIndex];

  const previousProject =
    projects.items[
      (currentIndex -
        1 +
        projects.items.length) %
        projects.items.length
    ];

  const nextProject =
    projects.items[
      (currentIndex + 1) %
        projects.items.length
    ];

  return (
    <main>
      {/* Project Hero */}
      <section
        className="
          relative
          overflow-hidden
          border-b
          border-white/10
          bg-slate-950
          pb-16
          pt-12
          text-white
          lg:pb-20
          lg:pt-16
        "
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-48 top-0 h-[460px] w-[460px] rounded-full bg-blue-600/15 blur-[140px]" />

          <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

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
          <div className="relative">
            <Link
              href="/portfolio"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-400
                transition-colors
                hover:text-white
              "
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4"
              />

              Back to Portfolio
            </Link>

            <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
              <div>
                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-blue-400/30
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-300
                  "
                >
                  {project.category}
                </span>

                <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-9 text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {project.technologies.map(
                    (technology) => (
                      <li key={technology.name}>
                        <span
                          className="
                            inline-flex
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
                          {technology.name}
                        </span>
                      </li>
                    ),
                  )}
                </ul>

                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-9
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-blue-600
                      px-7
                      py-4
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-blue-600/20
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:bg-blue-500
                    "
                  >
                    Visit Live Project

                    <ExternalLink
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                  </Link>
                )}
              </div>

              <div className="relative pb-8">
                <div
                  className="
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-700
                    bg-slate-900
                    p-2
                    shadow-2xl
                    shadow-blue-950/30
                  "
                >
                  <div className="relative h-full overflow-hidden rounded-[1.15rem]">
                    <Image
                      src={project.image}
                      alt={`${project.title} case study`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                  </div>
                </div>

                <div
                  className="
                    absolute
                    -bottom-1
                    left-5
                    max-w-[80%]
                    rounded-2xl
                    border
                    border-slate-700
                    bg-slate-900/95
                    px-5
                    py-4
                    shadow-xl
                    backdrop-blur
                    sm:left-[-1.5rem]
                  "
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                    {project.caseStudy.imageEyebrow}
                  </p>

                  <p className="mt-2 font-bold text-white">
                    {project.caseStudy.imageLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case-study content */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
            <div className="max-w-4xl space-y-16">
              <NarrativeSection
                eyebrow="Introduction"
                title="Project Overview"
              >
                <p>{project.overview}</p>
              </NarrativeSection>

              <NarrativeSection
                eyebrow="Business Context"
                title="The Challenge"
              >
                <p>{project.challenge}</p>
              </NarrativeSection>

              <NarrativeSection
                eyebrow="Delivery Approach"
                title="The Solution"
              >
                <p>{project.solution}</p>
              </NarrativeSection>

              <section>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  {
                    project.caseStudy
                      .metricSection.eyebrow
                  }
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                  {
                    project.caseStudy
                      .metricSection.title
                  }
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {
                    project.caseStudy
                      .metricSection.description
                  }
                </p>

                <div className="mt-9 grid gap-5 sm:grid-cols-2">
                  {project.metrics.map(
                    (metric, index) => (
                      <div
                        key={metric.label}
                        className="
                          rounded-2xl
                          border
                          border-slate-200
                          bg-slate-50
                          p-6
                          transition-all
                          duration-200
                          hover:border-blue-200
                          hover:bg-white
                          hover:shadow-lg
                        "
                      >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                          {String(
                            index + 1,
                          ).padStart(2, "0")}
                        </p>

                        <p className="mt-7 text-3xl font-black tracking-tight text-blue-600">
                          {metric.value}
                        </p>

                        <p className="mt-3 font-semibold text-slate-700">
                          {metric.label}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </section>

              <ProjectNavigation
                previousProject={previousProject}
                nextProject={nextProject}
              />
            </div>

            <CaseStudySidebar
              project={project}
            />
          </div>
        </Container>
      </section>

      <ProjectCTA
        cta={project.caseStudy.cta}
      />
    </main>
  );
}
