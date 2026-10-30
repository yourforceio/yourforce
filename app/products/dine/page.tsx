import type { Metadata } from "next";
import {
  BadgePercent,
  Bike,
  ChartColumn,
  ChefHat,
  Clock,
  Globe,
  LifeBuoy,
  MessageSquareWarning,
  PhoneCall,
  QrCode,
  Rocket,
  Settings2,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { dinePage } from "@/data/products/dine";

export const metadata: Metadata = {
  title: "YourForce Dine — Online Ordering for Restaurants",
  description:
    "YourForce Dine gives restaurants their own ordering page for delivery and takeaway, QR codes for ordering from the table, a live kitchen screen, add-ons and deals, and reports. No commission on orders. Book a demo.",
  alternates: {
    canonical: "/products/dine",
  },
  openGraph: {
    title: "YourForce Dine — Online Ordering for Restaurants",
    description:
      "Your own ordering page, table QR codes and a live kitchen screen, with no commission. Try Karachi Grill, a live sample restaurant.",
    url: "/products/dine",
    type: "website",
  },
};

export default function DineProductPage() {
  return (
    <ProductPage
      data={dinePage}
      icons={{
        challenges: [Wallet, MessageSquareWarning, Clock, ChefHat],
        features: [Globe, QrCode, ChefHat, BadgePercent, Bike, ChartColumn],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
