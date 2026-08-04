import Link from "next/link";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { getFeaturedProjects } from "@/lib/projects";
import { projects } from "@/data/projects";

const featuredProjects = getFeaturedProjects();

export default function Portfolio() {
    const featuredProjects = projects.items.filter(
        (project) => project.featured
    );

    return (
        <section
            id="portfolio"
            className="bg-slate-50 py-24"
        >
            <Container>
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">

                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-sm font-medium text-blue-700">
                        {projects.badge}
                    </span>

                    {/* Heading */}
                    <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                        {projects.heading}
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        {projects.description}
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <PortfolioCard
                            key={project.slug}
                            project={project}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 flex justify-center">
                    <Link href="/portfolio">
                        <Button variant="secondary">
                            Explore Our Work
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}