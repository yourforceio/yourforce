/** A practical guide (app/guides/[slug]): written to answer what a business owner searches for, then point to the product. */
export type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type Guide = {
  slug: string;
  /** The product this guide leads to (data/products slug). */
  product: string;
  title: string;
  /** Search result description (about 150 characters). */
  description: string;
  /** Short line on the guides list. */
  summary: string;
  updated: string; // ISO date
  readMinutes: number;
  intro: string[];
  sections: GuideSection[];
  /** How the YourForce product handles it: the last section, with a link to the product. */
  product_section: { heading: string; paragraphs: string[] };
  faq: { question: string; answer: string }[];
};
