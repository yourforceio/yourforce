import type { Metadata } from "next";
import {
  CalendarRange,
  CarFront,
  ChartColumn,
  Gauge,
  IdCard,
  LifeBuoy,
  PhoneCall,
  Receipt,
  Rocket,
  Settings2,
  ShieldCheck,
  TrendingDown,
  Users,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { rentacarPage } from "@/data/products/rentacar";

export const metadata: Metadata = {
  title: { absolute: "Rent a Car Software & Booking System | YourForce Rent-a-Car" },
  description:
    "YourForce Rent-a-Car gives car rental companies their own booking website, a fleet calendar that never double-books a car or driver, CNIC and licence checks, deposits and the final bill. Book a demo.",
  alternates: {
    canonical: "/products/rentacar",
  },
  openGraph: {
    title: "Rent a Car Software & Booking System | YourForce Rent-a-Car",
    description:
      "Every car booked, never twice. Explore Swift Rent a Car, a live sample company.",
    url: "/products/rentacar",
    type: "website",
  },
};

export default function RentacarProductPage() {
  return (
    <ProductPage
      slug="rentacar"
      data={rentacarPage}
      icons={{
        challenges: [CalendarRange, IdCard, Receipt, TrendingDown],
        features: [CarFront, ShieldCheck, IdCard, Users, Gauge, ChartColumn],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
