import {
  ArrowUpRight,
  HeartPulse,
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

const operationIcons = {
  truck: Truck,
  billing: HeartPulse,
};

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
            const Icon = operationIcons[service.icon];
            const isDispatch = service.icon === "truck";

            return (
              <article
                key={service.title}
                className={`group relative overflow-hidden rounded-3xl border bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-1 hover:bg-slate-900 md:p-10 ${
                  isDispatch
                    ? "border-amber-400/20 hover:border-amber-400/40"
                    : "border-teal-400/20 hover:border-teal-400/40"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    isDispatch
                      ? "bg-amber-400/10 text-amber-300"
                      : "bg-teal-400/10 text-teal-300"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </div>

                <p
                  className={`mt-8 text-sm font-bold uppercase tracking-[0.16em] ${
                    isDispatch
                      ? "text-amber-300"
                      : "text-teal-300"
                  }`}
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

                <a
                  href={service.href}
                  className={`mt-9 inline-flex items-center gap-2 font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 ${
                    isDispatch
                      ? "text-amber-300 hover:text-amber-200 focus-visible:ring-amber-300"
                      : "text-teal-300 hover:text-teal-200 focus-visible:ring-teal-300"
                  }`}
                >
                  {service.ctaLabel}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
