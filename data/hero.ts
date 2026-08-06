import type { Hero } from "@/types/hero";

export const hero: Hero = {
  badge:
    "Global Engineering • Remote-First Delivery",

  heading: {
    primary:
      "Enterprise Software & Digital Commerce.",

    accent:
      "Engineered for Growth.",
  },

  description:
    "We build and modernize scalable commerce platforms, enterprise software, headless storefronts, and integrations for businesses worldwide.",

  actions: [
    {
      label: "Start Your Project",
      href: "/contact",
      variant: "primary",
    },
    {
      label: "Explore Our Work",
      href: "/portfolio",
      variant: "secondary",
    },
  ],

  technologies: {
    title: "Platforms & Technologies",

    items: [
      {
        name: "Salesforce Commerce Cloud",
      },
      {
        name: "Adobe Commerce",
      },
      {
        name: "Shopify",
      },
      {
        name: "WooCommerce",
      },
      {
        name: "Next.js",
      },
      {
        name: "React",
      },
    ],
  },

  stats: [
    {
      value: "15+",
      label: "Years Software Engineering",
    },
    {
      value: "8+",
      label: "Years Digital Commerce",
    },
    {
      value: "4",
      label: "Core Commerce Platforms",
    },
  ],

  visual: {
    eyebrow:
      "Commerce Platform Modernization",

    title:
      "Modern Commerce Experiences",

    description:
      "Headless storefronts, integrations, migrations, and scalable architecture built for growth.",

    image:
      "/images/projects/enterprise-fashion-commerce.jpg",

    alt:
      "Modern digital commerce storefront displayed across desktop and mobile devices",
  },
};
