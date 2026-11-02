import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Rent-a-Car product page (app/products/rentacar/page.tsx).
 * Keep claims here to what the platform actually delivers (see the rentacar repo).
 */
export const rentacarPage = {
  hero: {
    badge: "YourForce Rent-a-Car",

    heading: "Every Car Booked, Never Twice",

    description:
      "YourForce Rent-a-Car gives car rental companies their own booking website, a calendar for the whole fleet, CNIC and licence checks, security deposits and a final bill that adds extra km and late returns, from the first WhatsApp to the car back in the yard.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=rentacar-platform",

    secondaryCta: "Visit the Demo Company",
    secondaryHref: "https://swift.rentacar.yourforce.io",

    highlights: ["Self-drive & with driver", "City & outstation", "Deposits & checks"],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Rent-a-Car with your own fleet",

    description:
      "Tell us about your cars and how you rent them, and we'll show you the system with your fleet, rates and drivers.",

    items: [
      "Your own website with your cars and prices",
      "A car or driver is never double-booked",
      "Documents and deposit checked before the keys",
      "Extra km and late hours added to the bill",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Explore a sample company running on the platform",

    description:
      "Swift Rent a Car is a made-up company in Lahore with twelve cars, from a Suzuki Alto to a Land Cruiser, five drivers and two months of bookings. Pick dates on its website to see what's free, or sign in as the desk, the fleet manager or accounts. It's a read-only demo, so nothing is saved.",

    stats: [
      { value: "12", label: "cars" },
      { value: "5", label: "drivers" },
      { value: "180+", label: "bookings" },
      { value: "60", label: "customers" },
    ],

    primaryCta: "Visit the Demo Company",
    primaryHref: "https://swift.rentacar.yourforce.io",

    secondaryCta: "See the product site",
    secondaryHref: "https://rentacar.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "A diary and WhatsApp can't run a fleet",

    description:
      "Bookings come in by phone and WhatsApp, the diary misses one, and the bill on return is worked out on a calculator.",

    items: [
      { title: "Double bookings", description: "Two customers are promised the same car for the same weekend, and one of them is left waiting." },
      { title: "Self-drive risk", description: "Cars go out without a checked licence or a deposit, and problem customers come back under a new name." },
      { title: "Bills worked out by hand", description: "Extra km, late hours, fuel and damage are argued over at the counter, and the deposit is returned late or wrongly." },
      { title: "No view of the fleet", description: "Nobody can say which car earned the most this month, or that a car's insurance runs out next week." },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "From the booking to the car back in the yard",

    items: [
      { title: "Your own booking website", description: "Your cars with photos and daily rates. Customers pick dates, see what's free and the price, and send a request that holds the car." },
      { title: "Never double-booked", description: "A car or driver can't be on two bookings at once, even when two people book at the same second. See the whole fleet on one calendar." },
      { title: "Self-drive, safely", description: "CNIC and driving licence on file and checked against the originals, valid for the whole trip, a deposit before the keys, and a blacklist." },
      { title: "With driver and outstation", description: "Separate rates with a driver, more km a day for outstation trips, and the driver's night allowance added automatically." },
      { title: "The bill writes itself", description: "Odometer and fuel out and back. Extra km, late hours, fuel and damage go on the bill, and the deposit is kept or returned in one click." },
      { title: "Know your fleet", description: "Revenue by month, what each car earned and how many days it was out, and a warning before insurance or token tax runs out." },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first call to bookings on your own website",

    steps: [
      { title: "Call", description: "Fill in the form and we call you within one working day to learn how you rent today." },
      { title: "Setup", description: "We add your cars, rates, drivers and rental rules, and set up logins for your staff." },
      { title: "Go live", description: "Share your website on Instagram, Facebook and WhatsApp. Booking requests arrive on your phone." },
      { title: "Support", description: "We stay on hand on WhatsApp while your team settles in." },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for rental companies of every size",

    items: [
      { title: "Rent-a-car companies", description: "Companies with a fleet of cars for self-drive and with-driver rentals, in the city and outstation." },
      { title: "Wedding & tour transport", description: "Businesses renting luxury cars, Hiaces and coasters with drivers for weddings, tours and airport runs." },
      { title: "Corporate fleets", description: "Firms that hire out cars and drivers to companies on daily or monthly terms." },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      { question: "Do customers pay online?", answer: "They book online and pay the advance by JazzCash, Easypaisa or bank transfer as they do today; the office records it. The website shows your payment details with each booking." },
      { question: "How do you stop double-booking?", answer: "The database itself refuses any booking that overlaps another for the same car or driver, so it can't happen even when two staff members or customers book at the same moment." },
      { question: "What about self-drive risk?", answer: "Self-drive needs a CNIC and a licence valid until the car comes back, checked against the originals by your staff, and the deposit taken before the car leaves. Problem customers can be blacklisted by mobile number." },
      { question: "Can my staff have different access?", answer: "Yes. Booking agents, the fleet manager and accounts each see only their part; the owner sees everything." },
      { question: "Can we try it first?", answer: "Yes. Explore Swift Rent a Car, our sample company, then book a demo to see it with your own cars." },
      { question: "Is there a contract?", answer: "No. Pay monthly or yearly and stop any time. Start with a free trial." },
    ],
  },

  finalCta: {
    heading: "Ready to take bookings online?",

    description: "Book a demo and we'll set it up with you, including your cars, rates and drivers.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=rentacar-platform",
  },
} as const satisfies ProductPageData;
