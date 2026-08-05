import type { LucideIcon } from "lucide-react";

export type ContactFieldName =
  | "name"
  | "email"
  | "phone"
  | "service"
  | "budget"
  | "timeline"
  | "message";

export interface ContactSelectOption {
  label: string;
  value: string;

  /**
   * Optional URL value used for service preselection:
   * /contact?service=headless-commerce
   */
  slug?: string;
}

export interface ContactFormField {
  name: ContactFieldName;
  label: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "select"
    | "textarea";
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  helper?: string;
  options?: ContactSelectOption[];
  fullWidth?: boolean;
  rows?: number;
}

export interface ContactInfoItem {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export interface ContactNextStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactFAQ {
  question: string;
  answer: string;
}

export interface ContactData {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    highlights: string[];
  };

  form: {
    eyebrow: string;
    title: string;
    description: string;
    requiredNote: string;
    submitLabel: string;
    submittingLabel: string;
    privacyNote: string;
    fields: ContactFormField[];
  };

  info: {
    eyebrow: string;
    title: string;
    description: string;

    primaryContact: ContactInfoItem;

    details: ContactInfoItem[];

    nextSteps: {
      eyebrow: string;
      title: string;
      items: ContactNextStep[];
    };

    response: {
      label: string;
      text: string;
    };
  };

  faq: {
    title: string;
    description: string;
    items: ContactFAQ[];
  };
}
