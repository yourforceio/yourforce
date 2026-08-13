import { Globe2, Handshake, Layers3, RefreshCw } from "lucide-react";

import type { WhyChoose } from "@/types/whyChoose";

export const whyChoose: WhyChoose = {
  badge: "Why YourForce",

  heading: "Commerce engineering that stays practical as you grow.",

  description:
    "Direct senior engineering, controlled modernization, and architecture shaped around real business requirements—not unnecessary complexity.",

  supportingText:
    "From architecture through launch and optimization, technical decisions remain connected to business outcomes and customer experience.",

  items: [
    {
      eyebrow: "Platform Fit",
      title: "Architecture Built Around the Business",
      description:
        "Select and evolve the commerce architecture that best supports your customers, operations, integrations, and growth plans.",
      icon: Layers3,
      highlights: [
        "Platform-fit guidance",
        "Storefront and backend engineering",
        "Integration-ready design",
      ],
    },
    {
      eyebrow: "Controlled Modernization",
      title: "Progress Without Unnecessary Disruption",
      description:
        "Modernize established platforms in practical phases that protect active operations while improving architecture and experience.",
      icon: RefreshCw,
      highlights: [
        "Phased replatforming",
        "Hybrid and headless transitions",
        "Performance-led improvements",
      ],
    },
    {
      eyebrow: "Direct Partnership",
      title: "Senior Involvement From Planning to Launch",
      description:
        "Work directly with experienced engineering leadership throughout discovery, delivery, production launch, and continued improvement.",
      icon: Handshake,
      highlights: [
        "Visible technical decisions",
        "Direct access to senior engineering—no hand-offs",
        "Support beyond launch",
      ],
    },
    {
      eyebrow: "Global Delivery",
      title: "Built for Distributed, Global Teams",
      description:
        "Senior engineering delivered through a flexible, transparent model—with working-hour overlap across North America, Europe, the Middle East, and Asia, structured around delivery priorities and responsible cost.",
      icon: Globe2,
      highlights: [
        "International markets & multi-platform experience",
        "Time-zone aligned collaboration",
        "Practical, cost-conscious engagement",
      ],
    },
  ],
};
