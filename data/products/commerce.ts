import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Commerce product page (app/products/commerce/page.tsx).
 * Keep claims here to what the platform actually delivers (see the commerce repo's home page).
 */
export const commercePage = {
  hero: {
    badge: "YourForce Commerce",

    heading:
      "Your Own Online Store, Ready to Take Orders in a Day",

    description:
      "YourForce Commerce gives sellers in Pakistan a fast, mobile-first store on their own web address. Take cash on delivery, bank transfer, JazzCash and Easypaisa, run Eid sales and offers, and manage every order from your phone.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=commerce-platform",

    secondaryCta: "Visit the Demo Store",
    secondaryHref: "https://novamart.shop.yourforce.io",

    highlights: [
      "Clothing & fashion",
      "Electronics & accessories",
      "Cosmetics & home goods",
    ],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Commerce with your own products",

    description:
      "Tell us what you sell and we'll show you the store with your products, delivery charges and payment methods.",

    items: [
      "Your own store on your own web address",
      "Cash on delivery, bank transfer, JazzCash and Easypaisa",
      "Eid sales, offers and promo codes",
      "Orders, invoices and courier tracking",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Shop at a sample store running on the platform",

    description:
      "Nova Mart is a made-up store with real-sized data. Browse products, add them to your cart and walk through checkout. It's a read-only demo, so no order is actually placed.",

    stats: [
      { value: "150", label: "sample orders" },
      { value: "60", label: "customers" },
      { value: "61", label: "product reviews" },
      { value: "12", label: "products with variants" },
    ],

    primaryCta: "Visit the Demo Store",
    primaryHref: "https://novamart.shop.yourforce.io",

    secondaryCta: "See the product site",
    secondaryHref: "https://shop.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "Selling only through DMs costs you orders",

    description:
      "When orders arrive as Instagram and WhatsApp messages, details get lost and every sale takes more of your time.",

    items: [
      {
        title: "Orders get lost in chats",
        description:
          "Sizes, addresses and payment screenshots are scattered across messages, and some orders are never followed up.",
      },
      {
        title: "Stock goes out of sync",
        description:
          "A size or colour sells out, but customers keep ordering it because nobody updated the list.",
      },
      {
        title: "Cash on delivery is hard to track",
        description:
          "It's unclear which parcels were delivered and how much cash the courier still owes you.",
      },
      {
        title: "Sales are run by hand",
        description:
          "Eid discounts and offers mean changing prices one by one, then remembering to change them back.",
      },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "Everything you need to sell online",

    items: [
      {
        title: "Your own store",
        description:
          "A fast, mobile-first store on your own web address, with your logo and colours. Shoppers order without downloading an app.",
      },
      {
        title: "Products with variants",
        description:
          "Size × colour or storage × colour, each with its own price and stock. Upload your whole catalogue from Excel.",
      },
      {
        title: "Payments people use",
        description:
          "Cash on delivery, bank transfer, and JazzCash or Easypaisa with receipt upload. Set delivery charges by city.",
      },
      {
        title: "Sales & offers",
        description:
          "Eid sales that start and end by themselves, buy 2 get 1 free, spend and save, and promo codes.",
      },
      {
        title: "Order management",
        description:
          "Confirm, pack, ship and deliver. Print invoices and packing slips, track couriers and send ready-made WhatsApp messages.",
      },
      {
        title: "Reports",
        description:
          "Daily sales, best sellers, top cities, cash still to collect from couriers, and unfinished checkouts to follow up.",
      },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first product to your first order",

    steps: [
      {
        title: "Call",
        description:
          "Fill in the form and we call you within one working day to learn what you sell.",
      },
      {
        title: "Setup",
        description:
          "We add your products, prices, delivery charges and payment details, or import your Excel sheet.",
      },
      {
        title: "Launch",
        description:
          "Post your store link on Instagram, Facebook and WhatsApp. Orders arrive on your phone.",
      },
      {
        title: "Support",
        description:
          "We stay on hand on WhatsApp as you add products and run your first sales.",
      },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for sellers at every stage",

    items: [
      {
        title: "Instagram & Facebook sellers",
        description:
          "Move orders out of DMs and into a store that takes them for you, day and night.",
      },
      {
        title: "Shops going online",
        description:
          "Put your shop's stock online, take cash on delivery and keep stock counts in one place.",
      },
      {
        title: "Growing brands",
        description:
          "Give your team their own logins, with separate roles for managing orders and the catalogue.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      {
        question: "Do I need a website or a developer?",
        answer:
          "No. Your store, its web address and hosting are included. You manage everything from your phone or laptop.",
      },
      {
        question: "Can customers pay cash on delivery?",
        answer:
          "Yes, along with bank transfer and JazzCash or Easypaisa with receipt upload. Card payments are coming.",
      },
      {
        question: "What will my store's address be?",
        answer:
          "Every store gets an address like yourshop.shop.yourforce.io. Your own domain, such as yourshop.pk, can be connected on request.",
      },
      {
        question: "Can my staff help run the store?",
        answer:
          "Yes. Give each person their own login. Order managers handle orders and catalogue managers handle products, without access to the rest.",
      },
      {
        question: "Can we try it first?",
        answer:
          "Yes. Visit Nova Mart, our sample store, to browse and walk through checkout. Then book a demo to see the store with your own products.",
      },
      {
        question: "Is there a contract?",
        answer:
          "No. Pay monthly or yearly and stop any time. Start with a free trial.",
      },
    ],
  },

  finalCta: {
    heading: "Ready to sell online?",

    description:
      "Book a demo and we'll set up your store with you, starting with your first products.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=commerce-platform",
  },
} as const satisfies ProductPageData;
