import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Gym product page (app/products/gym/page.tsx).
 * Keep claims here to what the platform actually delivers (see the gym repo). Not built: fingerprint or turnstile
 * machines, automatic SMS sending, a payment gateway (online payments are a JazzCash/Easypaisa/bank receipt upload).
 */
export const gymPage = {
  hero: {
    badge: "YourForce Gym",
    searchHeading: "Gym management software for Pakistan",

    heading: "Every member, every fee, every visit",

    description:
      "YourForce Gym runs gyms and fitness studios: memberships with start and end dates, fees with receipts and a dues list, a QR card on every member's phone for the front desk, and classes that members book online. Your gym also gets its own website with plans, a timetable and free-trial requests.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=gym-platform",

    secondaryCta: "Visit the Demo Gym",
    secondaryHref: "https://ironpeak.gym.yourforce.io",

    highlights: ["Gyms", "Fitness & yoga studios", "Ladies-only timings"],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Gym with your own plans",

    description:
      "Tell us how your gym works today, and we'll show you the system with your plans, fees and class timetable.",

    items: [
      "Know who has paid and whose membership has ended",
      "A QR card on every member's phone for the desk",
      "Classes with limited places, booked online",
      "Your own gym website with a free-trial form",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Explore a sample gym running on the platform",

    description:
      "Iron Peak Fitness is a made-up gym in Lahore with monthly, quarterly and ladies-only plans, a weekly class timetable and a few months of members, payments and visits. Visit its website, open a sample member card, or sign in as the owner, the front desk, a trainer or the door. It's a read-only demo, so nothing is saved.",

    stats: [
      { value: "212", label: "members" },
      { value: "4,000+", label: "visits" },
      { value: "119", label: "classes" },
      { value: "5", label: "staff roles" },
    ],

    primaryCta: "Visit the Demo Gym",
    primaryHref: "https://ironpeak.gym.yourforce.io",

    secondaryCta: "See the product site",
    secondaryHref: "https://gym.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "A register and a diary can't keep up with a busy gym",

    description:
      "Fees are written in a book, end dates are worked out by hand, and nobody at the desk knows who's still paid up.",

    items: [
      { title: "Fees slip through", description: "Memberships end quietly, members keep coming, and the money that's owed is only found at the end of the month." },
      { title: "No check at the door", description: "The desk can't tell at a glance whether a member is paid up, frozen or finished." },
      { title: "Crowded classes", description: "Spin and yoga classes fill up by WhatsApp message, and more people turn up than there are places." },
      { title: "No clear numbers", description: "Nobody can say how many members are active, how much came in this month, or which hours are busiest." },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "From the first visit to the hundredth",

    items: [
      { title: "Members and memberships", description: "Monthly, quarterly, day-pass and ladies-only plans. Start and end dates are worked out for you, with the admission fee on the first membership." },
      { title: "Fees, receipts and dues", description: "Take cash, card, JazzCash, Easypaisa or bank payments with numbered receipts, and see everyone who owes money in one list." },
      { title: "QR card for the door", description: "Every member has a card on their phone. The desk scans it or searches by name and sees green or red, with the reason." },
      { title: "Freeze and renew", description: "Freeze a membership while a member travels and the end date moves on. Renew in two clicks, at the desk or online." },
      { title: "Classes with limited places", description: "A weekly timetable for spin, yoga or CrossFit. Members book and cancel online, and the last place is taken only once." },
      { title: "Member account", description: "Members see their membership and visits, book classes, and renew by sending a JazzCash, Easypaisa or bank receipt for the gym to check." },
      { title: "Your own gym website", description: "Plans and prices, the timetable, trainers and a free-trial form that lands in your list of trial requests." },
      { title: "Roles for your team", description: "The owner sees everything, the front desk handles members and fees, trainers see their classes, and the door sees only check-in." },
      { title: "Reports", description: "Money in by month and method, active and ended members, new joiners, visits by hour, and class attendance." },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first call to members at the door",

    steps: [
      { title: "Call", description: "Fill in the form and we call you within one working day to learn how your gym runs today." },
      { title: "Setup", description: "We add your plans, fees, timetable and trainers, bring in your current members, and set up logins for your team." },
      { title: "Go live", description: "Members get their QR cards, your desk starts checking people in, and your website takes trial requests." },
      { title: "Support", description: "We stay on hand on WhatsApp while your team settles in." },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for places people pay to train",

    items: [
      { title: "Gyms", description: "Neighbourhood gyms and bigger fitness clubs with monthly and yearly plans, personal trainers and ladies-only timings." },
      { title: "Studios", description: "Yoga, pilates, spin, CrossFit and martial-arts studios where classes have a limited number of places." },
      { title: "Clubs & academies", description: "Swimming, boxing and sports academies that charge a monthly fee and need to know who's paid." },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      { question: "What does the front desk need?", answer: "A phone, tablet or computer with a browser. The desk scans a member's QR card with the camera, or searches by name or phone number." },
      { question: "Does it work with fingerprint machines?", answer: "Not yet. Members check in with the QR card on their phone, or the desk finds them by name. Fingerprint and turnstile machines are on our list." },
      { question: "Can members pay online?", answer: "They send the fee by JazzCash, Easypaisa or bank transfer and upload the receipt. The membership starts once your team checks it. Cash and card payments are taken at the desk." },
      { question: "Do members get reminders?", answer: "The system shows whose membership is ending and who owes money. SMS and WhatsApp reminders are switched on as part of your setup." },
      { question: "Can we try it first?", answer: "Yes. Explore Iron Peak Fitness, our sample gym, then book a demo to see it with your own plans." },
      { question: "Is there a contract?", answer: "No. Pay monthly or yearly and stop any time. Start with a free trial." },
    ],
  },

  finalCta: {
    heading: "Ready to run your gym from one screen?",

    description: "Book a demo and we'll set it up with you, including your plans, fees and members.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=gym-platform",
  },
} as const satisfies ProductPageData;
