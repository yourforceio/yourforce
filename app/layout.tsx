import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/seo/StructuredData";
import { site } from "@/data/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  keywords: site.keywords,

  authors: [
    {
      name: "YourForce",
      url: site.url,
    },
  ],

  creator: "YourForce",

  publisher: "YourForce",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.image,
        width: 1200,
        height: 630,
        alt: "YourForce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.image],
    creator: "YourForce",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.webmanifest",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <StructuredData />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
