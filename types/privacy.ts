export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PrivacyPolicy = {
  badge: string;
  title: string;
  description: string;
  lastUpdated: string;
  contactEmail: string;
  sections: PrivacySection[];
};
