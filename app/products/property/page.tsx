import type { Metadata } from "next";
import {
  Clock,
  Globe,
  Heart,
  Inbox,
  LifeBuoy,
  MapPinned,
  MessageSquareWarning,
  PhoneCall,
  Rocket,
  Ruler,
  Settings2,
  TrendingDown,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { propertyPage } from "@/data/products/property";

export const metadata: Metadata = {
  title: { absolute: "Real Estate Agency Website & CRM in Pakistan | YourForce Property" },
  description:
    "A website for real estate agencies: listings in marla and kanal, maps with nearby Metro stations, viewing requests and every enquiry tracked.",
  alternates: {
    canonical: "/products/property",
  },
  openGraph: {
    title: "Real Estate Agency Website & CRM in Pakistan | YourForce Property",
    description:
      "Your agency's own property website, with every enquiry tracked. Browse Skyline Estates, a live sample agency.",
    url: "/products/property",
    type: "website",
  },
};

export default function PropertyProductPage() {
  return (
    <ProductPage
      slug="property"
      data={propertyPage}
      icons={{
        challenges: [MessageSquareWarning, Wallet, Clock, TrendingDown],
        features: [Globe, Ruler, MapPinned, Heart, Inbox, PhoneCall],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
