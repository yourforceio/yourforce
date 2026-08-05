import type { ServiceIcon } from "@/lib/service-icons";

export type ServiceTechnology = {
  name: string;
};

export type Service = {
  title: string;
  description: string;
  eyebrow?: string;
  icon: ServiceIcon;
  stack: ServiceTechnology[];
  href: string;
  ctaLabel: string;
  featured?: boolean;
};

export type Services = {
  badge: string;
  heading: string;
  description: string;
  items: Service[];
};
