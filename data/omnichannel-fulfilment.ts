import type { OmnichannelFulfilmentData } from "@/types/omnichannel-fulfilment";

export const omnichannelFulfilment: OmnichannelFulfilmentData = {
  metadata: {
    title:
        "Omnichannel Fulfilment | YourForce Engineering Lab",

    description:
        "Explore an interactive omnichannel fulfilment prototype from YourForce.io demonstrating store discovery, inventory availability, preferred stores, and BOPIS selection.",
    },

  lab: {
    number:
      "03",

    eyebrow:
      "Store & Fulfilment",

    title:
      "Omnichannel Fulfilment",

    description:
      "An interactive store-pickup experience demonstrating location discovery, inventory availability, preferred stores, fulfilment selection, and BOPIS customer journeys.",
  },

  experience: {
    heading:
      "Find it nearby. Pick it up your way.",

    description:
      "Select a product, search nearby stores, compare inventory availability, and choose the best pickup location.",

    placeholder:
      "Enter ZIP code or city",
  },

  products: [
    {
      id:
        "omni-001",

      name:
        "Commuter Overshirt",

      price:
        128,

      category:
        "Men",

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
        "omni-002",

      name:
        "Essential Knit",

      price:
        96,

      category:
        "Women",

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
        "omni-003",

      name:
        "Studio Jacket",

      price:
        168,

      category:
        "Women",

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
        "omni-004",

      name:
        "Everyday Tote",

      price:
        74,

      category:
        "Accessories",

      visual: {
        from:
          "#fef3c7",

        to:
          "#fcd34d",

        accent:
          "#a16207",
      },
    },
  ],

  stores: [
    {
      id:
        "store-nyc-01",

      name:
        "SoHo",

      address:
        "135 Mercer Street",

      city:
        "New York",

      state:
        "NY",

      postalCode:
        "10012",

      distance:
        1.2,

      hours:
        "Open today until 8:00 PM",

      services: [
        "Store Pickup",
        "Returns",
        "Same-Day Pickup",
      ],

      inventory: [
        {
          productId:
            "omni-001",
          quantity:
            8,
        },
        {
          productId:
            "omni-002",
          quantity:
            3,
        },
        {
          productId:
            "omni-003",
          quantity:
            0,
        },
        {
          productId:
            "omni-004",
          quantity:
            5,
        },
      ],
    },

    {
      id:
        "store-nyc-02",

      name:
        "Fifth Avenue",

      address:
        "620 Fifth Avenue",

      city:
        "New York",

      state:
        "NY",

      postalCode:
        "10020",

      distance:
        2.8,

      hours:
        "Open today until 9:00 PM",

      services: [
        "Store Pickup",
        "Returns",
        "Gift Services",
      ],

      inventory: [
        {
          productId:
            "omni-001",
          quantity:
            2,
        },
        {
          productId:
            "omni-002",
          quantity:
            7,
        },
        {
          productId:
            "omni-003",
          quantity:
            4,
        },
        {
          productId:
            "omni-004",
          quantity:
            1,
        },
      ],
    },

    {
      id:
        "store-brooklyn-01",

      name:
        "Williamsburg",

      address:
        "88 North 6th Street",

      city:
        "Brooklyn",

      state:
        "NY",

      postalCode:
        "11249",

      distance:
        4.6,

      hours:
        "Open today until 8:00 PM",

      services: [
        "Store Pickup",
        "Returns",
      ],

      inventory: [
        {
          productId:
            "omni-001",
          quantity:
            0,
        },
        {
          productId:
            "omni-002",
          quantity:
            2,
        },
        {
          productId:
            "omni-003",
          quantity:
            6,
        },
        {
          productId:
            "omni-004",
          quantity:
            9,
        },
      ],
    },

    {
      id:
        "store-nj-01",

      name:
        "Jersey City",

      address:
        "30 Mall Drive",

      city:
        "Jersey City",

      state:
        "NJ",

      postalCode:
        "07310",

      distance:
        6.9,

      hours:
        "Open today until 7:00 PM",

      services: [
        "Store Pickup",
        "Returns",
      ],

      inventory: [
        {
          productId:
            "omni-001",
          quantity:
            5,
        },
        {
          productId:
            "omni-002",
          quantity:
            0,
        },
        {
          productId:
            "omni-003",
          quantity:
            1,
        },
        {
          productId:
            "omni-004",
          quantity:
            4,
        },
      ],
    },
  ],

  architecture: {
    heading:
      "What this lab demonstrates",

    description:
      "This prototype uses simulated store and inventory data to demonstrate fulfilment patterns commonly used in modern omnichannel commerce.",

    items: [
      {
        title:
          "Store Discovery",

        description:
          "Customers can search and compare nearby locations using distance, services, and operating information.",
      },

      {
        title:
          "Inventory Awareness",

        description:
          "Product availability is evaluated independently for each store to support fulfilment decisions.",
      },

      {
        title:
          "Preferred Store",

        description:
          "Customers can establish a preferred location that can influence future pickup and fulfilment journeys.",
      },

      {
        title:
          "OMS Ready",

        description:
          "The interaction model can be connected to commerce, store inventory, order management, and fulfilment APIs.",
      },
    ],
  },
};
