/**
 * Homepage content (2026 redesign). Keep claims here to what is true:
 * - The four "experience" projects were delivered by the founder while employed elsewhere. Never present them as
 *   YourForce client work.
 * - Medical billing: a pilot until HIPAA safeguards are in place; don't promise a BAA or claim "HIPAA compliant".
 */

import { site } from "@/data/site";

export type HomeProduct = {
  slug: string;
  /** One-line note under the product in the header's Products menu. */
  menu: string;
  name: string;
  kind: string;
  group: string;
  color: string;
  demoName: string;
  demoHref: string;
};

export const hero = {
  badge: "Founder-led · remote-first, across time zones",
  heading: "Commerce engineering for Salesforce, Shopify and Magento brands",
  description:
    "Senior engineers for the platform you already run: builds, upgrades, headless storefronts and integrations. We also make ready-made software for growing businesses, and run back-office desks for US teams.",
  primary: { label: "Book a call", href: site.bookCall },
  secondary: { label: "Free PHP health check", href: "/contact?service=php" },
  caption: "From our Labs: headless storefront and omnichannel OMS",
};

export const doors = [
  {
    who: "For commerce brands",
    title: "Commerce engineering",
    description:
      "Builds, upgrades, headless storefronts and integrations on SFCC, Shopify Plus, Adobe Commerce and WooCommerce.",
    cta: "Explore engineering",
    href: "#engineering",
  },
  {
    who: "For growing businesses",
    title: "Ready-made software",
    description: "Ten products for schools, clinics, shops, restaurants and property, each with a live demo.",
    cta: "See the products",
    href: "#products",
  },
  {
    who: "For US carriers and practices",
    title: "Operations support",
    description:
      "Trucking dispatch, medical billing and coding, data entry and insurance paperwork, run by a dedicated desk.",
    cta: "Explore operations",
    href: "#operations",
  },
];

export const platforms = ["Salesforce Commerce Cloud", "Shopify Plus", "Adobe Commerce", "WooCommerce", "Next.js · React"];

export const engineering = {
  label: "Commerce engineering",
  heading: "From the first audit to long after launch.",
  description: "Six ways we help commerce teams, on the platform you already have.",
  // `menu` is the one-line note shown under each link in the header's Services menu.
  services: [
    { tag: "SFCC · Shopify · Magento", title: "Platform builds", menuTitle: "Platform builds", menu: "New builds and support", description: "Design, development and long-term support on SFCC, Shopify Plus, Adobe Commerce and WooCommerce.", href: "/services/commerce#platform-builds" },
    { tag: "Free health check", title: "PHP upgrades and security", menuTitle: "PHP upgrades", menu: "Versions and security", description: "Supported PHP versions, security patches and rescue of fragile Magento and WooCommerce code.", href: "/services/php" },
    { tag: "Next.js · React", title: "Headless storefronts", menuTitle: "Headless", menu: "Fast Next.js storefronts", description: "Fast storefronts connected to your commerce platform through its APIs.", href: "/services/commerce#headless" },
    { tag: "Phased", title: "Migration", menuTitle: "Migration", menu: "Replatform in phases", description: "Replatforming and modernisation in phases, without a big-bang rewrite.", href: "/services/commerce#migration" },
    { tag: "APIs · webhooks", title: "Integrations", menuTitle: "Integrations", menu: "Payments, ERP and OMS", description: "Payments, OMS and ERP, search, tax, shipping and marketing tools.", href: "/services/commerce#integrations" },
    { tag: "Beyond commerce", title: "Custom software", menuTitle: "Custom software", menu: "Portals and workflows", description: "Internal portals, workflow automation and technical roadmaps.", href: "/services/commerce#custom-software" },
  ],
};

export const healthCheck = {
  label: "Free · no obligation",
  heading: "Is your Magento or WooCommerce store on a safe, supported PHP?",
  description: "Send us your store and we'll send back a plain-English report within a few working days.",
  cta: { label: "Request your free health check", href: "/contact?service=php" },
  items: [
    "PHP version and support status",
    "Known vulnerabilities and risky plugins",
    "Upgrade compatibility report",
    "A prioritised upgrade roadmap",
  ],
};

