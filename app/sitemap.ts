import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { site } from "@/data/site";

const baseUrl = site.url.replace(/\/$/, "");

const lastModified = new Date(
  "2026-08-06T00:00:00.000Z",
);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap =
    projects.items.map((project) => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: project.featured ? 0.8 : 0.7,
    }));

  return [
    ...staticRoutes,
    ...projectRoutes,
  ];
}
