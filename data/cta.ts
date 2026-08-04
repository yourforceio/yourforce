import type { CTAData } from "@/types/cta";

export const cta: CTAData = {
  badge: {
    icon: "🚀",
    text: "Let's Build Together",
  },

  title: "Ready to Build",

  highlight: "Something Exceptional?",

  description:
    "Whether you're launching a new digital product, modernizing an existing platform, or scaling your eCommerce business, YourForce delivers secure, scalable, and high-performance software tailored to your goals.",

  highlights: [
    "15+ Years Industry Experience",
    "Salesforce Commerce Cloud Specialists",
    "Global Remote Delivery",
  ],

  buttons: [
    {
      label: "Start Your Project",
      href: "/contact",
      variant: "primary",
    },
    {
      label: "Book a Discovery Call",
      href: "/contact",
      variant: "secondary",
    },
  ],
};
