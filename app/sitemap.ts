import type { MetadataRoute } from "next";

import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        "",
        "/about",
        "/services",
        "/portfolio",
        "/contact",
    ];

    return pages.map((page) => ({
        url: `${site.url}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1 : 0.8,
    }));
}