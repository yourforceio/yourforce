import type { AgenticGuidedShoppingData } from "@/types/agentic-guided-shopping";

export const agenticGuidedShopping: AgenticGuidedShoppingData = {
  metadata: {
    title:
      "Agentic Guided Shopping | YourForce Engineering Lab",

    description:
      "Explore an interactive guided shopping prototype from YourForce.io demonstrating conversational product discovery, intent understanding, recommendations, and inventory-aware fulfilment.",
  },

  lab: {
    number:
      "04",

    eyebrow:
      "Conversational Commerce",

    title:
      "Agentic Guided Shopping",

    description:
      "An interactive conversational commerce experience demonstrating customer intent, product recommendations, contextual refinement, inventory awareness, and guided fulfilment.",
  },

  assistant: {
    name:
      "NORTH / FORM Shopping Assistant",

    introduction:
      "Tell me what you're looking for. I can help narrow products by style, use case, attributes, budget, and store availability.",

    placeholder:
      "Ask for a product, style, budget, or pickup option...",

    disclaimer:
      "Simulated agentic experience using local catalog logic. No live AI model, customer data, or external commerce service is connected.",

    prompts: [
      {
        label:
          "Travel jacket under $150",

        message:
          "I'm looking for a lightweight jacket under $150 for travelling.",
      },

      {
        label:
          "Everyday style under $100",

        message:
          "Show me something versatile for everyday use under $100.",
      },

      {
        label:
          "Travel accessories",

        message:
          "I need a practical accessory for travelling.",
      },

      {
        label:
          "Available near me",

        message:
          "Which recommended products are available for pickup near me?",
      },
    ],
  },

  products: [
    {
      id:
        "agent-001",

      slug:
        "commuter-overshirt",

      name:
        "Commuter Overshirt",

      category:
        "Men",

      price:
        128,

      description:
        "A structured lightweight layer designed for travel, commuting, and everyday movement.",

      attributes: [
        "Lightweight",
        "Layering",
        "Cotton",
        "Navy",
      ],

      useCases: [
        "Travel",
        "Everyday",
        "Commuting",
      ],

      keywords: [
        "jacket",
        "overshirt",
        "outerwear",
        "lightweight",
        "travel",
        "commuter",
        "men",
      ],

      visual: {
        from:
          "#dbeafe",

        to:
          "#93c5fd",

        accent:
          "#1d4ed8",
      },

      pickup: {
        store:
          "SoHo",

        distance:
          1.2,

        quantity:
          8,
      },
    },

    {
      id:
        "agent-002",

      slug:
        "essential-knit",

      name:
        "Essential Knit",

      category:
        "Women",

      price:
        96,

      description:
        "A lightweight everyday knit designed for versatile layering and comfortable daily wear.",

      attributes: [
        "Lightweight",
        "Soft",
        "Cotton Blend",
        "Cream",
      ],

      useCases: [
        "Everyday",
        "Layering",
        "Travel",
      ],

      keywords: [
        "knit",
        "sweater",
        "women",
        "lightweight",
        "everyday",
        "travel",
      ],

      visual: {
        from:
          "#fce7f3",

        to:
          "#f9a8d4",

        accent:
          "#be185d",
      },

      pickup: {
        store:
          "Fifth Avenue",

        distance:
          2.8,

        quantity:
          7,
      },
    },

    {
      id:
        "agent-003",

      slug:
        "studio-jacket",

      name:
        "Studio Jacket",

      category:
        "Women",

      price:
        168,

      description:
        "A lightweight statement jacket with modern proportions and premium technical construction.",

      attributes: [
        "Lightweight",
        "Premium",
        "Technical Cotton",
        "Sand",
      ],

      useCases: [
        "Everyday",
        "Travel",
        "Smart Casual",
      ],

      keywords: [
        "jacket",
        "outerwear",
        "women",
        "lightweight",
        "premium",
        "travel",
      ],

      visual: {
        from:
          "#ede9fe",

        to:
          "#c4b5fd",

        accent:
          "#6d28d9",
      },

      pickup: {
        store:
          "Williamsburg",

        distance:
          4.6,

        quantity:
          6,
      },
    },

    {
      id:
        "agent-004",

      slug:
        "everyday-tote",

      name:
        "Everyday Tote",

      category:
        "Accessories",

      price:
        74,

      description:
        "A spacious canvas tote designed for everyday essentials, commuting, and short trips.",

      attributes: [
        "Canvas",
        "Spacious",
        "Natural",
        "Lightweight",
      ],

      useCases: [
        "Travel",
        "Everyday",
        "Commuting",
      ],

      keywords: [
        "bag",
        "tote",
        "accessory",
        "travel",
        "everyday",
        "canvas",
      ],

      visual: {
        from:
          "#fef3c7",

        to:
          "#fcd34d",

        accent:
          "#a16207",
      },

      pickup: {
        store:
          "SoHo",

        distance:
          1.2,

        quantity:
          5,
      },
    },

    {
      id:
        "agent-005",

      slug:
        "travel-cap",

      name:
        "Travel Cap",

      category:
        "Accessories",

      price:
        42,

      description:
        "A lightweight everyday cap designed for travel, outdoor use, and uncomplicated styling.",

      attributes: [
        "Lightweight",
        "Cotton",
        "Olive",
        "Packable",
      ],

      useCases: [
        "Travel",
        "Everyday",
        "Outdoor",
      ],

      keywords: [
        "cap",
        "hat",
        "travel",
        "accessory",
        "lightweight",
        "outdoor",
      ],

      visual: {
        from:
          "#ccfbf1",

        to:
          "#5eead4",

        accent:
          "#0f766e",
      },

      pickup: {
        store:
          "Fifth Avenue",

        distance:
          2.8,

        quantity:
          3,
      },
    },

    {
      id:
        "agent-006",

      slug:
        "minimal-crossbody",

      name:
        "Minimal Crossbody",

      category:
        "Accessories",

      price:
        88,

      description:
        "A compact crossbody designed to keep travel and everyday essentials secure and accessible.",

      attributes: [
        "Compact",
        "Recycled Nylon",
        "Black",
        "Hands-Free",
      ],

      useCases: [
        "Travel",
        "Everyday",
        "Commuting",
      ],

      keywords: [
        "bag",
        "crossbody",
        "travel",
        "accessory",
        "compact",
        "black",
      ],

      visual: {
        from:
          "#e5e7eb",

        to:
          "#9ca3af",

        accent:
          "#111827",
      },

      pickup: {
        store:
          "Jersey City",

        distance:
          6.9,

        quantity:
          4,
      },
    },
  ],

  architecture: {
    heading:
      "What this lab demonstrates",

    description:
      "The prototype uses deterministic local logic and simulated commerce data to demonstrate how conversational shopping could orchestrate catalog discovery, recommendations, inventory, and fulfilment services.",

    items: [
      {
        title:
          "Intent Understanding",

        description:
          "Natural-language requests are interpreted into product attributes, categories, use cases, and budget constraints.",
      },

      {
        title:
          "Guided Discovery",

        description:
          "Catalog signals are evaluated to recommend products relevant to the shopper's expressed needs.",
      },

      {
        title:
          "Commerce Context",

        description:
          "Recommendations can incorporate pricing, product attributes, store availability, and fulfilment context.",
      },

      {
        title:
          "Agent-Ready Architecture",

        description:
          "The experience can later be connected to a real AI agent, commerce APIs, search services, inventory systems, and Salesforce Agentforce.",
      },
    ],
  },
};
