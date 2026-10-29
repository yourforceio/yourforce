import type { Metadata } from "next";
import {
  BellRing,
  CalendarCheck,
  CalendarDays,
  CalendarX2,
  ChartColumn,
  Globe,
  LifeBuoy,
  PhoneCall,
  PhoneMissed,
  Settings2,
  Share2,
  UserX,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { bookingsPage } from "@/data/products/bookings";

export const metadata: Metadata = {
  title: "YourForce Bookings — Online Booking for Salons, Clinics and Spas",
  description:
    "YourForce Bookings lets clients book appointments online 24/7 on your own page, with staff calendars, no double bookings, SMS and WhatsApp reminders, deposits by JazzCash and Easypaisa, and reports. Book a demo.",
  alternates: {
    canonical: "/products/bookings",
  },
  openGraph: {
    title: "YourForce Bookings — Online Booking for Salons, Clinics and Spas",
    description:
      "Clients book online 24/7, your team shares one calendar and reminders go out automatically. Try Glow Salon & Spa, a live sample salon.",
    url: "/products/bookings",
    type: "website",
  },
};

export default function BookingsProductPage() {
  return (
    <ProductPage
      data={bookingsPage}
      icons={{
        challenges: [PhoneMissed, CalendarX2, UserX, ChartColumn],
        features: [Globe, CalendarCheck, BellRing, Wallet, CalendarDays, ChartColumn],
        process: [PhoneCall, Settings2, Share2, LifeBuoy],
      }}
    />
  );
}
