export type ProductIcon = "school" | "commerce" | "bookings" | "dine" | "property";

type TitledItem = {
  title: string;
  description: string;
};

/** A card on the /products page and a link in the footer. */
export type ProductSummary = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  icon: ProductIcon;
  features: readonly string[];
  href: string;
  ctaLabel: string;
  demoHref: string;
  demoLabel: string;
};

/** Content for one product page (components/products/ProductPage.tsx). */
export type ProductPageData = {
  hero: {
    badge: string;
    heading: string;
    description: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
    highlights: readonly string[];
  };

  overview: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly string[];
  };

  liveDemo: {
    eyebrow: string;
    heading: string;
    description: string;
    stats: readonly { value: string; label: string }[];
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
  };

  challenges: {
    eyebrow: string;
    heading: string;
    description: string;
    items: readonly TitledItem[];
  };

  features: {
    id: string;
    eyebrow: string;
    heading: string;
    items: readonly TitledItem[];
  };

  process: {
    eyebrow: string;
    heading: string;
    steps: readonly TitledItem[];
  };

  audiences: {
    eyebrow: string;
    heading: string;
    items: readonly TitledItem[];
  };

  faq: {
    eyebrow: string;
    heading: string;
    items: readonly { question: string; answer: string }[];
  };

  finalCta: {
    heading: string;
    description: string;
    ctaLabel: string;
    href: string;
  };
};
