import {
  Globe2,
  Mail,
  MapPin,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

import { navigation } from "@/data/navigation";

import type { FooterData } from "@/types/footer";

const footerNavigationLinks = navigation
  .filter((item) => item.showInFooter !== false)
  .map((item) => ({
    label: item.label,
    href: item.href,
  }));

export const footer: FooterData = {
  company: {
    tagline: "Digital Commerce. Engineered to Scale.",

    description:
      "YourForce helps businesses build, modernize, and scale commerce platforms, headless storefronts, enterprise integrations, and custom software across leading technologies.",

    availability:
      "Available for global remote delivery",
  },

  columns: [
    {
      title: "Navigate",
      links: footerNavigationLinks,
    },

    {
      title: "Capabilities",

      links: [
        {
          label: "Commerce Platform Engineering",
          href: "/#services",
        },
        {
          label: "Headless Commerce",
          href: "/#services",
        },
        {
          label: "Migration & Modernization",
          href: "/#services",
        },
        {
          label: "Integrations & Automation",
          href: "/#services",
        },
        {
          label: "Enterprise Software",
          href: "/#services",
        },
      ],
    },

    {
      title: "Platforms",

      links: [
        {
          label: "Salesforce Commerce Cloud",
          href: "/#services",
        },
        {
          label: "Adobe Commerce",
          href: "/#services",
        },
        {
          label: "Shopify",
          href: "/#services",
        },
        {
          label: "WooCommerce",
          href: "/#services",
        },
        {
          label: "Headless Architecture",
          href: "/#services",
        },
      ],
    },

    {
      title: "Contact",

      links: [
        {
          label: "hello@yourforce.io",
          description: "Project enquiries",
          href: "mailto:hello@yourforce.io",
          icon: Mail,
        },
        {
          label: "Lahore, Pakistan",
          description: "Delivery base",
          icon: MapPin,
        },
        {
          label: "Remote Worldwide",
          description: "Supporting global teams",
          icon: Globe2,
        },
      ],
    },
  ],

  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/yourforce",
      external: true,
      icon: FaLinkedinIn,
    },
    {
      name: "Email YourForce",
      href: "mailto:hello@yourforce.io",
      icon: Mail,
    },
  ],

  bottom: {
    copyright: `© ${new Date().getFullYear()} YourForce. All rights reserved.`,

    builtWith:
      "Designed and developed by YourForce",

    links: [],
  },
};
