/**
 * The US operations desks (moved 2026-11-11 from the static sites trucking.yourforce.io, billing.yourforce.io and
 * backoffice.yourforce.io into this app; those hosts redirect here once their DNS points at Vercel — see
 * next.config.ts). Content kept from the static pages, with these changes:
 * - Trucking: no "24/7" or "24 hours a day, 7 days a week" (not staffed round the clock).
 * - Billing: no promise to sign a Business Associate Agreement and no "everyone completes privacy and security
 *   training" (HIPAA safeguards aren't confirmed yet); billing is described as starting with a pilot.
 */

export type OpsVisual =
  | { kind: "steps"; title: string; rows: { label: string; text: string }[] }
  | { kind: "ledger"; title: string; note: string; rows: { desc: string; code: string; status: string; ok: boolean }[] }
  | { kind: "tracker"; title: string; note: string; rows: { vendor: string; insurer: string; expires: string; status: string; tone: "ok" | "warn" | "bad" }[] }
  | { kind: "transform"; before: { label: string; text: string }; after: { label: string; text: string } };

export type OpsPageData = {
  slug: string;
  path: string;
  /** The old static site, so Google and the redirect know where it came from. */
  legacyHost: string;
  name: string;
  metadata: { title: string; description: string };
  serviceType: string;
  audienceType: string;
  email: string;
  hero: { label: string; heading: string; description: string; primary: { label: string; href: string }; secondary: { label: string; href: string }; chips?: string[] };
  visual: OpsVisual;
  services: { heading: string; description: string; items: { tag?: string; title: string; description: string }[] };
  fit?: { heading: string; description: string; items: { title: string; description: string }[] };
  process: { heading: string; description: string; steps: { title: string; description: string }[] };
  trust?: { heading: string; description: string; items: { tag: string; text: string }[] };
  boundaries?: { heading: string; description: string; does: string[]; doesnt: string[] };
  pricing?: { heading: string; description: string; options: { tag: string; title: string; description: string; points: string[] }[] };
  faq?: { question: string; answer: string }[];
  cta: { heading: string; description: string; primary: { label: string; href: string }; details: { label: string; value: string; href?: string }[] };
};

const CALL = "https://calendly.com/your-force-you/30min";

