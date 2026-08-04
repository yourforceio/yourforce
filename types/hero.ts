export type HeroAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type HeroTechnology = {
  name: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type Hero = {
  badge: string;
  heading: [string, string];
  description: string;
  actions: HeroAction[];
  technologies: {
    title: string;
    items: HeroTechnology[];
  };
  stats: HeroStat[];
};