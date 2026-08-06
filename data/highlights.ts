import {
  BadgeDollarSign,
  Clock3,
  Globe2,
  Laptop2,
} from "lucide-react";

import type { Highlight } from "@/types/highlight";

export const highlights: Highlight[] = [
  {
    title: "Global Commerce Delivery",

    description:
      "Commerce engineering experience across international markets, platforms, currencies, integrations, and customer journeys.",

    icon: Globe2,

    featured: true,
  },

  {
    title: "Remote-First Engineering",

    description:
      "A collaborative remote delivery model designed to integrate smoothly with distributed product and engineering teams.",

    icon: Laptop2,
  },

  {
    title: "Cost-Effective Engineering",

    description:
      "Senior engineering capability with practical engagement models that balance delivery quality, scalability, and cost.",

    icon: BadgeDollarSign,
  },

  {
    title: "Time-Zone Aligned Collaboration",

    description:
      "Flexible working-hour alignment to support customer teams across North America, Europe, the Middle East, and Asia.",

    icon: Clock3,
  },
];
