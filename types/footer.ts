import type { IconType } from "react-icons";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterSocial {
  name: string;
  href: string;
  icon: ComponentType<{
    size?: number;
    className?: string;
  }>;
}

export interface FooterData {
  company: {
    name: string;
    tagline: string;
    description: string;
  };

  columns: FooterColumn[];

  socials: FooterSocial[];

  bottom: {
    copyright: string;
    builtWith: string;
    links: IconType;
  };
}
