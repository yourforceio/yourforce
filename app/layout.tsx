import type {
  Metadata,
  Viewport,
} from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

import { site } from "@/data/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  applicationName: site.name,

  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  verification: {
    google: "IeN-QPq7-bWJ2dbH5rFOdToKbTImgbqkjRWWrwhfe3E",
  },

  /*
   * This is safe to keep, but Google does not use the
   * meta keywords field as a ranking signal.
   */
  keywords: site.keywords,

  authors: [
    {
      name: site.name,
      url: site.url,
    },
  ],

  creator: site.name,
  publisher: site.name,

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

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
    siteName: site.name,
    title: site.title,
    description: site.description,

    /*
     * Do not define a fixed URL here.
     * Each page will provide its own Open Graph URL.
     */
    images: [
      {
        url: site.image,
        width: 1200,
        height: 630,
        alt: `${site.name} — Enterprise Software Development`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.image,
        alt: `${site.name} — Enterprise Software Development`,
      },
    ],

    /*
     * Add this only when you have an actual X handle:
     *
     * creator: "@yourforceio",
     */
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
      <body className="min-h-full bg-slate-950 text-slate-100">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
