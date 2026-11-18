import type { Guide } from "@/types/guide";

export const gymGuide: Guide = {
  slug: "gym-fees-membership-management",
  product: "gym",
  title: "How to track gym fees and stop members training for free",
  description: "A practical guide for gym and fitness studio owners in Pakistan: memberships, fee receipts, dues lists, freezes, check-in at the door and class bookings.",
  summary: "Memberships, receipts, dues and check-in at the door: how to stop fees slipping through.",
  updated: "2026-11-18",
  readMinutes: 6,
  intro: [
    "Ask any gym owner about their biggest leak and the answer is usually the same: members whose fees ran out weeks ago still walk in every morning. Nobody at the desk can tell who is paid up, end dates are worked out by hand, and the register only gets checked at the end of the month.",
    "Here is a simple system that closes the gap, whether you use software or not.",
  ],
  sections: [
    {
      heading: "1. Give every membership a start and an end date",
      paragraphs: [
        "A membership is only clear when it has a plan, a start date and an end date. Monthly, quarterly, day-pass and ladies-only plans each need their own price and length, plus the admission fee on a member's first membership.",
      ],
    },
    {
      heading: "2. Give a receipt for every payment",
      paragraphs: [
        "Every payment, whether cash, card, JazzCash, Easypaisa or bank transfer, should get a numbered receipt. Receipts settle arguments, and the numbers make it obvious if a payment is missing.",
      ],
    },
    {
      heading: "3. Keep one list of who owes money",
      paragraphs: [
        "The most useful screen in a gym is the dues list: everyone whose membership has ended or whose fee is part-paid, with how much they owe. Check it every morning and remind members before they become a problem.",
      ],
    },
    {
      heading: "4. Check people in at the door",
      paragraphs: [
        "The desk needs to know in seconds whether someone can come in. A QR card on the member's phone, scanned at the desk, should show green or red with the reason, such as “expired 3 days ago” or “frozen”. A name search is the backup when a phone is flat.",
      ],
    },
    {
      heading: "5. Handle freezes fairly",
      paragraphs: [
        "Members travel and fall ill. Freezing a membership should move the end date on by the days they missed, so nobody loses out, and the desk can see the freeze when they arrive.",
      ],
    },
    {
      heading: "6. Run classes with limited places",
      paragraphs: [
        "Spin, yoga and Zumba classes fill up fast. Let members book a place online, cap each class at its real capacity, and let trainers mark who turned up. Ladies-only classes should only be bookable by women members.",
      ],
    },
  ],
  product_section: {
    heading: "How YourForce Gym does this",
    paragraphs: [
      "YourForce Gym gives every member a plan with start and end dates, numbered receipts, a dues list, freezes that move the end date, a QR card for the desk, a class timetable with limited places, a member account for online renewals, and your own gym website.",
      "Try Iron Peak Fitness, our sample gym with 212 members, then book a free setup call to see it with your own plans.",
    ],
  },
  faq: [
    { question: "Do I need fingerprint machines?", answer: "No. A QR card on the member's phone, or a name search at the desk, works well and costs nothing extra. Fingerprint and turnstile machines can be added later." },
    { question: "How do members pay online?", answer: "Most gyms in Pakistan take JazzCash, Easypaisa or bank transfers. The member uploads the receipt, the gym checks it, and the membership starts." },
    { question: "Can it handle ladies-only timings?", answer: "Yes, if the system lets you mark plans and classes as women-only, so only women members can book them." },
  ],
};