export const trucking: OpsPageData = {
  slug: "trucking",
  path: "/operations/trucking",
  legacyHost: "trucking.yourforce.io",
  name: "YourForce Dispatch",
  metadata: {
    title: "Freight Dispatch for Owner-Operators | YourForce Dispatch",
    description: "Dedicated freight dispatching for owner-operators and small carriers: load sourcing, rate coordination and dispatch paperwork, so you can focus on driving.",
  },
  serviceType: "Freight Dispatching",
  audienceType: "Owner-operators and small trucking fleets",
  email: "dispatch@yourforce.io",
  hero: {
    label: "Dedicated dispatch desk",
    heading: "Spend less time on load boards. We handle the dispatch desk",
    description: "Dedicated freight dispatching for owner-operators and small carriers. We source suitable loads, coordinate rates and manage the paperwork. You stay in control and focus on driving.",
    primary: { label: "Book a dispatch fit call", href: CALL },
    secondary: { label: "See how it works", href: "#process" },
  },
  visual: {
    kind: "steps",
    title: "Your truck",
    rows: [
      { label: "Find", text: "Load options sourced from established load boards and broker networks, matched to your lanes and equipment." },
      { label: "Negotiate", text: "Rate options coordinated with brokers and presented for your approval." },
      { label: "Book", text: "Once you approve a load, the rate confirmation and dispatch details are coordinated before you roll." },
      { label: "Track", text: "Shipment tracked door to door, with problems worked on before they cost you time." },
    ],
  },
  services: {
    heading: "What we handle",
    description: "Everything between finding a suitable load and completing the delivery paperwork.",
    items: [
      { tag: "01", title: "Load sourcing", description: "We work load boards daily to find freight that matches your equipment, lanes and rate targets, so you're not stuck hunting between drives." },
      { tag: "02", title: "Rate negotiation", description: "We coordinate with brokers on each load, aim for the strongest rate the market will support, and present the option for your approval." },
      { tag: "03", title: "Route planning", description: "Routes coordinated around delivery windows and the operating constraints you provide, helping you evaluate each load before accepting it." },
      { tag: "04", title: "Paperwork and tracking", description: "Rate confirmations, BOLs and shipment tracking handled end to end. If something goes wrong mid-route, we're already working the fix." },
    ],
  },
  fit: {
    heading: "Built for owner-operators",
    description: "We work best with drivers and small fleets who want a dispatcher who treats their truck like it's the only one.",
    items: [
      { title: "Owner-operators", description: "Running your own authority and tired of losing hours to load boards and broker calls between drives." },
      { title: "Small fleets (1–5 trucks)", description: "Growing your operation and need dispatch that scales with you without hiring in-house." },
      { title: "New authority holders", description: "Recently got your MC number and want structured dispatch support from the start instead of navigating every broker call alone." },
    ],
  },
  process: {
    heading: "How it works",
    description: "A clear onboarding process before any load is booked.",
    steps: [
      { title: "Dispatch fit call", description: "We talk about your equipment, preferred lanes, operating requirements and rate targets. Thirty minutes, no obligation." },
      { title: "Carrier verification and agreement", description: "Before dispatch begins, we verify your active authority and insurance, confirm your operating details and complete a written dispatch agreement." },
      { title: "Pilot dispatch week", description: "We begin with a pilot week so you can review our communication, load options and dispatch process before choosing ongoing service." },
      { title: "Ongoing dispatch", description: "If it's a fit, continue on a flat monthly rate or a straight percentage, your choice." },
    ],
  },
  pricing: {
    heading: "Simple pricing",
    description: "Choose the structure that fits your operation. Pricing is agreed in writing before dispatch begins.",
    options: [
      { tag: "Flat monthly", title: "Fixed rate per truck", description: "A predictable monthly fee per truck, regardless of load volume.", points: ["Same cost every month", "Good for steady, high-volume lanes", "Clear per-truck budgeting"] },
      { tag: "Percentage", title: "Straight percentage of load revenue", description: "We only earn when you earn: a fixed percentage of each load booked.", points: ["No cost on slow weeks", "Incentive aligned with your revenue", "Fee scales with booked revenue"] },
    ],
  },
  cta: {
    heading: "Ready to hand off the phone calls?",
    description: "Tell us about your truck, equipment and preferred lanes. We'll review the fit and send the onboarding steps. No loads are booked until carrier verification and a signed dispatch agreement are complete.",
    primary: { label: "Book a 30-minute dispatch call", href: CALL },
    details: [
      { label: "Email", value: "dispatch@yourforce.io", href: "mailto:dispatch@yourforce.io?subject=Dispatch%20Fit%20Call%20Request" },
      { label: "Response time", value: "Within one business day" },
      { label: "Start", value: "A pilot dispatch week before you commit" },
    ],
  },
};

