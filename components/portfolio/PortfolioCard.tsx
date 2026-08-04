import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { PortfolioProject } from "@/types/project";
import Image from "next/image";

type PortfolioCardProps = {
    project: PortfolioProject;
};

export default function PortfolioCard({
    project: {
        title,
        category,
        description,
        image,
        technologies,
        slug,
    },
}: PortfolioCardProps) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

            {/* Project Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Category */}
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="flex h-full flex-col p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                    {title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                    {description}
                </p>

                {/* Technologies */}
                <ul className="mt-6 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <li key={tech.name}>
                            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-xs font-medium text-blue-700">
                                {tech.name}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                    <Link
                        href={`/portfolio/${slug}`}
                        className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
                    >
                        View Case Study

                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </div>

            </div>
        </article>
    );
}