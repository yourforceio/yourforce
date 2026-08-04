import Container from "@/components/layout/Container";
import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
    return (
        <section id="services" className="pt-20 pb-16 bg-white">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-sm font-medium text-blue-700">
                        {services.badge}
                    </span>

                    {/* Heading */}
                    <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                        {services.heading}
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        {services.description}
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.items.map((service) => (
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