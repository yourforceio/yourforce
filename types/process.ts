import type { LucideIcon } from "lucide-react";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  deliverable: string;
  icon: LucideIcon;
};

export type Process = {
  badge: string;
  heading: string;
  description: string;
  deliverableLabel: string;
  principle: string;
  items: ProcessStep[];
};
