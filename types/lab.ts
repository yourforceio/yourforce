import type { LucideIcon } from "lucide-react";

export type LabStatus =
  | "available"
  | "coming-soon";

export type LabItem = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;

  technologies: string[];
  capabilities: string[];

  preview: {
    src: string;
    alt: string;
  };

  duration: string;
  added: string;

  href: string;
  status: LabStatus;
  icon: LucideIcon;
  featured?: boolean;
};

export type LabData = {
  metadata: {
    title: string;
    description: string;
  };

  hero: {
    badge: string;

    heading: {
      primary: string;
      accent: string;
    };

    description: string;

    tags: string[];
  };

  introduction: {
    eyebrow: string;
    heading: string;
    description: string;
  };

  items: LabItem[];

  roadmap: {
    eyebrow: string;
    heading: string;
    description: string;
  };

  philosophy: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
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
