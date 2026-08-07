export type GuidedShoppingCategory =
  | "Men"
  | "Women"
  | "Accessories";

export type GuidedShoppingProduct = {
  id: string;
  slug: string;

  name: string;
  category: GuidedShoppingCategory;

  price: number;

  description: string;

  attributes: string[];
  useCases: string[];
  keywords: string[];

  visual: {
    from: string;
    to: string;
    accent: string;
  };

  pickup: {
    store: string;
    distance: number;
    quantity: number;
  };
};

export type GuidedShoppingPrompt = {
  label: string;
  message: string;
};

export type GuidedShoppingMessage = {
  id: string;

  role:
    | "assistant"
    | "user";

  text: string;
};

export type AgenticGuidedShoppingData = {
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

  assistant: {
    name: string;
    introduction: string;
    placeholder: string;
    disclaimer: string;
    prompts: GuidedShoppingPrompt[];
  };

  products: GuidedShoppingProduct[];

  architecture: {
    heading: string;
    description: string;

    items: {
      title: string;
      description: string;
    }[];
  };
};
