import type { ServiceIcon } from "@/lib/service-icons";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export type Services = {
  badge: string;
  heading: string;
  description: string;
  items: Service[];
};
