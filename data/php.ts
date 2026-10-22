/**
 * Content for the dedicated PHP page (app/services/php/page.tsx).
 * Keep claims here to what YourForce actually delivers.
 */
export const phpPage = {
  hero: {
    badge: "PHP Engineering",

    heading:
      "PHP Upgrades, Security & Development for Commerce and Custom Apps",

    description:
      "Magento and WooCommerce run on PHP, and so do many business-critical applications. We move legacy PHP to supported versions, close security gaps, and rescue fragile code, with direct senior engineering involvement.",

    primaryCta: "Request a Free Health Check",
    primaryHref: "/contact?service=php",

    secondaryCta: "See What We Do",
    secondaryHref: "#what-we-do",

    highlights: ["Magento 2", "WooCommerce", "Custom PHP apps"],
  },

  risks: {
    eyebrow: "Why It Matters",

    heading: "Outdated PHP is a business risk, not just a technical one",

    description:
      "An unsupported PHP version quietly turns into security, compatibility, and performance problems. These are the most common ways it shows up.",

    items: [
      {
        title: "No more security fixes",
        description:
          "Once a PHP version reaches end of life, newly found vulnerabilities are no longer patched for it.",
      },
      {
        title: "Plugins and extensions break",
        description:
          "Modern extensions and platform releases drop support for old PHP, leaving you stuck on outdated versions.",
      },
      {
        title: "Hosting pressure",
        description:
          "Hosts and platforms eventually retire old runtimes, which can force a rushed upgrade at a bad time.",
      },
      {
        title: "Upgrades get harder with time",
        description:
          "Every skipped version adds more deprecated code to untangle. Planned, phased upgrades cost less than emergencies.",
      },
    ],
  },

  services: {
    id: "what-we-do",

    eyebrow: "What We Do",

    heading: "Everything your PHP stack needs to stay current and protected",

    items: [
      {
        title: "PHP version upgrades",
        description:
          "Move applications and stores from legacy PHP to supported versions, with compatibility fixes and regression testing.",
      },
      {
        title: "Security patching & audits",
        description:
          "Apply security fixes, review configuration and dependencies, and close the gaps that put your data and customers at risk.",
      },
      {
        title: "Magento 2 upgrades",
        description:
          "Platform and PHP upgrades for Adobe Commerce and Magento stores, including extension and theme compatibility.",
      },
      {
        title: "WooCommerce hardening",
        description:
          "Update core, plugins, and theme code, remove risky dependencies, and tighten the setup around your store.",
      },
      {
        title: "Custom PHP development",
        description:
          "New features, integrations, internal portals, and APIs built in clean, maintainable PHP.",
      },
      {
        title: "Legacy code rescue",
        description:
          "Stabilize fragile, undocumented code so it can be maintained, extended, or migrated with confidence.",
      },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "A clear path from audit to release",

    steps: [
      {
        title: "Health check",
        description:
          "We review your PHP version, platform, extensions, and known vulnerabilities, and tell you where you stand.",
      },
      {
        title: "Plan",
        description:
          "You get a prioritized roadmap with scope, risks, and a realistic estimate before any work begins.",
      },
      {
        title: "Upgrade in staging",
        description:
          "Changes are built and tested on a staging copy, not on your live site.",
      },
      {
        title: "Test & release",
        description:
          "We verify critical flows, release with a rollback plan, and stay available after launch.",
      },
    ],
  },

  platforms: {
    eyebrow: "Platforms",

    heading: "Where we work",

    items: [
      {
        title: "Adobe Commerce (Magento)",
        description:
          "Upgrades, security patching, extension compatibility, and performance work for Magento 2 stores.",
      },
      {
        title: "WooCommerce & WordPress",
        description:
          "Core, plugin, and theme updates, hardening, and custom development for WooCommerce stores.",
      },
      {
        title: "Custom PHP applications",
        description:
          "Portals, back-office tools, and APIs built on PHP frameworks or plain PHP, new or inherited.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      {
        question: "What does the free health check include?",
        answer:
          "A review of your PHP version and support status, a known-vulnerability and plugin check, a compatibility report for upgrades, and a prioritized roadmap.",
      },
      {
        question: "What do you need from me to start?",
        answer:
          "Your site URL and current PHP version are enough to begin. For deeper work we will ask for staging or hosting access.",
      },
      {
        question: "Will my live site be affected during an upgrade?",
        answer:
          "We build and test changes on staging first, then release with a rollback plan to keep disruption to a minimum.",
      },
      {
        question: "How long does an upgrade take?",
        answer:
          "It depends on the size of the codebase, the number of extensions, and how far behind the version is. We give a realistic estimate after the health check.",
      },
      {
        question: "Do you only work on commerce platforms?",
        answer:
          "No. Magento and WooCommerce are a big part of it, but we also upgrade, secure, and build custom PHP applications.",
      },
    ],
  },

  finalCta: {
    heading: "Find out where your PHP stack stands",

    description:
      "Send us your site and PHP version. We will review it and tell you what needs attention first.",

    ctaLabel: "Request a Free Health Check",

    href: "/contact?service=php",
  },
} as const;