export const billing: OpsPageData = {
  slug: "billing",
  path: "/operations/billing",
  legacyHost: "billing.yourforce.io",
  name: "YourForce Billing",
  metadata: {
    title: "Medical Billing for Small Practices | YourForce Billing",
    description: "Medical billing and coding for solo practitioners and small clinics: claims support, denial follow-up and privacy-conscious workflows. Starts with a small pilot.",
  },
  serviceType: "Medical Billing and Coding",
  audienceType: "Solo practitioners and small medical clinics",
  email: "billing@yourforce.io",
  hero: {
    label: "Claims submission · coding · denial management",
    heading: "Clean claims. Fewer denials. Faster payment",
    description: "Dedicated medical billing and coding for solo practitioners and small clinics. We handle the claims cycle end to end, so you can spend your time on patients, not paperwork.",
    primary: { label: "Book a billing fit call", href: CALL },
    secondary: { label: "See how it works", href: "#process" },
  },
  visual: {
    kind: "ledger",
    title: "Illustrative workflow",
    note: "Example only",
    rows: [
      { desc: "Office visit, established patient", code: "CPT 99213 · Submitted via clearinghouse", status: "Paid", ok: true },
      { desc: "Preventive visit, new patient", code: "CPT 99385 · Awaiting EOB", status: "Paid", ok: true },
      { desc: "Diagnostic panel", code: "CPT 80053 · Denial received, appeal filed", status: "In review", ok: false },
      { desc: "Follow-up consultation", code: "CPT 99214 · Submitted via clearinghouse", status: "Paid", ok: true },
    ],
  },
  services: {
    heading: "What we handle",
    description: "Everything between a patient visit and your practice actually getting paid for it.",
    items: [
      { tag: "Coding", title: "Claims submission and coding", description: "Documentation reviewed for appropriate CPT and ICD-10 coding, checked for common errors, and submitted through the practice's approved clearinghouse." },
      { tag: "Follow-up", title: "Denial management and AR follow-up", description: "Denied and underpaid claims are appealed and followed up directly with insurers. We chase the payment so you don't have to." },
      { tag: "Verification", title: "Eligibility and prior authorization", description: "Coverage checked and authorizations requested before the visit, reducing the chance of a claim being denied after the fact." },
      { tag: "Reporting", title: "Reporting and reconciliation", description: "Regular reporting on what's been billed, paid and outstanding, so you always know where your revenue stands." },
    ],
  },
  fit: {
    heading: "Built for independent practices",
    description: "We work best with practices too small for enterprise RCM firms but too busy to manage billing in-house.",
    items: [
      { title: "Solo practitioners", description: "Running your own practice and losing hours each week to claims, follow-up and paperwork instead of patients." },
      { title: "Small clinics", description: "A growing patient list and a billing process that hasn't scaled with it: denials and unpaid claims piling up." },
      { title: "New practices", description: "Recently opened and want billing set up correctly from day one, without hiring a full in-house biller." },
    ],
  },
  process: {
    heading: "How it works",
    description: "We start with a confidential discovery call and a small pilot, and agree the safeguards before reviewing any claim information.",
    steps: [
      { title: "Confidential billing call", description: "We discuss your specialty, billing volume, payer mix, current challenges and goals without requesting patient information." },
      { title: "Secure setup and agreements", description: "We confirm software compatibility, agree the service terms and how patient data will be protected, and set up role-based access through approved systems." },
      { title: "Pilot, then ongoing billing", description: "We start with a small pilot. If it's a fit, claims are submitted, tracked and followed up continuously, with regular reporting back to you." },
    ],
  },
  trust: {
    heading: "Handled with the care patient data requires",
    description: "Our onboarding is built around written agreements, controlled access, approved systems and documented procedures.",
    items: [
      { tag: "Data handling", text: "Patient and claim information is accepted only through approved secure methods, after the service terms and patient-data safeguards are agreed in writing." },
      { tag: "Assigned team only", text: "Account access is limited to the people assigned to your practice." },
      { tag: "System access", text: "We work within the practice's approved EMR or practice-management system using role-based access. Compatibility is confirmed during onboarding." },
    ],
  },
  pricing: {
    heading: "Simple pricing",
    description: "Choose the structure that fits your practice. Scope and pricing are agreed in writing before onboarding.",
    options: [
      { tag: "Per claim", title: "Flat fee per claim", description: "A fixed cost per claim submitted, regardless of the amount collected.", points: ["Predictable monthly cost", "Good for high-volume, low-complexity billing", "Clear per-claim budgeting"] },
      { tag: "Percentage of collections", title: "Percentage of what's collected", description: "We earn a fixed percentage of what's actually collected, not just billed.", points: ["No cost on unpaid claims", "Incentive aligned with your revenue", "Cost scales with collected revenue"] },
    ],
  },
  cta: {
    heading: "Ready to discuss your billing workflow?",
    description: "Book a confidential 30-minute introduction to discuss your practice and current billing challenges. Please don't email patient information, claim files or other protected health information. If records are needed later, we'll provide an approved secure method once the right agreements are in place.",
    primary: { label: "Book a 30-minute billing call", href: CALL },
    details: [
      { label: "Email", value: "billing@yourforce.io", href: "mailto:billing@yourforce.io?subject=Billing%20Fit%20Call%20Request" },
      { label: "Response time", value: "Within one business day" },
      { label: "Billing hours", value: "Monday–Friday, US business hours" },
    ],
  },
};

const PILOT = "/contact?service=data-entry#form";

