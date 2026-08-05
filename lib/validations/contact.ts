import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be 100 characters or fewer."),

  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .max(30, "Phone number must be 30 characters or fewer.")
    .optional(),

  service: z
    .string()
    .trim()
    .min(1, "Please select a service."),

  budget: z
    .string()
    .trim()
    .max(100, "Budget value is too long.")
    .optional(),

  timeline: z
    .string()
    .trim()
    .max(100, "Timeline value is too long.")
    .optional(),

  message: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters about your project.")
    .max(
      5000,
      "Project details must be 5,000 characters or fewer.",
    ),

  /**
   * Honeypot field.
   *
   * It is optional in the raw form input but is converted
   * to an empty string after successful schema parsing.
   */
  website: z
    .string()
    .max(0, "Unable to submit this enquiry.")
    .optional()
    .default(""),
});

/**
 * Values accepted by React Hook Form before Zod parsing.
 * The website field can be undefined at this stage.
 */
export type ContactFormInput = z.input<
  typeof contactSchema
>;

/**
 * Values returned after successful Zod parsing.
 * The website field is always a string because it has a default.
 */
export type ContactFormData = z.output<
  typeof contactSchema
>;