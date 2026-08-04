import { projects } from "@/data/projects";

export function getFeaturedProjects() {
  return projects.items.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.items.find((project) => project.slug === slug);
}
