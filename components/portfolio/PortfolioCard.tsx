import Image from "next/image";
import Link from "next/link";

import { ArrowRight, ExternalLink } from "lucide-react";

import type { PortfolioProject, ProjectVisualTheme } from "@/types/project";

type PortfolioCardProps = {
  project: PortfolioProject;
  variant?: "featured" | "listing";
  showLiveLink?: boolean;
};

type ProjectTheme = {
  imageBackground: string;
  imageGlow: string;
};

// Only the decorative image-frame gradient varies per project.
// Badge, tags, links, and borders stay consistent brand blue everywhere,
// so per-card color variety never bleeds into text or interactive elements.
const projectThemes: Record<ProjectVisualTheme, ProjectTheme> = {
  indigo: {
    imageBackground:
      "bg-gradient-to-br from-indigo-950 via-indigo-800 to-cyan-500",
    imageGlow: "bg-cyan-300/30",
  },
  gold: {
    imageBackground:
      "bg-gradient-to-br from-slate-950 via-blue-900 to-amber-400",
    imageGlow: "bg-amber-200/35",
  },
  charcoal: {
    imageBackground:
      "bg-gradient-to-br from-zinc-950 via-slate-900 to-purple-950",
    imageGlow: "bg-purple-300/20",
  },
  crimson: {
    imageBackground: "bg-gradient-to-br from-red-950 via-red-800 to-orange-200",
    imageGlow: "bg-orange-100/35",
  },
};

// Shared brand-blue treatment for every card, regardless of image theme.
const cardStyle = {
  card: "border-slate-200 hover:border-blue-300 hover:shadow-blue-950/10",
  category: "border-blue-100/80 bg-blue-50/95 text-blue-800",
  eyebrow: "text-blue-600",
  title: "hover:text-blue-700 focus-visible:ring-blue-500",
  chip: "border-blue-200 bg-blue-50 text-blue-700 group-hover:bg-blue-100",
  primaryLink: "text-blue-600 hover:text-blue-700 focus-visible:ring-blue-500",
  focusRing: "focus-visible:ring-blue-500",
};

export default function PortfolioCard({
  project,
  variant = "listing",
  showLiveLink,
}: PortfolioCardProps) {
  const projectUrl = `/portfolio/${project.slug}`;
  const isFeatured = variant === "featured";

  const technologyLimit = isFeatured ? 4 : 5;

  const visibleTechnologies = project.technologies.slice(0, technologyLimit);

  const remainingTechnologies =
    project.technologies.length - visibleTechnologies.length;

  const description = isFeatured
    ? project.shortDescription
    : project.description;

  const displayLiveLink = showLiveLink ?? !isFeatured;

  const theme = projectThemes[project.visualTheme];

  return (
    <article
      className={`
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[1.75rem]
        border
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        ${cardStyle.card}
      `}
    >
      {/* Project image */}
      <Link
        href={projectUrl}
        aria-label={`Explore ${project.title} case study`}
        className={`
          block
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-inset
          ${cardStyle.focusRing}
        `}
      >
        <div
          className={`relative aspect-[16/9] overflow-hidden ${theme.imageBackground}`}
        >
          <div
            className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl ${theme.imageGlow}`}
          />

          <div className="absolute inset-3 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl ring-1 ring-white/10 sm:inset-4">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.035]
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/5" />
          </div>

          {/* Category */}
          <span
            className={`
              absolute
              left-6
              top-6
              inline-flex
              max-w-[calc(100%-2.5rem)]
              items-center
              truncate
              whitespace-nowrap
              rounded-full
              border
              px-4
              py-2
              text-xs
              font-semibold
              leading-4
              shadow-sm
              md:backdrop-blur-md
              ${cardStyle.category}
            `}
          >
            {project.category}
          </span>
        </div>
      </Link>

      {/* Project content */}
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div>
          <p
            className={`text-xs font-bold uppercase tracking-[0.16em] ${cardStyle.eyebrow}`}
          >
            Commerce Case Study
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-[1.7rem]">
            <Link
              href={projectUrl}
              className={`
                transition-colors
                focus-visible:outline-none
                focus-visible:ring-2
                ${cardStyle.title}
              `}
            >
              {project.title}
            </Link>
          </h2>

          <p className="mt-4 leading-7 text-slate-600">{description}</p>
        </div>

        {/* Technologies */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {visibleTechnologies.map((technology) => (
            <li key={technology.name}>
              <span
                className={`
                  inline-flex
                  rounded-full
                  border
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  transition-colors
                  duration-200
                  ${cardStyle.chip}
                `}
              >
                {technology.name}
              </span>
            </li>
          ))}

          {remainingTechnologies > 0 && (
            <li>
              <span
                className={`
                  inline-flex
                  rounded-full
                  border
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  transition-colors
                  duration-200
                  ${cardStyle.chip}
                `}
              >
                +{remainingTechnologies} more
              </span>
            </li>
          )}
        </ul>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-8">
          <Link
            href={projectUrl}
            className={`
              inline-flex
              items-center
              gap-2
              font-semibold
              transition-colors
              focus-visible:outline-none
              focus-visible:ring-2
              ${cardStyle.primaryLink}
            `}
          >
            Explore Case Study
            <ArrowRight
              aria-hidden="true"
              className="
                h-4
                w-4
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </Link>

          {displayLiveLink && project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-slate-500
                transition-colors
                hover:text-slate-900
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
              "
            >
              Visit Live Site
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
