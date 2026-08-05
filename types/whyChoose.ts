import type { LucideIcon } from "lucide-react";

export type WhyChooseItem = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export type WhyChoose = {
  badge: string;
  heading: string;
  description: string;
  supportingText: string;
  items: WhyChooseItem[];
};
