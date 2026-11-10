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
  title: { absolute: "Restaurant Online Ordering & QR Menu System | YourForce Dine" },
  description:
    "Restaurant ordering with no commission: your own page for delivery and takeaway, QR table ordering, a live kitchen screen, deals and reports.",
  alternates: {
    canonical: "/products/dine",
  },
  openGraph: {
    title: "Restaurant Online Ordering & QR Menu System | YourForce Dine",
    description:
      "Your own ordering page, table QR codes and a live kitchen screen, with no commission. Try Karachi Grill, a live sample restaurant.",
    url: "/products/dine",
    type: "website",
  },
};

export default function DineProductPage() {
  return (
    <ProductPage
      slug="dine"
      data={dinePage}
      icons={{
        challenges: [Wallet, MessageSquareWarning, Clock, ChefHat],
        features: [Globe, QrCode, ChefHat, BadgePercent, Bike, ChartColumn],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
