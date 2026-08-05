import Container from "@/components/layout/Container";
import ServiceCard from "@/components/ui/ServiceCard";

import { services } from "@/data/services";

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
