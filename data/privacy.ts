import type { PrivacyPolicy } from "@/types/privacy";

export const privacyPolicy: PrivacyPolicy = {
  badge: "Your Privacy Matters",

  title: "Privacy Policy",

  description:
    "This Privacy Policy explains how YourForce collects, uses, protects, and shares personal information when you visit our website, contact us, or enquire about our software engineering and digital commerce services.",

  lastUpdated: "August 6, 2026",

  contactEmail: "hello@yourforce.io",

  sections: [
    {
      id: "who-we-are",

      title: "1. Who We Are",

      paragraphs: [
        "YourForce is a software engineering and digital commerce services company based in Lahore, Pakistan, serving clients internationally.",

        "For the purposes of applicable privacy laws, YourForce is responsible for the personal information collected through this website and our direct business communications.",
      ],
    },

    {
      id: "information-we-collect",

      title: "2. Information We Collect",

      paragraphs: [
        "We collect information that you voluntarily provide when you submit the contact form, communicate with us by email, or otherwise enquire about our services.",

        "Our hosting and security providers may also automatically process limited technical information when you access the website.",
      ],

      bullets: [
        "Your name and email address.",
        "Your phone number, when provided.",
        "The service you are interested in.",
        "Your estimated budget and project timeline, when provided.",
        "Project requirements, goals, challenges, and other information included in your message.",
        "Technical information such as IP address, browser type, device information, request timestamps, and security logs.",
      ],
    },

    {
      id: "how-we-use-information",

      title: "3. How We Use Your Information",

      paragraphs: [
        "We use personal information only when reasonably necessary to operate the website, respond to enquiries, evaluate potential projects, provide our services, protect our systems, and comply with legal obligations.",
      ],

      bullets: [
        "Responding to your enquiry or project request.",
        "Understanding your requirements and determining how we may assist you.",
        "Communicating about proposed, current, or completed services.",
        "Sending an automatic acknowledgement after a contact-form submission.",
        "Maintaining appropriate business and communication records.",
        "Preventing spam, fraud, misuse, and security incidents.",
        "Complying with applicable legal, regulatory, or contractual obligations.",
      ],
    },

    {
      id: "legal-bases",

      title: "4. Legal Bases for Processing",

      paragraphs: [
        "Where applicable privacy law requires a legal basis, we may process personal information on one or more of the following grounds.",
      ],

      bullets: [
        "Taking steps at your request before entering into a contract.",
        "Performing a contract or providing requested services.",
        "Our legitimate interests in responding to enquiries, operating our business, improving security, and maintaining business records.",
        "Compliance with legal obligations.",
        "Your consent, where consent is required by applicable law.",
      ],
    },

    {
      id: "sharing-information",

      title: "5. How We Share Information",

      paragraphs: [
        "We do not sell personal information. We share information only when necessary to operate the website, communicate with you, provide services, protect our rights, or comply with the law.",

        "Service providers are permitted to process information only for the purposes for which they have been engaged, subject to their own contractual and legal responsibilities.",
      ],

      bullets: [
        "Vercel, which provides website hosting, deployment, infrastructure, and technical logging.",
        "Resend, which provides transactional email delivery for contact-form notifications and acknowledgements.",
        "Professional advisers, contractors, or service providers where reasonably necessary.",
        "Government authorities, regulators, courts, or other parties when required by law or necessary to protect legal rights.",
      ],
    },

    {
      id: "international-transfers",

      title: "6. International Data Transfers",

      paragraphs: [
        "YourForce serves clients internationally and uses service providers that may process information in countries other than the country in which you live.",

        "Where required, we take reasonable steps to ensure that international transfers are made using appropriate contractual, organisational, or legal safeguards.",
      ],
    },

    {
      id: "retention",

      title: "7. Data Retention",

      paragraphs: [
        "We retain personal information only for as long as reasonably necessary to respond to your enquiry, evaluate or deliver services, maintain appropriate business records, resolve disputes, enforce agreements, and comply with legal obligations.",

        "Retention periods may vary depending on the nature of the communication, the services involved, and applicable legal requirements.",
      ],
    },

    {
      id: "cookies",

      title: "8. Cookies and Similar Technologies",

      paragraphs: [
        "The website may use strictly necessary technologies required for security, hosting, navigation, and core website functionality.",

        "If YourForce introduces non-essential analytics, advertising, or marketing technologies in the future, we will update this Privacy Policy and introduce any consent controls required by applicable law.",
      ],
    },

    {
      id: "security",

      title: "9. Information Security",

      paragraphs: [
        "We use reasonable technical and organisational measures designed to protect personal information against unauthorised access, loss, alteration, disclosure, or misuse.",

        "No website, network, email service, or electronic storage system can be guaranteed to be completely secure. You should avoid submitting confidential credentials, payment information, health information, or other highly sensitive data through the general contact form.",
      ],
    },

    {
      id: "your-rights",

      title: "10. Your Privacy Rights",

      paragraphs: [
        "Depending on where you live, you may have rights concerning the personal information we hold about you. These rights are subject to applicable legal requirements and exceptions.",
      ],

      bullets: [
        "Requesting access to your personal information.",
        "Requesting correction of inaccurate or incomplete information.",
        "Requesting deletion of your information.",
        "Requesting restriction of certain processing.",
        "Objecting to processing based on legitimate interests.",
        "Requesting a portable copy of eligible information.",
        "Withdrawing consent where processing is based on consent.",
        "Submitting a complaint to an applicable data-protection authority.",
      ],
    },

    {
      id: "children",

      title: "11. Children’s Privacy",

      paragraphs: [
        "The YourForce website and services are intended for businesses and professional users. They are not directed to children under the age of 16, and we do not knowingly collect personal information from children.",
      ],
    },

    {
      id: "third-party-links",

      title: "12. Third-Party Links",

      paragraphs: [
        "The website may include links to third-party websites, platforms, or client projects. YourForce is not responsible for the privacy, security, or content practices of those third parties.",

        "You should review the privacy policies of third-party websites before providing them with personal information.",
      ],
    },

    {
      id: "policy-changes",

      title: "13. Changes to This Policy",

      paragraphs: [
        "We may update this Privacy Policy to reflect changes in our services, website functionality, service providers, or legal obligations.",

        "The latest version will be published on this page, and the Last Updated date will be revised when material changes are made.",
      ],
    },

    {
      id: "contact",

      title: "14. Contact Us",

      paragraphs: [
        "Questions, requests, or concerns regarding this Privacy Policy or the way YourForce handles personal information may be sent to the email address below.",

        "Please include sufficient information for us to identify and respond to your request. We may need to verify your identity before fulfilling certain privacy-rights requests.",
      ],
    },
  ],
};