export const dataEntry: OpsPageData = {
  slug: "data-entry",
  path: "/operations/data-entry",
  legacyHost: "backoffice.yourforce.io",
  name: "YourForce Back Office",
  metadata: {
    title: "Data Entry & Document Processing | YourForce",
    description: "Data entry, data cleanup and document digitization for US businesses, with a second-person review on every batch. Start with a small pilot.",
  },
  serviceType: "Data Entry and Document Processing",
  audienceType: "US small and medium businesses",
  email: "hello@yourforce.io",
  hero: {
    label: "Data operations",
    heading: "Data entry that's checked before it reaches you",
    description: "Invoice and form entry, data cleanup and document digitization. A second person reviews every batch, and you see the quality on a small pilot first.",
    primary: { label: "Request a data entry pilot", href: PILOT },
    secondary: { label: "How the pilot works", href: "#process" },
    chips: ["Invoices and forms", "Data cleanup", "Scanned documents", "Product catalogs"],
  },
  visual: {
    kind: "transform",
    before: { label: "Scanned document", text: "INV# 4471  03-12-26  ACME SUPLY INC  Total $1,204.50" },
    after: { label: "Structured record", text: "Invoice: 4471 · Date: 2026-03-12 · Vendor: Acme Supply Inc. · Total: 1204.50 USD" },
  },
  services: {
    heading: "What we handle",
    description: "Clear scope and a second-person review on every batch.",
    items: [
      { title: "Invoice and form entry", description: "Invoices, receipts, order forms and applications entered into your spreadsheet, accounting tool or database." },
      { title: "Data cleanup", description: "De-duplication, standardizing formats, fixing errors and filling gaps in existing records." },
      { title: "Document digitization", description: "Scanned PDFs and paper records converted into organized, searchable files and structured rows." },
      { title: "Product and catalog entry", description: "Product data and listings prepared for your eCommerce platform, built on experience with commerce systems." },
    ],
  },
  process: {
    heading: "How the pilot works",
    description: "Start small, check the quality, and decide afterward.",
    steps: [
      { title: "Send a sample", description: "A small set of documents or records, and where the data should end up." },
      { title: "Agree the scope", description: "NDA signed, format and turnaround agreed in writing." },
      { title: "Pilot batch", description: "We complete the sample, review it with a second person, and send a short accuracy summary." },
      { title: "Ongoing work", description: "If it's a fit, we continue. Pricing is agreed in writing first." },
    ],
  },
  faq: [
    { question: "What tools do you work in?", answer: "Spreadsheets, accounting tools, CRMs and databases. Tell us where the data needs to go and we'll confirm we can work there." },
    { question: "How is accuracy checked?", answer: "A second person reviews each batch. On the pilot you receive a short accuracy summary so you can judge the quality before committing." },
    { question: "How is my data protected?", answer: "We sign an NDA before work starts, limit access to the people working on your account, use two-factor authentication, and keep client documents off personal devices." },
    { question: "How is it priced?", answer: "Per record, per hour or a monthly amount, depending on the work. The scope and price are agreed in writing before any work starts." },
  ],
  cta: {
    heading: "Send a small sample and see the quality first",
    description: "Share a few documents or records and tell us where the data should go. We'll reply within one business day.",
    primary: { label: "Request a pilot", href: PILOT },
    details: [
      { label: "Email", value: "hello@yourforce.io", href: "mailto:hello@yourforce.io?subject=Data%20Entry%20Pilot%20Request" },
      { label: "Response time", value: "Within one business day" },
      { label: "Pricing", value: "Agreed in writing before any work starts" },
    ],
  },
};

