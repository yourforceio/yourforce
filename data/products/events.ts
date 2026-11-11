import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Events product page (app/products/events/page.tsx).
 * Keep claims here to what the platform actually delivers (see the events repo). No payment gateway and no
 * automatic SMS yet; camera scanning needs a browser with a barcode reader (Chrome on Android), typing the code
 * works everywhere.
 */
export const eventsPage = {
  hero: {
    badge: "YourForce Events",

    heading: "Sell every ticket, scan every guest",

    description:
      "YourForce Events gives event organisers, venues and attractions their own ticket website. Buyers pick a date or time slot and pay by JazzCash, Easypaisa, bank transfer or at the venue, and every ticket has its own QR code for the gate. Conferences get registration, approval, agendas and name badges.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=events-platform",

    secondaryCta: "Visit the Demo Organiser",
    secondaryHref: "https://crescent.events.yourforce.io",

    highlights: ["Concerts & shows", "Attractions & time slots", "Conferences & seminars"],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Events with your own event",

    description:
      "Tell us about your next event or your venue, and we'll show you the system with your dates, ticket types and prices.",

    items: [
      "Your own website with every event and its tickets",
      "A place is never sold twice, even in the last-minute rush",
      "One QR ticket per person, scanned at the gate",
      "Box office sales and payments in one place",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Explore a sample organiser running on the platform",

    description:
      "Crescent Events is a made-up organiser in Lahore with a Sufi night, an indoor play park with daily time slots, a business conference with agenda and speakers, and an invite-only breakfast. Choose dates and tickets on its website, open a sample ticket with its QR codes, or sign in as the organiser, the box office or the gate. It's a read-only demo, so nothing is saved.",

    stats: [
      { value: "5", label: "events" },
      { value: "90", label: "time slots" },
      { value: "420+", label: "bookings" },
      { value: "4", label: "staff roles" },
    ],

    primaryCta: "Visit the Demo Organiser",
    primaryHref: "https://crescent.events.yourforce.io",

    secondaryCta: "See the demo guide",
    secondaryHref: "https://events.yourforce.io/demo",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "WhatsApp and a spreadsheet can't run a sold-out night",

    description:
      "Tickets are sold by message, payments are checked by screenshot, and the list at the gate is a printout.",

    items: [
      { title: "Overselling", description: "Two people sell the last seats at the same time, and the venue has more guests than places." },
      { title: "Payments by screenshot", description: "Receipts arrive on WhatsApp, someone matches them by hand, and nobody knows which bookings are really paid." },
      { title: "Queues and copies at the gate", description: "Names are ticked off a printed list, and a forwarded ticket gets two people in." },
      { title: "No clear numbers", description: "Nobody can say how many tickets each type sold, who's paid, or how many people actually came." },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "From the first ticket to the last guest through the gate",

    items: [
      { title: "Your own ticket website", description: "Every event on your own address, with dates, ticket types like VIP and General, the venue map and your rules. No app for buyers to download." },
      { title: "Time slots for attractions", description: "Play areas, museums and parks: make daily slots with a limit each in one go. Buyers pick a day and a time and see the places left." },
      { title: "Never oversold", description: "Each date, slot and ticket type has its own limit, and the system checks it as each booking is made, so the last place is sold once." },
      { title: "Paid the Pakistani way", description: "JazzCash, Easypaisa or bank transfer with a receipt upload, or pay at the venue. Free events and promo codes too." },
      { title: "QR tickets and a gate scanner", description: "One ticket per person with its own QR code. Gate staff scan it with a phone or type the code, and a ticket gets in only once." },
      { title: "Box office", description: "Sell at the counter for cash and print the tickets there and then. The same places count online and at the counter." },
      { title: "Conferences and seminars", description: "Registration questions, approval of each registration, an agenda, speakers, attendee lists to download and printable name badges." },
      { title: "Roles for your team", description: "The organiser sees everything, the box office sells, accounts checks payments, and gate staff see only the scanner." },
      { title: "Sales and attendance reports", description: "Sales by event, ticket type and day, what's been paid, and how many people came through the gate." },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first call to tickets on sale",

    steps: [
      { title: "Call", description: "Fill in the form and we call you within one working day to learn how you sell tickets today." },
      { title: "Setup", description: "We add your events, dates, ticket types and payment details, and set up logins for your team." },
      { title: "Go live", description: "Share your website on Instagram, Facebook and WhatsApp. Bookings arrive on your phone." },
      { title: "Support", description: "We stay on hand on WhatsApp, including on the day of your event." },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for anyone who sells a place at an event",

    items: [
      { title: "Event organisers", description: "Concerts, qawwali nights, comedy, theatre, festivals and exhibitions, on one date or many." },
      { title: "Venues & attractions", description: "Play areas, trampoline parks, museums, escape rooms and tours that sell daily time slots." },
      { title: "Corporate events", description: "Conferences, seminars, workshops and launches with registration, approval, agendas and badges." },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      { question: "Do buyers pay online?", answer: "They pay by JazzCash, Easypaisa or bank transfer and upload the receipt, and your team confirms it, or they pay at the venue. Tickets work at the gate once the booking is confirmed. Free events confirm at once." },
      { question: "Can a ticket be used twice?", answer: "No. Each ticket has its own code, and once it's scanned the gate shows 'Already checked in' with the time, even if the same ticket is shown on two phones." },
      { question: "What do gate staff need?", answer: "A phone with a browser. On Android phones with Chrome they scan the QR code with the camera; on any phone they can type the code printed under it." },
      { question: "Do buyers get an SMS?", answer: "Buyers keep a link to their tickets, which they can print or add to their calendar. SMS and WhatsApp messages are switched on as part of your setup." },
      { question: "Can we try it first?", answer: "Yes. Explore Crescent Events, our sample organiser, then book a demo to see it with your own event." },
      { question: "Is there a contract?", answer: "No. Pay monthly or yearly and stop any time. Start with a free trial." },
    ],
  },

  finalCta: {
    heading: "Ready to sell tickets online?",

    description: "Book a demo and we'll set it up with you, including your events, ticket types and payment details.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=events-platform",
  },
} as const satisfies ProductPageData;
