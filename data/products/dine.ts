import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Dine product page (app/products/dine/page.tsx).
 * Keep claims here to what the platform actually delivers (see the dine repo's home page).
 */
export const dinePage = {
  hero: {
    badge: "YourForce Dine",

    heading:
      "Online Ordering for Your Restaurant, With No Commission",

    description:
      "YourForce Dine gives restaurants their own ordering page for delivery and takeaway, QR codes that let diners order from the table, and a live kitchen screen that shows every order as it comes in. You pay a fixed monthly fee and keep every rupee from your orders.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=restaurant-platform",

    secondaryCta: "Try the Demo Restaurant",
    secondaryHref: "https://grill.dine.yourforce.io",

    highlights: [
      "Restaurants & BBQ",
      "Cafés & fast food",
      "Home kitchens & cloud kitchens",
    ],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Dine with your own menu",

    description:
      "Tell us about your restaurant and we'll show you the ordering page with your dishes, prices, delivery areas and tables.",

    items: [
      "Your own ordering page, live in a day",
      "A QR code for every table",
      "A live kitchen screen for your team",
      "Cash, JazzCash and Easypaisa",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Order from a sample restaurant running on the platform",

    description:
      "Karachi Grill is a made-up BBQ and karahi restaurant with real-sized data. Pick a dish, choose a size and add-ons, and walk through checkout as delivery or takeaway. It's a read-only demo, so no real order is placed.",

    stats: [
      { value: "25", label: "dishes with sizes & add-ons" },
      { value: "10", label: "tables with QR codes" },
      { value: "350", label: "sample orders" },
      { value: "3", label: "ways to order" },
    ],

    primaryCta: "Try the Demo Restaurant",
    primaryHref: "https://grill.dine.yourforce.io",

    secondaryCta: "See the product site",
    secondaryHref: "https://dine.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "Taking orders by phone and through apps costs you more than it seems",

    description:
      "Phone orders get misheard, WhatsApp orders get buried, and delivery apps take a share of every order.",

    items: [
      {
        title: "Commission on every order",
        description:
          "Delivery apps keep a share of each order, so your busiest nights earn you less than they should.",
      },
      {
        title: "Orders taken by hand",
        description:
          "Busy phone lines and WhatsApp chats lead to wrong items, missed add-ons and forgotten notes.",
      },
      {
        title: "Waiting for a waiter",
        description:
          "Diners wait to order and to add more, and tables turn over slower than they could.",
      },
      {
        title: "A kitchen working blind",
        description:
          "Paper slips get lost, and nobody can see at a glance which orders are late.",
      },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "Everything your restaurant needs to take orders online",

    items: [
      {
        title: "Your own ordering page",
        description:
          "Your menu on your own web address, with photos, sizes and categories. Customers order in a minute, with no app to download.",
      },
      {
        title: "QR codes on every table",
        description:
          "Each table gets its own code. Diners scan, order and the kitchen sees the table name on the order. Print the codes yourself.",
      },
      {
        title: "Live kitchen screen",
        description:
          "New orders appear by themselves, with an optional chime. One tap moves each order from accepted to preparing to ready.",
      },
      {
        title: "Add-ons and deals",
        description:
          "Make it a meal, extra toppings, choose your drink, spice level. Family deals, promo codes and spend-and-save offers.",
      },
      {
        title: "Delivery, takeaway & dine-in",
        description:
          "Delivery areas with their own charge, free-delivery amount and minimum order, plus takeaway pickups and orders from the table.",
      },
      {
        title: "Reports",
        description:
          "Best-selling dishes, busiest hours, delivery vs takeaway vs dine-in, and cash still with your riders.",
      },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first call to a packed Friday night",

    steps: [
      {
        title: "Call",
        description:
          "Fill in the form and we call you within one working day to learn how you take orders today.",
      },
      {
        title: "Menu setup",
        description:
          "We add your dishes, prices, sizes, add-ons, delivery areas and opening hours.",
      },
      {
        title: "Go live",
        description:
          "Share your link on Instagram, Google Maps and WhatsApp, and put a QR code on every table.",
      },
      {
        title: "Support",
        description:
          "We stay on hand on WhatsApp as your team and customers settle in.",
      },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for kitchens of every size",

    items: [
      {
        title: "Restaurants & BBQ",
        description:
          "Dine-in restaurants that want table ordering, delivery and takeaway on one kitchen screen.",
      },
      {
        title: "Cafés & fast food",
        description:
          "Busy counters that want orders, add-ons and pickups handled without a queue at the till.",
      },
      {
        title: "Home & cloud kitchens",
        description:
          "Delivery-only kitchens that want their own ordering page instead of paying commission to apps.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      {
        question: "Do you take a commission on orders?",
        answer:
          "No. You pay a fixed monthly fee, and every rupee from your orders is yours.",
      },
      {
        question: "Do customers need an app?",
        answer:
          "No. They order on your page in their phone's browser with their name and mobile number.",
      },
      {
        question: "How do table QR codes work?",
        answer:
          "Each table gets its own code. Scanning it opens your menu, and the order arrives on the kitchen screen with the table name.",
      },
      {
        question: "Can customers pay cash?",
        answer:
          "Yes — cash on delivery, at pickup or at the table, plus JazzCash or Easypaisa with receipt upload.",
      },
      {
        question: "Can we try it first?",
        answer:
          "Yes. Order from Karachi Grill, our sample restaurant, to see the menu, add-ons and checkout. Then book a demo to see it with your own menu.",
      },
      {
        question: "Is there a contract?",
        answer:
          "No. Pay monthly or yearly and stop any time. Start with a free trial.",
      },
    ],
  },

  finalCta: {
    heading: "Ready to take orders online?",

    description:
      "Book a demo and we'll set up your menu with you, including your tables and delivery areas.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=restaurant-platform",
  },
} as const satisfies ProductPageData;
