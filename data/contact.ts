import {
  Clock3,
  Globe2,
  Mail,
  MapPin,
} from "lucide-react";

import type { ContactData } from "@/types/contact";

export const contact: ContactData = {
  hero: {
    badge: "Let’s Talk",

    title: "Tell Us What",

    highlight: "You’re Building.",

    description:
      "Share your commerce challenge, modernization plans, integration requirements, or software product idea. We’ll help you identify a practical technical direction and the right next step.",

    highlights: [
      "Multi-platform commerce",
      "Senior engineering involvement",
      "Global remote delivery",
    ],
  },

  form: {
    eyebrow: "Project Enquiry",

    title: "Tell us about your project",

    description:
      "Provide a few details about your goals, current platform, and delivery requirements. We typically respond within one business day.",

    requiredNote:
      "Required fields are marked with an asterisk.",

    submitLabel: "Send Project Enquiry",

    submittingLabel: "Sending Enquiry...",

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
          "Describe your current platform, business goals, required integrations, timeline, and any challenges you are facing...",
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
        "Send your requirements directly. We typically reply within one business day.",

      href: "mailto:hello@yourforce.io",
      icon: Mail,
    },

    details: [
      {
        title: "Delivery Base",
        value: "Lahore, Pakistan",

        description:
          "Supporting international teams through remote delivery.",

        icon: MapPin,
      },
      {
        title: "Working Hours",
        value: "Monday – Friday",
        description: "09:00 AM – 06:00 PM (PKT)",
        icon: Clock3,
      },
      {
        title: "Remote Collaboration",
        value: "Worldwide",

        description:
          "Flexible overlap with North American, European, and Middle Eastern teams.",

        icon: Globe2,
      },
    ],

    nextSteps: {
      eyebrow: "What Happens Next",

      title: "A clear first step",

      items: [
        {
          number: "01",
          title: "We review your enquiry",

          description:
            "We assess your goals, current platform, requirements, and known constraints.",
        },
        {
          number: "02",
          title: "We share initial direction",

          description:
            "You receive practical observations and any important follow-up questions.",
        },
        {
          number: "03",
          title: "We agree on the next step",

          description:
            "When appropriate, we arrange a discovery discussion and define the way forward.",
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
    title: "Frequently Asked Questions",

    description:
      "Answers to some of the most common questions we receive.",

    items: [
      {
        question:
          "How quickly can you start a project?",

        answer:
          "Project availability depends on scope and current commitments. After reviewing your requirements, we can provide a realistic start date and delivery approach.",
      },
      {
        question:
          "Do you work with international clients?",

        answer:
          "Yes. YourForce supports companies remotely across North America, Europe, the Middle East, and Asia.",
      },
      {
        question:
          "Which commerce platforms do you support?",

        answer:
          "We support Salesforce Commerce Cloud, Adobe Commerce, Shopify, WooCommerce, and modern headless commerce architectures.",
      },
      {
        question:
          "Can you work with an existing development team?",

        answer:
          "Yes. We can collaborate with internal engineering teams, agencies, platform partners, and other technology vendors.",
      },
    ],
  },
};
