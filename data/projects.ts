import type { Projects } from "@/types/project";

export const projects: Projects = {
  badge: "Selected Commerce Work",

  heading:
    "Commerce Experiences Built for Real Business Complexity",

  description:
    "A selection of enterprise commerce platforms and digital experiences delivered across fashion, home décor, event rentals, and international consumer brands.",

  highlights: [
    "4 detailed case studies",
    "Enterprise commerce delivery",
    "Modernization and integrations",
  ],

  items: [
    {
      slug: "enterprise-fashion-commerce-modernization",

      featured: true,

      category: "Fashion eCommerce Modernization",

      title: "Enterprise Fashion Commerce Transformation",

      shortDescription:
        "A multi-stage Salesforce Commerce Cloud modernization from SiteGenesis Controllers to a hybrid headless storefront and ultimately a complete PWA Kit experience.",

      description:
        "A long-term commerce transformation for a confidential US fashion retailer, modernizing the storefront across three architectural generations while preserving a reliable customer experience.",

      image:
        "/images/projects/enterprise-fashion-commerce.jpg",

      overview:
        "This project represents extensive hands-on experience across the evolution of a large Salesforce Commerce Cloud implementation. The engagement began with a SiteGenesis Controllers storefront, progressed to a hybrid headless model, and ultimately moved to a complete Salesforce Commerce Cloud PWA Kit architecture.",

      challenge:
        "The platform needed to modernize without disrupting an established enterprise commerce operation. During the hybrid phase, the shopping journey was delivered through a PWA storefront while checkout remained on SiteGenesis, creating additional complexity around session continuity, basket state, customer data, promotions, payments, and navigation between two storefront architectures.",

      solution:
        "The storefront was progressively modernized rather than replaced in a single high-risk release. The initial SiteGenesis implementation was extended into a hybrid architecture that introduced a modern React-based customer journey while retaining the existing checkout. The remaining commerce flows were subsequently migrated to PWA Kit, creating a unified headless storefront supported by Salesforce Commerce Cloud APIs and reusable frontend components.",

      technologies: [
        {
          name: "Salesforce Commerce Cloud",
        },
        {
          name: "SiteGenesis Controllers",
        },
        {
          name: "PWA Kit",
        },
        {
          name: "React",
        },
        {
          name: "SCAPI",
        },
      ],

      metrics: [
        {
          value: "3",
          label: "Architecture Generations",
        },
        {
          value: "Complete",
          label: "PWA Kit Migration",
        },
        {
          value: "Hybrid",
          label: "Transition Architecture",
        },
        {
          value: "Unified",
          label: "End-to-End Commerce Journey",
        },
      ],

      caseStudy: {
        imageEyebrow: "Commerce Modernization",

        imageLabel:
          "Progressive Storefront Transformation",

        summary: {
          platform: "Salesforce Commerce Cloud",

          architecture:
            "SiteGenesis → Hybrid → PWA Kit",

          commerceModel: "Enterprise Retail",

          deliveryFocus:
            "Storefront modernization, API-led commerce, and customer-journey continuity",
        },

        metricSection: {
          eyebrow: "Delivery Impact",

          title: "Transformation Highlights",

          description:
            "Key architectural milestones delivered throughout the progressive storefront modernization.",
        },

        cta: {
          eyebrow: "Start a Conversation",

          title:
            "Ready to Modernize Your Commerce Platform?",

          description:
            "Let’s discuss your current architecture, customer journey, integrations, and the most practical path toward modernization.",

          service: "migration-modernization",
        },
      },

      liveUrl: "",

      githubUrl: "",
    },

    {
      slug: "lighting-new-york-commerce-platform",

      featured: false,

      category: "Home & Lighting eCommerce",

      title: "Lighting New York",

      shortDescription:
        "A large-scale Salesforce Commerce Cloud storefront helping customers discover and purchase lighting, fans, furniture, décor, and outdoor products.",

      description:
        "An enterprise retail experience built on Salesforce Reference Architecture, supporting extensive product discovery, professional buying programs, promotions, project tools, and expert-assisted commerce.",

      image:
        "/images/projects/lighting-new-york.jpg",

      overview:
        "Lighting New York operates a catalog-rich commerce platform covering residential and commercial lighting, ceiling fans, furniture, décor, outdoor products, and accessories. The storefront combines traditional product discovery with brand navigation, room-based shopping, image search, saved projects, promotional merchandising, account capabilities, and direct access to lighting experts.",

      challenge:
        "Lighting and home décor are highly considered purchases involving style, dimensions, compatibility, installation requirements, and large numbers of brands and product variations. The storefront needed to organize a broad catalog while helping retail customers, professional buyers, and trade customers confidently find suitable products.",

      solution:
        "The Salesforce Reference Architecture implementation provides reusable commerce components for catalog navigation, search, merchandising, promotions, account management, product projects, and checkout. The experience also supports expert-assisted shopping and a dedicated professional program for designers, contractors, and other trade customers.",

      technologies: [
        {
          name: "Salesforce Commerce Cloud",
        },
        {
          name: "SFRA",
        },
        {
          name: "JavaScript",
        },
        {
          name: "ISML",
        },
      ],

      metrics: [
        {
          value: "60k+",
          label: "Verified Five-Star Reviews",
        },
        {
          value: "7 Days",
          label: "Expert Availability",
        },
        {
          value: "150%",
          label: "Price-Match Guarantee",
        },
        {
          value: "$49+",
          label: "Free-Shipping Threshold",
        },
      ],

      caseStudy: {
        imageEyebrow: "Enterprise Retail",

        imageLabel: "Catalog-Rich Home Commerce",

        summary: {
          platform: "Salesforce Commerce Cloud",

          architecture: "SFRA",

          commerceModel:
            "Retail + Professional Trade",

          deliveryFocus:
            "Product discovery, merchandising, saved projects, and expert-assisted commerce",
        },

        metricSection: {
          eyebrow: "Commerce Context",

          title: "Platform at a Glance",

          description:
            "Selected characteristics of the storefront, customer proposition, and professional commerce experience.",
        },

        cta: {
          eyebrow: "Start a Conversation",

          title:
            "Planning a Catalog-Rich Commerce Experience?",

          description:
            "Let’s discuss product discovery, merchandising, integrations, professional buying journeys, and scalable commerce architecture.",

          service:
            "commerce-platform-engineering",
        },
      },

      liveUrl: "https://lightingnewyork.com/",

      githubUrl: "",
    },

    {
      slug: "friar-tux-rental-commerce",

      featured: true,

      category: "Rental & Retail Commerce",

      title: "Friar Tux",

      shortDescription:
        "A Salesforce Commerce Cloud experience combining suit and tuxedo rentals, direct purchases, event planning, appointments, and fitting workflows.",

      description:
        "An event-focused commerce platform that allows customers to rent or purchase formalwear while coordinating fittings, appointments, shared orders, and event-specific requirements.",

      image: "/images/projects/friar-tux.jpg",

      overview:
        "Friar Tux provides an integrated online and showroom experience for suits, tuxedos, accessories, and formalwear. Unlike a traditional retail storefront, the platform supports both purchases and time-sensitive rentals for weddings, quinceañeras, school dances, black-tie occasions, and other special events.",

      challenge:
        "A rental journey requires more than a standard purchase flow. The platform must account for event dates, garment sizing, group coordination, fitting accuracy, rental fulfilment, replacement items, returns, and appointments while continuing to support normal product purchases through the same storefront.",

      solution:
        "The Salesforce Reference Architecture storefront brings rental and purchase journeys together within one commerce platform. Customers can browse styles, organize or join events, locate shared orders, submit measurements, schedule virtual or in-store appointments, and use fitting-support services designed around time-sensitive formalwear orders.",

      technologies: [
        {
          name: "Salesforce Commerce Cloud",
        },
        {
          name: "SFRA",
        },
        {
          name: "JavaScript",
        },
        {
          name: "ISML",
        },
      ],

      metrics: [
        {
          value: "Rent + Buy",
          label: "Commerce Models",
        },
        {
          value: "2",
          label: "Appointment Channels",
        },
        {
          value: "1974",
          label: "Fitting Experience Since",
        },
        {
          value: "4+",
          label: "Event Categories",
        },
      ],

      caseStudy: {
        imageEyebrow: "Commerce Experience",

        imageLabel:
          "Rental, Retail & Event Coordination",

        summary: {
          platform: "Salesforce Commerce Cloud",

          architecture: "SFRA",

          commerceModel: "Rental + Retail",

          deliveryFocus:
            "Events, appointments, measurements, fittings, and shared orders",
        },

        metricSection: {
          eyebrow: "Commerce Context",

          title: "Platform at a Glance",

          description:
            "Selected characteristics of the rental model, appointment experience, and event-focused customer journey.",
        },

        cta: {
          eyebrow: "Start a Conversation",

          title:
            "Building a More Complex Commerce Journey?",

          description:
            "Let’s discuss your commerce model, customer workflows, integrations, and the architecture required to support them.",

          service:
            "commerce-platform-engineering",
        },
      },

      liveUrl: "https://www.friartux.com/",

      githubUrl: "",
    },

    {
      slug: "caffe-borbone-international-commerce",

      featured: false,

      category: "International Consumer Commerce",

      title: "Caffè Borbone",

      shortDescription:
        "An international Salesforce Commerce Cloud experience for coffee pods, compatible capsules, beans, machines, accessories, and promotional campaigns.",

      description:
        "A localized commerce and marketing platform supporting a major Italian coffee brand across multiple product systems, customer markets, promotional campaigns, and digital touchpoints.",

      image:
        "/images/projects/caffe-borbone.jpg",

      overview:
        "Caffè Borbone is a Naples-based coffee brand offering traditional coffee, compostable pods, compatible capsules, coffee beans, machines, beverages, and accessories. Its digital platform supports international customers while communicating the brand’s Neapolitan identity, product quality, compatibility options, and sustainability initiatives.",

      challenge:
        "The commerce experience needed to make a broad and technically varied coffee catalog easy to understand. Customers must identify products compatible with different machines and brewing systems while navigating localized markets, promotions, product education, subscriptions, and brand content.",

      solution:
        "The Salesforce Reference Architecture storefront provides a scalable commerce foundation for localized catalogs, product compatibility, merchandising, checkout, promotional experiences, and international content. Salesforce Marketing Cloud supports coordinated customer communications and lifecycle campaigns alongside the commerce experience.",

      technologies: [
        {
          name: "Salesforce Commerce Cloud",
        },
        {
          name: "SFRA",
        },
        {
          name: "Salesforce Marketing Cloud",
        },
        {
          name: "JavaScript",
        },
      ],

      metrics: [
        {
          value: "1997",
          label: "Founded in Naples",
        },
        {
          value: "Global",
          label: "Commerce Reach",
        },
        {
          value: "Multi-System",
          label: "Coffee Compatibility",
        },
        {
          value: "Commerce + CRM",
          label: "Salesforce Ecosystem",
        },
      ],

      caseStudy: {
        imageEyebrow: "International Commerce",

        imageLabel:
          "Localized Consumer Commerce & Marketing",

        summary: {
          platform: "Salesforce Commerce Cloud",

          architecture: "SFRA",

          commerceModel:
            "International Direct-to-Consumer",

          deliveryFocus:
            "Localization, compatibility, promotions, content, and lifecycle marketing",
        },

        metricSection: {
          eyebrow: "Commerce Context",

          title: "Platform at a Glance",

          description:
            "Selected characteristics of the brand, international reach, product compatibility, and Salesforce ecosystem.",
        },

        cta: {
          eyebrow: "Start a Conversation",

          title:
            "Planning an International Commerce Experience?",

          description:
            "Let’s discuss localization, product complexity, customer communication, integrations, and scalable international delivery.",

          service:
            "commerce-platform-engineering",
        },
      },

      liveUrl:
        "https://www.caffeborbone.com/en-int/",

      githubUrl: "",
    },
  ],
};
