import type { Metadata } from "next";
import {
  CalendarX,
  ClipboardCheck,
  EyeOff,
  HandCoins,
  IdCard,
  MapPin,
  Send,
  ShieldCheck,
  Star,
  UserCheck,
  UserPlus,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { servicesPage } from "@/data/products/services";

export const metadata: Metadata = {
  title: { absolute: "Book Verified Plumbers, Electricians & Cleaners in Lahore | YourForce Services" },
  description:
    "YourForce Services connects homes with CNIC-verified plumbers, electricians, AC technicians, carpenters, painters, masons, labourers and cleaners, with ratings from real jobs. Launching in Lahore: workers and partners, get in touch.",
  alternates: {
    canonical: "/products/services",
  },
  openGraph: {
    title: "Book Verified Plumbers, Electricians & Cleaners in Lahore | YourForce Services",
    description:
      "Trusted hands for your home. Try the Lahore preview.",
    url: "/products/services",
    type: "website",
  },
};

export default function ServicesProductPage() {
  return (
    <ProductPage
      slug="services"
      data={servicesPage}
      icons={{
        challenges: [UserCheck, Star, CalendarX, EyeOff],
        features: [ShieldCheck, MapPin, Send, Wallet, HandCoins, Star],
        process: [UserPlus, IdCard, ClipboardCheck, Star],
      }}
    />
  );
}
