export type HeroAction = {
  label: string;
  href: string;
  variant:
    | "primary"
    | "secondary";
};

export type HeroTechnology = {
  name: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type HeroHeading = {
  primary: string;
  accent: string;
};

export type HeroVisual = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type Hero = {
  badge: string;

  heading: HeroHeading;

  description: string;

  actions: HeroAction[];

  technologies: {
    title: string;
    items: HeroTechnology[];
  };

  stats: HeroStat[];

  visual: HeroVisual;
};
