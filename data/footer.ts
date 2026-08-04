import type { FooterData } from "@/types/footer";

import { FaLinkedinIn } from "react-icons/fa";

import {
    Mail,
    MapPin,
} from "lucide-react";

export const footer: FooterData = {
    company: {
        name: "YourForce",

        tagline: "Your Vision. Our Engineering Force.",

        description:
            "We build scalable digital products, enterprise platforms, and Salesforce Commerce Cloud solutions for businesses ready to grow.",
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
                    label: "About",
                    href: "/about",
                },
                {
                    label: "Services",
                    href: "/services",
                },
                {
                    label: "Portfolio",
                    href: "/portfolio",
                },
            ],
        },

        {
            title: "Services",

            links: [
                {
                    label: "Salesforce Commerce Cloud",
                    href: "/services",
                },
                {
                    label: "Headless Commerce",
                    href: "/services",
                },
                {
                    label: "PWA Kit Development",
                    href: "/services",
                },
                {
                    label: "System Integrations",
                    href: "/services",
                },
            ],
        },

        {
            title: "Resources",

            links: [
                {
                    label: "Portfolio",
                    href: "/portfolio",
                },
                {
                    label: "Insights",
                    href: "/blog",
                },
                {
                    label: "Privacy",
                    href: "/privacy",
                },
                {
                    label: "Terms",
                    href: "/terms",
                },
            ],
        },

        {
            title: "Contact",

            links: [
                {
                    label: "Lahore, Pakistan",
                    href: "#",
                },
                {
                    label: "hello@yourforce.io",
                    href: "mailto:hello@yourforce.io",
                },
                {
                    label: "Remote Worldwide",
                    href: "#",
                },
            ],
        },
    ],

    socials: [
        {
            name: "LinkedIn",
            href: "https://linkedin.com",
            icon: FaLinkedinIn,
        },
        {
            name: "Email",
            href: "mailto:hello@yourforce.io",
            icon: Mail,
        },
        {
            name: "Location",
            href: "#",
            icon: MapPin,
        },
    ],

    bottom: {
        copyright: `© ${new Date().getFullYear()} YourForce. All rights reserved.`,

        builtWith: "Built with Next.js, TypeScript & Tailwind CSS",

        links: [
            {
                label: "Privacy",
                href: "/privacy",
            },
            {
                label: "Terms",
                href: "/terms",
            },
        ],
    },
};