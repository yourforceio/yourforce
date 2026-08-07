export type CommerceCategory =
  | "All"
  | "Men"
  | "Women"
  | "Accessories";

export type CommerceSort =
  | "featured"
  | "price-low"
  | "price-high";

export type CommerceProduct = {
  id: string;
  slug: string;
  name: string;
  category: Exclude<CommerceCategory, "All">;
  price: number;
  description: string;
  badge?: string;
  sizes: string[];
  visual: {
    from: string;
    to: string;
    accent: string;
  };
};

export type CommerceCartItem = {
  product: CommerceProduct;
  size: string;
  quantity: number;
};

export type HeadlessCommerceData = {
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

  storefront: {
    brand: string;
    announcement: string;
    heading: string;
    description: string;
  };

  categories: CommerceCategory[];

  products: CommerceProduct[];

  architecture: {
    heading: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
};
