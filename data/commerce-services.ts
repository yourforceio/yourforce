/**
 * Content for /services/commerce (app/services/commerce/page.tsx): the page the homepage's engineering
 * "Learn more" links point to. Section ids are the anchors those links use; keep them in sync with data/home.ts.
 *
 * Keep claims to what is true. Not yet confirmed, so not stated: code ownership terms, engagement models
 * (fixed scope / retainer / dedicated engineer), platform partner status, client results.
 */

import { site } from "@/data/site";

export const commercePage = {
  hero: {
    label: "Commerce engineering",
    heading: "Commerce engineering for the platform you already run",
    description:
      "Senior, founder-led engineering for Salesforce Commerce Cloud, Shopify Plus, Adobe Commerce and WooCommerce. New builds, headless storefronts, migrations, integrations and long-term support, working in your time zone.",
    primary: { label: "Book a call", href: site.bookCall },
    secondary: { label: "Free PHP health check", href: "/contact?service=php" },
  },

  jump: [
    { label: "Platform builds", href: "#platform-builds" },
    { label: "PHP upgrades", href: "/services/php" },
    { label: "Headless", href: "#headless" },
    { label: "Migration", href: "#migration" },
    { label: "Integrations", href: "#integrations" },
    { label: "Custom software", href: "#custom-software" },
  ],

  sections: [
    {
      id: "platform-builds",
      label: "Platform builds",
      heading: "Build and look after your store on the major platforms",
      description:
        "Design, development and long-term support on Salesforce Commerce Cloud, Shopify Plus, Adobe Commerce and WooCommerce. We work inside your platform's way of doing things, so upgrades stay possible later.",
      does: [
        "New storefronts and redesigns",
        "Cartridges, apps, modules and plugins",
        "Checkout, promotions and pricing rules",
        "Performance and Core Web Vitals work",
        "Ongoing fixes, releases and platform upgrades",
      ],
      fit: "You run, or are about to launch, a store on one of these platforms and need senior hands on it.",
      contact: "commerce-platform-engineering",
    },
    {
      id: "headless",
      label: "Headless storefronts",
      heading: "Fast storefronts on top of the platform you have",
      description:
        "A Next.js and React front end connected to your commerce platform through its APIs. Your team keeps the catalogue, orders and back office they know; shoppers get a faster site.",
      does: [
        "Next.js storefronts with server rendering",
        "Salesforce PWA Kit storefronts",
        "Content from your CMS alongside product data",
        "Search, filters and product pages tuned for speed",
        "A phased switch, page type by page type",
      ],
      fit: "Your current front end is slow or hard to change, but the platform behind it works.",
      contact: "headless-commerce",
    },
    {
      id: "migration",
      label: "Migration",
      heading: "Replatform and modernise in phases",
      description:
        "Moving platforms, or out of years of custom code, without a big-bang rewrite. We plan the move in stages, keep the old site running, and switch over when each piece is proven.",
      does: [
        "Audit of what you have and what it does",
        "A staged plan with clear checkpoints",
        "Product, customer and order data migration",
        "URL redirects that protect search rankings",
        "Running old and new side by side until cut-over",
      ],
      fit: "You've outgrown your platform or your version, and a full rewrite feels too risky.",
      contact: "migration-modernization",
    },
    {
      id: "integrations",
      label: "Integrations",
      heading: "Connect your store to the systems behind it",
      description:
        "Payments, order management, ERP, search, tax, shipping and marketing tools, connected through APIs and webhooks so data moves without copy and paste.",
      does: [
        "Payment gateways and fraud tools",
        "OMS and ERP order and stock sync",
        "Search and merchandising services",
        "Tax, shipping and fulfilment providers",
        "Marketing, email and analytics tools",
      ],
      fit: "Orders, stock or customer data are being moved between systems by hand, or break when one changes.",
      contact: "integrations-automation",
    },
    {
      id: "custom-software",
      label: "Custom software",
      heading: "Software for the work around your store",
      description:
        "Internal portals, workflow tools and technical roadmaps for the parts of the business no platform covers. We build and run ten products of our own, so we know what it takes to keep software working after launch.",
      does: [
        "Staff and partner portals",
        "Workflow and approval tools",
        "Reporting and dashboards",
        "Architecture reviews and technical roadmaps",
      ],
      fit: "A spreadsheet, an inbox or a manual process is holding the business back.",
      contact: "enterprise-software",
    },
  ],

  platforms: {
    heading: "Platforms we work on",
    items: [
      { name: "Salesforce Commerce Cloud", note: "PWA Kit storefronts, cartridges, Business Manager configuration and integrations." },
      { name: "Shopify Plus", note: "Themes, apps, checkout extensions, scripts and integrations." },
      { name: "Adobe Commerce (Magento)", note: "Modules, upgrades, PHP and security work, and performance." },
      { name: "WooCommerce", note: "Plugins, upgrades, security hardening and integrations." },
      { name: "Next.js and React", note: "Headless storefronts and custom front ends on any of the above." },
    ],
  },

  process: {
    heading: "How we work",
    steps: [
      { title: "Review", description: "A call and a look at your platform, code and goals. Often starting with the free PHP health check." },
      { title: "Plan", description: "A written plan in phases, with what each phase delivers and what it needs from your team." },
      { title: "Build", description: "Work shipped in small steps you can see, reviewed by the founder before it goes live." },
      { title: "Support", description: "We stay on for upgrades, fixes and new features once you are live." },
    ],
  },

  faq: {
    heading: "Common questions",
    items: [
      { question: "Do you work in our time zone?", answer: "Yes. We are remote-first and plan our working day around yours, wherever your team is." },
      { question: "Who will we actually work with?", answer: "YourForce is founder-led. The founder scopes and architects every engagement and reviews the code that ships, so you talk to the engineer doing the work, not an account manager." },
      { question: "Can you take over an existing codebase?", answer: "Yes. We start by reviewing what is there, then fix the riskiest parts first. For Magento and WooCommerce stores, the free PHP health check is a good first step." },
      { question: "Do we have to change platforms?", answer: "No. Most of our work is improving the platform you already have. We only recommend a migration when staying costs more than moving." },
      { question: "How do we start?", answer: "Book a call or email hello@yourforce.io. We reply within one working day with questions, or a time for a call in your time zone." },
    ],
  },

  cta: {
    heading: "Tell us about your platform",
    description: "30 minutes with the founder. Bring your roadmap or your biggest headache.",
    primary: { label: "Book a call", href: site.bookCall },
    email: "hello@yourforce.io",
  },
};
