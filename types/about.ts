export type AboutStat = {
  value: string;
  label: string;
};

export type About = {
  badge: string;
  heading: string;
  description: string;
  highlights: string[];
  stats: AboutStat[];
};
