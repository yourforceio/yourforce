import type { Metadata } from "next";
import {
  CalendarClock,
  ChartColumn,
  Copy,
  LifeBuoy,
  PhoneCall,
  Presentation,
  QrCode,
  Rocket,
  ScanLine,
  Settings2,
  ShieldCheck,
  Store,
  Ticket,
  Users,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { eventsPage } from "@/data/products/events";

export const metadata: Metadata = {
  title: { absolute: "Event Ticketing Software in Pakistan | YourForce Events" },
  description:
    "Sell event tickets online in Pakistan: your own ticket website, time slots for attractions, JazzCash, Easypaisa or pay at the venue, QR tickets and a gate scanner.",
  alternates: {
    canonical: "/products/events",
  },
  openGraph: {
    title: "Event Ticketing Software in Pakistan | YourForce Events",
    description:
      "Sell every ticket, scan every guest. Explore Crescent Events, a live sample organiser.",
    url: "/products/events",
    type: "website",
  },
};

export default function EventsProductPage() {
  return (
    <ProductPage
      slug="events"
      data={eventsPage}
      icons={{
        challenges: [Users, Wallet, Copy, ChartColumn],
        features: [Ticket, CalendarClock, ShieldCheck, Wallet, QrCode, Store, Presentation, ScanLine, ChartColumn],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
