export interface ContactInfoCard {
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[];
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
  };

  form: {
    title: string;
    description: string;
    submitLabel: string;
    fields: ContactFormField[];
  };

  info: ContactInfoCard[];

  faq: {
    title: string;
    description: string;
    items: ContactFAQ[];
  };
}
