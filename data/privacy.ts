import type { PrivacyPolicy } from "@/types/privacy";

export const privacyPolicy: PrivacyPolicy = {
  badge: "Your Privacy Matters",

  title: "Privacy Policy",

  description:
    "This Privacy Policy explains how YourForce collects, uses, protects, and shares personal information across our main website and our trucking dispatch and medical billing service websites.",

  lastUpdated: "August 31, 2026",

  contactEmail: "hello@yourforce.io",

  sections: [
    {
      id: "who-we-are",

      title: "1. Who We Are and Scope",

      paragraphs: [
        "YourForce is a business services and technology company based in Lahore, Pakistan, serving clients internationally. Our services include software engineering, digital commerce, trucking dispatch support, and medical billing and coding support.",

        "This Privacy Policy applies to yourforce.io (including www.yourforce.io), trucking.yourforce.io, billing.yourforce.io, and related contact, email, and scheduling interactions. For personal information collected through these public websites and our direct business communications, YourForce generally acts as the organisation responsible for deciding how and why that information is processed.",

        "When YourForce performs services for a client and processes personal information only on that client's instructions, our role and responsibilities may instead be governed by the applicable service agreement, data-processing terms, business associate agreement where required, and applicable law.",
      ],
    },

    {
      id: "information-we-collect",

      title: "2. Information We Collect",

      paragraphs: [
        "We collect information that you voluntarily provide when you submit a contact form, communicate with us by email, schedule a meeting, or otherwise enquire about or use our services.",

        "Our website, hosting, security, analytics, and scheduling providers may also automatically process limited technical and usage information when you interact with our websites or third-party booking pages.",
      ],

      bullets: [
        "Contact details such as your name, business email address, and phone number when provided.",
        "Business details such as your company, carrier, fleet, practice, professional role, and the service in which you are interested.",
        "Your estimated budget, project timeline, availability, and meeting preferences when provided.",
        "Requirements, goals, challenges, and other information included in your message or business enquiry.",
        "Scheduling information submitted through Calendly, such as your name, email address, time zone, selected meeting time, and answers to booking questions.",
        "Usage information such as pages viewed, referral source, interactions with links, approximate location, browser type, device type, operating system, and timestamps.",
        "Technical and security information processed by our infrastructure providers, which may include IP address, request data, diagnostic information, and security logs.",
      ],
    },

    {
      id: "analytics-cookies",

      title: "3. Analytics, Cookies, and Similar Technologies",

      paragraphs: [
        "We use Google Analytics 4 across yourforce.io (including www.yourforce.io), trucking.yourforce.io, and billing.yourforce.io to understand website traffic, service interest, navigation, and performance. Our current Google Analytics measurement ID is G-4ZWXW52HB3.",

        "Google Analytics may use cookies or similar technologies to recognise a browser or device and generate usage statistics. Google may process analytics data on our behalf in accordance with its own terms, privacy documentation, and the settings of our Analytics property.",

        "Our analytics implementation is intended to measure website activity and is not intended to collect the contents of contact forms, email messages, scheduling responses, credentials, payment details, or protected health information.",

        "You can restrict or delete cookies through your browser settings and may use privacy or analytics-blocking tools. Depending on where you live, applicable law may also give you the right to consent to, reject, or opt out of certain analytics technologies.",
      ],

      bullets: [
        "Standard activity such as page views, session starts, first visits, and scrolling.",
        "Clicks that open our Calendly scheduling page.",
        "Clicks on email contact links.",
        "Clicks from the main YourForce website to our trucking dispatch and medical billing websites.",
        "A service label used to distinguish trucking dispatch activity from medical billing activity, including the values trucking_dispatch and medical_billing.",
      ],
    },

    {
      id: "scheduling",

      title: "4. Scheduling Through Calendly",

      paragraphs: [
        "We use Calendly to offer online meeting scheduling at calendly.com/your-force-you/30min. When you open or use that booking page, Calendly may collect and process information under its own privacy notice and may act as our service provider for the scheduling information you submit.",

        "Calendly may process information such as your name, email address, selected meeting time, time zone, device and log information, and answers to booking questions. Do not include confidential medical or patient information in a meeting title, booking response, or other Calendly field.",
      ],
    },

    {
      id: "medical-information",

      title: "5. Medical Billing Enquiries and Sensitive Information",

      paragraphs: [
        "The billing.yourforce.io marketing website, general website forms, Calendly booking pages, and ordinary email channels are intended for business enquiries only. They are not approved channels for submitting protected health information or patient records.",

        "Do not send patient names, dates of birth, medical record numbers, insurance or member identifiers, diagnosis or treatment details, claims files, or other protected health information through a public form, Calendly, or a general email address.",

        "If a medical billing engagement requires YourForce to process protected health information, that processing will begin only after the parties establish the required agreement, permissions, instructions, and appropriate secure systems. The applicable client agreement and privacy or security terms will govern that processing. Nothing in this public Privacy Policy should be understood as a representation that a public website, Calendly page, or ordinary email channel is suitable for protected health information.",
      ],
    },

    {
      id: "how-we-use-information",

      title: "6. How We Use Your Information",

      paragraphs: [
        "We use personal information only when reasonably necessary to operate our websites and business, respond to enquiries, evaluate and deliver services, understand website performance, protect our systems, and comply with legal obligations.",
      ],

      bullets: [
        "Responding to your enquiry, scheduling request, or service request.",
        "Understanding your business requirements and determining how we may assist you.",
        "Preparing proposals and communicating about proposed, current, or completed services.",
        "Sending contact-form acknowledgements and operational communications.",
        "Analysing website traffic and measuring interest in our different services.",
        "Maintaining appropriate business, contractual, and communication records.",
        "Preventing spam, fraud, misuse, and security incidents.",
        "Complying with applicable legal, regulatory, professional, or contractual obligations.",
      ],
    },

    {
      id: "legal-bases",

      title: "7. Legal Bases for Processing",

      paragraphs: [
        "Where applicable privacy law requires a legal basis, we may process personal information on one or more of the following grounds.",
      ],

      bullets: [
        "Taking steps at your request before entering into a contract.",
        "Performing a contract or providing requested services.",
        "Our legitimate interests in responding to enquiries, operating and improving our business and websites, measuring service interest, maintaining security, and keeping appropriate records.",
        "Compliance with legal or regulatory obligations.",
        "Your consent, where consent is required by applicable law, including for certain uses of analytics technologies.",
      ],
    },

    {
      id: "sharing-information",

      title: "8. How We Share Information",

      paragraphs: [
        "We do not sell personal information for money. We disclose information only when reasonably necessary to operate our websites and business, communicate with you, provide services, protect our rights, complete a business transaction, or comply with the law.",

        "Some privacy laws may define certain analytics or advertising disclosures as a sale or sharing even when no money is exchanged. Where such a law applies to us, we will provide the rights and choices it requires.",
      ],

      bullets: [
        "Vercel, which provides website hosting, deployment, infrastructure, and technical logging.",
        "Resend, which provides transactional email delivery for contact-form notifications and acknowledgements.",
        "Google Analytics, which provides website and event measurement across our domains.",
        "Calendly, which provides meeting scheduling and processes information submitted through its booking service.",
        "Professional advisers, contractors, or other service providers where reasonably necessary and subject to appropriate obligations.",
        "A buyer, investor, successor, or adviser in connection with a proposed or completed merger, financing, reorganisation, or sale of all or part of our business, subject to appropriate safeguards.",
        "Government authorities, regulators, courts, law-enforcement bodies, or other parties when required by law or reasonably necessary to protect legal rights, safety, or security.",
      ],
    },

    {
      id: "international-transfers",

      title: "9. International Data Transfers",

      paragraphs: [
        "YourForce is based in Pakistan, serves clients internationally, and uses service providers that may process information in Pakistan, the United States, and other countries. These countries may have privacy laws that differ from those where you live.",

        "Where required by applicable law, we take reasonable steps to use appropriate contractual, organisational, or legal safeguards for international transfers. Third-party providers may also rely on transfer mechanisms described in their own privacy notices and data-processing terms.",
      ],
    },

    {
      id: "retention",

      title: "10. Data Retention",

      paragraphs: [
        "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including responding to enquiries, evaluating or delivering services, maintaining appropriate business records, resolving disputes, enforcing agreements, protecting security, and complying with legal obligations.",

        "Retention periods vary depending on the nature of the information, the services involved, our legal or contractual obligations, and the settings and policies of the service providers we use. Google Analytics and Calendly information may be retained according to our configured account settings and the providers' applicable terms.",
      ],
    },

    {
      id: "security",

      title: "11. Information Security",

      paragraphs: [
        "We use reasonable technical and organisational measures designed to protect personal information against unauthorised access, loss, alteration, disclosure, or misuse. Access to information is intended to be limited to people and providers that need it for an authorised business purpose.",

        "No website, network, email service, scheduling platform, or electronic storage system can be guaranteed to be completely secure. Do not submit passwords, payment-card details, protected health information, or other highly sensitive information through our public websites, Calendly, or general email channels.",
      ],
    },

    {
      id: "your-rights",

      title: "12. Your Privacy Rights and Choices",

      paragraphs: [
        "Depending on where you live and which laws apply, you may have rights concerning personal information we hold about you. These rights are subject to applicable requirements, limitations, and exceptions.",
      ],

      bullets: [
        "Requesting access to or information about your personal information.",
        "Requesting correction of inaccurate or incomplete information.",
        "Requesting deletion of eligible information.",
        "Requesting restriction of certain processing.",
        "Objecting to processing based on legitimate interests or opting out of eligible sharing or targeted advertising.",
        "Requesting a portable copy of eligible information.",
        "Withdrawing consent where processing is based on consent, without affecting earlier lawful processing.",
        "Submitting a complaint to an applicable data-protection authority.",
      ],
    },

    {
      id: "children",

      title: "13. Children’s Privacy",

      paragraphs: [
        "Our websites and services are intended for businesses and professional users. They are not directed to children under the age of 16, and we do not knowingly collect personal information from children through these websites. If you believe a child has provided us with personal information, please contact us so that we can review and, where appropriate, delete it.",
      ],
    },

    {
      id: "third-party-links",

      title: "14. Third-Party Websites and Services",

      paragraphs: [
        "Our websites include links to third-party websites and services, including Calendly, Google, client projects, and external platforms. When you follow a link or use a third-party service, that provider may collect information under its own terms and privacy notice.",

        "YourForce does not control and is not responsible for the privacy, security, availability, or content practices of independent third parties. Review their privacy notices before providing personal information.",
      ],
    },

    {
      id: "policy-changes",

      title: "15. Changes to This Policy",

      paragraphs: [
        "We may update this Privacy Policy to reflect changes in our services, websites, analytics implementation, service providers, business practices, or legal obligations.",

        "The latest version will be published on this page, and the Last Updated date will be revised when changes are made. Where required by law, we will provide additional notice or obtain consent for material changes.",
      ],
    },

    {
      id: "contact",

      title: "16. Contact Us",

      paragraphs: [
        "Questions, requests, or concerns regarding this Privacy Policy or the way YourForce handles personal information may be sent to hello@yourforce.io. Service enquiries may also be directed to dispatch@yourforce.io for trucking dispatch or billing@yourforce.io for medical billing, but privacy-rights requests should be sent to hello@yourforce.io.",

        "Please include sufficient information for us to identify and respond to your request, but do not send protected health information or other highly sensitive information. We may need to verify your identity before fulfilling certain privacy-rights requests.",
      ],
    },
  ],
};
