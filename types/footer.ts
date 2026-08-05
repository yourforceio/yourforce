import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";

export interface FooterLink {
  label: string;
  href?: string;
  external?: boolean;

  /**
   * Optional fields used for richer footer items,
   * such as the Contact column.
   */
  description?: string;
  icon?: LucideIcon;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterSocial {
  name: string;
  href: string;
  external?: boolean;

  icon: ComponentType<{
    size?: number;
    className?: string;
  }>;
}

export interface FooterData {
  company: {
    tagline: string;
    description: string;
    availability: string;
  };

  columns: FooterColumn[];
  socials: FooterSocial[];

  bottom: {
    copyright: string;
    builtWith: string;
    links: FooterLink[];
  };
}
