import type { Services } from "@/types/service";

/** Icon keys for the dark "Specialized Operations" cards. */
export type OperationIcon =
  | "truck"
  | "billing"
  | "dataEntry"
  | "insurance";

export const services: Services = {
  badge: "Commerce & PHP Engineering",

  heading:
    "Build, Modernize, Secure, and Scale Digital Commerce",

  description:
    "YourForce delivers commerce platform engineering, PHP upgrades and security, headless storefronts, and enterprise integrations, with direct senior engineering involvement.",

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

/** Chips shown under the commerce description (mirrors the card's own copy). */
export const commerceHighlights = [
  "Design & development",
  "Customization",
  "Long-term support",
] as const;

/**
 * PHP engineering band, shown directly under the featured commerce card.
 * Magento and WooCommerce run on PHP, so this belongs with commerce,
 * not with the back-office service desks.
 */
export const phpEngineering = {
  eyebrow: "PHP Engineering",

  title: "PHP Upgrades & Security",

  description:
    "Magento and WooCommerce run on PHP, and so do many custom business applications. We upgrade legacy PHP to supported versions, close security gaps, and rescue fragile code so your platform stays fast, compatible, and protected.",

  features: [
    "PHP version upgrades",
    "Security patching & audits",
    "Magento 2 upgrades",
    "WooCommerce hardening",
    "Custom PHP development",
    "Legacy code rescue",
  ],

  healthCheck: {
    eyebrow: "Free PHP Health Check",

    title: "Is your PHP stack safe and supported?",

    description:
      "Tell us your site and PHP version. We'll review it and send back a clear picture of where you stand.",

    items: [
      "PHP version and support-status review",
      "Known-vulnerability and plugin check",
      "Compatibility report for upgrades",
      "Prioritized upgrade roadmap",
    ],

    ctaLabel: "Request Your Free Health Check",

    href: "/contact?service=php",
  },

  learnMoreLabel: "Learn more about PHP services",

  learnMoreHref: "/services/php",
} as const satisfies {
  eyebrow: string;
  title: string;
  description: string;
  features: readonly string[];
  learnMoreLabel: string;
  learnMoreHref: string;
  healthCheck: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly string[];
    ctaLabel: string;
    href: string;
  };
};

export const specializedOperations = {
  badge: "Specialized Operations Services",

  heading:
    "Focused Support for Businesses That Keep Moving",

  description:
    "Alongside our engineering practice, YourForce runs dedicated back-office service desks for US carriers, healthcare practices, and and growing businesses.",

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
        "Freight invoicing",
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

    {
      eyebrow: "Back-Office Operations",

      title: "Data Entry & Document Processing",

      description:
        "Accurate data entry, record cleanup, and document digitization for US businesses, with a second-person quality review on every batch.",

      icon: "dataEntry",

      features: [
        "Invoice and form entry",
        "Data cleanup",
        "Document digitization",
        "Quality review",
      ],

      href: "https://backoffice.yourforce.io/data-entry/",

      ctaLabel: "Request a Pilot",
    },

    {
      eyebrow: "Insurance Operations",

      title: "Insurance Document Support",

      description:
        "Administrative support for certificates of insurance, carrier onboarding packets, and policy or claims paperwork. Document handling only, with no coverage advice or policy sales.",

      icon: "insurance",

      features: [
        "COI tracking",
        "Renewal reminders",
        "Onboarding packets",
        "Document indexing",
      ],

      href: "https://backoffice.yourforce.io/insurance-documents/",

      ctaLabel: "Request a Pilot",
    },
  ],
} as const satisfies {
  badge: string;
  heading: string;
  description: string;
  items: readonly {
    eyebrow: string;
    title: string;
    description: string;
    icon: OperationIcon;
    features: readonly string[];
    href: string;
    ctaLabel: string;
  }[];
};
