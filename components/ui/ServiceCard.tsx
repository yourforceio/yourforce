import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { serviceIcons } from "@/lib/service-icons";

import type { Service } from "@/types/service";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export default function ServiceCard({
  service,
  className = "",
}: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];

  if (service.featured) {
    return (
      <article
        className={`
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-slate-950
          text-white
          shadow-xl
          shadow-slate-950/10
          ${className}
        `}
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:36px_36px]
          "
        />

        <div
          className="
            relative
            grid
            gap-10
            p-7
            md:p-9
            lg:grid-cols-[1.15fr_0.85fr]
            lg:items-stretch
            lg:gap-14
          "
        >
          {/* Main content */}
          <div className="flex min-w-0 flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white transition-transform duration-300 group-hover:scale-105">
              <Icon
                aria-hidden="true"
                className="h-6 w-6"
              />
            </div>

            {service.eyebrow && (
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                {service.eyebrow}
              </p>
            )}

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
              {service.title}
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              {service.description}
            </p>

            <div className="mt-auto pt-8">
              <Link
                href={service.href}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-blue-400
                  transition-colors
                  hover:text-blue-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-400
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-slate-950
                "
              >
                {service.ctaLabel}

                <ArrowUpRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>
          </div>

          {/* Platform coverage */}
          <div
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/70
              p-6
              backdrop-blur
              lg:p-7
            "
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Platform Coverage
            </p>

            <h4 className="mt-3 text-xl font-bold text-white">
              Leading Commerce Platforms
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Flexible engineering and delivery support across the platforms
              best suited to your business.
            </p>

            <ul className="mt-7 space-y-3">
              {service.stack.map((technology) => (
                <li
                  key={technology.name}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-950/70
                    px-4
                    py-3
                  "
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 text-blue-400"
                    />
                  </span>

                  <span className="text-sm font-semibold text-slate-200">
                    {technology.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`
        group
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-7
        text-slate-950
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
        hover:shadow-slate-900/10
        ${className}
      `}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-105">
        <Icon
          aria-hidden="true"
          className="h-6 w-6"
        />
      </div>

      {service.eyebrow && (
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          {service.eyebrow}
        </p>
      )}

      <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
        {service.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {service.description}
      </p>

      <ul className="mt-7 flex flex-wrap gap-2">
        {service.stack.map((technology) => (
          <li key={technology.name}>
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
              {technology.name}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Link
          href={service.href}
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-blue-600
            transition-colors
            hover:text-blue-700
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-offset-4
          "
        >
          {service.ctaLabel}

          <ArrowUpRight
            aria-hidden="true"
            className="
              h-4
              w-4
              transition-transform
              duration-200
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </Link>
      </div>
    </article>
  );
}
