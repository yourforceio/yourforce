export type DiscoveryCategory =
  | "Men"
  | "Women"
  | "Accessories";

export type DiscoveryPriceRange =
  | "under-75"
  | "75-125"
  | "125-plus";

export type DiscoverySort =
  | "relevance"
  | "price-low"
  | "price-high"
  | "name";

export type DiscoveryProduct = {
  id: string;
  slug: string;

  name: string;
  category: DiscoveryCategory;

  price: number;

  description: string;

  badge?: string;

  color: string;
  material: string;

  tags: string[];

  keywords: string[];

  visual: {
    from: string;
    to: string;
    accent: string;
  };
};

export type DiscoverySuggestion = {
  label: string;
  query: string;
};

export type ProductDiscoveryData = {
  metadata: {
    title: string;
    description: string;
  };

  lab: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
  };

  search: {
    placeholder: string;
    popularSearches: string[];
    suggestions: DiscoverySuggestion[];
  };

  products: DiscoveryProduct[];

  architecture: {
    heading: string;
    description: string;

    items: {
      title: string;
      description: string;
    }[];
  };
};
