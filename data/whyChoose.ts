import {
  ShieldCheck,
  Rocket,
  Cpu,
  Layers3,
  Users,
  MessageSquare,
} from "lucide-react";

import type { WhyChoose } from "@/types/whyChoose";

export const whyChoose: WhyChoose = {
  badge: "⭐ Why Choose YourForce",

  heading: "Built for Long-Term Success",

  description:
    "We combine enterprise engineering expertise with modern technologies to deliver software that is scalable, maintainable, and built for business growth.",

  items: [
    {
      icon: ShieldCheck,
      title: "Enterprise Expertise",
      description:
        "15+ years delivering enterprise-grade commerce and business platforms.",
    },
    {
      icon: Rocket,
      title: "Performance First",
      description:
        "Fast, optimized applications focused on user experience and business outcomes.",
    },
    {
      icon: Cpu,
      title: "Modern Technology",
      description:
        "React, Next.js, Salesforce Commerce Cloud, Node.js and cloud-native architecture.",
    },
    {
      icon: Layers3,
      title: "Scalable Architecture",
      description:
        "Clean, maintainable code designed to support long-term product evolution.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description:
        "Clear updates, predictable delivery, and close collaboration throughout every project.",
    },
    {
      icon: Users,
      title: "Long-Term Partnership",
      description:
        "We don't disappear after launch—we continue supporting and improving your product.",
    },
  ],
};
