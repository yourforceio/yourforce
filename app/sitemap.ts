import type { MetadataRoute } from "next";

import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  const august6LastModified =
    new Date("2026-08-06T00:00:00.000Z");

  const august7LastModified =
    new Date("2026-08-07T00:00:00.000Z");

  const august8LastModified =
    new Date("2026-08-08T00:00:00.000Z");

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date("2026-11-11T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/lab`,
      lastModified: august8LastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: august6LastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/workplace`,
      lastModified: august7LastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/privacy`,
      lastModified: august6LastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // Services
    {
      url: `${baseUrl}/services/commerce`,
      lastModified: new Date("2026-11-11T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/php`,
      lastModified: new Date("2026-11-11T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // US operations desks
    ...["", "/trucking", "/billing", "/data-entry", "/insurance-documents"].map((p) => ({
      url: `${baseUrl}/operations${p}`,
      lastModified: new Date("2026-11-11T00:00:00.000Z"),
      changeFrequency: "monthly" as const,
      priority: p ? 0.7 : 0.6,
    })),

    // Products
    {
      url: `${baseUrl}/products`,
      lastModified: new Date("2026-11-11T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...["schools", "commerce", "bookings", "dine", "property", "clinic", "society", "rentacar", "learn", "services"].map((slug) => ({
      url: `${baseUrl}/products/${slug}`,
      lastModified: new Date("2026-11-11T00:00:00.000Z"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Engineering Lab
    {
      url: `${baseUrl}/lab/headless-commerce`,
      lastModified: august8LastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/lab/product-discovery`,
      lastModified: august8LastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/lab/omnichannel-fulfilment`,
      lastModified: august8LastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/lab/agentic-guided-shopping`,
      lastModified: august8LastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
