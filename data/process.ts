import { Search, ClipboardList, Code2, Rocket } from "lucide-react";

import type { Process } from "@/types/process";

export const process: Process = {
  badge: "⚙️ Our Process",

  heading: "A Simple Process. Exceptional Results.",

  description:
    "From discovery to deployment, we follow a structured development process that ensures transparency, quality, and long-term success.",

  items: [
    {
      number: "01",
      title: "Discovery",

      description:
        "Understand your business goals, technical requirements, and product vision before we begin development.",

      icon: Search,
    },

    {
      number: "02",
      title: "Planning",

      description:
        "Define architecture, timelines, milestones, and the right technology stack for long-term success.",

      icon: ClipboardList,
    },

    {
      number: "03",
      title: "Development",

      description:
        "Build scalable, secure software with modern engineering practices and continuous collaboration.",

      icon: Code2,
    },

    {
      number: "04",
      title: "Launch & Support",

      description:
        "Deploy with confidence, monitor performance, and continuously improve your product.",

      icon: Rocket,
    },
  ],
};
