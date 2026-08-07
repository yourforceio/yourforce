import {
  Bot,
  MapPinned,
  Search,
  ShoppingBag,
} from "lucide-react";

import type { LabData } from "@/types/lab";

export const lab: LabData = {
  metadata: {
    title:
      "YourForce Engineering Lab | Interactive Commerce & Software Experiences",

    description:
      "Explore interactive commerce experiences and engineering prototypes built by YourForce.io across headless commerce, product discovery, omnichannel fulfilment, and agentic guided shopping.",
  },

  hero: {
    badge:
      "YourForce Engineering Lab",

    heading: {
      primary:
        "Ideas engineered.",

      accent:
        "Built to be experienced.",
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
    eyebrow:
      "Inside The Lab",

    heading:
      "From engineering concepts to working experiences.",

    description:
      "The Engineering Lab is where we turn architecture ideas, commerce patterns, integrations, and customer experiences into practical interactive demonstrations.",
  },

  items: [
    {
      slug:
        "headless-commerce",

      number:
        "01",

      eyebrow:
        "Digital Commerce",

      title:
        "Headless Commerce Storefront",

      description:
        "A modern commerce journey demonstrating product discovery, product detail, cart interactions, responsive UX, and headless storefront architecture.",

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
      ],

      capabilities: [
        "Product listing",
        "Product detail",
        "Cart interactions",
        "Responsive storefront",
      ],

      preview: {
        src:
          "/images/lab/headless-commerce-preview.png",

        alt:
          "Preview of the interactive Headless Commerce Storefront lab",
      },

      duration:
        "~2 min interactive demo",

      added:
        "Added Aug 2026",

      href:
        "/lab/headless-commerce",

      status:
        "available",

      icon:
        ShoppingBag,

      featured:
        true,
    },

    {
      slug:
        "product-discovery",

      number:
        "02",

      eyebrow:
        "Search & Discovery",

      title:
        "Smart Product Discovery",

      description:
        "An interactive product discovery experience exploring instant search, filtering, sorting, recommendations, and responsive commerce UX patterns.",

      technologies: [
        "React",
        "Search APIs",
        "TypeScript",
      ],

      capabilities: [
        "Instant search",
        "Faceted filtering",
        "Dynamic sorting",
        "Recommendations",
      ],

      preview: {
        src:
          "/images/lab/product-discovery-preview.png",

        alt:
          "Preview of the interactive Smart Product Discovery lab",
      },

      duration:
        "~2 min interactive demo",

      added:
        "Added Aug 2026",

      href:
        "/lab/product-discovery",

      status:
        "available",

      icon:
        Search,
    },

    {
      slug:
        "omnichannel-fulfilment",

      number:
        "03",

      eyebrow:
        "Store & Fulfilment",

      title:
        "Omnichannel Fulfilment",

      description:
        "A store pickup and fulfilment experience demonstrating location discovery, inventory availability, preferred stores, and fulfilment selection.",

      technologies: [
        "Next.js",
        "Commerce APIs",
        "React",
      ],

      capabilities: [
        "Store discovery",
        "Inventory availability",
        "Pickup selection",
        "Preferred store",
      ],

      preview: {
        src:
          "/images/lab/omnichannel-fulfilment-preview.png",

        alt:
          "Preview of the interactive Omnichannel Fulfilment lab",
      },

      duration:
        "~2 min interactive demo",

      added:
        "Added Aug 2026",

      href:
        "/lab/omnichannel-fulfilment",

      status:
        "available",

      icon:
        MapPinned,
    },

    {
      slug:
        "agentic-guided-shopping",

      number:
        "04",

      eyebrow:
        "Conversational Commerce",

      title:
        "Agentic Guided Shopping",

      description:
        "A conversational shopping experience demonstrating customer intent, product recommendations, inventory awareness, and guided fulfilment.",

      technologies: [
        "Agentic UX",
        "Commerce APIs",
        "React",
      ],

      capabilities: [
        "Natural-language intent",
        "Product recommendations",
        "Inventory awareness",
        "Guided fulfilment",
      ],

      preview: {
        src:
          "/images/lab/agentic-guided-shopping-preview.png",

        alt:
          "Preview of the interactive Agentic Guided Shopping lab",
      },

      duration:
        "~2 min interactive demo",

      added:
        "Added Aug 2026",

      href:
        "/lab/agentic-guided-shopping",

      status:
        "available",

      icon:
        Bot,
    },
  ],

  roadmap: {
    eyebrow:
      "The Lab Continues",

    heading:
      "More engineering experiences are coming.",

    description:
      "We continue exploring practical ideas across digital commerce, AI-assisted experiences, integrations, performance, and modern software architecture.",
  },

  philosophy: {
    eyebrow:
      "Why The Engineering Lab",

    heading:
      "Show the engineering, not just the outcome.",

    paragraphs: [
      "Case studies demonstrate what we have delivered. The Engineering Lab demonstrates how we think about architecture, customer experience, performance, integrations, and implementation.",

      "Each experience focuses on a practical engineering challenge and uses simulated data unless a real platform or external integration is explicitly identified.",
    ],
  },

  cta: {
    heading:
      "Have an engineering challenge worth exploring?",

    description:
      "YourForce.io helps businesses design, modernize, and engineer scalable digital commerce platforms, enterprise software, integrations, and modern customer experiences.",

    primary: {
      label:
        "Start Your Project",

      href:
        "/contact",
    },

    secondary: {
      label:
        "Explore Our Work",

      href:
        "/portfolio",
    },
  },
};
