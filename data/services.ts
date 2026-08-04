import type { Services } from "@/types/service";

export const services: Services = {
  badge: "⚡ Our Services",

  heading: "Engineering Solutions Built for Modern Businesses",

  description:
    "From enterprise commerce to custom web applications, we deliver reliable software that helps businesses innovate and scale.",

  items: [
    {
      title: "Enterprise eCommerce",
      description: "Scalable commerce solutions built for growing brands.",
      icon: "shoppingCart",
      stack: [
        { name: "Salesforce Commerce Cloud" },
        { name: "Shopify Plus" },
        { name: "Composable Commerce" },
        { name: "Headless Commerce" },
      ],
    },
    {
      title: "Custom Web Applications",
      description:
        "Modern React and Next.js applications tailored to your business.",
      icon: "monitorSmartphone",
      stack: [
        { name: "Next.js" },
        { name: "React" },
        { name: "TypeScript" },
        { name: "Node.js" },
      ],
    },
    {
      title: "Enterprise Software",
      description:
        "Business systems that automate processes and improve efficiency.",
      icon: "building2",
      stack: [
        { name: "Microservices" },
        { name: "Sacalable APIs" },
        { name: "Cloud Ready" },
      ],
    },
    {
      title: "Cloud & API Integrations",
      description: "Connect systems and automate workflows with secure APIs.",
      icon: "cloudCog",
      stack: [
        { name: "REST APIs" },
        { name: "GraphQL" },
        { name: "Webhooks" },
        { name: "OAuth" },
      ],
    },
    {
      title: "Frontend Engineering",
      description:
        "Fast, responsive, and accessible user interfaces built with React.",
      icon: "layoutTemplate",
      stack: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Accessibility" },
      ],
    },
    {
      title: "Software Architecture & Consulting",
      description:
        "Architecture reviews, technical guidance, and solution planning.",
      icon: "lightBulb",
      stack: [
        { name: "System Design" },
        { name: "Scalability" },
        { name: "Performance" },
      ],
    },
  ],
};
