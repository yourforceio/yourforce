import type { Hero } from "@/types/hero";

export const hero: Hero = {
  badge: "⚡ Engineering Excellence",

  heading: {
    primary: "Your Vision.",
    accent: "Our Engineering Force.",
  },

  description:
    "We engineer scalable web applications, enterprise software, and digital commerce solutions that turn ambitious ideas into reliable, high-performing products.",

  actions: [
    {
      label: "Let's Build Together",
      href: "/services",
      variant: "primary",
    },
    {
      label: "View Our Work",
      href: "/portfolio",
      variant: "secondary",
    },
  ],

  stats: [
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "100+",
      label: "Projects Delivered",
    },
    {
      value: "10+",
      label: "Technologies Mastered",
    },
  ],

  technologies: {
    title: "Expertise Across",
    items: [
      { name: "Salesforce Commerce Cloud" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "AWS" },
    ],
  },
};
