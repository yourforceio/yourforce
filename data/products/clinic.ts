import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Clinic product page (app/products/clinic/page.tsx).
 * Keep claims here to what the platform actually delivers (see the clinic repo).
 */
export const clinicPage = {
  hero: {
    badge: "YourForce Clinic",

    heading: "Run Your Whole Clinic in One System",

    description:
      "YourForce Clinic takes a patient from the online appointment to the doctor's prescription, the lab report, the pharmacy and the bill, with company and insurance panels billed at month end and every patient able to see their reports online.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=clinic-platform",

    secondaryCta: "Visit the Demo Clinic",
    secondaryHref: "https://citycare.clinic.yourforce.io",

    highlights: ["Clinics with 1–10 doctors", "Lab & pharmacy included", "Panel billing"],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Clinic with your own doctors and fees",

    description:
      "Tell us how your clinic works and we'll show you the system with your doctors, consultation fees, lab tests and medicines.",

    items: [
      "Online appointments and a walk-in queue",
      "Printed prescriptions on your letterhead",
      "Lab results with high and low flags",
      "Bills, panels and pharmacy stock in one place",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Explore a sample clinic running on the platform",

    description:
      "City Care Clinic is a made-up clinic in Johar Town, Lahore, with a general physician, a gynaecologist and a child specialist, its own lab and pharmacy, and two months of visits. Book an appointment on its website or sign in as the front desk, a doctor, the lab or the pharmacy. It's a read-only demo, so nothing is saved.",

    stats: [
      { value: "3", label: "doctors" },
      { value: "440+", label: "past visits with bills" },
      { value: "18", label: "lab tests" },
      { value: "20", label: "medicines in stock" },
    ],

    primaryCta: "Visit the Demo Clinic",
    primaryHref: "https://citycare.clinic.yourforce.io",

    secondaryCta: "See the product site",
    secondaryHref: "https://clinic.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "Paper registers can't keep up with a busy clinic",

    description:
      "Appointments, prescriptions, lab slips and bills live in different registers, and the doctor rarely has the patient's history in front of them.",

    items: [
      {
        title: "Patient history on paper",
        description:
          "Old prescriptions and reports are lost or forgotten, so doctors decide without seeing the last visit or the last lab result.",
      },
      {
        title: "Lab results that go missing",
        description:
          "Reports wait on the counter, patients call to ask if they're ready, and nobody notices the results outside the normal range.",
      },
      {
        title: "Medicine stock nobody can see",
        description:
          "Medicines run out without warning, and what was dispensed never quite matches what was billed.",
      },
      {
        title: "Panel bills done by hand",
        description:
          "Company and insurance patients are billed in Excel at month end, and the clinic's share gets missed.",
      },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "Everything from the front desk to the lab and the pharmacy",

    items: [
      {
        title: "Appointments and the queue",
        description:
          "Patients book a doctor and a time online, 24/7. Walk-ins join the same queue at the front desk, every patient gets an MR number and a token for the day, and doctors call the next patient in one tap.",
      },
      {
        title: "Consultation and prescription",
        description:
          "Vitals, complaints, diagnosis and medicines with doses like 1+0+1, allergies shown in red, and a clean prescription printed on your letterhead.",
      },
      {
        title: "Lab with results and reports",
        description:
          "Tests ordered by the doctor reach the lab. Results outside the normal range are marked high or low, and a PDF from an outside lab can be uploaded.",
      },
      {
        title: "Pharmacy and stock",
        description:
          "Prescribed medicines come off stock when the bill is made. See what's running low, and record each supplier delivery with its batch number and invoice.",
      },
      {
        title: "Bills and panel billing",
        description:
          "One bill for the consultation, tests and medicines, paid by cash, card, JazzCash or Easypaisa. Refunds with a reason, and panels get their discount and a monthly statement.",
      },
      {
        title: "Reports in the patient's pocket",
        description:
          "Patients sign in on your website to see their prescriptions, lab reports and bills, with no lost papers and fewer calls asking for results.",
      },
      {
        title: "Expiry dates, earliest first",
        description:
          "Every batch has its expiry date. Billing takes from the batch that expires first and never from an expired one, with lists of what expires soon and one-click write-offs.",
      },
      {
        title: "Waiting-room screen",
        description:
          "A TV in the waiting room shows each doctor's room, the token being seen now and who's next, updated by itself, with token numbers only and no names.",
      },
      {
        title: "Follow-up reminders",
        description:
          "The day before the follow-up date the doctor set, the patient gets a reminder, unless they've already booked. Reception sees this week's follow-ups at a glance.",
      },
      {
        title: "Prescriptions in Urdu too",
        description:
          "Dose instructions like 1+0+1 after meals also print in Urdu, so patients who don't read English know exactly how to take their medicine.",
      },
      {
        title: "Certificates and referrals",
        description:
          "Print a sick-leave certificate, a fitness certificate or a referral letter to a specialist from the visit, on your letterhead and signed by the doctor.",
      },
      {
        title: "Doctors' share report",
        description:
          "Each doctor's consultation and procedure fees for the month, after discounts, with their agreed share and what the clinic keeps, ready to print.",
      },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first call to your first patient on the system",

    steps: [
      { title: "Call", description: "Fill in the form and we call you within one working day to learn how your clinic runs today." },
      { title: "Setup", description: "We add your doctors, timings, fees, lab tests and medicines, and set up staff logins for each role." },
      { title: "Go live", description: "Share your appointment link on Google Maps and WhatsApp, and run the front desk, lab and pharmacy from one system." },
      { title: "Support", description: "We stay on hand on WhatsApp while your staff settle in." },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for clinics with one to ten doctors",

    items: [
      { title: "Family and GP clinics", description: "Clinics with a front desk, one or more doctors and walk-in patients every evening." },
      { title: "Specialist clinics", description: "Gynae, child, skin, dental and physiotherapy practices that want history and prescriptions on record." },
      { title: "Clinics with a lab or pharmacy", description: "Clinics that run their own lab counter or dispensary and want stock and results in the same system." },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      { question: "Who can see a patient's records?", answer: "Each person has their own login and role: doctor, receptionist, lab technician, pharmacist or clinic admin. A receptionist sees appointments and bills, not consultation notes." },
      { question: "Do patients need an app?", answer: "No. They book on your clinic's website with their name and mobile number. With a password they can see their prescriptions, lab reports and bills online." },
      { question: "Can we bill companies and insurers?", answer: "Yes. Put a patient on a panel; their bills split between the panel and the patient, and you print a statement for each panel at month end." },
      { question: "Can patients read the prescription in Urdu?", answer: "Yes. Dose instructions print in English and Urdu, for example 1+0+1 after meals also reads صبح ایک گولی، رات ایک گولی — کھانے کے بعد. You can switch the Urdu off in settings." },
      { question: "Does the pharmacy track expiry dates?", answer: "Yes. Every delivery is recorded with its batch number and expiry. Billing uses the batch that expires first and refuses expired stock, and the pharmacy has lists of what expires in the next 90 days and what has already expired." },
      { question: "Can we use it without a lab or pharmacy?", answer: "Yes. Use only the parts you need. Tests can still be ordered for an outside lab and the report uploaded." },
      { question: "Can we try it first?", answer: "Yes. Explore City Care Clinic, our sample clinic, then book a demo to see it with your own doctors and fees." },
      { question: "Is there a contract?", answer: "No. Pay monthly or yearly and stop any time. Start with a free trial." },
    ],
  },

  finalCta: {
    heading: "Ready to run your clinic on one system?",

    description:
      "Book a demo and we'll set it up with you, including your doctors, fees, lab tests and medicines.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=clinic-platform",
  },
} as const satisfies ProductPageData;
