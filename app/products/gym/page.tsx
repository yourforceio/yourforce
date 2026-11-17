import type { Metadata } from "next";
import {
  CalendarClock,
  ChartColumn,
  CircleAlert,
  Globe,
  LifeBuoy,
  PhoneCall,
  QrCode,
  Rocket,
  Settings2,
  ShieldCheck,
  Smartphone,
  Snowflake,
  Users,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { gymPage } from "@/data/products/gym";

export const metadata: Metadata = {
  title: { absolute: "Gym Management Software in Pakistan | YourForce Gym" },
  description:
    "Gym and fitness-studio software for Pakistan: memberships and fees with receipts, a dues list, QR check-in at the desk, classes booked online and your own gym website.",
  alternates: {
    canonical: "/products/gym",
  },
  openGraph: {
    title: "Gym Management Software in Pakistan | YourForce Gym",
    description: "Every member, every fee, every visit. Explore Iron Peak Fitness, a live sample gym.",
    url: "/products/gym",
    type: "website",
  },
};

export default function GymProductPage() {
  return (
    <ProductPage
      slug="gym"
      data={gymPage}
      icons={{
        challenges: [Wallet, CircleAlert, Users, ChartColumn],
        features: [Users, Wallet, QrCode, Snowflake, CalendarClock, Smartphone, Globe, ShieldCheck, ChartColumn],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
