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
  title: { absolute: "Salon & Clinic Appointment Booking Software | YourForce Bookings" },
  description:
    "Online booking for salons, clinics and spas: your own booking page, staff calendars, no double bookings, and deposits by JazzCash and Easypaisa.",
  alternates: {
    canonical: "/products/bookings",
  },
  openGraph: {
    title: "Salon & Clinic Appointment Booking Software | YourForce Bookings",
    description:
      "Clients book online 24/7, your team shares one calendar and reminders go out once set up. Try Glow Salon & Spa, a live sample salon.",
    url: "/products/bookings",
    type: "website",
  },
};

export default function BookingsProductPage() {
  return (
    <ProductPage
      slug="bookings"
      data={bookingsPage}
      icons={{
        challenges: [PhoneMissed, CalendarX2, UserX, ChartColumn],
        features: [Globe, CalendarCheck, BellRing, Wallet, CalendarDays, ChartColumn],
        process: [PhoneCall, Settings2, Share2, LifeBuoy],
      }}
    />
  );
}
