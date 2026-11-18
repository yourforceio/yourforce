import type { Guide } from "@/types/guide";

export const dineGuide: Guide = {
  slug: "restaurant-online-ordering-without-commission",
  product: "dine",
  title: "How to take online orders for your restaurant without paying commission",
  description: "A guide for restaurants in Pakistan: your own ordering page, QR codes for table orders, delivery areas, add-ons and deals, and a kitchen screen.",
  summary: "Your own ordering page, table QR codes and a kitchen screen, so delivery apps don't take a cut of every order.",
  updated: "2026-11-18",
  readMinutes: 6,
  intro: [
    "Delivery apps bring new customers, but they take a large share of every order, and the customers they bring belong to the app. Your regular customers, the ones who already know you, can order directly instead.",
    "This guide shows how restaurants set up their own ordering, so phone and WhatsApp orders stop getting lost and regulars stop paying the app's prices.",
  ],
  sections: [
    {
      heading: "1. Put your menu online properly",
      paragraphs: [
        "Your menu should show photos, sizes and prices, grouped the way people order: BBQ, karahi, rice, drinks, deals. Mark dishes as sold out when they run out, and show the restaurant as closed outside your hours so nobody orders at 3 am.",
      ],
    },
    {
      heading: "2. Add the options people always ask for",
      paragraphs: [
        "Most order mistakes come from extras. Build them into the menu so the customer picks them: make it a meal, extra toppings, spice level, drinks, and family deals at a fixed price.",
      ],
    },
    {
      heading: "3. Set delivery areas",
      paragraphs: [
        "Draw the areas you deliver to, each with its own delivery charge, minimum order and free-delivery amount. Customers outside your areas can still order takeaway.",
      ],
    },
    {
      heading: "4. Let tables order by QR code",
      paragraphs: [
        "A QR code on each table lets diners open the menu on their phone and order without waiting for a waiter. The kitchen sees the table number on the order, and waiters spend their time serving instead of writing.",
      ],
    },
    {
      heading: "5. Run the kitchen from one screen",
      paragraphs: [
        "Orders from delivery, takeaway and tables should appear on one kitchen screen as they come in, with a chime, and move from accepted to preparing to ready with one tap. Nothing gets lost on a slip of paper.",
      ],
    },
    {
      heading: "6. Tell your regulars",
      paragraphs: [
        "Put your ordering link in your Instagram bio, Google Maps listing and WhatsApp status, and on a card in every delivery bag. A small discount for ordering direct pays for itself quickly.",
      ],
    },
  ],
  product_section: {
    heading: "How YourForce Dine does this",
    paragraphs: [
      "YourForce Dine gives your restaurant its own ordering page with no commission, table QR codes, a live kitchen screen, add-ons and deals, delivery areas with their own charges, and reports on best-selling dishes and busy hours.",
      "Try Karachi Grill, our sample restaurant, then book a free setup call to see it with your own menu.",
    ],
  },
  faq: [
    { question: "Should I stop using delivery apps?", answer: "Not necessarily. Many restaurants keep the apps for new customers and send their regulars to their own ordering page, where there's no commission." },
    { question: "How do customers pay?", answer: "Cash on delivery, cash at the counter, or JazzCash, Easypaisa and bank transfer with a receipt. Table orders can be paid at the end of the meal as usual." },
    { question: "Do I need special hardware for the kitchen screen?", answer: "No. Any tablet, laptop or old phone with a browser can show the kitchen screen." },
  ],
};
