import { BadgeDollarSign, Clock3, Globe2, Laptop2 } from "lucide-react";

import type { Highlight } from "@/types/highlight";

export const highlights: Highlight[] = [
  {
    title: "Global Commerce Delivery",
    description:
      "Experience across international markets, platforms, integrations, and customer journeys.",
    icon: Globe2,
    featured: true,
  },
  {
    title: "Remote-First Engineering",
    description:
      "Direct collaboration designed to fit distributed product and engineering teams.",
    icon: Laptop2,
  },
  {
    title: "Practical Engagement Models",
    description:
      "Senior capability structured around delivery priorities, scalability, and responsible cost.",
    icon: BadgeDollarSign,
  },
  {
    title: "Time-Zone Alignment",
    description:
      "Flexible working-hour overlap for teams across North America, Europe, the Middle East, and Asia.",
    icon: Clock3,
  },
];
