import type { Services } from "@/types/service";

export const services: Services = {
  badge: "⚡ Commerce & Software Services",

  heading:
    "Build, Modernize, and Scale Digital Commerce",

  description:
    "YourForce delivers platform engineering, headless storefronts, commerce modernization, enterprise integrations, and custom software across leading commerce technologies.",

  items: [
    {
      eyebrow: "Core Capability",

      title: "Commerce Platform Engineering",

      description:
        "Design, development, customization, and long-term support for scalable commerce platforms across Salesforce Commerce Cloud, Adobe Commerce, Shopify, and WooCommerce.",

      icon: "commercePlatform",

      stack: [
        {
          name: "Salesforce Commerce Cloud",
        },
        {
          name: "Adobe Commerce (Magento)",
        },
        {
          name: "Shopify Plus",
        },
        {
          name: "WooCommerce",
        },
      ],

      href: "/contact",

      ctaLabel: "Discuss Your Commerce Platform",

      featured: true,
    },

    {
      eyebrow: "Modern Storefronts",

      title: "Headless Commerce & Storefronts",

      description:
        "Fast, flexible storefront experiences built with modern frontend technologies and connected to commerce platforms through secure APIs.",

      icon: "headlessStorefront",

      stack: [
        {
          name: "Next.js",
        },
        {
          name: "React",
        },
        {
          name: "PWA Kit",
        },
        {
          name: "Commerce APIs",
        },
      ],

      href: "/contact",

      ctaLabel: "Build a Headless Storefront",
    },

    {
      eyebrow: "Platform Evolution",

      title: "Migration & Modernization",

      description:
        "Replatform legacy commerce systems, upgrade storefront architecture, and introduce modern capabilities through practical phased transformation.",

      icon: "modernization",

      stack: [
        {
          name: "Replatforming",
        },
        {
          name: "Platform Upgrades",
        },
        {
          name: "Hybrid Commerce",
        },
        {
          name: "Performance",
        },
      ],

      href: "/contact",

      ctaLabel: "Plan Your Modernization",
    },

    {
      eyebrow: "Connected Commerce",

      title: "Integrations & Automation",

      description:
        "Connect commerce platforms with payments, order management, search, tax, marketing, shipping, analytics, and other business-critical systems.",

      icon: "integrations",

      stack: [
        {
          name: "Payments",
        },
        {
          name: "OMS & ERP",
        },
        {
          name: "CRM & Marketing",
        },
        {
          name: "APIs & Webhooks",
        },
      ],

      href: "/contact",

      ctaLabel: "Discuss Your Integrations",
    },

    {
      eyebrow: "Beyond Commerce",

      title: "Enterprise Software & Consulting",

      description:
        "Custom business applications, internal portals, workflow automation, architecture reviews, technical roadmaps, and delivery guidance.",

      icon: "enterpriseSoftware",

      stack: [
        {
          name: "Custom Portals",
        },
        {
          name: "Workflow Automation",
        },
        {
          name: "Solution Architecture",
        },
        {
          name: "Technical Consulting",
        },
      ],

      href: "/contact",

      ctaLabel: "Explore a Custom Solution",
    },
  ],
};

export const specializedOperations = {
  badge: "Specialized Operations Services",

  heading:
    "Focused Support for Businesses That Keep Moving",

  description:
    "Alongside our engineering practice, YourForce operates dedicated service desks for US transportation carriers and independent healthcare practices.",

  items: [
    {
      eyebrow: "Transportation Operations",

      title: "Trucking Dispatch Services",

      description:
        "Dedicated dispatch support for owner-operators and small carriers, including load sourcing, rate coordination, route support, and dispatch paperwork.",

      icon: "truck",

      features: [
        "24/7 dispatch desk",
        "Load sourcing",
        "Rate coordination",
        "Paperwork support",
      ],

      href: "https://trucking.yourforce.io/",

      ctaLabel: "Explore Dispatch Services",
    },

    {
      eyebrow: "Healthcare Operations",

      title: "Medical Billing & Coding",

      description:
        "Claims submission, coding support, denial follow-up, AR management, and privacy-conscious billing workflows for solo practitioners and small clinics.",

      icon: "billing",

      features: [
        "Claims and coding",
        "Denial follow-up",
        "AR management",
        "Practice reporting",
      ],

      href: "https://billing.yourforce.io/",

      ctaLabel: "Explore Billing Services",
    },
  ],
} as const;
