import type { LucideIcon } from "lucide-react";

export type LabStatus =
  | "available"
  | "coming-soon";

export type LabCategory =
  | "shopify"
  | "sfcc"
  | "ai-commerce";

export type LabItem = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;

  categories: LabCategory[];

  technologies: string[];
  capabilities: string[];

  preview: {
    src: string;
    alt: string;
  };

  duration: string;
  added: string;

  href: string;
  external?: boolean;
  ctaLabel?: string;
  previewLabel?: string;
  highlight?: boolean;
  status: LabStatus;
  icon: LucideIcon;
  featured?: boolean;
  featuredRank?: number;
};

export type LabUpcomingItem = {
  title: string;
  description: string;
  statusLabel: "In progress" | "Planned";
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

  upcomingShopify: LabUpcomingItem[];

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
