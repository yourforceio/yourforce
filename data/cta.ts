import type { CTAData } from "@/types/cta";

export const cta: CTAData = {
  badge: {
    icon: "🚀",
    text: "Start a Conversation",
  },

  title: "Have a Commerce Challenge?",

  highlight: "Let’s Build the Right Solution.",

  description:
    "Whether you are launching a new storefront, modernizing a legacy platform, integrating business systems, or scaling an existing commerce experience, YourForce can help you define and deliver the right technical approach.",

  highlights: [
    "Platform-independent guidance",
    "Senior engineering involvement",
    "Global remote collaboration",
  ],

  buttons: [
    {
      label: "Start Your Project",
      href: "/contact",
      variant: "primary",
    },
    {
      label: "Explore Our Work",
      href: "/portfolio",
      variant: "secondary",
    },
  ],

  process: {
    eyebrow: "What Happens Next",

    title: "A Practical First Conversation",

    description:
      "We begin by understanding your business priorities, current platform, technical constraints, and desired outcomes.",

    steps: [
      {
        number: "01",
        title: "Share Your Goals",
        description:
          "Tell us about your platform, business challenge, and desired outcome.",
      },
      {
        number: "02",
        title: "Review the Best Approach",
        description:
          "We identify practical platform, architecture, and delivery options.",
      },
      {
        number: "03",
        title: "Define the Next Steps",
        description:
          "You receive clear recommendations for scope, priorities, and delivery phases.",
      },
    ],

    response: {
      label: "Response Time",
      text: "We typically respond within one business day.",
    },
  },
};
