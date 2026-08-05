export interface CTABadge {
  icon: string;
  text: string;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface CTAProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CTAProcess {
  eyebrow: string;
  title: string;
  description: string;
  steps: CTAProcessStep[];

  response: {
    label: string;
    text: string;
  };
}

export interface CTAData {
  badge: CTABadge;
  title: string;
  highlight: string;
  description: string;
  highlights: string[];
  buttons: CTAButton[];
  process: CTAProcess;
}
