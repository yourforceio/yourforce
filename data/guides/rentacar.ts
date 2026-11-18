import type { Guide } from "@/types/guide";

export const rentacarGuide: Guide = {
  slug: "rent-a-car-business-bookings-deposits",
  product: "rentacar",
  title: "Running a rent-a-car business: no double bookings and no deposit disputes",
  description: "For rent-a-car companies in Pakistan: a booking website, a fleet calendar, CNIC and licence checks, security deposits, and a fair final bill with extra km and late hours.",
  summary: "A fleet calendar, CNIC and licence checks, deposits and a final bill nobody argues over.",
  updated: "2026-11-18",
  readMinutes: 6,
  intro: [
    "The worst call a rent-a-car owner gets is two customers, one car, the same weekend. The second worst is an argument at the counter over extra kilometres and fuel.",
    "Both come from the same place: bookings in a diary and bills on a calculator. Here is a simple system that prevents them.",
  ],
  sections: [
    {
      heading: "1. One calendar for every car and driver",
      paragraphs: [
        "Every car and every driver should have one calendar. A booking blocks the car, and the driver if one is included, for the whole trip, so nobody can book them twice, even when two requests arrive at once.",
      ],
    },
    {
      heading: "2. Let customers request a car online",
      paragraphs: [
        "A booking website lets customers pick dates, see which cars are free and what they cost, and send a request. You confirm it on WhatsApp and take the advance, instead of answering the same three questions on every call.",
      ],
    },
    {
      heading: "3. Check documents before the keys",
      paragraphs: [
        "For self-drive, check the customer's CNIC and a driving licence that's valid for the whole trip, against the originals, and keep a copy. A blacklist of customers who caused trouble before saves you from repeat problems.",
      ],
    },
    {
      heading: "4. Take the deposit before the keys",
      paragraphs: [
        "Record the security deposit when the car goes out, and settle it when it comes back: returned in full, or with deductions shown line by line.",
      ],
    },
    {
      heading: "5. Make the final bill automatic",
      paragraphs: [
        "Note the odometer and fuel going out and coming back. Extra kilometres beyond the daily allowance, late hours, fuel and damage should go straight onto the bill, with separate rates for self-drive and with a driver, and the driver's allowance for outstation trips.",
      ],
    },
  ],
  product_section: {
    heading: "How YourForce Rent-a-Car does this",
    paragraphs: [
      "YourForce Rent-a-Car gives you a booking website, a fleet calendar that never double-books a car or driver, CNIC and licence checks with a blacklist, security deposits, and a final bill with extra km, late hours and fuel, plus fleet reports and insurance and token-tax reminders.",
      "Try Swift Rent a Car, our sample company in Lahore, then book a free setup call to see it with your own fleet.",
    ],
  },
  faq: [
    { question: "Can it handle cars with a driver?", answer: "Yes. Set separate rates for self-drive and with a driver, and the driver's night allowance is added for outstation trips." },
    { question: "What if two people book the same car at once?", answer: "The calendar only lets one booking hold a car for a given time, so the second request is offered another car instead." },
    { question: "Is it suitable for wedding and tour transport?", answer: "Yes. Vans and buses with drivers work the same way, and you can see every vehicle's schedule in one place." },
  ],
};
