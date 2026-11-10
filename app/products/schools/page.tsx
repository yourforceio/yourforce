import type { Metadata } from "next";
import {
  BookOpenCheck,
  CalendarClock,
  CalendarX2,
  FolderSearch,
  Globe,
  HeartHandshake,
  LayoutDashboard,
  MessageCircleQuestion,
  Presentation,
  Rocket,
  Settings2,
  Upload,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { schoolsPage } from "@/data/products/schools";

export const metadata: Metadata = {
  title: { absolute: "School Management Software in Pakistan | YourForce Schools" },
  description:
    "School management software for Pakistan: fees and accounts, timetables without clashes, attendance, exams, a parent portal and your school website.",
  alternates: {
    canonical: "/products/schools",
  },
  openGraph: {
    title: "School Management Software in Pakistan | YourForce Schools",
    description:
      "Run students, fees, academics and parent communication from one secure platform. Explore a live sample school with 2,000 students.",
    url: "/products/schools",
    type: "website",
  },
};

export default function SchoolsProductPage() {
  return (
    <ProductPage
      slug="schools"
      data={schoolsPage}
      icons={{
        challenges: [Wallet, CalendarX2, MessageCircleQuestion, FolderSearch],
        features: [
          LayoutDashboard,
          Wallet,
          CalendarClock,
          BookOpenCheck,
          HeartHandshake,
          Globe,
        ],
        process: [Presentation, Settings2, Upload, Rocket],
      }}
    />
  );
}
