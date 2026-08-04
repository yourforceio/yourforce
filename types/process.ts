import type { LucideIcon } from "lucide-react";

export type ProcessStep = {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
};

export type Process = {
    badge: string;
    heading: string;
    description: string;

    items: ProcessStep[];
};