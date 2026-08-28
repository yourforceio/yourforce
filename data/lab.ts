import {
  MapPinned,
  Search,
  Shirt,
  ShoppingBag,
  SlidersHorizontal,
  Store,
} from "lucide-react";

import type { LabData } from "@/types/lab";

export const lab: LabData = {
  metadata: {
    title:
      "YourForce Engineering Lab | Interactive Commerce & Software Experiences",

    description:
      "Explore interactive commerce experiences and engineering prototypes built by YourForce.io across headless commerce, product discovery, omnichannel fulfilment, and conversational product finding.",
  },

  hero: {
    badge: "YourForce Engineering Lab",

    heading: {
      primary: "Ideas engineered.",

      accent: "Built to be experienced.",
    },

    description:
      "Explore interactive commerce experiences, engineering prototypes, and technical showcases built by YourForce.io to demonstrate how we approach modern software and digital commerce challenges.",

    tags: [
      "Interactive",
      "Engineering-led",
      "Commerce focused",
      "Built by YourForce.io",
    ],
  },

  introduction: {
    eyebrow: "Inside The Lab",

    heading: "From engineering concepts to working experiences.",

    description:
      "The Engineering Lab is where we turn architecture ideas, commerce patterns, integrations, and customer experiences into practical interactive demonstrations.",
  },

  items: [
    {
      slug: "headless-commerce",

      number: "01",

      eyebrow: "Digital Commerce",

      title: "Headless Commerce Storefront",

      description:
        "A modern commerce journey demonstrating product discovery, product detail, cart interactions, responsive UX, and headless storefront architecture.",

      categories: ["sfcc"],

      technologies: ["Next.js", "React", "TypeScript"],

      capabilities: [
        "Product listing",
        "Product detail",
        "Cart interactions",
        "Responsive storefront",
      ],

      preview: {
        src: "/images/lab/headless-commerce-preview.png",

        alt: "Preview of the interactive Headless Commerce Storefront lab",
      },

      duration: "~2 min interactive demo",

      added: "Added Aug 2026",

      href: "/lab/headless-commerce",

      status: "available",

      icon: ShoppingBag,

    },

    {
      slug: "product-discovery",

      number: "02",

      eyebrow: "Search & Discovery",

      title: "Smart Product Discovery",

      description:
        "An interactive product discovery experience exploring instant search, filtering, sorting, recommendations, and responsive commerce UX patterns.",

      categories: ["sfcc"],

      technologies: ["React", "Search APIs", "TypeScript"],

      capabilities: [
        "Instant search",
        "Faceted filtering",
        "Dynamic sorting",
        "Recommendations",
      ],

      preview: {
        src: "/images/lab/product-discovery-preview.png",

        alt: "Preview of the interactive Smart Product Discovery lab",
      },

      duration: "~2 min interactive demo",

      added: "Added Aug 2026",

      href: "/lab/product-discovery",

      status: "available",

      icon: Search,
    },

    {
      slug: "omnichannel-fulfilment",

      number: "03",

      eyebrow: "Store & Fulfilment",

      title: "Omnichannel Fulfilment",

      description:
        "A store pickup and fulfilment experience demonstrating location discovery, inventory availability, preferred stores, and fulfilment selection.",

      categories: ["sfcc"],

      technologies: ["Next.js", "Commerce APIs", "React"],

      capabilities: [
        "Store discovery",
        "Inventory availability",
        "Pickup selection",
        "Preferred store",
      ],

      preview: {
        src: "/images/lab/omnichannel-fulfilment-preview.png",

        alt: "Preview of the interactive Omnichannel Fulfilment lab",
      },

      duration: "~2 min interactive demo",

      added: "Added Aug 2026",

      href: "/lab/omnichannel-fulfilment",

      status: "available",

      icon: MapPinned,
    },

    {
      slug: "agentic-guided-shopping",

      number: "04",

      eyebrow: "Conversational Commerce",

      title: "Conversational Product Finder",

      description:
        "A transparent, rule-based commerce prototype that turns shopper requests into catalog matches, inventory context, and guided fulfilment.",

      categories: ["ai-commerce"],

      technologies: ["Rule-Based Logic", "Commerce Data", "React"],

      capabilities: [
        "Request interpretation",
        "Transparent matching",
        "Inventory context",
        "Guided fulfilment",
      ],

      preview: {
        src: "/images/lab/agentic-guided-shopping-preview.png",

        alt: "Preview of the interactive Conversational Product Finder lab",
      },

      duration: "~2 min interactive demo",

      added: "Added Aug 2026",

      href: "/lab/agentic-guided-shopping",

      previewLabel: "Rule-Based Demo",

      status: "available",

      icon: SlidersHorizontal,
    },

    {
      slug: "virtual-try-on",

      number: "05",

      eyebrow: "AI Commerce Experience",

      title: "Virtual Try-On",

      description:
        "An end-customer apparel experience that lets shoppers choose a product, upload a selfie, and preview the garment composited onto their photo.",

      categories: ["ai-commerce"],

      technologies: ["Visual AI", "Image Processing", "Commerce UX"],

      capabilities: [
        "Product selection",
        "Selfie upload",
        "Garment composition",
        "Generated try-on preview",
      ],

      preview: {
        src: "/images/lab/virtual-try-on-preview.png",

        alt: "Preview of the YourForce Virtual Try-On experience",
      },

      duration: "~2 min live demo",

      added: "Added Aug 2026",

      href: "https://tryfit.yourforce.io/demo",

      external: true,

      ctaLabel: "Experience Demo",

      previewLabel: "Live AI Demo",

      highlight: true,

      status: "available",

      icon: Shirt,

      featured: true,

      featuredRank: 2,
    },

    {
      slug: "shopify-commerce-tools",

      number: "06",

      eyebrow: "Shopify Commerce",

      title: "Shopify Commerce Experience Lab",

      description:
        "A production-connected Shopify demonstration covering variant-level policies, back-in-stock demand capture, and an enhanced cart drawer, with low-stock automation in progress.",

      categories: ["shopify"],

      technologies: ["Shopify", "React Router", "Theme Extensions"],

      capabilities: [
        "Variant Final Sale",
        "Rain Check notifications",
        "Enhanced cart drawer",
        "Low-stock automation (next)",
      ],

      preview: {
        src: "/images/lab/shopify-commerce-tools-preview.png",

        alt: "Preview of the YourForce Shopify Commerce Experience Lab",
      },

      duration: "~5 min guided demo",

      added: "Added Aug 2026",

      href: "https://yourforce-plus-lab.myshopify.com/products/the-complete-snowboard",

      external: true,

      ctaLabel: "Open Live Store",

      status: "available",

      icon: Store,

      featured: true,

      featuredRank: 1,
    },
  ],

  upcomingShopify: [
    {
      title: "Low-Stock Replenishment Automation",
      description:
        "Use Shopify Flow to detect low variant inventory, notify operations, and create a replenishment task.",
      statusLabel: "In progress",
    },
    {
      title: "AI Shopping Assistant",
      description:
        "Guide shoppers through product discovery using conversational recommendations grounded in live catalog data.",
      statusLabel: "Planned",
    },
    {
      title: "Checkout Rules with Shopify Functions",
      description:
        "Demonstrate server-side checkout validation, promotion logic, and configurable commerce rules.",
      statusLabel: "Planned",
    },
  ],

  roadmap: {
    eyebrow: "The Lab Continues",

    heading: "More engineering experiences are coming.",

    description:
      "We continue exploring practical ideas across digital commerce, AI-assisted experiences, integrations, performance, and modern software architecture.",
  },

  philosophy: {
    eyebrow: "Why The Engineering Lab",

    heading: "Show the engineering, not just the outcome.",

    paragraphs: [
      "Case studies demonstrate what we have delivered. The Engineering Lab demonstrates how we think about architecture, customer experience, performance, integrations, and implementation.",

      "Each experience focuses on a practical engineering challenge and uses simulated data unless a real platform or external integration is explicitly identified.",
    ],
  },

  cta: {
    heading: "Have an engineering challenge worth exploring?",

    description:
      "YourForce.io helps businesses design, modernize, and engineer scalable digital commerce platforms, enterprise software, integrations, and modern customer experiences.",

    primary: {
      label: "Start Your Project",

      href: "/contact",
    },

    secondary: {
      label: "Explore Our Work",

      href: "/portfolio",
    },
  },
};
