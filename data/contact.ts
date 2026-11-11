import {
  Clock3,
  Globe2,
  Mail,
  MapPin,
} from "lucide-react";

import type { ContactData } from "@/types/contact";

export const contact: ContactData = {
  hero: {
    badge: "Contact",

    title: "Tell us what",

    highlight: "you're running",

    description:
      "A commerce platform that needs work, a product you'd like to try with your own data, or a back-office desk for your US team. A real person reads every message and replies within one working day.",

    highlights: [
      "Reply within one working day",
      "Founder-led",
      "Remote-first, any time zone",
    ],
  },

  form: {
    eyebrow: "Send us a message",

    title: "Tell us about your project",

    description:
      "A few details about what you run and what you need. Budget and timeline are optional.",

    requiredNote:
      "Required fields are marked with an asterisk.",

    submitLabel: "Send message",

    submittingLabel: "Sending...",

    privacyNote:
      "Your information is used only to respond to your enquiry.",

    fields: [
      {
        name: "name",
        label: "Your name",
        type: "text",
        required: true,
        placeholder: "e.g. Ayesha Khan",
        autoComplete: "name",
      },

      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "you@company.com",
        autoComplete: "email",
      },

      {
        name: "phone",
        label: "Phone or WhatsApp",
        type: "tel",
        placeholder: "0300 1234567 or +1 555 010 0000",
        autoComplete: "tel",
      },

      {
        name: "service",
        label: "What do you need?",
        type: "select",
        required: true,
        placeholder: "Choose one",

        options: [
          {
            label: "Commerce Platform Engineering",
            value: "Commerce Platform Engineering",
            slug: "commerce-platform-engineering",
            group: "engineering",
          },
          {
            label: "Headless Commerce & Storefronts",
            value: "Headless Commerce & Storefronts",
            slug: "headless-commerce",
            group: "engineering",
          },
          {
            label: "Migration & Modernization",
            value: "Migration & Modernization",
            slug: "migration-modernization",
            group: "engineering",
          },
          {
            label: "Integrations & Automation",
            value: "Integrations & Automation",
            slug: "integrations-automation",
            group: "engineering",
          },
          {
            label: "Enterprise Software & Consulting",
            value: "Enterprise Software & Consulting",
            slug: "enterprise-software",
            group: "engineering",
          },
          {
            label: "Architecture & Technical Consulting",
            value: "Architecture & Technical Consulting",
            slug: "technical-consulting",
            group: "engineering",
          },
          {
            label: "PHP Upgrades & Free Health Check",
            value: "PHP Upgrades & Free Health Check",
            slug: "php",
            group: "engineering",
          },
          {
            label: "Schools (school management)",
            value: "School Management Platform",
            slug: "school-platform",
            group: "software",
          },
          {
            label: "Commerce (online store)",
            value: "Online Store Platform",
            slug: "commerce-platform",
            group: "software",
          },
          {
            label: "Bookings (salons, spas and clinics)",
            value: "Online Booking Platform",
            slug: "booking-platform",
            group: "software",
          },
          {
            label: "Dine (restaurant ordering)",
            value: "Restaurant Ordering Platform",
            slug: "restaurant-platform",
            group: "software",
          },
          {
            label: "Property (real estate agencies)",
            value: "Real Estate Agency Platform",
            slug: "property-platform",
            group: "software",
          },
          {
            label: "Clinic (clinic management)",
            value: "Clinic Management Platform",
            slug: "clinic-platform",
            group: "software",
          },
          {
            label: "Society (housing societies)",
            value: "Housing Society Platform",
            slug: "society-platform",
            group: "software",
          },
          {
            label: "Rent-a-Car (car rental)",
            value: "Rent-a-Car Platform",
            slug: "rentacar-platform",
            group: "software",
          },
          {
            label: "Learn (online courses)",
            value: "Online Course Platform",
            slug: "learn-platform",
            group: "software",
          },
          {
            label: "Events (tickets and check-in)",
            value: "Event Ticketing Platform",
            slug: "events-platform",
            group: "software",
          },
          {
            label: "Services (join as a worker or partner)",
            value: "Home Services Marketplace",
            slug: "services-platform",
            group: "software",
          },
          {
            label: "Trucking dispatch",
            value: "Trucking Dispatch",
            slug: "trucking-dispatch",
            group: "operations",
          },
          {
            label: "Medical billing and coding",
            value: "Medical Billing & Coding",
            slug: "medical-billing",
            group: "operations",
          },
          {
            label: "Data entry and documents",
            value: "Data Entry & Documents",
            slug: "data-entry",
            group: "operations",
          },
          {
            label: "Insurance document support",
            value: "Insurance Document Support",
            slug: "insurance-documents",
            group: "operations",
          },
          {
            label: "Other",
            value: "Other",
            slug: "other",
          },
        ],
      },

      {
        name: "budget",
        label: "Budget",
        type: "select",
        placeholder: "Choose a range",

        options: [
          {
            label: "Less than $5,000",
            value: "Less than $5,000",
          },
          {
            label: "$5,000 – $10,000",
            value: "$5,000 – $10,000",
          },
          {
            label: "$10,000 – $25,000",
            value: "$10,000 – $25,000",
          },
          {
            label: "$25,000 – $50,000",
            value: "$25,000 – $50,000",
          },
          {
            label: "$50,000+",
            value: "$50,000+",
          },
          {
            label: "Prefer not to say",
            value: "Prefer not to say",
          },
        ],
      },

      {
        name: "timeline",
        label: "Timeline",
        type: "select",
        placeholder: "Choose a timeframe",

        options: [
          {
            label: "As soon as possible",
            value: "ASAP",
          },
          {
            label: "Within 1 month",
            value: "Within 1 Month",
          },
          {
            label: "Within 2–3 months",
            value: "2–3 Months",
          },
          {
            label: "Within 3–6 months",
            value: "3–6 Months",
          },
          {
            label: "Flexible",
            value: "Flexible",
          },
        ],
      },

      {
        name: "message",
        label: "Tell us more",
        type: "textarea",
        required: true,
        fullWidth: true,
        rows: 7,

        placeholder:
          "What you run today (platform, product or service), what's getting in the way, and any deadlines...",
      },
    ],
  },

  info: {
    eyebrow: "Get In Touch",

    title: "Start with a practical conversation.",

    description:
      "You’ll speak directly with an experienced engineering partner who can help evaluate your challenge, clarify priorities, and identify the most suitable next step.",

    primaryContact: {
      title: "Email YourForce",
      value: "hello@yourforce.io",

      description:
        "Write to us directly. We reply within one working day.",

      href: "mailto:hello@yourforce.io",
      icon: Mail,
    },

    details: [
      {
        title: "Based in",
        value: "Lahore, Pakistan",

        description:
          "Remote-first: we work with teams wherever they are.",

        icon: MapPin,
      },

      {
        title: "Working hours",
        value: "Set to your time zone",

        description:
          "We plan our day around yours, so your team gets answers while it's still working.",

        icon: Clock3,
      },

      {
        title: "How we work",
        value: "Remote, founder-led",

        description:
          "You talk directly to the engineer doing the work, by call, email or chat.",

        icon: Globe2,
      },
    ],

    nextSteps: {
      eyebrow: "What Happens Next",

      title: "A clear first step",

      items: [
        {
          number: "01",
          title: "You tell us",

          description:
            "What you run and what is getting in the way.",
        },
        {
          number: "02",
          title: "We reply within one working day",

          description:
            "With questions, or a time for a call in your time zone.",
        },
        {
          number: "03",
          title: "You get a clear next step",

          description:
            "A fixed-scope plan, a pilot or a demo with your data. No obligation.",
        },
      ],
    },

    response: {
      label: "Response Time",

      text:
        "We typically respond within one business day.",
    },
  },

  faq: {
    title: "Common questions",

    description:
      "Answers to what people ask us most.",

    items: [
      {
        question:
          "How quickly can you start a project?",

        answer:
          "It depends on the scope. After reading your message we'll give you a realistic start date. For our ready-made products, setup usually starts as soon as you're ready.",
      },
      {
        question:
          "Do you work with teams outside Pakistan?",

        answer:
          "Yes. We're remote-first and plan our working day around yours, wherever your team is.",
      },
      {
        question:
          "Which commerce platforms do you support?",

        answer:
          "Salesforce Commerce Cloud, Shopify Plus, Adobe Commerce (Magento) and WooCommerce, plus headless storefronts in Next.js and React.",
      },
      {
        question:
          "Can you work with an existing development team?",

        answer:
          "Yes. We can work alongside your own developers or another agency, or take over an existing codebase.",
      },
    ],
  },
};
