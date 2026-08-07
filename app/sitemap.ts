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
      lastModified: august8LastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/portfolio`,
      lastModified: august6LastModified,
      changeFrequency: "monthly",
      priority: 0.8,
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

    // Case Studies
    {
      url:
        `${baseUrl}/portfolio/enterprise-fashion-commerce-modernization`,
      lastModified: august6LastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url:
        `${baseUrl}/portfolio/lighting-new-york-commerce-platform`,
      lastModified: august6LastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url:
        `${baseUrl}/portfolio/friar-tux-rental-commerce`,
      lastModified: august6LastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url:
        `${baseUrl}/portfolio/caffe-borbone-international-commerce`,
      lastModified: august6LastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
