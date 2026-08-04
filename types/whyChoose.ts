import type { LucideIcon } from "lucide-react";

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type WhyChoose = {
  badge: string;
  heading: string;
  description: string;
  items: WhyChooseItem[];
};
