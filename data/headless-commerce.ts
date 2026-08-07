import type { HeadlessCommerceData } from "@/types/headless-commerce";

export const headlessCommerce: HeadlessCommerceData = {
  metadata: {
    title:
        "Headless Commerce Storefront | YourForce Engineering Lab",

    description:
        "Explore an interactive headless commerce storefront prototype from YourForce.io demonstrating product discovery, product detail, cart interactions, commerce state, and responsive storefront architecture.",
    },

  lab: {
    number:
      "01",

    eyebrow:
      "Digital Commerce",

    title:
      "Headless Commerce Storefront",

    description:
      "An interactive storefront prototype demonstrating the customer journey from product discovery through product detail and cart interactions.",
  },

  storefront: {
    brand:
      "NORTH / FORM",

    announcement:
      "Engineering Lab Demo • Simulated Commerce Data",

    heading:
      "Modern essentials for everyday movement.",

    description:
      "A lightweight storefront experience demonstrating modern headless commerce patterns.",
  },

  categories: [
    "All",
    "Men",
    "Women",
    "Accessories",
  ],

  products: [
    {
      id:
        "yf-001",

      slug:
        "commuter-overshirt",

      name:
        "Commuter Overshirt",

      category:
        "Men",

      price:
        128,

      description:
        "A structured everyday layer designed around comfort, movement, and understated utility.",

      badge:
        "New",

      sizes: [
        "S",
        "M",
        "L",
        "XL",
      ],

      visual: {
        from:
          "#dbeafe",

        to:
          "#93c5fd",

        accent:
          "#1d4ed8",
      },
    },

    {
      id:
        "yf-002",

      slug:
        "essential-knit",

      name:
        "Essential Knit",

      category:
        "Women",

      price:
        96,

      description:
        "A refined lightweight knit with a minimal silhouette designed for versatile everyday wear.",

      badge:
        "Featured",

      sizes: [
        "XS",
        "S",
        "M",
        "L",
      ],

      visual: {
        from:
          "#fce7f3",

        to:
          "#f9a8d4",

        accent:
          "#be185d",
      },
    },

    {
      id:
        "yf-003",

      slug:
        "utility-trouser",

      name:
        "Utility Trouser",

      category:
        "Men",

      price:
        118,

      description:
        "Modern tailored trousers combining a clean profile with practical everyday functionality.",

      sizes: [
        "30",
        "32",
        "34",
        "36",
      ],

      visual: {
        from:
          "#e2e8f0",

        to:
          "#94a3b8",

        accent:
          "#334155",
      },
    },

    {
      id:
        "yf-004",

      slug:
        "studio-jacket",

      name:
        "Studio Jacket",

      category:
        "Women",

      price:
        168,

      description:
        "A lightweight statement layer built around clean proportions and an adaptable modern silhouette.",

      badge:
        "New",

      sizes: [
        "XS",
        "S",
        "M",
        "L",
      ],

      visual: {
        from:
          "#ede9fe",

        to:
          "#c4b5fd",

        accent:
          "#6d28d9",
      },
    },

    {
      id:
        "yf-005",

      slug:
        "everyday-tote",

      name:
        "Everyday Tote",

      category:
        "Accessories",

      price:
        74,

      description:
        "A practical everyday carry designed with a spacious interior and understated construction.",

      sizes: [
        "One Size",
      ],

      visual: {
        from:
          "#fef3c7",

        to:
          "#fcd34d",

        accent:
          "#a16207",
      },
    },

    {
      id:
        "yf-006",

      slug:
        "travel-cap",

      name:
        "Travel Cap",

      category:
        "Accessories",

      price:
        42,

      description:
        "A lightweight finishing piece designed for travel, everyday use, and uncomplicated styling.",

      sizes: [
        "One Size",
      ],

      visual: {
        from:
          "#ccfbf1",

        to:
          "#5eead4",

        accent:
          "#0f766e",
      },
    },
  ],

  architecture: {
    heading:
      "What this lab demonstrates",

    description:
      "The experience uses simulated product data while demonstrating frontend patterns that can be connected to real commerce APIs and platforms.",

    items: [
      {
        title:
          "Composable Storefront",

        description:
          "A component-driven storefront structure designed to keep presentation independent from the underlying commerce platform.",
      },

      {
        title:
          "Commerce State",

        description:
          "Product discovery, variant selection, cart state, quantities, and calculated totals are managed interactively in the storefront.",
      },

      {
        title:
          "Responsive UX",

        description:
          "The journey is designed to remain usable across desktop, tablet, and mobile experiences.",
      },

      {
        title:
          "API-Ready Architecture",

        description:
          "Mock data can later be replaced with SCAPI, Shopify Storefront API, Adobe Commerce APIs, or another commerce service.",
      },
    ],
  },
};
