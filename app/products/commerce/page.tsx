import type { Metadata } from "next";
import {
  BadgePercent,
  Banknote,
  Boxes,
  ChartColumn,
  LifeBuoy,
  MessagesSquare,
  PackageSearch,
  PhoneCall,
  Rocket,
  Settings2,
  Store,
  Tags,
  Truck,
  Wallet,
} from "lucide-react";

import ProductPage from "@/components/products/ProductPage";

import { commercePage } from "@/data/products/commerce";

export const metadata: Metadata = {
  title: { absolute: "Online Store Builder in Pakistan, COD & JazzCash | YourForce Commerce" },
  description:
    "YourForce Commerce is an online store platform for sellers in Pakistan: your own web address, cash on delivery, JazzCash and Easypaisa, product variants, Eid sales and offers, order management and reports. Book a demo.",
  alternates: {
    canonical: "/products/commerce",
  },
  openGraph: {
    title: "Online Store Builder in Pakistan, COD & JazzCash | YourForce Commerce",
    description:
      "Take orders on your own website with cash on delivery, JazzCash and Easypaisa. Visit Nova Mart, a live sample store.",
    url: "/products/commerce",
    type: "website",
  },
};

export default function CommerceProductPage() {
  return (
    <ProductPage
      slug="commerce"
      data={commercePage}
      icons={{
        challenges: [MessagesSquare, PackageSearch, Wallet, Tags],
        features: [Store, Boxes, Banknote, BadgePercent, Truck, ChartColumn],
        process: [PhoneCall, Settings2, Rocket, LifeBuoy],
      }}
    />
  );
}
