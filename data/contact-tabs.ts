/**
 * The three tabs on the contact form. Each one shows only the fields it needs; the form always posts the
 * same fields to /api/contact, so the API and email templates are unchanged.
 */
export type ContactTabId = "engineering" | "software" | "operations";

export type ContactTab = {
  id: ContactTabId;
  label: string;
  intro: string;
  serviceLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  /** Budget and timeline only matter for engineering projects. */
  showBudget: boolean;
  /** Offer the 30-minute call alongside the form. */
  offerCall: boolean;
};

export const contactTabs: ContactTab[] = [
  {
    id: "engineering",
    label: "Commerce engineering",
    intro: "Builds, upgrades, headless storefronts, integrations or a free PHP health check.",
    serviceLabel: "What do you need?",
    messageLabel: "Tell us about your platform",
    messagePlaceholder: "Your platform and version, what you'd like to change or fix, and any deadlines...",
    showBudget: true,
    offerCall: true,
  },
  {
    id: "software",
    label: "Ready-made software",
    intro: "A demo of one of our ten products, set up with your own details.",
    serviceLabel: "Which product?",
    messageLabel: "Tell us about your business",
    messagePlaceholder: "What kind of business, which city, how many staff or branches, and how you work today...",
    showBudget: false,
    offerCall: false,
  },
  {
    id: "operations",
    label: "Operations support",
    intro: "A back-office desk for your US team: dispatch, billing, data entry or insurance paperwork.",
    serviceLabel: "Which desk?",
    messageLabel: "What do you need?",
    messagePlaceholder: "What the work is, roughly how much of it each week, and when you'd like to start...",
    showBudget: false,
    offerCall: true,
  },
];