export const why = {
  label: "Why YourForce",
  heading: "Remote-first, across the globe",
  description: "We plan our day around yours, so your team gets answers while it's still working.",
  cta: { label: "Book a call", href: site.bookCall },
  points: [
    { title: "Remote-first, any time zone", description: "We work across the globe and match your working hours, wherever your team is." },
    { title: "Founder-led, senior only", description: "You talk directly to the engineer doing the work. No account managers in between." },
    { title: "One team, end to end", description: "Audit, architecture, code, launch and support, without handing you between vendors." },
    { title: "We run our own software", description: "Ten YourForce products are live in production. We build systems and keep them running." },
    { title: "Start small, no big-bang rewrites", description: "Begin with a free health check or a short review, then improve in phases." },
    { title: "Support after launch", description: "We stay on for upgrades, fixes and new features once you are live." },
  ],
};

export const labs = {
  label: "Labs",
  heading: "Commerce patterns we've built. Try them.",
  items: [
    { title: "Headless Commerce Storefront", description: "Listing, product detail and cart on a headless Next.js front end.", image: "/images/lab/headless-commerce-preview.png", href: "/lab/headless-commerce" },
    { title: "Smart Product Discovery", description: "Instant search, facets and merchandising rules.", image: "/images/lab/product-discovery-preview.png", href: "/lab/product-discovery" },
    { title: "Omnichannel Fulfilment", description: "Store availability and buy online, pick up in store.", image: "/images/lab/omnichannel-fulfilment-preview.png", href: "/lab/omnichannel-fulfilment" },
    { title: "Virtual Try-On", description: "Shoppers try a garment on their own photo.", image: "/images/lab/virtual-try-on-preview.png", href: "https://tryfit.yourforce.io/demo" },
  ],
};

export const founder = {
  label: "About the founder",
  heading: "Led by a commerce engineer, not an account manager.",
  paragraphs: [
    "YourForce was started by an engineer with more than 15 years of hands-on commerce work on Salesforce Commerce Cloud, Shopify, Adobe Commerce and custom platforms, for fashion, home, rental and international consumer brands.",
    "That experience was built at previous employers. At YourForce it goes into your platform, and into the ten products we build and run ourselves.",
  ],
  points: ["Scopes and architects every engagement", "Reviews the code that ships", "Built the ten YourForce products"],
  stack: ["Salesforce Commerce Cloud", "Shopify Plus", "Adobe Commerce", "Next.js", "Custom platforms"],
  cta: { label: "Book 30 minutes with the founder", href: site.bookCall },
  experienceTitle: "Platforms our founder engineered before YourForce",
  experienceNote: "Delivered while employed at other companies, and shown here as experience rather than YourForce client work.",
  experience: [
    { category: "Fashion", title: "Enterprise fashion commerce", image: "/images/projects/enterprise-fashion-commerce.jpg" },
    { category: "Home & lighting", title: "Lighting New York", image: "/images/projects/lighting-new-york.jpg" },
    { category: "Rental & retail", title: "Friar Tux", image: "/images/projects/friar-tux.jpg" },
    { category: "International consumer", title: "Caffè Borbone", image: "/images/projects/caffe-borbone.jpg" },
  ],
};

export const productsSection = {
  label: "Ready-made software",
  heading: "Ten products. Every one with a live demo.",
  description: "Built and run by the same engineers. Free trial, no setup fee, cancel any time.",
  compare: { label: "Compare all products", href: "/products" },
  localHeading: "Built for how business works in Pakistan",
  local: [
    { title: "Paid the local way", description: "JazzCash, Easypaisa, bank transfer with a receipt, or cash at the desk." },
    { title: "Urdu where it matters", description: "Prescriptions, worker screens and instructions in Urdu as well as English." },
    { title: "Made for phones", description: "Parents, patients, students and workers use it on the phone they already have." },
    { title: "Support on WhatsApp", description: "We set it up with you and stay on hand while your staff settle in." },
  ],
};

