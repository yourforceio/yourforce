import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Learn product page (app/products/learn/page.tsx).
 * Keep claims here to what the platform actually delivers (see the learn repo).
 */
export const learnPage = {
  hero: {
    badge: "YourForce Learn",

    heading: "Your classes, online",

    description:
      "YourForce Learn gives academies, tutors and institutes their own course website: video lessons, notes and quizzes, payments by JazzCash, Easypaisa or bank, each student's progress, questions to the teacher, and a certificate anyone can check.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=learn-platform",

    secondaryCta: "Visit the Demo Academy",
    secondaryHref: "https://brightfuture.learn.yourforce.io",

    highlights: ["Video, notes & quizzes", "JazzCash & bank payments", "Verifiable certificates"],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Learn with your own courses",

    description:
      "Tell us what you teach and how your students pay today, and we'll show you the platform with your first course set up.",

    items: [
      "Your own website with your courses and teachers",
      "Lessons from your YouTube or Vimeo videos",
      "Payments approved in one click, then the course opens",
      "Progress, quizzes and certificates for every student",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Explore a sample academy running on the platform",

    description:
      "Bright Future Academy is a made-up academy in Lahore with Matric Physics, FSc Chemistry and a free web design course, three teachers and forty students. Watch the free preview lessons on its website, or sign in as the admin, a teacher or accounts. It's a read-only demo, so nothing is saved.",

    stats: [
      { value: "3", label: "courses" },
      { value: "18", label: "lessons" },
      { value: "41", label: "students" },
      { value: "17", label: "certificates" },
    ],

    primaryCta: "Visit the Demo Academy",
    primaryHref: "https://brightfuture.learn.yourforce.io",

    secondaryCta: "See the product site",
    secondaryHref: "https://learn.yourforce.io",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "WhatsApp groups and Google Drive can't run a course",

    description:
      "Videos go out in WhatsApp groups, fees are chased one by one, and nobody knows which student has actually done the work.",

    items: [
      { title: "Videos shared everywhere", description: "Lessons are forwarded from group to group, and students who never paid watch them too." },
      { title: "Fees chased by hand", description: "Screenshots of payments arrive on WhatsApp and someone has to match each one before giving access." },
      { title: "No idea who is keeping up", description: "There's no record of which student watched which lesson or understood it." },
      { title: "Certificates nobody trusts", description: "A certificate made in Word can be copied or edited, so employers and parents can't rely on it." },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "From the first lesson to the certificate",

    items: [
      { title: "Your own course website", description: "Your academy's name and colours, every course with its price, lessons and reviews, and free preview lessons so students can try before they pay." },
      { title: "Videos, notes and quizzes", description: "Lessons from unlisted YouTube or Vimeo videos, written lessons, PDF notes only enrolled students can open, and multiple-choice quizzes with a pass mark." },
      { title: "Paid the way Pakistan pays", description: "Students pay by JazzCash, Easypaisa or bank transfer and upload the receipt. You approve it and the course opens. Cash at the desk works too." },
      { title: "Progress for every student", description: "Students tick off lessons and pick up where they left off. You see who is on which lesson and who has finished." },
      { title: "Questions and reviews", description: "Students ask under any lesson and teachers answer there, for everyone on the course. Star ratings and reviews on each course page." },
      { title: "Certificates that can be checked", description: "A numbered certificate when a student finishes every lesson and passes every quiz, with a link anyone can open to see it's genuine." },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first call to students enrolling online",

    steps: [
      { title: "Call", description: "Fill in the form and we call you within one working day to learn how you teach and take fees today." },
      { title: "Setup", description: "We set up your website, payment details and teacher logins, and help you build your first course." },
      { title: "Go live", description: "Share your course links on Facebook, Instagram and WhatsApp groups. Payments to check arrive on your phone." },
      { title: "Support", description: "We stay on hand on WhatsApp while your teachers settle in." },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for anyone who teaches",

    items: [
      { title: "Academies & tuition centres", description: "Matric, FSc, O and A Level, MDCAT and entry-test academies taking classes online alongside the classroom." },
      { title: "Independent tutors", description: "Teachers selling their own recorded courses, from Quran and English to coding and design." },
      { title: "Institutes & trainers", description: "Skills institutes and corporate trainers who need courses, quizzes and certificates in one place." },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      { question: "Where do the videos go?", answer: "Upload them to YouTube or Vimeo as unlisted, so only people with the link can watch, and paste the link into the lesson. Students watch inside your course, so you pay nothing extra for video streaming." },
      { question: "How do students pay?", answer: "By JazzCash, Easypaisa or bank transfer to your own account. They enter the transaction ID and upload the receipt; you approve it and the course opens. You can also enrol a student who paid in cash." },
      { question: "Can students share their login?", answer: "Each student signs in with their own mobile number and password, and PDF notes only open for students on the course. You can take a student's access away at any time." },
      { question: "Do my teachers get their own logins?", answer: "Yes. Teachers build courses and answer questions, accounts staff approve payments, and the owner sees everything." },
      { question: "Can we try it first?", answer: "Yes. Explore Bright Future Academy, our sample academy, then book a demo to see it with your own course." },
      { question: "Is there a contract?", answer: "No. Pay monthly or yearly and stop any time. Start with a free trial." },
    ],
  },

  finalCta: {
    heading: "Ready to teach online?",

    description: "Book a demo and we'll set it up with you, including your first course.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=learn-platform",
  },
} as const satisfies ProductPageData;
