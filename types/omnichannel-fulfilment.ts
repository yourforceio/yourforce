export type FulfilmentAvailability =
  | "available"
  | "low-stock"
  | "unavailable";

export type FulfilmentProduct = {
  id: string;
  name: string;
  price: number;
  category: string;

  visual: {
    from: string;
    to: string;
    accent: string;
  };
};

export type StoreInventory = {
  productId: string;
  quantity: number;
};

export type FulfilmentStore = {
  id: string;

  name: string;

  address: string;
  city: string;
  state: string;
  postalCode: string;

  distance: number;

  hours: string;

  services: string[];

  inventory: StoreInventory[];
};

export type OmnichannelFulfilmentData = {
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

  experience: {
    heading: string;
    description: string;
    placeholder: string;
  };

  products: FulfilmentProduct[];

  stores: FulfilmentStore[];

  architecture: {
    heading: string;
    description: string;

    items: {
      title: string;
      description: string;
    }[];
  };
};
