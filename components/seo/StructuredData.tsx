export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "YourForce",
        url: "https://yourforce.io",
        logo: "https://yourforce.io/logo/logo-light.png",
        description:
            "Enterprise Software & Salesforce Commerce Cloud Experts.",
        sameAs: [
            "https://www.linkedin.com/company/yourforce"
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}