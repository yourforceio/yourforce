import type { Metadata } from "next";
import {
  Clock,
  Image,
  Inbox,
  LayoutTemplate,
  LifeBuoy,
  ListTree,
  Newspaper,
  Palette,
  PenLine,
  PhoneCall,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { sitesPage } from "@/data/products/sites";

export const metadata: Metadata = {
  title: { absolute: "Website Builder for Businesses in Pakistan | YourForce Web" },
  description:
    "A business website you manage yourself: pages from ready-made sections, menus with dropdowns, a rich text editor, SEO on every page, a blog, a media library and enquiries.",
  alternates: {
    canonical: "/products/sites",
  },
  openGraph: {
    title: "Website Builder for Businesses in Pakistan | YourForce Web",
    description: "A business website you change yourself. Explore Mehrab Architects, a live sample website.",
    url: "/products/sites",
    type: "website",
  },
};

export default function SitesProductPage() {
  return (
    <ProductPage
      slug="sites"
      data={sitesPage}
      icons={{
        challenges: [Clock, Search, Inbox, Smartphone],
        features: [LayoutTemplate, PenLine, ListTree, Search, Newspaper, Image, Inbox, Palette, ShieldCheck],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
