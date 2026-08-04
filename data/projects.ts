import type { Projects } from "@/types/project";

export const projects: Projects = {
    badge: "⚡ Featured Projects",

    heading: "Solutions Built to Perform at Scale",

    description:
        "A selection of digital products and enterprise solutions designed to solve complex business challenges using modern technologies and scalable architecture.",

    items: [
        {
            slug: "modern-commerce-platform",

            featured: true,

            category: "Enterprise eCommerce",

            title: "Modern Commerce Platform",

            shortDescription:
                "A headless commerce platform delivering fast shopping experiences, secure checkout, and scalable architecture.",

            description:
                "A modern enterprise commerce solution built with a headless architecture to provide exceptional performance, flexibility, and seamless customer experiences.",

            image: "/images/projects/commerce.jpg",

            overview:
                "We designed and developed a scalable headless commerce platform that separates the storefront from the commerce engine, enabling faster releases, better performance, and an improved customer experience across all devices.",

            challenge:
                "The client was operating on a legacy commerce platform that suffered from slow performance, limited flexibility, and lengthy deployment cycles. They needed a future-proof architecture capable of supporting rapid growth while maintaining enterprise-grade reliability.",

            solution:
                "Our team implemented a modern Next.js storefront integrated with Salesforce Commerce Cloud APIs. We introduced reusable components, optimized Core Web Vitals, improved deployment workflows, and created a scalable architecture capable of supporting future business expansion.",

            technologies: [
                { name: "React" },
                { name: "Next.js" },
                { name: "SFCC" },
                { name: "Node.js" },
            ],

            metrics: [
                {
                    value: "45%",
                    label: "Performance Gain",
                },
                {
                    value: "99.9%",
                    label: "Availability",
                },
                {
                    value: "60%",
                    label: "Faster Deployments",
                },
                {
                    value: "10k+",
                    label: "Daily Users",
                },
            ],

            liveUrl: "https://example.com",

            githubUrl: "",
        },

        {
            slug: "business-operations-portal",

            featured: true,

            category: "Enterprise Software",

            title: "Business Operations Portal",

            shortDescription:
                "A centralized platform streamlining workflows, reporting, and day-to-day business operations.",

            description:
                "A custom enterprise application that unified multiple internal systems into a single, efficient business operations platform.",

            image: "/images/portfolio/image1.jpg",

            overview:
                "The platform centralizes operational workflows, reporting, and employee collaboration into one secure application, replacing multiple disconnected tools and significantly improving operational efficiency.",

            challenge:
                "Business teams relied on spreadsheets and several disconnected systems, resulting in duplicated work, inconsistent reporting, and slow decision-making. The organization required a centralized solution capable of supporting future growth.",

            solution:
                "We designed and developed a modular web application with secure APIs, role-based permissions, and real-time reporting. The new platform automated repetitive workflows and provided a scalable foundation for future integrations.",

            technologies: [
                { name: "TypeScript" },
                { name: "REST APIs" },
                { name: "PostgreSQL" },
                { name: "Docker" },
            ],

            metrics: [
                {
                    value: "70%",
                    label: "Workflow Automation",
                },
                {
                    value: "3x",
                    label: "Faster Reporting",
                },
                {
                    value: "500+",
                    label: "Active Users",
                },
                {
                    value: "99.9%",
                    label: "System Uptime",
                },
            ],

            liveUrl: "https://example.com",

            githubUrl: "",
        },
    ],
};