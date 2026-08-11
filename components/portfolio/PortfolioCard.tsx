import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import type { PortfolioProject } from "@/types/project";

type PortfolioCardProps = {
  project: PortfolioProject;
  variant?: "featured" | "listing";
  showLiveLink?: boolean;
};

export default function PortfolioCard({
  project,
  variant = "listing",
  showLiveLink,
}: PortfolioCardProps) {
  const projectUrl = `/portfolio/${project.slug}`;
  const isFeatured = variant === "featured";

  const technologyLimit = isFeatured ? 4 : 5;

  const visibleTechnologies =
    project.technologies.slice(0, technologyLimit);

  const remainingTechnologies =
    project.technologies.length -
    visibleTechnologies.length;

  const description = isFeatured
    ? project.shortDescription
    : project.description;

  const displayLiveLink =
    showLiveLink ?? !isFeatured;

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[1.75rem]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-2xl
        hover:shadow-slate-900/10
      "
    >
      {/* Project image */}
      <Link
        href={projectUrl}
        aria-label={`Explore ${project.title} case study`}
        className="
          block
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-inset
          focus-visible:ring-blue-500
        "
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
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

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

          {/* Category */}
          <span
            className="
              absolute
              left-5
              top-5
              inline-flex
              max-w-[calc(100%-2.5rem)]
              items-center
              truncate
              whitespace-nowrap
              rounded-full
              border
              border-white/60
              bg-white/90
              px-4
              py-2
              text-xs
              font-semibold
              leading-4
              text-slate-800
              shadow-sm
              md:backdrop-blur-md
            "
          >
            {project.category}
          </span>
        </div>
      </Link>

      {/* Project content */}
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Commerce Case Study
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-[1.7rem]">
            <Link
              href={projectUrl}
              className="
                transition-colors
                hover:text-blue-600
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
              "
            >
              {project.title}
            </Link>
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {visibleTechnologies.map((technology) => (
            <li key={technology.name}>
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-slate-600
                  transition-colors
                  duration-200
                  group-hover:border-blue-200
                  group-hover:text-blue-600
                "
              >
                {technology.name}
              </span>
            </li>
          ))}

          {remainingTechnologies > 0 && (
            <li>
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-slate-500
                "
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
            className="
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

              <ExternalLink
                aria-hidden="true"
                className="h-4 w-4"
              />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
