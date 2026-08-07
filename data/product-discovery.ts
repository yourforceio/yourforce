import type { ProductDiscoveryData } from "@/types/product-discovery";

export const productDiscovery: ProductDiscoveryData = {
  metadata: {
    title:
        "Smart Product Discovery | YourForce Engineering Lab",

    description:
        "Explore an interactive product discovery prototype from YourForce.io demonstrating instant search, faceted filtering, sorting, relevance, suggestions, and modern commerce discovery patterns.",
    },

  lab: {
    number:
      "02",

    eyebrow:
      "Search & Discovery",

    title:
      "Smart Product Discovery",

    description:
      "An interactive commerce search experience demonstrating instant results, faceted navigation, relevance, sorting, suggestions, and zero-result recovery.",
  },

  search: {
    placeholder:
      "Search products, categories, materials...",

    popularSearches: [
      "Jackets",
      "Everyday essentials",
      "Accessories",
      "Under $100",
    ],

    suggestions: [
      {
        label:
          "Jackets & outerwear",
        query:
          "jacket",
      },
      {
        label:
          "Everyday essentials",
        query:
          "everyday",
      },
      {
        label:
          "Travel accessories",
        query:
          "travel",
      },
      {
        label:
          "Lightweight styles",
        query:
          "lightweight",
      },
    ],
  },

  products: [
    {
      id:
        "pd-001",

      slug:
        "commuter-overshirt",

      name:
        "Commuter Overshirt",

      category:
        "Men",

      price:
        128,

      description:
        "A structured everyday layer designed for comfort, movement, and understated utility.",

      badge:
        "New",

      color:
        "Navy",

      material:
        "Cotton",

      tags: [
        "Outerwear",
        "Everyday",
        "Lightweight",
      ],

      keywords: [
        "shirt",
        "overshirt",
        "jacket",
        "commuter",
        "navy",
        "cotton",
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
    },

    {
      id:
        "pd-002",

      slug:
        "essential-knit",

      name:
        "Essential Knit",

      category:
        "Women",

      price:
        96,

      description:
        "A refined lightweight knit with a minimal silhouette for versatile everyday wear.",

      badge:
        "Featured",

      color:
        "Cream",

      material:
        "Cotton Blend",

      tags: [
        "Knitwear",
        "Everyday",
        "Lightweight",
      ],

      keywords: [
        "knit",
        "sweater",
        "cream",
        "women",
        "lightweight",
        "everyday",
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
        "pd-003",

      slug:
        "utility-trouser",

      name:
        "Utility Trouser",

      category:
        "Men",

      price:
        118,

      description:
        "Modern tailored trousers combining a clean profile with practical functionality.",

      color:
        "Stone",

      material:
        "Cotton Twill",

      tags: [
        "Bottoms",
        "Workwear",
        "Everyday",
      ],

      keywords: [
        "trouser",
        "pants",
        "utility",
        "stone",
        "men",
        "cotton",
        "workwear",
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
        "pd-004",

      slug:
        "studio-jacket",

      name:
        "Studio Jacket",

      category:
        "Women",

      price:
        168,

      description:
        "A lightweight statement layer built around clean proportions and modern structure.",

      badge:
        "New",

      color:
        "Sand",

      material:
        "Technical Cotton",

      tags: [
        "Outerwear",
        "Lightweight",
        "Premium",
      ],

      keywords: [
        "jacket",
        "outerwear",
        "sand",
        "women",
        "studio",
        "lightweight",
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
        "pd-005",

      slug:
        "everyday-tote",

      name:
        "Everyday Tote",

      category:
        "Accessories",

      price:
        74,

      description:
        "A spacious everyday carry with understated construction and practical proportions.",

      color:
        "Natural",

      material:
        "Canvas",

      tags: [
        "Bags",
        "Everyday",
        "Travel",
      ],

      keywords: [
        "bag",
        "tote",
        "canvas",
        "natural",
        "accessories",
        "travel",
        "everyday",
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
        "pd-006",

      slug:
        "travel-cap",

      name:
        "Travel Cap",

      category:
        "Accessories",

      price:
        42,

      description:
        "A lightweight finishing piece designed for travel and uncomplicated everyday styling.",

      color:
        "Olive",

      material:
        "Cotton",

      tags: [
        "Headwear",
        "Travel",
        "Lightweight",
      ],

      keywords: [
        "cap",
        "hat",
        "olive",
        "travel",
        "accessories",
        "cotton",
        "lightweight",
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

    {
      id:
        "pd-007",

      slug:
        "weekend-shirt",

      name:
        "Weekend Shirt",

      category:
        "Men",

      price:
        82,

      description:
        "A relaxed shirt designed for easy layering and casual everyday wear.",

      color:
        "White",

      material:
        "Linen Blend",

      tags: [
        "Shirts",
        "Everyday",
        "Lightweight",
      ],

      keywords: [
        "shirt",
        "linen",
        "white",
        "weekend",
        "men",
        "lightweight",
      ],

      visual: {
        from:
          "#f8fafc",

        to:
          "#cbd5e1",

        accent:
          "#475569",
      },
    },

    {
      id:
        "pd-008",

      slug:
        "minimal-crossbody",

      name:
        "Minimal Crossbody",

      category:
        "Accessories",

      price:
        88,

      description:
        "A compact crossbody bag created for travel, movement, and everyday essentials.",

      color:
        "Black",

      material:
        "Recycled Nylon",

      tags: [
        "Bags",
        "Travel",
        "Everyday",
      ],

      keywords: [
        "bag",
        "crossbody",
        "black",
        "nylon",
        "travel",
        "accessories",
        "everyday",
      ],

      visual: {
        from:
          "#e5e7eb",

        to:
          "#9ca3af",

        accent:
          "#111827",
      },
    },
  ],

  architecture: {
    heading:
      "What this lab demonstrates",

    description:
      "The prototype uses simulated catalog data to demonstrate search and discovery patterns that can be connected to dedicated search platforms or commerce APIs.",

    items: [
      {
        title:
          "Instant Discovery",

        description:
          "Results update immediately as shoppers search, filter, and change discovery criteria.",
      },

      {
        title:
          "Faceted Navigation",

        description:
          "Category, price, and product attributes can be combined while maintaining clear active-filter state.",
      },

      {
        title:
          "Relevance Patterns",

        description:
          "Search terms are matched across product names, categories, tags, attributes, and keywords.",
      },

      {
        title:
          "Search API Ready",

        description:
          "The frontend interaction model can be adapted to Algolia, Elasticsearch, Commerce Search, SCAPI, or another search service.",
      },
    ],
  },
};
