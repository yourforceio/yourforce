import type { PrivacyPolicy } from "@/types/privacy";

/** Refund policy for the YourForce software products (app/refunds). */
export const refundPolicy: PrivacyPolicy = {
  badge: "Fair And Simple",

  title: "Refund Policy",

  description:
    "When you can get your money back for a YourForce software subscription, and how. Engineering and operations work is covered by its own agreement.",

  lastUpdated: "November 18, 2026",

  contactEmail: "hello@yourforce.io",

  sections: [
    {
      id: "trial",
      title: "1. Try before you pay",
      paragraphs: [
        "Every product starts with a free trial and a live demo, so you can see it working with your own details before paying anything. Nothing is charged automatically when a trial ends.",
      ],
    },
    {
      id: "monthly",
      title: "2. Monthly plans",
      paragraphs: [
        "You can cancel a monthly plan at any time. It keeps working until the end of the month you've paid for and isn't renewed after that.",
        "We don't refund part of a month that has already started.",
      ],
    },
    {
      id: "yearly",
      title: "3. Yearly plans",
      paragraphs: [
        "If you change your mind within 14 days of paying for your first yearly plan, we'll refund it in full.",
        "After those 14 days, a yearly plan isn't refunded, but you can cancel it at any time so that it isn't renewed.",
      ],
    },
    {
      id: "mistakes",
      title: "4. Mistakes and outages",
      paragraphs: [
        "If you're charged twice, or charged the wrong amount, we'll refund the difference in full.",
        "If a product is unavailable for a long time because of a problem on our side, tell us and we'll extend your subscription or refund the affected days.",
      ],
    },
    {
      id: "services",
      title: "5. YourForce Services visit fee",
      paragraphs: [
        "On YourForce Services, the small visit fee confirms your booking with a worker. It's refunded in full if no worker accepts your job, or if the worker you booked doesn't come. It isn't refunded once the visit has taken place.",
        "Payment for the work itself is between you and the worker, as agreed on the visit.",
      ],
    },
    {
      id: "how",
      title: "6. How to ask for a refund",
      paragraphs: [
        "Email or WhatsApp us with your business name and the payment you're asking about. We reply within one working day, and pay approved refunds back the way you paid, usually within 7 working days.",
      ],
    },
    {
      id: "your-customers",
      title: "7. Refunds to your own customers",
      paragraphs: [
        "Money your customers pay you through your YourForce website (for example a deposit, a ticket or a fee) goes to you, not to us. Refunds to them follow your own policy, which you can publish on your website.",
      ],
    },
    {
      id: "contact",
      title: "8. Contact",
      paragraphs: ["Questions about a payment or a refund? Email us and a real person will reply."],
    },
  ],
};
