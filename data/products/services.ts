import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Services page (app/products/services/page.tsx).
 * Unlike the other products this is a marketplace YourForce runs itself. Lahore is a read-only preview until launch,
 * so the page invites workers and partners to get in touch rather than claiming bookings are open.
 * Keep claims here to what the platform actually delivers (see the services repo).
 */
export const servicesPage = {
  hero: {
    badge: "YourForce Services",

    heading: "Trusted Hands for Your Home",

    description:
      "YourForce Services connects homes with CNIC-verified plumbers, electricians, AC technicians, carpenters, painters, masons, labourers and cleaners. Customers see ratings from real jobs, pay a small visit fee to confirm, and pay for the work in cash. Launching in Lahore.",

    primaryCta: "Join as a Worker or Partner",
    primaryHref: "/contact?service=services-platform",

    secondaryCta: "See the Lahore Preview",
    secondaryHref: "https://lahore.services.yourforce.io",

    highlights: ["CNIC-verified workers", "Ratings from real jobs", "Launching in Lahore"],
  },

  overview: {
    eyebrow: "Launching in Lahore",

    title: "Skilled workers and service companies: get in touch",

    description:
      "We're signing up the first workers and partners in Lahore before we open to the public. Tell us your trade and the areas you work in.",

    items: [
      "Free to join for workers",
      "Jobs in the areas you choose, on your phone",
      "You keep everything you charge the customer",
      "A rating that brings you more work",
    ],
  },

  liveDemo: {
    eyebrow: "Preview",

    heading: "Try the Lahore marketplace before it opens",

    description:
      "The Lahore preview has sample workers across eight trades and fifteen areas, with three months of made-up jobs and reviews. Search for a plumber in Johar Town, open a worker's profile, or sign in as the demo customer or worker. It's read-only, so nothing is saved and no real bookings are taken yet.",

    stats: [
      { value: "8", label: "trades" },
      { value: "15", label: "areas" },
      { value: "32", label: "sample workers" },
      { value: "175", label: "sample jobs" },
    ],

    primaryCta: "See the Lahore Preview",
    primaryHref: "https://lahore.services.yourforce.io",

    secondaryCta: "About the marketplace",
    secondaryHref: "https://services.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "Finding someone you can trust shouldn't be luck",

    description:
      "Most people find a plumber or electrician through a neighbour's number or a sticker on a pole, and hope for the best.",

    items: [
      { title: "Strangers in your home", description: "You let someone in without knowing who they are or whether anyone has ever checked them." },
      { title: "No way to judge the work", description: "There are no reviews, so you can't tell a careful worker from one who'll be back next week to redo it." },
      { title: "No-shows", description: "The worker promises to come and doesn't, and you've lost the morning." },
      { title: "Good workers stay invisible", description: "Skilled workers depend on word of mouth, with no way to show customers their track record." },
    ],
  },

  features: {
    id: "features",

    eyebrow: "How It Works for Customers",

    heading: "From the request to the rating",

    items: [
      { title: "Every worker CNIC-checked", description: "Our team checks each worker's CNIC against the original before they can take jobs, and suspends anyone with repeated complaints." },
      { title: "Search by trade and area", description: "Plumbers, electricians, AC technicians, carpenters, painters, masons, labourers and cleaners, filtered to the ones who cover your area." },
      { title: "Request in a minute", description: "Describe the job, add a photo, choose a day and time, and send it to one worker or to everyone nearby." },
      { title: "A small visit fee to confirm", description: "Pay the visit fee by JazzCash, Easypaisa or bank once a worker accepts. Only then are the address and phone numbers shared." },
      { title: "Pay for the work in cash", description: "Agree the price with the worker on site and pay them directly. If a confirmed worker doesn't come, the visit fee is refunded." },
      { title: "Ratings from real jobs", description: "Only customers who booked can rate a worker, so the stars and reviews come from finished jobs." },
    ],
  },

  process: {
    eyebrow: "How It Works for Workers",

    heading: "Get jobs near you, on your phone",

    steps: [
      { title: "Join", description: "Sign up on your phone with your trades, areas, working days and CNIC. In English and Urdu." },
      { title: "Get checked", description: "Our team checks your CNIC; once verified, you show in search with a Verified badge." },
      { title: "Take jobs", description: "Accept the requests you want. The customer's address and number appear once they've confirmed." },
      { title: "Build your rating", description: "Mark each job done and get rated. Good ratings bring more requests." },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "For homes, workers and service companies",

    items: [
      { title: "Homes and offices", description: "Anyone who needs a repair, an installation, a deep clean or a pair of extra hands." },
      { title: "Skilled workers", description: "Plumbers, electricians, AC technicians, carpenters, painters, masons, labourers and cleaners who want steady work nearby." },
      { title: "Service companies", description: "Cleaning, maintenance and janitorial companies that want to take bookings through the marketplace with their own teams." },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      { question: "When does it open?", answer: "We're signing up the first workers and partners in Lahore now and will open bookings to the public once enough trades and areas are covered. Other cities will follow." },
      { question: "What does it cost a worker?", answer: "Nothing to join. Customers pay a small visit fee to YourForce to confirm a booking; everything the worker charges for the job is theirs, paid in cash." },
      { question: "How are workers checked?", answer: "Every worker gives their CNIC number and photos when they sign up, and our team checks them against the original before the worker can take jobs. Workers with repeated complaints are suspended." },
      { question: "What happens if a worker doesn't come?", answer: "If a confirmed worker doesn't turn up, the customer's visit fee is refunded and we help find someone else." },
      { question: "Can my company join with its own staff?", answer: "Yes. Get in touch: service companies can take bookings through the marketplace with their own teams." },
      { question: "Can I try it?", answer: "Yes. The Lahore preview has sample workers and jobs; sign in as the demo customer or worker to see each side." },
    ],
  },

  finalCta: {
    heading: "Want to work with us?",

    description: "Workers, service companies and property managers in Lahore: tell us what you do and we'll call you.",

    ctaLabel: "Get in Touch",

    href: "/contact?service=services-platform",
  },
} as const satisfies ProductPageData;
