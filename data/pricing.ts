/**
 * Plan prices shown on yourforce.io (product pages, cards and Google structured data).
 * The prices are set in each product's Super admin → Plans; `livePricing` reads them from the product's /api/plans
 * and refreshes every 10 minutes. The copy below is only the fallback for when a product can't be reached.
 * Prices are in PKR per month; yearly is the price for a full year paid up front.
 */

export type Plan = { name: string; monthly: number; yearly: number };

export type ProductPricing = {
  plans: Plan[];
  /** Where the full plan details (what's in each plan) are. */
  detailsHref: string;
};

/** Fallback copy of each product's plans (last copied 2026-11-18). */
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
  gym: { detailsHref: "https://gym.yourforce.io/#pricing", plans: [{ name: "Starter", monthly: 3000, yearly: 30000 }, { name: "Growth", monthly: 6000, yearly: 60000 }, { name: "Pro", monthly: 12000, yearly: 120000 }] },
  sites: { detailsHref: "https://sites.yourforce.io/#pricing", plans: [{ name: "Starter", monthly: 2000, yearly: 20000 }, { name: "Business", monthly: 4000, yearly: 40000 }, { name: "Pro", monthly: 8000, yearly: 80000 }] },
  // Services is a marketplace: free for workers, customers pay a small visit fee per job. No plans.
};

export const rs = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;

const isPlan = (x: unknown): x is Plan => {
  const p = x as Plan;
  return !!p && typeof p.name === "string" && Number.isFinite(p.monthly) && Number.isFinite(p.yearly);
};

/** A product's plans as set in its own admin, or the fallback copy if it can't be reached. */
export async function livePricing(slug: string): Promise<ProductPricing | undefined> {
  const fallback = pricing[slug];
  if (!fallback) return undefined;
  try {
    const res = await fetch(`${new URL(fallback.detailsHref).origin}/api/plans`, { next: { revalidate: 600 }, signal: AbortSignal.timeout(4000) });
    if (!res.ok) return fallback;
    const plans = ((await res.json()) as { plans?: unknown[] }).plans?.filter(isPlan);
    return plans?.length ? { ...fallback, plans } : fallback;
  } catch {
    return fallback;
  }
}

/** Every product's plans, fetched together. */
export async function livePricingAll(): Promise<Record<string, ProductPricing>> {
  const slugs = Object.keys(pricing);
  const all = await Promise.all(slugs.map((s) => livePricing(s)));
  return Object.fromEntries(slugs.map((s, i) => [s, all[i]!]));
}

/** "From Rs 3,000 / month", or null for products without plans. */
export const fromPrice = (p: ProductPricing | undefined) => (p ? `From ${rs(Math.min(...p.plans.map((x) => x.monthly)))} / month` : null);
