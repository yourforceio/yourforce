import { site } from "@/data/site";

export default function StructuredData() {
  const organizationId = new URL(
    "/#organization",
    site.url,
  ).toString();

  const websiteId = new URL(
    "/#website",
    site.url,
  ).toString();

  const logoUrl = new URL(
    "/logo/logo-light.png",
    site.url,
  ).toString();

  const contactUrl = new URL(
    "/contact",
    site.url,
  ).toString();

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,

        name: site.name,
        url: site.url,
        description: site.description,

        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          contentUrl: logoUrl,
          caption: `${site.name} logo`,
        },

        email: "hello@yourforce.io",

        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "hello@yourforce.io",
          url: contactUrl,
          availableLanguage: ["English"],
        },

        sameAs: [
          "https://www.linkedin.com/company/yourforce-io",
        ],
      },

      {
        "@type": "WebSite",
        "@id": websiteId,

        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: "en",

        publisher: {
          "@id": organizationId,
        },
      },
    ],
  };

  return (
    <script
      id="yourforce-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}
