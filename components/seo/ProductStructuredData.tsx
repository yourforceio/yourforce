import { site } from "@/data/site";
import { products } from "@/data/products";
import type { ProductPricing } from "@/data/pricing";

/** SoftwareApplication, FAQPage and BreadcrumbList data for one product page, so Google knows what each product is. */
export default function ProductStructuredData({
  slug,
  faq,
  plans,
}: {
  slug: string;
  faq: readonly { question: string; answer: string }[];
  /** The product's live plans (data/pricing.ts livePricing). */
  plans?: ProductPricing;
}) {
  const product = products.find((p) => p.slug === slug);

  if (!product) return null;

  const pageUrl = new URL(product.href, site.url).toString();
  const organizationId = new URL("/#organization", site.url).toString();

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,

        name: product.name,
        description: product.description,
        url: pageUrl,
        image: new URL(`${product.href}/opengraph-image`, site.url).toString(),
        applicationCategory: "BusinessApplication",
        applicationSubCategory: product.eyebrow,
        operatingSystem: "Web browser, Android, iOS",
        featureList: product.features.join(", "),
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
        sameAs: [product.demoHref],

        // Monthly plan prices (live, data/pricing.ts), so Google can show the price range.
        ...(plans
          ? {
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "PKR",
                lowPrice: Math.min(...plans.plans.map((p) => p.monthly)),
                highPrice: Math.max(...plans.plans.map((p) => p.monthly)),
                offerCount: plans.plans.length,
                url: plans.detailsHref,
              },
            }
          : {}),

        provider: {
          "@id": organizationId,
        },
        publisher: {
          "@id": organizationId,
        },
      },

      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,

        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,

        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: new URL("/products", site.url).toString(),
          },
          { "@type": "ListItem", position: 3, name: product.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <script
      id="yourforce-product-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
