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

/** `headline` is the page's hero heading. */
export default function productOgImage(slug: string, headline: string) {
  const product = productFor(slug);
  const { accent, strong } = ACCENTS[slug] ?? ACCENTS.schools;

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
          color: "#fff",
          fontFamily: "sans-serif",
          background: `radial-gradient(circle at 88% 12%, ${strong}55, transparent 45%), #060b18`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              padding: "8px 18px",
              borderRadius: 999,
              background: strong,
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {product.eyebrow}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.6)" }}>
            yourforce.io
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 40, color: accent }}>
            {product.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: headline.length > 50 ? 56 : 70,
              lineHeight: 1.12,
              letterSpacing: -1.5,
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
                padding: "10px 18px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                alignItems: "center",
                gap: 12,
                fontSize: 24,
              }}
            >
              <div
                style={{ display: "flex", width: 12, height: 12, borderRadius: 999, background: accent }}
              />
              {feature}
            </div>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
