import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Property product page (app/products/property/page.tsx).
 * Keep claims here to what the platform actually delivers (see the property repo). Rental management
 * (landlords, tenants, rent) is still being built, so it's only mentioned as coming soon.
 */
export const propertyPage = {
  hero: {
    badge: "YourForce Property",

    heading:
      "Your Agency's Own Property Website, With Every Enquiry Tracked",

    description:
      "YourForce Property gives real estate agencies their own website with listings in marla, kanal, lakh and crore, a map and nearby Metro Bus and Orange Line stations on every property, and one place to follow up every call, WhatsApp and viewing until the deal is done.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=property-platform",

    secondaryCta: "Visit the Demo Agency",
    secondaryHref: "https://skyline.property.yourforce.io",

    highlights: [
      "Real estate agencies",
      "Builders & developers",
      "Property consultants",
    ],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Property with your own listings",

    description:
      "Tell us about your agency and we'll show you the website with your listings, your areas and your team.",

    items: [
      "Your own website on your own address",
      "Listings live in minutes from your phone",
      "Every enquiry sent to the right agent",
      "WhatsApp and call buttons on every property",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Browse a sample agency running on the platform",

    description:
      "Skyline Estates is a made-up agency in Lahore and Islamabad with real-sized data. Search by area, price, bedrooms and size, open a property to see the map and nearby stations, and save a few to your shortlist. It's a read-only demo, so no enquiry is sent.",

    stats: [
      { value: "91", label: "houses, plots, flats & offices" },
      { value: "10", label: "areas in Lahore & Islamabad" },
      { value: "140", label: "sample enquiries" },
      { value: "3", label: "agents" },
    ],

    primaryCta: "Visit the Demo Agency",
    primaryHref: "https://skyline.property.yourforce.io",

    secondaryCta: "See the product site",
    secondaryHref: "https://property.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "Good leads are lost between WhatsApp, the phone and the portals",

    description:
      "Most agencies run on WhatsApp groups, phone calls and paid portal listings, and nobody can see which buyer was promised a call back.",

    items: [
      {
        title: "Leads that slip away",
        description:
          "Calls and WhatsApp messages go to whoever picked up, and nobody knows which buyer is still waiting for a call back.",
      },
      {
        title: "Paying portals for your own listings",
        description:
          "Your properties sit on someone else's site, next to your competitors, and the buyer never remembers your agency's name.",
      },
      {
        title: "Photos and prices scattered",
        description:
          "Listings live in phone galleries and chat threads, so sending a client the right details takes too long.",
      },
      {
        title: "No picture of the pipeline",
        description:
          "Owners can't see how many enquiries came in, which agent is following up, or how many viewings are booked this week.",
      },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "Everything an agency needs to list, show and close",

    items: [
      {
        title: "Your own property website",
        description:
          "Listings, your team, your pages and your brand on your own address, with search by area, price in lakh or crore, bedrooms and size in marla or kanal.",
      },
      {
        title: "Listings the way Pakistan measures",
        description:
          "Marla, kanal, sq ft and sq yd, prices in lakh and crore with price per marla, photos, and about 85 features and amenities to tick.",
      },
      {
        title: "Map and getting around",
        description:
          "Every property on a map, shown as an area unless you choose the exact spot, with the nearest Metro Bus and Orange Line stations and walking times.",
      },
      {
        title: "Shortlists and viewing requests",
        description:
          "Visitors save properties to a shortlist and ask to view several at once, with a preferred day and time. Each agent gets their part of the request.",
      },
      {
        title: "Every enquiry tracked",
        description:
          "Enquiries go to the listing's agent, move from new to contacted, viewing, negotiating, won or lost, with notes and booked viewings. Agents see only their own.",
      },
      {
        title: "WhatsApp and call buttons",
        description:
          "Buyers reach the right agent in one tap, with the property and its link already in the message. Agents reply from the enquiry the same way.",
      },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first call to your first deal on your own website",

    steps: [
      {
        title: "Call",
        description:
          "Fill in the form and we call you within one working day to learn how your agency works today.",
      },
      {
        title: "Setup",
        description:
          "We set up your website, your areas and your team, and help you add your first listings.",
      },
      {
        title: "Go live",
        description:
          "Share your website on Facebook, Instagram, Google Maps and WhatsApp, and in your portal ads.",
      },
      {
        title: "Support",
        description:
          "We stay on hand on WhatsApp as your agents settle in.",
      },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for agencies of every size",

    items: [
      {
        title: "Real estate agencies",
        description:
          "Agencies with a team of agents that want their own website and every lead followed up.",
      },
      {
        title: "Builders & developers",
        description:
          "Projects selling plots, houses or flats that want a clean website and one place for every buyer enquiry.",
      },
      {
        title: "Independent consultants",
        description:
          "One-person agencies that want to look professional and stop losing leads in WhatsApp.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      {
        question: "Is this a portal like Zameen?",
        answer:
          "No. It's your agency's own website and lead tracker, so buyers see only your listings and your name. Many agencies use both: portals to be found, their own website to be remembered.",
      },
      {
        question: "Can my agents add listings from their phones?",
        answer:
          "Yes. Agents add listings, photos and the map pin from their phone, and each one sees only the enquiries for their own listings.",
      },
      {
        question: "Do buyers need an account?",
        answer:
          "No. They search, save a shortlist on their phone and send an enquiry or viewing request with their name and mobile number.",
      },
      {
        question: "Does it handle rentals?",
        answer:
          "You can list properties for rent today. Rental management, with landlord and tenant accounts, monthly rent and receipts, is coming soon.",
      },
      {
        question: "Can we try it first?",
        answer:
          "Yes. Browse Skyline Estates, our sample agency, to see the search, property pages and shortlist. Then book a demo to see it with your own listings.",
      },
      {
        question: "Is there a contract?",
        answer:
          "No. Pay monthly or yearly and stop any time. Start with a free trial.",
      },
    ],
  },

  finalCta: {
    heading: "Ready to give your agency its own website?",

    description:
      "Book a demo and we'll set up your website with you, including your areas, your team and your first listings.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=property-platform",
  },
} as const satisfies ProductPageData;
