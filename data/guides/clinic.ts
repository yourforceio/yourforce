import type { Guide } from "@/types/guide";

export const clinicGuide: Guide = {
  slug: "clinic-management-software-pakistan",
  product: "clinic",
  title: "Clinic management software in Pakistan: what a small clinic actually needs",
  description: "For clinics with 1 to 10 doctors in Pakistan: appointments and tokens, prescriptions, lab results, pharmacy stock, bills and panels, and what to check before you choose.",
  summary: "Appointments and tokens, prescriptions, lab, pharmacy and bills: what matters for a clinic with 1 to 10 doctors.",
  updated: "2026-11-18",
  readMinutes: 7,
  intro: [
    "A busy clinic in Pakistan juggles a lot on paper: a token register at reception, prescriptions written by hand, lab reports on WhatsApp, a pharmacy shelf nobody has counted, and bills totalled on a calculator. Hospital systems are built for hundreds of beds and are far too heavy for a clinic with a few doctors.",
    "Here is what a small or medium clinic actually needs from software, and how to tell a good system from a complicated one.",
  ],
  sections: [
    {
      heading: "1. Appointments and a waiting-room queue",
      paragraphs: [
        "Patients want to book by phone, WhatsApp or online, and walk-ins still arrive. The system should give every patient a token number, show the queue on a waiting-room screen, and stop a doctor being double-booked.",
      ],
    },
    {
      heading: "2. Prescriptions on your letterhead",
      paragraphs: [
        "Doctors should be able to write a prescription in a minute, pick medicines and doses from a list, and print it on the clinic's letterhead. Instructions in Urdu as well as English help patients take medicines correctly.",
        "Every prescription should stay on the patient's record, so the next visit starts with their history, allergies and past medicines.",
      ],
    },
    {
      heading: "3. Lab results that flag what matters",
      paragraphs: [
        "If you have a lab, results should be entered once and flagged automatically when they are high or low against the normal range. The patient should be able to see their report from their phone instead of collecting a printout.",
      ],
    },
    {
      heading: "4. Pharmacy stock and expiry dates",
      paragraphs: [
        "A small pharmacy loses money quietly through expired stock and medicines that run out. Track stock by batch with expiry dates, and get warned before something expires or drops below a reorder level.",
      ],
    },
    {
      heading: "5. Bills, refunds and company panels",
      paragraphs: [
        "Bills should combine the consultation, lab tests and medicines in one go, accept cash, card, JazzCash or Easypaisa, and handle refunds properly. If you treat company or insurance panel patients, panel billing should be built in, not done in a separate spreadsheet.",
      ],
    },
    {
      heading: "6. Questions to ask before you choose",
      paragraphs: ["Before you commit, check:"],
      bullets: [
        "Can each staff member see only what they need: reception, doctors, lab, pharmacy and accounts?",
        "Is patient data kept separate and private, and can you export it if you leave?",
        "Does it work on the phones and computers you already have?",
        "Is there a live demo you can try before paying?",
      ],
    },
  ],
  product_section: {
    heading: "How YourForce Clinic does this",
    paragraphs: [
      "YourForce Clinic covers appointments with tokens and a waiting-room screen, prescriptions in English and Urdu on your letterhead, a lab with flagged results, pharmacy stock with expiry dates, bills, refunds and panel billing, and a patient account for reports.",
      "Try City Care Clinic, our sample clinic, then book a free setup call to see it with your own doctors and services.",
    ],
  },
  faq: [
    { question: "Is clinic software only for big hospitals?", answer: "No. Many systems are built for clinics with one to ten doctors, with or without a lab or pharmacy. You should only pay for what your clinic uses." },
    { question: "Can patients book online?", answer: "Yes. A good clinic system gives you a booking page patients can use from their phone, and reception can still add walk-ins and phone bookings to the same queue." },
    { question: "Is patient data safe?", answer: "Ask where the data is stored, who can see it, and whether each staff role only sees its own part. You should also be able to export your data at any time." },
  ],
};
