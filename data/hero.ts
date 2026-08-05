import type { Hero } from "@/types/hero";

export const hero: Hero = {
  badge: "⚡ Multi-Platform Commerce Engineering",

  heading: {
    primary: "Digital Commerce.",
    accent: "Engineered to Scale.",
  },

  description:
    "YourForce builds scalable commerce platforms, headless storefronts, enterprise applications, and integrations across Salesforce Commerce Cloud, Adobe Commerce, Shopify, and WooCommerce.",

  actions: [
    {
      label: "Start Your Project",
      href: "/contact",
      variant: "primary",
    },
    {
      label: "View Our Work",
      href: "/portfolio",
      variant: "secondary",
    },
  ],

  technologies: {
    title: "Commerce Expertise",

    items: [
      {
        name: "Salesforce Commerce Cloud",
      },
      {
        name: "Adobe Commerce (Magento)",
      },
      {
        name: "Shopify",
      },
      {
        name: "WooCommerce",
      },
      {
        name: "Headless Commerce",
      },
      {
        name: "Next.js",
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
      label: "Years Enterprise Commerce",
    },
    {
      value: "4",
      label: "Commerce Platforms Supported",
    },
  ],

  visual: {
    eyebrow: "Commerce Modernization",

    title: "Flexible Commerce Architecture",

    description:
      "Modern storefronts, integrations, migrations, and scalable commerce experiences.",

    image:
      "/images/projects/enterprise-fashion-commerce.jpg",

    alt:
      "Modern digital commerce storefront displayed across desktop and mobile devices",
  },
};