export const homeProducts: HomeProduct[] = [
  { slug: "schools", menu: "Fees, exams and parents", name: "Schools", kind: "Education", group: "Education", color: "#0F7A4F", demoName: "Greenfield Public School", demoHref: "https://app.yourforce.io/demo" },
  { slug: "learn", menu: "Courses and certificates", name: "Learn", kind: "Online courses", group: "Education", color: "#4338CA", demoName: "Bright Future Academy", demoHref: "https://brightfuture.learn.yourforce.io" },
  { slug: "clinic", menu: "Patients, lab, pharmacy", name: "Clinic", kind: "Health", group: "Health", color: "#BE123C", demoName: "City Care Clinic", demoHref: "https://citycare.clinic.yourforce.io" },
  { slug: "commerce", menu: "Your own online store", name: "Commerce", kind: "Retail", group: "Shops & food", color: "#1D4ED8", demoName: "Nova Mart", demoHref: "https://novamart.shop.yourforce.io" },
  { slug: "dine", menu: "Online orders", name: "Dine", kind: "Restaurants", group: "Shops & food", color: "#C2410C", demoName: "Karachi Grill", demoHref: "https://grill.dine.yourforce.io" },
  { slug: "bookings", menu: "Salon and spa booking", name: "Bookings", kind: "Salons and spas", group: "Shops & food", color: "#7E22CE", demoName: "Glow Salon & Spa", demoHref: "https://glow.book.yourforce.io" },
  { slug: "property", menu: "Listings and enquiries", name: "Property", kind: "Real estate", group: "Property", color: "#0369A1", demoName: "Skyline Estates", demoHref: "https://skyline.property.yourforce.io" },
  { slug: "society", menu: "Dues and gate passes", name: "Society", kind: "Housing societies", group: "Property", color: "#0F766E", demoName: "Green Valley Society", demoHref: "https://greenvalley.society.yourforce.io" },
  { slug: "rentacar", menu: "Fleet and bookings", name: "Rent-a-Car", kind: "Car rental", group: "Vehicles & services", color: "#B45309", demoName: "Swift Rent a Car", demoHref: "https://swift.rentacar.yourforce.io" },
  { slug: "services", menu: "Trusted home workers", name: "Services", kind: "Home services", group: "Vehicles & services", color: "#15803D", demoName: "YourForce Services Lahore", demoHref: "https://lahore.services.yourforce.io" },
];

export const operations = {
  label: "Operations support · US",
  heading: "A back-office desk that keeps you moving.",
  description: "Dedicated desks for US carriers, healthcare practices and growing businesses. Start with a small pilot.",
  desks: [
    { icon: "truck", menuTitle: "Trucking dispatch", menu: "Loads, rates and paperwork", category: "Transportation", title: "Trucking Dispatch", description: "Dispatch support for owner-operators and small carriers: finding loads, negotiating rates, routes and paperwork.", tags: ["Load sourcing", "Rate negotiation", "Freight invoicing"], trust: "For owner-operators and small fleets", href: "/operations/trucking", cta: "Explore dispatch" },
    { icon: "billing", menuTitle: "Medical billing", menu: "Claims, denials and AR", category: "Healthcare · pilot", title: "Medical Billing & Coding", description: "Claims, coding and follow-up for solo practitioners and small clinics, so you get paid for the work you do.", tags: ["Claims & coding", "Denial management", "AR follow-up"], trust: "Starts as a small pilot", href: "/operations/billing", cta: "Explore billing" },
    { icon: "documents", menuTitle: "Data entry", menu: "Forms, records and cleanup", category: "Back office", title: "Data Entry & Documents", description: "Invoices, forms and records entered, cleaned up and digitised for US businesses.", tags: ["Form entry", "Data cleanup", "Digitisation"], trust: "Second-person check on every batch", href: "/operations/data-entry", cta: "Request a pilot" },
    { icon: "insurance", menuTitle: "Insurance documents", menu: "COIs, renewals and packets", category: "Insurance", title: "Insurance Document Support", description: "Certificates of insurance, carrier onboarding packets and policy paperwork, tracked and filed.", tags: ["COI tracking", "Renewals", "Onboarding packets"], trust: "Paperwork only, no coverage advice", href: "/operations/insurance-documents", cta: "Request a pilot" },
  ],
} as const;

export const contactSection = {
  label: "Contact",
  heading: "Tell us what you're running",
  description: "Pick the route that fits. Either way, a real person reads it and replies.",
  steps: [
    { title: "You tell us", description: "what you run and what is getting in the way." },
    { title: "We reply within one working day", description: "with questions, or a time for a call in your time zone." },
    { title: "You get a clear next step", description: "a fixed-scope plan, a pilot or a demo with your data. No obligation." },
  ],
  engineering: {
    eyebrow: "Commerce engineering · operations",
    title: "30 minutes with the founder",
    description: "Bring your roadmap or your biggest headache. We book it in your time zone.",
    primary: { label: "Book a call", href: site.bookCall },
    email: "hello@yourforce.io",
  },
  software: {
    eyebrow: "Ready-made software · Pakistan",
    title: "See it with your own data",
    description: "Message us on WhatsApp, or ask for a demo with your own data. We reply within one working day.",
    primary: { label: "WhatsApp us", href: site.whatsapp.href },
    secondary: { label: "Request a demo", href: "/contact?service=other" },
  },
};
