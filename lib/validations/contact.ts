import { z } from "zod";

import { contact } from "@/data/contact";

/** Product (ready-made software) enquiries: these are answered on WhatsApp, so a phone number is what we need. */
const SOFTWARE_SERVICES = new Set((contact.form.fields.find((f) => f.name === "service")?.options ?? []).filter((o) => o.group === "software").map((o) => o.value));
export const needsPhone = (service: string) => SOFTWARE_SERVICES.has(service);

/** A phone number with at least 10 digits, e.g. 0300 1234567, +92 300 1234567 or +1 555 010 0000. */
const PHONE = /^\+?[\d\s()-]{10,30}$/;
const digits = (v: string) => v.replace(/\D/g, "").length;
const EMAIL = z.string().email();

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be 100 characters or fewer."),

  // Required for engineering and operations enquiries, optional for products (checked below).
  email: z
    .string()
    .trim()
    .max(254, "Email address is too long.")
    .optional()
    .default(""),

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
    .min(10, "Please tell us a little more (at least 10 characters).")
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
}).superRefine((d, ctx) => {
  const email = d.email ?? "";
  const phone = (d.phone ?? "").trim();
  if (email && !EMAIL.safeParse(email).success) ctx.addIssue({ code: "custom", path: ["email"], message: "Please enter a valid email address." });
  if (needsPhone(d.service)) {
    if (!phone) ctx.addIssue({ code: "custom", path: ["phone"], message: "Please enter your phone or WhatsApp number." });
    else if (!PHONE.test(phone) || digits(phone) < 10) ctx.addIssue({ code: "custom", path: ["phone"], message: "Please enter a full phone number, e.g. 0300 1234567." });
  } else if (!email) {
    ctx.addIssue({ code: "custom", path: ["email"], message: "Please enter your email address." });
  }
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