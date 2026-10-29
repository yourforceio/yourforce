import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Schools product page (app/products/schools/page.tsx).
 * Keep claims here to what the platform actually delivers.
 */
export const schoolsPage = {
  hero: {
    badge: "YourForce Schools",

    heading:
      "One School Management Platform for Students, Fees, Academics and Parents",

    description:
      "YourForce Schools brings every part of running a school into one secure system. Administrators, accountants, clerks and teachers each get their own view of the school, parents get their own portal, and every school's data stays separate and protected.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=school-platform",

    secondaryCta: "Try the Live Demo",
    secondaryHref: "https://app.yourforce.io/demo",

    highlights: [
      "Private schools",
      "School groups & chains",
      "Academies & colleges",
    ],
  },

  overview: {
    eyebrow: "Free Walkthrough",

    title: "See YourForce Schools with your own setup",

    description:
      "Tell us about your school and we'll walk you through the platform using your classes, fee structure and staff roles.",

    items: [
      "The right view for every role in your school",
      "Fee collection and accounts in one place",
      "Timetable, attendance and exams",
      "Parent access and your school website",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Explore a sample school running on the platform",

    description:
      "Greenfield Public School is a made-up primary school with real-sized data. Visit its website, then sign in as an admin, teacher, parent or accountant and click around.",

    stats: [
      { value: "2,000", label: "students" },
      { value: "69", label: "teachers" },
      { value: "50", label: "sections" },
      { value: "1,400", label: "parent accounts" },
    ],

    primaryCta: "Try the Live Demo",
    primaryHref: "https://app.yourforce.io/demo",

    secondaryCta: "See the school's website",
    secondaryHref: "https://greenfield.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "Running a school on spreadsheets and paper costs more than it seems",

    description:
      "When records live in registers, spreadsheets and chat groups, small gaps turn into missed fees, timetable clashes and anxious parents.",

    items: [
      {
        title: "Fees slip through the cracks",
        description:
          "Without one ledger, unpaid dues, discounts and receipts are hard to track and harder to reconcile.",
      },
      {
        title: "Timetables clash",
        description:
          "Double-booked teachers, sections and rooms are easy to miss until the first day of term.",
      },
      {
        title: "Parents are left guessing",
        description:
          "Attendance, results and fee status reach parents late, or only when they call the office.",
      },
      {
        title: "Records are scattered",
        description:
          "Student, staff and exam data spread across files and devices is slow to find and easy to lose.",
      },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "Everything your school needs, in one system",

    items: [
      {
        title: "Role-based access",
        description:
          "Administrators, accountants, clerks and teachers each see only the screens their role needs, and teachers only the classes they teach. Parents have their own portal.",
      },
      {
        title: "Fees & accounts",
        description:
          "Set up fee structures, record payments, track outstanding dues and give your accountant a clear view of the school's finances.",
      },
      {
        title: "Timetable with clash detection",
        description:
          "Build class timetables that automatically block a teacher, section or room from being booked twice in the same slot.",
      },
      {
        title: "Attendance & exams",
        description:
          "Teachers mark attendance and enter exam results in their portal, and records stay organized by class and term.",
      },
      {
        title: "Parent portal",
        description:
          "Parents sign in to follow their own children's attendance, results and fees, and only ever see their own children.",
      },
      {
        title: "School website CMS",
        description:
          "Publish and update your school's public website from the same platform, without a separate web vendor.",
      },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From first call to your first term on the platform",

    steps: [
      {
        title: "Demo",
        description:
          "We walk you through the platform and learn how your school runs today.",
      },
      {
        title: "Setup",
        description:
          "We configure your school, classes, sections, fee structure and staff roles.",
      },
      {
        title: "Data import",
        description:
          "Student and staff records are imported from your existing files and checked with you.",
      },
      {
        title: "Go live & support",
        description:
          "Your team and parents get their logins, and we stay on hand as you settle in.",
      },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for schools of every size",

    items: [
      {
        title: "Private schools",
        description:
          "A single campus that wants fees, academics and parent communication in one place.",
      },
      {
        title: "School groups & chains",
        description:
          "Run each campus as its own school on the platform, with separate data, settings and website.",
      },
      {
        title: "Academies & colleges",
        description:
          "Coaching academies and colleges that need timetables, attendance, exams and fee tracking.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      {
        question: "Who can use YourForce Schools?",
        answer:
          "Administrators, accountants, clerks and teachers, plus parents through their own portal. Each role sees only the screens and data it needs.",
      },
      {
        question: "Is our school's data kept separate from other schools?",
        answer:
          "Yes. Every school's records are isolated, so one school can never see another school's students, staff or finances.",
      },
      {
        question: "Can parents see other students' information?",
        answer:
          "No. Parents only see information about their own children.",
      },
      {
        question: "Can we run more than one campus?",
        answer:
          "Yes. Each campus runs as its own school on the platform, with its own data, settings and website. A shared head-office view across campuses is on our roadmap.",
      },
      {
        question: "Can we try it before booking a demo?",
        answer:
          "Yes. Explore our live sample school with 2,000 students, sign in as an admin, teacher, parent or accountant, and visit the school's own website. Then book a demo to see it with your own setup.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a demo. We'll show you the platform, then set up your school and help import your existing records.",
      },
    ],
  },

  finalCta: {
    heading: "See how YourForce Schools fits your school",

    description:
      "Book a demo and we'll walk you through the platform with your classes, fees and staff roles in mind.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=school-platform",
  },
} as const satisfies ProductPageData;
