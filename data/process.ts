import {
  ClipboardList,
  Code2,
  Rocket,
  Search,
} from "lucide-react";

import type { Process } from "@/types/process";

export const process: Process = {
  badge: "⚙️ Our Process",

  heading:
    "A Clear Path from Business Challenge to Successful Launch.",

  description:
    "Our delivery process keeps priorities visible, reduces unnecessary risk, and gives stakeholders a clear understanding of what is being built, why it matters, and what comes next.",

  deliverableLabel: "You Receive",

  principle:
    "Every stage includes clear communication, visible progress, technical validation, and shared decision-making.",

  items: [
    {
      number: "01",

      title: "Discovery",

      description:
        "We understand your business goals, customer journeys, technical environment, operational constraints, and measures of success.",

      deliverable:
        "Requirements brief and agreed success criteria",

      icon: Search,
    },

    {
      number: "02",

      title: "Planning & Architecture",

      description:
        "We define the platform approach, solution architecture, integrations, delivery phases, priorities, and technical roadmap.",

      deliverable:
        "Solution architecture and delivery roadmap",

      icon: ClipboardList,
    },

    {
      number: "03",

      title: "Development & Validation",

      description:
        "We build in structured increments, maintain close collaboration, validate functionality, and continuously review quality and performance.",

      deliverable:
        "Tested, production-ready software increments",

      icon: Code2,
    },

    {
      number: "04",

      title: "Launch & Optimization",

      description:
        "We prepare production deployment, monitor the release, resolve launch issues, and support ongoing optimization after go-live.",

      deliverable:
        "Deployment, monitoring, and optimization plan",

      icon: Rocket,
    },
  ],
};
