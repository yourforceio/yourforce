import { ClipboardList, Code2, Rocket, Search } from "lucide-react";

import type { Process } from "@/types/process";

export const process: Process = {
  badge: "Our Process",

  heading: "A clear path from challenge to launch.",

  description:
    "Four practical stages keep scope, decisions, and progress visible from discovery through optimization.",

  deliverableLabel: "You Receive",

  principle:
    "Clear communication, visible progress, technical validation, and shared decisions at every stage.",

  items: [
    {
      number: "01",
      title: "Discovery",
      description:
        "Align business goals, customer journeys, constraints, and the measures that define success.",
      deliverable: "Requirements brief and success criteria",
      icon: Search,
    },
    {
      number: "02",
      title: "Planning & Architecture",
      description:
        "Define the platform approach, integrations, priorities, delivery phases, and technical roadmap.",
      deliverable: "Solution architecture and delivery roadmap",
      icon: ClipboardList,
    },
    {
      number: "03",
      title: "Development & Validation",
      description:
        "Build in focused increments and continuously review quality, performance, and accessibility.",
      deliverable: "Tested, production-ready software",
      icon: Code2,
    },
    {
      number: "04",
      title: "Launch & Optimization",
      description:
        "Prepare the release, monitor production, resolve issues quickly, and support ongoing improvement.",
      deliverable: "Deployment and optimization plan",
      icon: Rocket,
    },
  ],
};
