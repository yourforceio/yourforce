import type { PrivacyPolicy } from "@/types/privacy";

/** Terms of Service for the YourForce software products (app/terms). Engineering and operations work is covered by a separate written agreement. */
export const termsOfService: PrivacyPolicy = {
  badge: "The Rules, In Plain English",

  title: "Terms of Service",

  description:
    "These terms cover subscriptions to the YourForce software products: Schools, Learn, Clinic, Gym, Commerce, Dine, Bookings, Property, Society, Rent-a-Car, Events, Web and Services.",

  lastUpdated: "November 18, 2026",

  contactEmail: "hello@yourforce.io",

  sections: [
    {
      id: "who-we-are",
      title: "1. Who we are and what these terms cover",
      paragraphs: [
        "YourForce is a business services and technology company based in Lahore, Pakistan. These terms apply when a business (“you”) subscribes to one of our software products and uses its portal, its website for your customers, and its apps.",
        "Commerce engineering projects and operations support (such as trucking dispatch or medical billing) are covered by a separate written agreement or statement of work, which takes priority over these terms for that work.",
        "By starting a free trial or paying for a plan, you agree to these terms on behalf of your business. If you don't agree, please don't use the products.",
      ],
    },
    {
      id: "accounts",
      title: "2. Your account and your staff",
      paragraphs: [
        "You need to give us correct details about your business and keep them up to date. The person who opens the account must be allowed to agree to these terms for the business.",
        "You decide which staff get a login and what each role can see. Keep passwords private, remove staff who leave, and tell us straight away if you think someone has got into your account. You're responsible for what happens under your logins.",
      ],
    },
    {
      id: "trial",
      title: "3. Free trial",
      paragraphs: [
        "Most plans start with a free trial, usually 14 days. We don't ask for payment details to start a trial, and nothing is charged automatically when it ends.",
        "When the trial ends, choose a plan and pay to keep using the product. Until you do, the account is paused as described in section 5; your data stays as it was.",
      ],
    },
    {
      id: "plans-and-payment",
      title: "4. Plans, prices and payment",
      paragraphs: [
        "Plans are billed monthly or yearly, in Pakistani rupees, at the prices shown on the product's website when you pay. A yearly plan is paid up front for twelve months.",
        "You can pay by bank transfer, JazzCash or Easypaisa. A subscription starts or renews once we have confirmed the payment.",
        "We may change our prices. If we do, we'll tell you at least 30 days before your next renewal; the price you've already paid for the current month or year doesn't change.",
        "Prices don't include any tax that applies to you; if we have to charge tax, we'll show it on the invoice.",
      ],
    },
    {
      id: "late-payment",
      title: "5. If a payment is late",
      paragraphs: [
        "If a subscription isn't renewed on time, you have a 7-day grace period in which everything keeps working. After that, the account is paused: your staff can't make changes, and online booking or ordering on your website is paused.",
        "Paying brings everything back as it was. We don't delete a paused account's data because of a late payment; see section 7 for what happens after a cancellation.",
      ],
    },
    {
      id: "your-data",
      title: "6. Your data",
      paragraphs: [
        "Your data is yours: your customers, students, patients, members, orders, bookings and everything else you put into the product. We use it only to run the product for you and to support you, as described in our Privacy Policy.",
        "We don't sell your data, and we don't contact your customers for our own marketing. Our staff look at your account only when needed to support you, fix a problem or keep the service secure.",
        "You're responsible for having the right to collect the personal information you store, and for telling your own customers how you use it.",
        "How we keep your data safe is explained on our Data Safety page (yourforce.io/security).",
      ],
    },
    {
      id: "cancelling",
      title: "7. Cancelling",
      paragraphs: [
        "You can cancel at any time by email or WhatsApp. The product keeps working until the end of the month or year you've paid for, and isn't renewed after that.",
        "Before or after cancelling, you can ask us for an export of your data. We keep a cancelled account's data for 60 days, in case you change your mind, and then delete it, except where the law requires us to keep records longer.",
        "Refunds are covered by our Refund Policy.",
      ],
    },
    {
      id: "acceptable-use",
      title: "8. Using the products fairly",
      paragraphs: ["You agree not to use the products to:"],
      bullets: [
        "break the law, including consumer, tax, health and data protection rules that apply to your business;",
        "publish content that is false, misleading, offensive or that you don't have the right to use;",
        "send messages to people who haven't agreed to hear from you;",
        "try to get into another business's account or data, or test or overload our systems without our written permission;",
        "copy, resell or rent out the products without a written agreement with us.",
      ],
    },
    {
      id: "your-business",
      title: "9. Your business and your customers",
      paragraphs: [
        "You're responsible for your own business: your prices, your services and goods, your refunds to your customers, and the information on your website. Payments your customers make (for example a JazzCash receipt uploaded for a booking) are between you and your customer; we don't hold that money.",
        "SMS and WhatsApp messages are sent once a messaging provider is connected for your account. Message delivery depends on the provider and the network, so don't rely on a single message for anything critical.",
      ],
    },
    {
      id: "service",
      title: "10. Availability, support and changes",
      paragraphs: [
        "We work hard to keep the products running and your data backed up, but no online service can promise to be available every minute. We may need short maintenance breaks, and we'll try to schedule them outside your busy hours.",
        "Support is by WhatsApp and email during working hours. We'll set the product up with you at the start.",
        "We improve the products all the time. If we remove something important you rely on, we'll tell you in advance.",
      ],
    },
    {
      id: "liability",
      title: "11. Our liability",
      paragraphs: [
        "If something goes wrong because of us, our total liability to you is limited to the fees you paid us for the product in the three months before the problem. We're not liable for indirect losses such as lost profits or lost business.",
        "Nothing in these terms limits liability that can't be limited by law.",
      ],
    },
    {
      id: "suspension",
      title: "12. When we can suspend an account",
      paragraphs: [
        "We may suspend an account that seriously breaks these terms, is used for fraud, or puts other customers or our systems at risk. Where we can, we'll warn you first and give you a chance to fix the problem.",
      ],
    },
    {
      id: "law",
      title: "13. Law and disputes",
      paragraphs: [
        "These terms are governed by the laws of Pakistan. If we can't settle a disagreement by talking, the courts of Lahore will decide it.",
      ],
    },
    {
      id: "changes",
      title: "14. Changes to these terms",
      paragraphs: [
        "We may update these terms. For changes that matter, we'll tell you at least 30 days in advance by email or WhatsApp. The date at the top shows when they last changed.",
      ],
    },
    {
      id: "contact",
      title: "15. Contact",
      paragraphs: ["Questions about these terms? Email us and a real person will reply."],
    },
  ],
};
