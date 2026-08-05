export type Technology = {
  name: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectSummary = {
  platform: string;
  architecture: string;
  commerceModel: string;
  deliveryFocus: string;
};

export type ProjectMetricSection = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ProjectCTA = {
  eyebrow: string;
  title: string;
  description: string;
  service: string;
};

export type ProjectCaseStudy = {
  imageEyebrow: string;
  imageLabel: string;

  summary: ProjectSummary;

  metricSection: ProjectMetricSection;

  cta: ProjectCTA;
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

  caseStudy: ProjectCaseStudy;

  liveUrl?: string;
  githubUrl?: string;
};

export type Projects = {
  badge: string;
  heading: string;
  description: string;
  highlights: string[];
  items: PortfolioProject[];
};
