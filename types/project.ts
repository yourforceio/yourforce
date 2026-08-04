export type Technology = {
  name: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type PortfolioProject = {
  slug: string;
  featured: boolean;

  category: string;
  title: string;

  shortDescription: string;
  description: string;

  image: string;

  technologies: Technology[];

  overview: string;
  challenge: string;
  solution: string;

  metrics: ProjectMetric[];

  liveUrl?: string;
  githubUrl?: string;
};

export type Projects = {
  badge: string;
  heading: string;
  description: string;
  items: PortfolioProject[];
};
