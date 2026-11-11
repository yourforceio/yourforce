/**
 * Plan prices shown on yourforce.io (product pages, cards and Google structured data).
 * Copied from each product's live Plan table on 2026-11-11 (the product sites show the same plans in their own
 * Pricing section). If a price changes in a product's admin, change it here too.
 * Prices are in PKR per month; yearly is the price for a full year paid up front.
 */

export type Plan = { name: string; monthly: number; yearly: number };

export type ProductPricing = {
  plans: Plan[];
  /** Where the full plan details (what's in each plan) are. */
  detailsHref: string;
};

export const pricing: Record<string, ProductPricing> = {
  schools: { detailsHref: "https://app.yourforce.io/#pricing", plans: [{ name: "Basic", monthly: 5000, yearly: 50000 }, { name: "Standard", monthly: 12000, yearly: 120000 }, { name: "Premium", monthly: 25000, yearly: 250000 }] },
  learn: { detailsHref: "https://learn.yourforce.io/#pricing", plans: [{ name: "Starter", monthly: 3000, yearly: 30000 }, { name: "Growth", monthly: 6500, yearly: 65000 }, { name: "Institute", monthly: 12000, yearly: 120000 }] },
  clinic: { detailsHref: "https://clinic.yourforce.io/#pricing", plans: [{ name: "Solo", monthly: 3000, yearly: 30000 }, { name: "Clinic", monthly: 8000, yearly: 80000 }, { name: "Medical centre", monthly: 15000, yearly: 150000 }] },
  commerce: { detailsHref: "https://shop.yourforce.io/#pricing", plans: [{ name: "Starter", monthly: 2500, yearly: 25000 }, { name: "Growth", monthly: 6000, yearly: 60000 }, { name: "Pro", monthly: 15000, yearly: 150000 }] },
  dine: { detailsHref: "https://dine.yourforce.io/#pricing", plans: [{ name: "Starter", monthly: 3000, yearly: 30000 }, { name: "Growth", monthly: 5000, yearly: 50000 }, { name: "Pro", monthly: 9000, yearly: 90000 }] },
  bookings: { detailsHref: "https://book.yourforce.io/#pricing", plans: [{ name: "Solo", monthly: 1500, yearly: 15000 }, { name: "Team", monthly: 4000, yearly: 40000 }, { name: "Business", monthly: 9000, yearly: 90000 }] },
  property: { detailsHref: "https://property.yourforce.io/#pricing", plans: [{ name: "Starter", monthly: 4000, yearly: 40000 }, { name: "Growth", monthly: 8000, yearly: 80000 }, { name: "Pro", monthly: 15000, yearly: 150000 }] },
  society: { detailsHref: "https://society.yourforce.io/#pricing", plans: [{ name: "Building", monthly: 5000, yearly: 50000 }, { name: "Society", monthly: 12000, yearly: 120000 }, { name: "Large society", monthly: 25000, yearly: 250000 }] },
  rentacar: { detailsHref: "https://rentacar.yourforce.io/#pricing", plans: [{ name: "Starter", monthly: 3500, yearly: 35000 }, { name: "Growth", monthly: 7500, yearly: 75000 }, { name: "Fleet", monthly: 15000, yearly: 150000 }] },
  events: { detailsHref: "https://events.yourforce.io/#pricing", plans: [{ name: "Starter", monthly: 3000, yearly: 30000 }, { name: "Organiser", monthly: 7500, yearly: 75000 }, { name: "Pro", monthly: 15000, yearly: 150000 }] },
  // Services is a marketplace: free for workers, customers pay a small visit fee per job. No plans.
};

export const rs = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;

/** "From Rs 3,000 / month", or null for products without plans. */
export const fromPrice = (slug: string) => {
  const p = pricing[slug];
  return p ? `From ${rs(Math.min(...p.plans.map((x) => x.monthly)))} / month` : null;
};
