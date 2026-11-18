import type { Guide } from "@/types/guide";

export const schoolsGuide: Guide = {
  slug: "school-management-software-pakistan",
  product: "schools",
  title: "How to choose school management software in Pakistan",
  description: "A practical checklist for Pakistani private schools: fee challans, attendance, timetables, results and a parent portal, and the questions to ask before you buy.",
  summary: "Fee challans, attendance, results and a parent portal: what to look for, and what to ask before you buy.",
  updated: "2026-11-18",
  readMinutes: 7,
  intro: [
    "Most private schools in Pakistan run on a mix of fee registers, attendance sheets, Excel result files and WhatsApp groups. It works until the school grows: fee defaulters slip through, result cards take a week to prepare, and parents only find out about a problem at the parent-teacher meeting.",
    "School management software brings all of that into one place. But there are hundreds of options, and many were built for schools abroad. This guide walks through what actually matters for a Pakistani school, in the order most schools feel the pain.",
  ],
  sections: [
    {
      heading: "1. Fees come first",
      paragraphs: [
        "For most schools, fees are the reason to buy. A good system should produce a whole month's fee challans for every student in one go, using each class's fee structure, and handle the things every school does by hand today.",
      ],
      bullets: [
        "Sibling discounts and individual concessions, applied automatically every month.",
        "Late fees after the due date, and a clear list of who still owes what.",
        "Printable challans and receipts, ideally with Urdu labels beside the English for parents who prefer them.",
        "Payments recorded against the challan, so the accounts office sees the same numbers as the principal.",
      ],
    },
    {
      heading: "2. Attendance and leave",
      paragraphs: [
        "Class teachers should be able to mark the day's register in under a minute, on a phone, without the clerk retyping it later. Monthly attendance reports per class and per student should be one click, not a weekend of counting.",
        "Look for leave requests too: when a parent can ask for leave and the teacher can see it, fewer absences are a surprise.",
      ],
    },
    {
      heading: "3. Timetables without clashes",
      paragraphs: [
        "The timetable is redone every term, often by hand. The system should stop you booking the same teacher, section or room twice in one period, and show each teacher only the classes they teach.",
      ],
    },
    {
      heading: "4. Exams, results and report cards",
      paragraphs: [
        "Date sheets, marks entry by the subject teacher, grades, class positions and printed report cards are where schools lose the most staff time. Check that subject teachers can only enter marks for their own sections, and that report cards print in your school's format.",
      ],
    },
    {
      heading: "5. A parent portal parents will actually use",
      paragraphs: [
        "Parents in Pakistan use their phones, not laptops. A parent portal should work well on a phone, let one parent see all their children with a single sign-in, and show attendance, fee challans, results and notices without calling the school.",
      ],
    },
    {
      heading: "6. Questions to ask before you buy",
      paragraphs: ["Before you sign anything, ask the vendor:"],
      bullets: [
        "Can I try it with a demo school first, with real-looking data?",
        "Who sees what? Can an accountant see fees but not results, and a teacher only their own classes?",
        "Can I export all my data if I leave?",
        "What does it cost per month, and is there a setup fee or a contract?",
        "Who do I call when something goes wrong, and do they answer on WhatsApp?",
      ],
    },
  ],
  product_section: {
    heading: "How YourForce Schools does this",
    paragraphs: [
      "YourForce Schools covers students and admissions, fee challans with sibling discounts and late fees, attendance and leave, clash-free timetables, exams and report cards, a parent portal and your school's own website, with separate logins for the admin, accountants, teachers and parents.",
      "You can try it today with Greenfield, our sample school of 2,000 students, then book a free setup call to see it with your own classes and fees.",
    ],
  },
  faq: [
    { question: "How much does school management software cost in Pakistan?", answer: "Prices vary widely. Look for a clear monthly price based on the size of your school, with no setup fee and no long contract, so you can stop if it doesn't work for you." },
    { question: "Do I need a computer lab or a server?", answer: "No. Modern school software runs online, so staff and parents use the phones and computers they already have. You only need an internet connection." },
    { question: "Can parents pay fees online?", answer: "Many schools still collect fees at the bank or the school office. What matters most is that every payment is recorded against the right challan, so you always know who has paid." },
  ],
};
