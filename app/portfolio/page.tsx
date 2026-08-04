import Container from "@/components/layout/Container";
import PortfolioCard from "@/components/portfolio/PortfolioCard";

import { projects } from "@/data/projects";

export default function PortfolioPage() {
    return (
        <main className="bg-white py-24">
            <Container>
                {/* Badge */}
                <div className="text-center">
                    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-sm font-medium text-blue-700">
                        🚀 Our Portfolio
                    </span>

                    <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
                        Recent Projects
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        Explore a collection of software products, enterprise
                        platforms, and commerce solutions we've designed and
                        built for businesses across different industries.
                    </p>
                </div>

                {/* Projects */}
                <div className="mt-20 grid gap-8 lg:grid-cols-2">
                    {projects.items.map((project) => (
                        <PortfolioCard
                            key={project.slug}
                            project={project}
                        />
                    ))}
                </div>
            </Container>
        </main>
    );
}