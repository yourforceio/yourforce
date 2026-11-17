import type { ProductPageData } from "@/types/product";

/**
 * Content for the YourForce Sites product page (app/products/sites/page.tsx).
 * Keep claims here to what the platform actually delivers (see the sites repo). Not built yet: connecting the
 * business's own domain (each website is at <name>.sites.yourforce.io), automatic SMS sending.
 */
export const sitesPage = {
  hero: {
    badge: "YourForce Sites",

    heading: "A business website you change yourself",

    description:
      "YourForce Sites gives your business a fast, modern website that you manage from your own admin. Build pages from ready-made sections, edit menus with dropdowns, write a blog, and fill in the search title and description for every page. Every message from your contact form arrives in one list, ready to answer on WhatsApp.",

    primaryCta: "Book a Demo",
    primaryHref: "/contact?service=sites-platform",

    secondaryCta: "Visit the Demo Website",
    secondaryHref: "https://cedarstone.sites.yourforce.io",

    highlights: ["Pages from ready-made sections", "Built for Google", "Blog & enquiries"],
  },

  overview: {
    eyebrow: "Free Setup Call",

    title: "See YourForce Sites with your own business",

    description:
      "Tell us about your business, and we'll show you a website with your services, colours and contact details.",

    items: [
      "Change any page yourself, no developer needed",
      "Menus with dropdowns for your services",
      "Search titles and descriptions on every page",
      "Every enquiry in one list, answered on WhatsApp",
    ],
  },

  liveDemo: {
    eyebrow: "Live Demo",

    heading: "Explore a sample business website running on the platform",

    description:
      "Cedar & Stone Interiors is a made-up interior design studio in Lahore with a home page, service pages under a dropdown, a projects gallery, a blog and a contact form. Visit the website, then sign in to its admin as the owner, an editor or a writer to see how each page is built. It's a read-only demo, so nothing is saved.",

    stats: [
      { value: "10", label: "pages" },
      { value: "13", label: "section types" },
      { value: "7", label: "blog posts" },
      { value: "4", label: "staff roles" },
    ],

    primaryCta: "Visit the Demo Website",
    primaryHref: "https://cedarstone.sites.yourforce.io",

    secondaryCta: "See the demo guide",
    secondaryHref: "https://sites.yourforce.io/demo",
  },

  challenges: {
    eyebrow: "Why It Matters",

    heading: "A website you can't change soon goes out of date",

    description:
      "Most business websites are made once, then wait for a developer every time a price, photo or phone number changes.",

    items: [
      { title: "Waiting for a developer", description: "A new service or offer takes days to go up, so the website stays out of date." },
      { title: "Hard to find on Google", description: "Pages have no proper titles or descriptions, and nobody knows how to add them." },
      { title: "Lost enquiries", description: "Contact-form emails go to an old inbox, and nobody answers them in time." },
      { title: "Slow on phones", description: "Heavy templates take ages to open on a mobile connection, and visitors leave." },
    ],
  },

  features: {
    id: "features",

    eyebrow: "Features",

    heading: "Everything your website needs, in one admin",

    items: [
      { title: "Pages from ready-made sections", description: "Banner, text, features, picture and text, numbers, reviews, FAQ, gallery, client logos, video, contact form and more. Add, reorder and duplicate them." },
      { title: "A rich text editor", description: "Write like in Word, with headings, lists, links and pictures, or switch to the HTML view. Anything unsafe is removed when you save." },
      { title: "Menus with dropdowns", description: "A header menu with dropdowns for your services, and footer columns. Link to any page, the blog or another website." },
      { title: "SEO on every page", description: "Search title and description with a Google preview, a sharing picture, a sitemap, and the details Google uses for your business and FAQs." },
      { title: "Blog and news", description: "Posts with categories, cover pictures and authors. Schedule a post for later, and it goes live on its own." },
      { title: "Media library", description: "Upload your photos once and use them anywhere. A picture still used on a page can't be deleted by mistake." },
      { title: "Enquiries", description: "Every contact-form message in one list, with one-tap WhatsApp, call and email replies." },
      { title: "Your brand", description: "Your logo, any brand colour, a choice of heading fonts, an announcement bar, and your contact details and social links." },
      { title: "Roles for your team", description: "The owner sees everything, editors manage pages and menus, writers only write blog posts, and the enquiries desk answers messages." },
    ],
  },

  process: {
    eyebrow: "How It Works",

    heading: "From your first call to a website you run yourself",

    steps: [
      { title: "Call", description: "Fill in the form and we call you within one working day to learn about your business." },
      { title: "Setup", description: "We set up your pages, menus, colours and contact details, and show your team how to change them." },
      { title: "Go live", description: "Share your website on Google, Instagram and WhatsApp. Enquiries arrive in your admin." },
      { title: "Support", description: "We stay on hand on WhatsApp whenever you want to add something new." },
    ],
  },

  audiences: {
    eyebrow: "Who It's For",

    heading: "Built for businesses that want to be found",

    items: [
      { title: "Service businesses", description: "Interior designers, architects, consultants, agencies, workshops and contractors who win work from enquiries." },
      { title: "Shops & showrooms", description: "Showrooms and brands that want a website for their range, offers and location, with WhatsApp enquiries." },
      { title: "Schools & clinics", description: "Academies, schools and clinics that want a simple, up-to-date website with news and a contact form." },
    ],
  },

  faq: {
    eyebrow: "FAQ",

    heading: "Common questions",

    items: [
      { question: "Do I need to know how to code?", answer: "No. You build pages by adding sections and filling in the boxes, and write text like in Word. If you do know HTML, there's an HTML view too." },
      { question: "Will Google find my website?", answer: "Every page has its own search title and description with a Google preview, and the website makes its own sitemap and the details Google uses for your business and FAQs." },
      { question: "Where do contact-form messages go?", answer: "Into the Enquiries list in your admin, with buttons to reply on WhatsApp, call or email. SMS and WhatsApp alerts for new enquiries are switched on as part of your setup." },
      { question: "Can my team help?", answer: "Yes. Give an editor access to pages and menus, a writer access to the blog only, and someone else just the enquiries." },
      { question: "Can we try it first?", answer: "Yes. Explore Cedar & Stone Interiors, our sample website, and its admin, then book a demo to see it with your own business." },
      { question: "Is there a contract?", answer: "No. Pay monthly or yearly and stop any time. Start with a free trial." },
    ],
  },

  finalCta: {
    heading: "Ready for a website you can change yourself?",

    description: "Book a demo and we'll set it up with you, including your pages, menus and contact details.",

    ctaLabel: "Book a Demo",

    href: "/contact?service=sites-platform",
  },
} as const satisfies ProductPageData;
