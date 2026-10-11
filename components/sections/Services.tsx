import Link from "next/link";
import {
  ArrowUpRight,
  FileSpreadsheet,
  HeartPulse,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/layout/Container";
import ServiceCard from "@/components/ui/ServiceCard";

import {
  services,
  specializedOperations,
} from "@/data/services";

export default function Services() {
  const [featuredService, ...supportingServices] =
    services.items;

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white py-24"
    >
      <Container>
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              {services.badge}
            </span>

            <h2 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              {services.heading}
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            {services.description}
          </p>
        </div>

        {/* Featured service */}
        <div className="mt-16">
          <ServiceCard
            service={featuredService}
            className="min-h-[360px]"
          />
        </div>

        {/* Supporting services */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {supportingServices.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

const operationThemes = {
  truck: {
    Icon: Truck,
    card: "border-amber-400/20 hover:border-amber-400/40",
    iconBox: "bg-amber-400/10 text-amber-300",
    eyebrow: "text-amber-300",
    link: "text-amber-300 hover:text-amber-200 focus-visible:ring-amber-300",
  },
  billing: {
    Icon: HeartPulse,
    card: "border-teal-400/20 hover:border-teal-400/40",
    iconBox: "bg-teal-400/10 text-teal-300",
    eyebrow: "text-teal-300",
    link: "text-teal-300 hover:text-teal-200 focus-visible:ring-teal-300",
  },
  dataEntry: {
    Icon: FileSpreadsheet,
    card: "border-sky-400/20 hover:border-sky-400/40",
    iconBox: "bg-sky-400/10 text-sky-300",
    eyebrow: "text-sky-300",
    link: "text-sky-300 hover:text-sky-200 focus-visible:ring-sky-300",
  },
  insurance: {
    Icon: ShieldCheck,
    card: "border-violet-400/20 hover:border-violet-400/40",
    iconBox: "bg-violet-400/10 text-violet-300",
    eyebrow: "text-violet-300",
    link: "text-violet-300 hover:text-violet-200 focus-visible:ring-violet-300",
  },
} as const;

export function SpecializedOperations() {
  return (
    <section
      id="specialized-services"
      className="scroll-mt-24 bg-slate-950 py-24 text-white"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
              {specializedOperations.badge}
            </span>

            <h2 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              {specializedOperations.heading}
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            {specializedOperations.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {specializedOperations.items.map((service) => {
            const theme = operationThemes[service.icon];
            const { Icon } = theme;

            return (
              <article
                key={service.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-1 hover:bg-slate-900 md:p-10 ${theme.card}`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconBox}`}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </div>

                <p
                  className={`mt-8 text-sm font-bold uppercase tracking-[0.16em] ${theme.eyebrow}`}
                >
                  {service.eyebrow}
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  {service.description}
                </p>

                <ul
                  aria-label={`${service.title} capabilities`}
                  className="mt-7 flex flex-wrap gap-2"
                >
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {(() => {
                  const linkClassName = `mt-auto inline-flex items-center gap-2 pt-9 font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 ${theme.link}`;

                  const linkContent = (
                    <>
                      {service.ctaLabel}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  );

                  return service.href.startsWith("/") ? (
                    <Link
                      href={service.href}
                      className={linkClassName}
                    >
                      {linkContent}
                    </Link>
                  ) : (
                    <a
                      href={service.href}
                      className={linkClassName}
                    >
                      {linkContent}
                    </a>
                  );
                })()}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
