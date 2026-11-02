import type { Metadata } from "next";
import {
  CalendarRange,
  FileText,
  FlaskConical,
  LifeBuoy,
  MessageSquareWarning,
  PhoneCall,
  Pill,
  Receipt,
  Rocket,
  Settings2,
  Stethoscope,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { clinicPage } from "@/data/products/clinic";

export const metadata: Metadata = {
  title: { absolute: "Clinic Management Software in Pakistan | YourForce Clinic" },
  description:
    "YourForce Clinic runs a clinic from the online appointment to the prescription, the lab report, the pharmacy and the bill, with company and insurance panel billing and a patient portal. Book a demo.",
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
        features: [CalendarRange, Stethoscope, FlaskConical, Pill, Receipt, FileText],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
