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
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "John Doe",
        autoComplete: "name",
      },

      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "john@example.com",
        autoComplete: "email",
      },

      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "+92 300 1234567",
        autoComplete: "tel",
      },

      {
        name: "service",
        label: "Service Required",
        type: "select",
        required: true,
        placeholder: "Select a service",

        helper:
          "Choose the closest option. We’ll refine it during discovery.",

        options: [
          {
            label: "Commerce Platform Engineering",
            value: "Commerce Platform Engineering",
            slug: "commerce-platform-engineering",
          },
          {
            label: "Headless Commerce & Storefronts",
            value: "Headless Commerce & Storefronts",
            slug: "headless-commerce",
          },
          {
            label: "Migration & Modernization",
            value: "Migration & Modernization",
            slug: "migration-modernization",
          },
          {
            label: "Integrations & Automation",
            value: "Integrations & Automation",
            slug: "integrations-automation",
          },
          {
            label: "Enterprise Software & Consulting",
            value: "Enterprise Software & Consulting",
            slug: "enterprise-software",
          },
          {
            label: "Architecture & Technical Consulting",
            value: "Architecture & Technical Consulting",
            slug: "technical-consulting",
          },
          {
            label: "PHP Upgrades & Free Health Check",
            value: "PHP Upgrades & Free Health Check",
            slug: "php",
          },
          {
            label: "School Management Platform",
            value: "School Management Platform",
            slug: "school-platform",
          },
          {
            label: "Online Store Platform",
            value: "Online Store Platform",
            slug: "commerce-platform",
          },
          {
            label: "Online Booking Platform",
            value: "Online Booking Platform",
            slug: "booking-platform",
          },
          {
            label: "Restaurant Ordering Platform",
            value: "Restaurant Ordering Platform",
            slug: "restaurant-platform",
          },
          {
            label: "Real Estate Agency Platform",
            value: "Real Estate Agency Platform",
            slug: "property-platform",
          },
          {
            label: "Clinic Management Platform",
            value: "Clinic Management Platform",
            slug: "clinic-platform",
          },
          {
            label: "Housing Society Platform",
            value: "Housing Society Platform",
            slug: "society-platform",
          },
          {
            label: "Rent-a-Car Platform",
            value: "Rent-a-Car Platform",
            slug: "rentacar-platform",
          },
          {
            label: "Online Course Platform (Learn)",
            value: "Online Course Platform",
            slug: "learn-platform",
          },
          {
            label: "Home Services: join as a worker or partner",
            value: "Home Services Marketplace",
            slug: "services-platform",
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
        label: "Estimated Budget",
        type: "select",
        placeholder: "Select a budget range",

        helper:
          "An approximate range helps us recommend the right approach.",

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
        label: "Preferred Timeline",
        type: "select",
        placeholder: "Select a timeline",

        helper:
          "Select the nearest timeframe, even if it is flexible.",

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
        label: "Project Details",
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
