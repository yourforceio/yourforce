import type { ContactData } from "@/types/contact";

export const contact: ContactData = {
    hero: {
        badge: "Let's Talk",

        title: "Let's Build",

        highlight: "Something Exceptional",

        description:
            "Whether you're launching a new digital product, modernizing your commerce platform, or looking for a trusted Salesforce Commerce Cloud partner, we'd love to hear from you.",
    },

    form: {
        title: "Start Your Project",

        description:
            "Tell us about your project and we'll get back to you within one business day.",

        submitLabel: "Send Message",

        fields: [
            {
                name: "name",
                label: "Full Name",
                type: "text",
                required: true,
                placeholder: "John Doe",
            },
            {
                name: "company",
                label: "Company",
                type: "text",
                placeholder: "Your Company",
            },
            {
                name: "email",
                label: "Email Address",
                type: "email",
                required: true,
                placeholder: "john@example.com",
            },
            {
                name: "phone",
                label: "Phone Number",
                type: "tel",
                placeholder: "+1 234 567 890",
            },
            {
                name: "service",
                label: "Service",
                type: "select",
                options: [
                    "Salesforce Commerce Cloud",
                    "Headless Commerce",
                    "PWA Kit Development",
                    "System Integration",
                    "Digital Transformation",
                    "Other",
                ],
            },
            {
                name: "budget",
                label: "Estimated Budget",
                type: "select",
                options: [
                    "Under $10k",
                    "$10k - $25k",
                    "$25k - $50k",
                    "$50k+",
                ],
            },
            {
                name: "message",
                label: "Project Details",
                type: "textarea",
                required: true,
                placeholder:
                    "Tell us about your project, goals, timeline, and challenges...",
            },
        ],
    },

    info: [
        {
            icon: "📧",
            title: "Email",
            value: "hello@yourforce.io",
            description: "We'll reply within one business day.",
        },
        {
            icon: "🌍",
            title: "Location",
            value: "Lahore, Pakistan",
            description: "Serving clients worldwide remotely.",
        },
        {
            icon: "💼",
            title: "Availability",
            value: "Monday – Friday",
            description: "09:00 AM – 06:00 PM (PKT)",
        },
        {
            icon: "⚡",
            title: "Response Time",
            value: "< 24 Hours",
            description: "Fast responses for all enquiries.",
        },
    ],

    faq: {
        title: "Frequently Asked Questions",

        description:
            "Answers to some of the most common questions we receive.",

        items: [
            {
                question: "How quickly can you start a project?",
                answer:
                    "Most projects can begin within one week depending on availability and project scope.",
            },
            {
                question: "Do you work with international clients?",
                answer:
                    "Yes. YourForce works remotely with companies across North America, Europe, the Middle East, and Asia.",
            },
            {
                question: "What industries do you specialize in?",
                answer:
                    "We specialize in eCommerce, retail, enterprise software, and digital transformation projects.",
            },
            {
                question: "Can you work with existing development teams?",
                answer:
                    "Absolutely. We frequently collaborate with in-house teams and technology partners.",
            },
        ],
    },
};