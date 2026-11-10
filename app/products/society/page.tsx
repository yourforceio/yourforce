import type { Metadata } from "next";
import {
  Bell,
  ChartColumn,
  DoorOpen,
  Landmark,
  LifeBuoy,
  Megaphone,
  MessageSquareWarning,
  PhoneCall,
  Receipt,
  Rocket,
  Settings2,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { societyPage } from "@/data/products/society";

export const metadata: Metadata = {
  title: { absolute: "Housing Society Management Software | YourForce Society" },
  description:
    "Housing society software: maintenance dues with receipts, a defaulters list, complaints, notices, gate passes and the committee's accounts.",
  alternates: {
    canonical: "/products/society",
  },
  openGraph: {
    title: "Housing Society Management Software | YourForce Society",
    description:
      "Run your housing society, not the paperwork. Explore Green Valley Society, a live sample society.",
    url: "/products/society",
    type: "website",
  },
};

export default function SocietyProductPage() {
  return (
    <ProductPage
      slug="society"
      data={societyPage}
      icons={{
        challenges: [Wallet, MessageSquareWarning, DoorOpen, Landmark],
        features: [Receipt, Bell, MessageSquareWarning, DoorOpen, Megaphone, ChartColumn],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
