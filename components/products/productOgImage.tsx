import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { products } from "@/data/products";

/** The 1200×630 share image for a product page (shown on LinkedIn, WhatsApp, Facebook and in Google). */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const ACCENTS: Record<string, { accent: string; strong: string }> = {
  schools: { accent: "#34d399", strong: "#059669" },
  commerce: { accent: "#60a5fa", strong: "#2563eb" },
  bookings: { accent: "#a78bfa", strong: "#7c3aed" },
  dine: { accent: "#fb923c", strong: "#ea580c" },
  property: { accent: "#38bdf8", strong: "#0284c7" },
  clinic: { accent: "#fb7185", strong: "#e11d48" },
  society: { accent: "#2dd4bf", strong: "#0d9488" },
  rentacar: { accent: "#fbbf24", strong: "#d97706" },
  learn: { accent: "#a5b4fc", strong: "#4f46e5" },
  services: { accent: "#4ade80", strong: "#16a34a" },
};

const productFor = (slug: string) => {
  const product = products.find((p) => p.slug === slug);
  if (!product) throw new Error(`No product "${slug}"`);
  return product;
};

export const ogAlt = (slug: string) => {
  const product = productFor(slug);
  return `${product.name}: ${product.eyebrow}`;
};

/** `headline` is the page's hero heading. Ink background with the YF mark; the product colour is a small marker. */
// Bricolage Grotesque (OFL), stored in assets/fonts so the images don't depend on a network fetch at build time.
const fontFile = (name: string) => readFile(join(process.cwd(), "assets/fonts", name));

export default async function productOgImage(slug: string, headline: string) {
  const product = productFor(slug);
  const [bold, extraBold] = await Promise.all([
    fontFile("bricolage-grotesque-700.ttf"),
    fontFile("bricolage-grotesque-800.ttf"),
  ]);
  const { strong } = ACCENTS[slug] ?? ACCENTS.schools;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#F5F4F0",
          fontFamily: "Bricolage",
          background: "#0F1215",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="66" height="60" viewBox="0 0 310 280">
              <polygon points="29,32 112,168 109,187 60,260 117,262 154,204 154,136 83,33" fill="#F5B83D" />
              <polygon points="290,89 185,89 162,102 155,207 119,261 160,261 192,213 193,186 232,185 253,156 195,153 194,129 268,124" fill="#F5F4F0" />
              <polygon points="180,72 248,73 255,68 277,33 207,32" fill="#F5B83D" />
            </svg>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>YourForce</div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#B9BFC6" }}>yourforce.io</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 700, color: "#B9BFC6" }}>
            <div style={{ display: "flex", width: 18, height: 18, borderRadius: 5, background: strong }} />
            {product.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: headline.length > 50 ? 58 : 72,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -2,
            }}
          >
            {headline}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {product.features.slice(0, 3).map((feature) => (
            <div
              key={feature}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1.5px solid #3A4249",
                alignItems: "center",
                gap: 12,
                fontSize: 24,
                fontWeight: 700,
                color: "#DCE0E4",
              }}
            >
              <div style={{ display: "flex", width: 10, height: 10, borderRadius: 3, background: "#F5B83D" }} />
              {feature}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Bricolage", data: bold, weight: 700, style: "normal" },
        { name: "Bricolage", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
