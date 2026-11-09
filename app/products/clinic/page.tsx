import type { Metadata } from "next";
import {
  BellRing,
  CalendarRange,
  FileBadge,
  FileText,
  FlaskConical,
  Languages,
  LifeBuoy,
  MessageSquareWarning,
  PackageCheck,
  Percent,
  PhoneCall,
  Pill,
  Receipt,
  Rocket,
  Settings2,
  Stethoscope,
  Tv,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { clinicPage } from "@/data/products/clinic";

export const metadata: Metadata = {
  title: { absolute: "Clinic Management Software in Pakistan | YourForce Clinic" },
  description:
    "YourForce Clinic runs a clinic from the online appointment and token to the prescription (in English and Urdu), the lab report, the pharmacy with expiry dates and the bill, with panel billing, doctors' shares and a patient portal. Book a demo.",
  alternates: {
    canonical: "/products/clinic",
  },
  openGraph: {
    title: "Clinic Management Software in Pakistan | YourForce Clinic",
    description:
      "Your whole clinic in one system. Explore City Care Clinic, a live sample clinic.",
    url: "/products/clinic",
    type: "website",
  },
};

export default function ClinicProductPage() {
  return (
    <ProductPage
      slug="clinic"
      data={clinicPage}
      icons={{
        challenges: [MessageSquareWarning, FlaskConical, Pill, Wallet],
        features: [CalendarRange, Stethoscope, FlaskConical, Pill, Receipt, FileText, PackageCheck, Tv, BellRing, Languages, FileBadge, Percent],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
