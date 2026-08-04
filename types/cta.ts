export interface CTAButton {
    text: string;
    href: string;
    variant: "primary" | "secondary";
}

export interface CTAData {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    highlights: string[];
    buttons: CTAButton[];
}