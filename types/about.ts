export type AboutStat = {
  value: string;
  label: string;
};

export type AboutAction = {
  label: string;
  href: string;
};

export type About = {
  badge: string;
  heading: string;
  description: string;
  highlights: string[];

  statsTitle: string;
  stats: AboutStat[];
  statsNote: string;

  action: AboutAction;
};
