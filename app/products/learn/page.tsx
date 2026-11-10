import type { Metadata } from "next";
import {
  Award,
  BadgeCheck,
  ChartColumn,
  EyeOff,
  FileText,
  LifeBuoy,
  MessageSquareText,
  MonitorPlay,
  PhoneCall,
  Rocket,
  Settings2,
  Share2,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { learnPage } from "@/data/products/learn";

export const metadata: Metadata = {
  title: { absolute: "Online Course Platform for Academies & Tutors | YourForce Learn" },
  description:
    "Your own course website for academies and tutors: video lessons, quizzes, JazzCash and bank payments, student progress and verifiable certificates.",
  alternates: {
    canonical: "/products/learn",
  },
  openGraph: {
    title: "Online Course Platform for Academies & Tutors | YourForce Learn",
    description:
      "Your classes, online. Explore Bright Future Academy, a live sample academy.",
    url: "/products/learn",
    type: "website",
  },
};

export default function LearnProductPage() {
  return (
    <ProductPage
      slug="learn"
      data={learnPage}
      icons={{
        challenges: [Share2, Wallet, EyeOff, Award],
        features: [MonitorPlay, FileText, Wallet, ChartColumn, MessageSquareText, BadgeCheck],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
