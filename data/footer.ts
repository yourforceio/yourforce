import {
  Globe2,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaLocationDot,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

import type { FooterData } from "@/types/footer";

export const footer: FooterData = {
  company: {
    tagline:
      "Enterprise Software. Commerce. Innovation.",

    description:
      "We build scalable digital commerce platforms, enterprise software, and modern web experiences designed for long-term growth.",

    availability:
      "Available for selected projects worldwide.",
  },

  columns: [
    {
      title: "Quick Links",

      links: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Portfolio",
          href: "/portfolio",
        },
        {
          label: "Services",
          href: "/#services",
        },
        {
          label: "About",
          href: "/#about",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
    },

    {
      title: "Services",

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
          label: "Platform Modernization",
          href: "/#services",
        },
        {
          label: "Enterprise Software",
          href: "/#services",
        },
        {
          label: "Architecture & Consulting",
          href: "/#services",
        },
      ],
    },

    {
      title: "Resources",

      links: [
        {
          label: "Case Studies",
          href: "/portfolio",
        },
        {
          label: "Our Engineering Lab",
          href: "/lab",
        },
        {
          label: "Workplace",
          href: "/workplace",
        },
        {
          label: "Privacy Policy",
          href: "/privacy",
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
      href: "https://www.linkedin.com/company/yourforce-io/",
      icon: FaLinkedinIn,
    },
    {
      name: "Email",
      href: "mailto:hello@yourforce.io",
      icon: MdEmail,
    },
    {
      name: "Location",
      href: "/contact",
      icon: FaLocationDot,
    },
  ],

  bottom: {
    copyright:
      `© ${new Date().getFullYear()} YourForce. All rights reserved.`,

    builtWith:
      "Built for modern digital commerce.",

    links: [],
  },
};