export const insurance: OpsPageData = {
  slug: "insurance-documents",
  path: "/operations/insurance-documents",
  legacyHost: "backoffice.yourforce.io",
  name: "YourForce Back Office",
  metadata: {
    title: "COI Tracking & Insurance Documents | YourForce",
    description: "Certificate of insurance (COI) tracking, renewal reminders, onboarding packets and policy paperwork. Document handling only, with no coverage advice.",
  },
  serviceType: "Insurance Document Support",
  audienceType: "US brokers, carriers, contractors, property managers and small businesses",
  email: "hello@yourforce.io",
  hero: {
    label: "Insurance operations",
    heading: "Know which certificates are current before anyone asks",
    description: "We collect certificates of insurance, keep them in one tracker, and remind you before they expire. Document handling only, with no coverage advice and no policy sales.",
    primary: { label: "Request an insurance documents pilot", href: "/contact?service=insurance-documents#form" },
    secondary: { label: "What we handle", href: "#services" },
  },
  visual: {
    kind: "tracker",
    title: "Certificate tracker",
    note: "Illustration with placeholder names. Your tracker is built from your own documents.",
    rows: [
      { vendor: "Vendor A", insurer: "Insurer 1", expires: "Mar 14, 2027", status: "Current", tone: "ok" },
      { vendor: "Vendor B", insurer: "Insurer 2", expires: "Nov 02, 2026", status: "Expires soon", tone: "warn" },
      { vendor: "Vendor C", insurer: "Insurer 3", expires: "Sep 30, 2026", status: "Expired", tone: "bad" },
      { vendor: "Vendor D", insurer: "Not on file", expires: "None", status: "Missing", tone: "bad" },
    ],
  },
  services: {
    heading: "What we handle",
    description: "Certificates, renewals and the paperwork around them.",
    items: [
      { title: "COI collection and tracking", description: "We request certificates, follow up on missing ones, and record the insurer, coverage dates and the document on file." },
      { title: "Renewal reminders", description: "Expiring certificates flagged ahead of time, with renewal requests sent on the schedule you choose." },
      { title: "Onboarding packets", description: "W-9, certificate, license or authority letter, and signed agreement gathered and checked for completeness." },
      { title: "Policy and claims paperwork", description: "Policy details entered and claim documents indexed and checked for completeness, so files stay organized." },
    ],
  },
  fit: {
    heading: "Who it's for",
    description: "Anyone who has to keep other people's insurance documents current.",
    items: [
      { title: "Trucking and freight", description: "Brokers and carriers keeping carrier certificates current. See also our dispatch service." },
      { title: "Contractors and property managers", description: "Managing subcontractor and vendor certificates across many jobs or properties." },
      { title: "Agencies and small businesses", description: "Anyone with a growing stack of policy documents and no one to keep them in order." },
    ],
  },
  process: {
    heading: "How the pilot works",
    description: "Start small, check the quality, and decide afterward.",
    steps: [
      { title: "Send a sample", description: "A short vendor list or a few documents, plus how you handle it today." },
      { title: "Agree the scope", description: "We sign an NDA and agree in writing on the work, access and turnaround." },
      { title: "Pilot batch", description: "We complete your sample. A second person reviews it before it comes back." },
      { title: "Ongoing work", description: "If it's a fit, we continue. Pricing is agreed in writing first." },
    ],
  },
  boundaries: {
    heading: "Clear boundaries",
    description: "This is administrative support. We track and organize documents; the decisions stay with you.",
    does: ["Collect and file certificates and packet documents", "Record coverage dates and track expirations", "Send renewal and missing-document requests"],
    doesnt: ["Advise on coverage or limits", "Sell, bind or place policies", "Approve or reject a vendor on your behalf"],
  },
  faq: [
    { question: "Which documents can you track?", answer: "Certificates of insurance, plus items such as W-9s, licenses, authority letters and signed agreements. Ask about anything else and we'll say whether we can handle it." },
    { question: "Do you give insurance advice?", answer: "No. We handle documents and reminders only. We don't advise on coverage, sell policies, or decide whether coverage is acceptable." },
    { question: "How is my data protected?", answer: "We sign an NDA before work starts, limit access to the people working on your account, use two-factor authentication, and keep client documents off personal devices." },
    { question: "How is it priced?", answer: "The pilot scope and the ongoing price are agreed in writing before any work starts. Tell us how many vendors or documents you have and we'll propose a structure." },
  ],
  cta: {
    heading: "Try it on a small batch of certificates",
    description: "Send a short vendor list or a few documents and we'll show you how we'd track them.",
    primary: { label: "Request a pilot", href: "/contact?service=insurance-documents#form" },
    details: [
      { label: "Email", value: "hello@yourforce.io", href: "mailto:hello@yourforce.io?subject=Insurance%20Documents%20Pilot%20Request" },
      { label: "Response time", value: "Within one business day" },
      { label: "Pricing", value: "Agreed in writing before any work starts" },
    ],
  },
};

export const opsPages = [trucking, billing, dataEntry, insurance];
