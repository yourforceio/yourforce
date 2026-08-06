import type { LucideIcon } from "lucide-react";

export type WorkplaceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type WorkplaceStep = {
  number: string;
  title: string;
  description: string;
};

export type Workplace = {
  metadata: {
    title: string;
    description: string;
  };

  badge: string;

  heading: {
    primary: string;
    accent: string;
  };

  description: string;

  status: string;

  principles: WorkplaceCard[];

  benefits: WorkplaceCard[];

  model: {
    badge: string;
    heading: string;
    description: string;
    steps: WorkplaceStep[];
  };

  commitment: {
    badge: string;
    heading: string;
    description: string;
    items: string[];
  };

  cta: {
    heading: string;
    description: string;

    primary: {
      label: string;
      href: string;
    };

    secondary: {
      label: string;
      href: string;
    };
  };
};
