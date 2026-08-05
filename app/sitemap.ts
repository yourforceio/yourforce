import type { MetadataRoute } from "next";

import { site } from "@/data/site";

const routes = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
  }));
}
