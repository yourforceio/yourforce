import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Full name is required"),

    email: z
        .string()
        .email("Please enter a valid email address"),

    phone: z.string().optional(),

    service: z.string().min(1, "Please select a service"),

    budget: z.string().optional(),

    timeline: z.string().optional(),

    message: z
        .string()
        .min(20, "Please provide more project details."),
});

export type ContactFormData = z.infer<typeof contactSchema>;