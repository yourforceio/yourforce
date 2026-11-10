import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Society product page (app/products/society/page.tsx).
 * Keep claims here to what the platform actually delivers (see the society repo).
 */
export const societyPage = {
  hero: {
    badge: "YourForce Society",

    heading: "Run your housing society, not the paperwork",

    description:
      "YourForce Society handles monthly maintenance with receipts and a defaulters list, complaints, notices, visitor gate passes and the committee's accounts, and gives every resident their own account to see it all from their phone.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=society-platform",

    secondaryCta: "Visit the Demo Society",
    secondaryHref: "https://greenvalley.society.yourforce.io",

    highlights: ["Housing societies", "Apartment buildings", "Residents' welfare associations"],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Society with your own blocks and units",

    description:
      "Tell us about your society and we'll show you the system with your blocks, houses, flats and monthly amounts. Your Excel sheet is a fine place to start.",

    items: [
      "Monthly dues and receipts for every unit",
      "A defaulters list with WhatsApp reminders",
      "Complaints, notices and gate passes",
      "An income and expense statement each month",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Explore a sample society running on the platform",

    description:
      "Green Valley Society is a made-up gated community on Raiwind Road, Lahore, with three blocks of houses, an apartment tower and a row of shops, and six months of dues, complaints and visitors. Sign in as the office, the accountant or the guard, or as a resident. It's a read-only demo, so nothing is saved.",

    stats: [
      { value: "122", label: "houses, flats & shops" },
      { value: "184", label: "residents" },
      { value: "595", label: "receipts" },
      { value: "6", label: "months of history" },
    ],

    primaryCta: "Visit the Demo Society",
    primaryHref: "https://greenvalley.society.yourforce.io",

    secondaryCta: "See the product site",
    secondaryHref: "https://society.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "Registers and WhatsApp groups can't run a society",

    description:
      "Dues are tracked in registers, complaints get lost in group chats, and the committee struggles to show residents where the money went.",

    items: [
      { title: "Chasing dues", description: "Nobody knows exactly who owes what since when, so reminders are awkward and late fees are never applied." },
      { title: "Complaints that vanish", description: "A water or security complaint in the WhatsApp group scrolls away, and residents never hear whether it was fixed." },
      { title: "An open gate", description: "Guards wave visitors through or call every house, with no record of who came in and when." },
      { title: "Accounts nobody trusts", description: "Expenses sit in a cash book, and preparing the statement for the general body meeting takes days." },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "Everything the office, the guard and residents need",

    items: [
      { title: "Dues and receipts", description: "Maintenance is added for every unit each month, with late fees if you want them. Record a payment and the receipt is ready to print or send on WhatsApp." },
      { title: "Who hasn't paid", description: "A defaulters list with how much and since when, a one-tap WhatsApp reminder to each payer, and levies for a generator or road work in two clicks." },
      { title: "Complaints that get fixed", description: "Residents report water, electricity, security or cleaning problems from their phone, and staff update them until it's fixed." },
      { title: "Gate passes", description: "Residents register a visitor and send them a 6-digit code. The guard checks it at the gate, and every entry and exit is logged." },
      { title: "Notices residents see", description: "Water timings, meetings and works, to the whole society or one block, right where residents check their dues." },
      { title: "The committee's accounts", description: "Expenses with a photo of every bill, and a monthly income and expense statement ready to print for the general body meeting." },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first call to residents signing in",

    steps: [
      { title: "Call", description: "Fill in the form and we call you within one working day to learn how your society runs today." },
      { title: "Setup", description: "We load your blocks, units, monthly amounts and residents, often straight from your existing Excel sheet." },
      { title: "Go live", description: "Send each resident a login link on WhatsApp. They see their dues, notices and visitors from day one." },
      { title: "Support", description: "We stay on hand on WhatsApp as the office and guards settle in." },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for societies and buildings of every size",

    items: [
      { title: "Housing societies", description: "Gated communities with blocks or phases of houses, plots and shops, and a committee that collects maintenance." },
      { title: "Apartment buildings", description: "Towers and buildings where every flat pays monthly maintenance and visitors pass the front desk." },
      { title: "Commercial complexes", description: "Plazas and markets that collect service charges from shops and offices." },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      { question: "Do residents need an app?", answer: "No. Your society gets its own website. Residents sign in with their mobile number and a password; the office sends them the link on WhatsApp." },
      { question: "Can residents pay online?", answer: "They see your bank, JazzCash or Easypaisa details with what they owe and pay as they do today. The office records it and the receipt appears in their account." },
      { question: "Who can see what?", answer: "Each staff member has a role: the committee sees everything, the accountant handles money, the guard sees only the gate screen and maintenance staff only complaints." },
      { question: "Can owners and tenants both have accounts?", answer: "Yes. A unit can have owners, tenants and family members, and you choose who pays the dues." },
      { question: "Can we try it first?", answer: "Yes. Explore Green Valley Society, our sample society, then book a demo to see it with your own units." },
      { question: "Is there a contract?", answer: "No. Pay monthly or yearly and stop any time. Start with a free trial." },
    ],
  },

  finalCta: {
    heading: "Ready to stop chasing dues on paper?",

    description: "Book a demo and we'll set it up with you, including your blocks, units and residents.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=society-platform",
  },
} as const satisfies ProductPageData;
