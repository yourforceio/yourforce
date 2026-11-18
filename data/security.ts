import type { PrivacyPolicy } from "@/types/privacy";

/**
 * "Your data is safe with us" (app/security). Every statement here must stay true of the products as built:
 * check the code (tenant scoping, bcrypt, rate limits, private Blob storage, no trackers) before changing it.
 */
export const dataSafety: PrivacyPolicy = {
  badge: "Data Safety",

  title: "Your data is safe with us",

  description:
    "What we do to keep the information in YourForce Schools, Clinic, Gym, Commerce and our other products safe, in plain English, and what we don't claim.",

  lastUpdated: "November 18, 2026",

  contactEmail: "hello@yourforce.io",

  sections: [
    {
      id: "where",
      title: "Where your data lives",
      paragraphs: [
        "Each product's database runs on Neon, a managed PostgreSQL service, in Singapore. The products themselves run on Vercel, also in Singapore. Both are established cloud providers used by thousands of companies.",
        "Every connection, from your phone or computer to the product and from the product to its database, is encrypted. Our database provider also encrypts the data it stores, and keeps a restorable history of recent changes so we can recover from a mistake.",
      ],
    },
    {
      id: "separate",
      title: "Your business sees only its own records",
      paragraphs: [
        "Many businesses use each product, so every request is locked to the business that made it: a clinic only ever sees its own patients, and a gym only its own members. This is built into how the products read and write data, not left to each screen.",
        "Inside your business, you decide who sees what. Every staff login has a role, such as front desk, teacher, accounts or door, and sees only the screens that role allows.",
      ],
    },
    {
      id: "sign-in",
      title: "Passwords and signing in",
      bullets: [
        "Passwords are stored only as a one-way scrambled code (bcrypt), so nobody, including us, can read them.",
        "After repeated wrong passwords, further attempts are blocked for a while, which stops people guessing.",
        "Sign-in uses secure cookies that the website's own scripts can't read, sent only over encrypted connections.",
        "When a member of staff leaves, remove their login and they can't sign in again.",
      ],
      paragraphs: [],
    },
    {
      id: "files",
      title: "Receipts, documents and photos",
      paragraphs: [
        "Uploaded files such as payment receipts, CNIC and licence copies, prescriptions and photos are kept in private storage, not on a public address that anyone could open or that search engines could find.",
        "We don't store card numbers. Payments in the products are made by bank transfer, JazzCash, Easypaisa or cash, with a receipt that your staff confirm.",
      ],
    },
    {
      id: "no-tracking",
      title: "No advertising or tracking",
      paragraphs: [
        "The products contain no advertising, no analytics trackers and no social media pixels. We don't sell your data or use it to market to your customers.",
        "Our own website, yourforce.io, uses Google Analytics only if a visitor agrees to it.",
      ],
    },
    {
      id: "our-access",
      title: "Who at YourForce can see your data",
      paragraphs: [
        "Our team looks inside a business's account only when needed: to set it up, to answer a support question, to fix a problem or to keep the service secure.",
        "Changes to businesses, subscriptions, roles and money are recorded in an activity log, and problems on our servers are reported to us so we can fix them quickly.",
      ],
    },
    {
      id: "your-control",
      title: "You stay in control",
      bullets: [
        "Your data is yours. Ask us at any time for an export of it.",
        "If you cancel, we keep your data for 60 days in case you change your mind, then delete it (see our Terms of Service).",
        "Every product has a read-only demo, so you can try it with sample data before putting in your own.",
      ],
      paragraphs: [],
    },
    {
      id: "honest",
      title: "What we don't claim",
      paragraphs: [
        "We're a small team. We don't yet hold security certifications such as ISO 27001 or SOC 2, and no online service can promise that nothing will ever go wrong. What we can promise is to look after your data carefully, to tell you quickly if something affects your account, and to answer your questions about it honestly.",
      ],
    },
    {
      id: "contact",
      title: "Questions, or found a problem?",
      paragraphs: [
        "If you have a question about how your data is handled, or you think you've found a security problem in one of our products, please email us. We read every message and reply within one working day.",
      ],
    },
  ],
};
