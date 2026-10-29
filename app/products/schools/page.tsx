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
  title: "YourForce Schools — School Management Platform",
  description:
    "YourForce Schools is a school management platform with role-based portals, fee collection and accounts, timetables with clash detection, attendance, exams, a parent portal and a school website CMS. Book a demo.",
  alternates: {
    canonical: "/products/schools",
  },
  openGraph: {
    title: "YourForce Schools — School Management Platform",
    description:
      "Run students, fees, academics and parent communication from one secure platform. Explore a live sample school with 2,000 students.",
    url: "/products/schools",
    type: "website",
  },
};

export default function SchoolsProductPage() {
  return (
    <ProductPage
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
