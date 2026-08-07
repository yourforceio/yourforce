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
      "YourForce Labs | Interactive Commerce & Software Experiences",

    description:
      "Explore interactive commerce experiences, engineering prototypes, and technical showcases built by YourForce.io across headless commerce, product discovery, omnichannel fulfilment, and agentic shopping.",
  },

  hero: {
    badge:
      "YourForce Labs",

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
      "Inside YourForce Labs",

    heading:
      "From engineering concepts to working experiences.",

    description:
      "YourForce Labs is where we turn architecture ideas, commerce patterns, integrations, and customer experiences into practical interactive demonstrations.",
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
        "An interactive store-pickup experience demonstrating location discovery, store-level inventory, preferred stores, pickup selection, and modern BOPIS customer journeys.",

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
        "A conversational shopping experience designed to understand customer intent, discover relevant products, evaluate availability, and guide shoppers toward the right fulfilment option.",

      technologies: [
        "AI",
        "Commerce APIs",
        "React",
      ],

      capabilities: [
        "Natural-language intent",
        "Product recommendations",
        "Inventory awareness",
        "Guided fulfilment",
      ],

      href:
        "/lab/agentic-guided-shopping",

      status:
        "available",

      icon:
        Bot,
    },
  ],

  philosophy: {
    eyebrow:
      "Why YourForce Labs",

    heading:
      "Show the engineering, not just the outcome.",

    paragraphs: [
      "Case studies demonstrate what we have delivered. YourForce Labs demonstrates how we think about architecture, customer experience, performance, integrations, and implementation.",

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
