import type { ProductSummary } from "@/types/product";

/** Products shown on /products and in the footer. Each has its own page under app/products/. */
export const productsIntro = {
  badge: "Our Products",

  heading: "Software Products Built and Run by YourForce",

  description:
    "Alongside our engineering services, we build and run our own software for schools, online sellers, appointment-based businesses, restaurants, real estate agencies, clinics, housing societies and car rental companies. Each product has a live demo you can try today.",
};

export const products = [
  {
    slug: "schools",
    name: "YourForce Schools",
    eyebrow: "Education Software",
    description:
      "A school management platform with separate portals for administrators, accountants, teachers, students and parents, covering fees, timetables, attendance, exams and your school website.",
    icon: "school",
    features: [
      "Role-based portals",
      "Fees & accounts",
      "Timetable & attendance",
      "Exams & results",
      "Parent portal",
      "School website CMS",
    ],
    href: "/products/schools",
    ctaLabel: "Explore YourForce Schools",
    demoHref: "https://app.yourforce.io/demo",
    demoLabel: "Try the live demo",
  },

  {
    slug: "commerce",
    name: "YourForce Commerce",
    eyebrow: "E-commerce Software",
    description:
      "Your own online store on your own web address, with cash on delivery, JazzCash and Easypaisa, Eid sales and offers, and every order managed from your phone.",
    icon: "commerce",
    features: [
      "Your own store",
      "Size & colour variants",
      "COD, JazzCash & Easypaisa",
      "Sales & promo codes",
      "Invoices & courier tracking",
      "Sales reports",
    ],
    href: "/products/commerce",
    ctaLabel: "Explore YourForce Commerce",
    demoHref: "https://novamart.shop.yourforce.io",
    demoLabel: "Visit the demo store",
  },

  {
    slug: "bookings",
    name: "YourForce Bookings",
    eyebrow: "Appointment Software",
    description:
      "Online booking for salons, clinics and spas. Clients book 24/7 on your own page, your team shares one calendar, and reminders go out automatically.",
    icon: "bookings",
    features: [
      "Your own booking page",
      "No double bookings",
      "SMS & WhatsApp reminders",
      "Deposits",
      "Team calendar",
      "Reports",
    ],
    href: "/products/bookings",
    ctaLabel: "Explore YourForce Bookings",
    demoHref: "https://glow.book.yourforce.io",
    demoLabel: "Try the demo booking page",
  },

  {
    slug: "dine",
    name: "YourForce Dine",
    eyebrow: "Restaurant Software",
    description:
      "Online ordering for restaurants with no commission: your own ordering page for delivery and takeaway, QR codes for ordering from the table, and a live kitchen screen.",
    icon: "dine",
    features: [
      "Your own ordering page",
      "Table QR codes",
      "Live kitchen screen",
      "Add-ons & deals",
      "Delivery areas",
      "Reports",
    ],
    href: "/products/dine",
    ctaLabel: "Explore YourForce Dine",
    demoHref: "https://grill.dine.yourforce.io",
    demoLabel: "Try the demo restaurant",
  },

  {
    slug: "property",
    name: "YourForce Property",
    eyebrow: "Real Estate Software",
    description:
      "Your agency's own property website with listings in marla, kanal, lakh and crore, maps with nearby Metro and Orange Line stations, and every enquiry tracked to the right agent.",
    icon: "property",
    features: [
      "Your own agency website",
      "Marla, kanal, lakh & crore",
      "Map & nearby stations",
      "Shortlists & viewing requests",
      "Enquiry tracking",
      "WhatsApp & call buttons",
    ],
    href: "/products/property",
    ctaLabel: "Explore YourForce Property",
    demoHref: "https://skyline.property.yourforce.io",
    demoLabel: "Visit the demo agency",
  },

  {
    slug: "clinic",
    name: "YourForce Clinic",
    eyebrow: "Clinic Software",
    description:
      "Run your whole clinic in one system: online appointments, patient files and printed prescriptions, a lab with flagged results, pharmacy stock, bills and panel billing, with reports in the patient's own account.",
    icon: "clinic",
    features: [
      "Appointments & queue",
      "Prescriptions",
      "Lab results & reports",
      "Pharmacy stock",
      "Bills & panels",
      "Patient portal",
    ],
    href: "/products/clinic",
    ctaLabel: "Explore YourForce Clinic",
    demoHref: "https://citycare.clinic.yourforce.io",
    demoLabel: "Visit the demo clinic",
  },

  {
    slug: "society",
    name: "YourForce Society",
    eyebrow: "Housing Society Software",
    description:
      "Monthly maintenance with receipts and a defaulters list, complaints, notices, visitor gate passes and the committee's accounts, for housing societies and apartment buildings, with an account for every resident.",
    icon: "society",
    features: [
      "Dues & receipts",
      "Defaulters & reminders",
      "Complaints",
      "Notices",
      "Gate passes",
      "Income & expense statement",
    ],
    href: "/products/society",
    ctaLabel: "Explore YourForce Society",
    demoHref: "https://greenvalley.society.yourforce.io",
    demoLabel: "Visit the demo society",
  },

  {
    slug: "rentacar",
    name: "YourForce Rent-a-Car",
    eyebrow: "Car Rental Software",
    description:
      "Your own booking website, a fleet calendar that never double-books a car or driver, CNIC and licence checks, security deposits and a final bill with extra km and late returns, self-drive or with driver.",
    icon: "rentacar",
    features: [
      "Your own booking website",
      "No double bookings",
      "CNIC & licence checks",
      "Deposits",
      "Final bill",
      "Fleet reports",
    ],
    href: "/products/rentacar",
    ctaLabel: "Explore YourForce Rent-a-Car",
    demoHref: "https://swift.rentacar.yourforce.io",
    demoLabel: "Visit the demo company",
  },
] as const satisfies readonly ProductSummary[];
