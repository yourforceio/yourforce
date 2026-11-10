import { site } from "@/data/site";
import { products } from "@/data/products";
import { pricing } from "@/data/pricing";

/** SoftwareApplication, FAQPage and BreadcrumbList data for one product page, so Google knows what each product is. */
export default function ProductStructuredData({
  slug,
  faq,
}: {
  slug: string;
  faq: readonly { question: string; answer: string }[];
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

        // Monthly plan prices (data/pricing.ts), so Google can show the price range.
        ...(pricing[slug]
          ? {
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "PKR",
                lowPrice: Math.min(...pricing[slug].plans.map((p) => p.monthly)),
                highPrice: Math.max(...pricing[slug].plans.map((p) => p.monthly)),
                offerCount: pricing[slug].plans.length,
                url: pricing[slug].detailsHref,
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
