import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Bookings product page (app/products/bookings/page.tsx).
 * Keep claims here to what the platform actually delivers (see the bookings repo's home page).
 */
export const bookingsPage = {
  hero: {
    badge: "YourForce Bookings",

    heading:
      "Online Booking for Salons, Clinics and Spas, Open 24/7",

    description:
      "YourForce Bookings lets clients book appointments online at any hour on your own booking page. Your team works from one clear calendar, reminders go out automatically, and two clients can never get the same slot.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=booking-platform",

    secondaryCta: "Try the Demo Booking Page",
    secondaryHref: "https://glow.book.yourforce.io",

    highlights: [
      "Salons & barbers",
      "Spas & beauty studios",
      "Clinics & consultants",
    ],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Bookings with your own services",

    description:
      "Tell us about your business and we'll show you the booking page with your services, prices, team and working hours.",

    items: [
      "Your own booking page, live in a day",
      "Staff calendars with no double bookings",
      "SMS and WhatsApp reminders",
      "Deposits by bank, JazzCash or Easypaisa",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Book at a sample salon running on the platform",

    description:
      "Glow Salon & Spa is a made-up salon in Lahore with real-sized data. Pick a service, a stylist and a time to see how your clients would book. It's a read-only demo, so no real booking is made.",

    stats: [
      { value: "14", label: "services" },
      { value: "4", label: "staff calendars" },
      { value: "950+", label: "sample bookings" },
      { value: "70", label: "clients" },
    ],

    primaryCta: "Try the Demo Booking Page",
    primaryHref: "https://glow.book.yourforce.io",

    secondaryCta: "See the product site",
    secondaryHref: "https://book.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "Bookings by phone and DM leave gaps in your day",

    description:
      "When appointments are taken by calls, messages and a paper diary, small slips turn into empty chairs and unhappy clients.",

    items: [
      {
        title: "Calls are missed while you work",
        description:
          "You can't answer the phone mid-appointment, so new clients book somewhere else.",
      },
      {
        title: "Double bookings",
        description:
          "Two people take the same slot from different diaries, and someone ends up waiting.",
      },
      {
        title: "No-shows",
        description:
          "Clients forget their appointment, and the slot is lost for good.",
      },
      {
        title: "No clear numbers",
        description:
          "It's hard to see revenue by service and staff member, or which hours are busiest.",
      },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "Everything you need to fill your calendar",

    items: [
      {
        title: "Your own booking page",
        description:
          "A page on your own address with your services, prices, team and hours. Clients book in under a minute, with no app to download.",
      },
      {
        title: "No double bookings",
        description:
          "Staff hours, breaks, time off and clean-up gaps are all respected. Two clients can never get the same slot, even at the same second.",
      },
      {
        title: "SMS & WhatsApp reminders",
        description:
          "Automatic confirmations and reminders before each visit, with a link to reschedule or cancel.",
      },
      {
        title: "Deposits",
        description:
          "Ask for a deposit by bank transfer, JazzCash or Easypaisa on online bookings. Clients upload the receipt and you confirm with one tap.",
      },
      {
        title: "Team calendar",
        description:
          "Day and week views for each staff member. Book walk-ins and phone calls in seconds, move appointments and mark no-shows.",
      },
      {
        title: "Reports & client history",
        description:
          "Revenue by service and staff, no-show rate, busiest hours, and every client's history in one place.",
      },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first call to a fully booked week",

    steps: [
      {
        title: "Call",
        description:
          "Fill in the form and we call you within one working day to learn how you take bookings today.",
      },
      {
        title: "Setup",
        description:
          "We add your services, prices, team and working hours, ready in a day.",
      },
      {
        title: "Share your page",
        description:
          "Put your booking link on Instagram, Google Maps and WhatsApp. Bookings arrive on your phone.",
      },
      {
        title: "Support",
        description:
          "We stay on hand on WhatsApp as your team and clients settle in.",
      },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for anyone who sells time with a person",

    items: [
      {
        title: "Salons, barbers & spas",
        description:
          "Beauty, hair and nail studios that want clients booking themselves while the team works.",
      },
      {
        title: "Clinics & dentists",
        description:
          "Practices that need clear calendars for each doctor and fewer missed appointments.",
      },
      {
        title: "Physios & consultants",
        description:
          "Professionals who book sessions and want deposits and reminders handled for them.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      {
        question: "Do clients need an app or an account?",
        answer:
          "No. They book on your page with their name and mobile number. An account is optional, for seeing past bookings.",
      },
      {
        question: "Can staff see only their own appointments?",
        answer:
          "Yes. Give each staff member a login with their own calendar. The owner and front desk see everyone.",
      },
      {
        question: "Can we take deposits?",
        answer:
          "Yes. Ask for a deposit by bank transfer, JazzCash or Easypaisa on online bookings, and confirm each one when the receipt arrives.",
      },
      {
        question: "Can we try it first?",
        answer:
          "Yes. Open the Glow Salon & Spa demo page to pick a service, a stylist and a time. Then book a demo to see it with your own services.",
      },
      {
        question: "Is there a contract?",
        answer:
          "No. Pay monthly or yearly and stop any time. Start with a free trial.",
      },
    ],
  },

  finalCta: {
    heading: "Ready to fill your calendar?",

    description:
      "Book a demo and we'll set up your business with you, including your services and team.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=booking-platform",
  },
} as const satisfies ProductPageData;
