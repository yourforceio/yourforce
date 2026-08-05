import {
  Handshake,
  Layers3,
  RefreshCw,
} from "lucide-react";

import type { WhyChoose } from "@/types/whyChoose";

export const whyChoose: WhyChoose = {
  badge: "⭐ Why Choose YourForce",

  heading:
    "Built for Complex Commerce. Designed for Long-Term Growth.",

  description:
    "YourForce combines enterprise-commerce experience, practical modernization strategies, and direct technical collaboration to deliver platforms that remain scalable, maintainable, and ready for change.",

  supportingText:
    "Deep enterprise-commerce experience with broader delivery capabilities across leading platforms, integrations, and modern frontend architecture.",

  items: [
    {
      eyebrow: "Platform Expertise",

      title: "Multi-Platform Commerce Engineering",

      description:
        "We help businesses build and evolve commerce experiences across Salesforce Commerce Cloud, Adobe Commerce, Shopify, WooCommerce, and modern headless architectures.",

      icon: Layers3,

      highlights: [
        "Platform-fit guidance",
        "Storefront and backend engineering",
        "Commerce ecosystem integrations",
      ],
    },

    {
      eyebrow: "Modernization Strategy",

      title: "Progressive Change Without Unnecessary Risk",

      description:
        "We modernize legacy platforms through practical, phased delivery that protects active business operations while introducing better architecture and customer experiences.",

      icon: RefreshCw,

      highlights: [
        "Phased replatforming",
        "Hybrid and headless transitions",
        "Performance and delivery improvements",
      ],
    },

    {
      eyebrow: "Delivery Partnership",

      title: "Direct, Transparent, Long-Term Collaboration",

      description:
        "We work closely with stakeholders throughout planning, implementation, launch, and continuous improvement—with clear communication and visible technical decisions.",

      icon: Handshake,

      highlights: [
        "Senior engineering involvement",
        "Clear progress and communication",
        "Support and optimization after launch",
      ],
    },
  ],
};
