import Link from "next/link";

import { hero } from "@/data/hero";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <Container>
            <div className="mx-auto max-w-4xl text-center">
                {/* Badge */}
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-sm font-medium text-blue-700">
                    {hero.badge}
                </span>

                {/* Heading */}
                <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight ...">
                    {hero.heading.primary}
                    <br />
                    <span className="text-blue-600">
                        {hero.heading.accent}
                    </span>
                </h1>

                {/* Description */}
                <p className="mx-auto mt-8 max-w-xl text-xl leading-9 text-slate-600">{hero.description}</p>

                {/* Actions */}
                <div className="mt-10 flex justify-center gap-5">
                    {hero.actions.map((action) => (
                        <Link href={action.href} key={action.href}>
                            <Button variant={action.variant}>
                                {action.label}
                            </Button>
                        </Link>
                    ))}
                </div>

                {/* Expertise Across */}
                {hero.technologies && (
                    <div className="mt-16 flex flex-col items-center gap-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            {hero.technologies.title}
                        </p>

                        <ul className="flex flex-wrap items-center justify-center gap-2.5">
                            {hero.technologies.items.map((tech) => (
                            <li key={tech.name}>
                                <span className="inline-flex items-center rounded-full border border-slate-200/90 bg-white/80 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-600 hover:shadow-md">
                                    {tech.name}
                                </span>
                            </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Stats */}
                {hero.stats && (
                    <div className="mt-12 grid grid-cols-3 divide-x divide-slate-200/80 rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md">
                        {hero.stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center px-4">
                                <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    </section>
  );
}