// app/portfolio/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { getProjectBySlug } from "@/lib/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-100 py-20">
        <Container>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="mt-10 max-w-4xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              {project.category}
            </span>

            <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-600">
              {project.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="py-14">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <div className="relative aspect-[16/8]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            {/* Left */}
            <div className="space-y-20">
              <section>
                <h2 className="text-3xl font-bold text-slate-900">
                  Project Overview
                </h2>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  {project.overview}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900">
                  The Challenge
                </h2>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  {project.challenge}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900">
                  The Solution
                </h2>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  {project.solution}
                </p>
              </section>

              {/* Results */}

              <section>
                <h2 className="text-3xl font-bold text-slate-900">Results</h2>

                <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-5xl font-black tracking-tight text-blue-600">
                        {metric.value}
                      </div>

                      <p className="mt-2 text-sm font-medium text-slate-500">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar */}

            <aside>
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Project Details
                </h3>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Category
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    {project.category}
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Technologies
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-10 space-y-3">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Project
                      </Link>
                    )}

                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center gap-2 font-medium text-slate-700 hover:text-slate-900"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* CTA */}

      <section className="pb-24">
        <Container>
          <div className="rounded-3xl bg-slate-900 px-10 py-16 text-center">
            <h2 className="text-4xl font-bold text-white">
              Ready to Build Something Similar?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Let&apos;s discuss your next software project and build a solution that
              grows with your business.
            </p>

            <div className="mt-10">
              <Link href="/contact">
                <Button>Start Your Project</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
