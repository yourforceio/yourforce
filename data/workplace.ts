import {
  Clock3,
  Focus,
  HouseWifi,
  MessagesSquare,
  RefreshCw,
  Target,
  UsersRound,
} from "lucide-react";

import type { Workplace } from "@/types/workplace";

export const workplace: Workplace = {
  metadata: {
    title: "Remote Workplace",

    description:
      "Learn how YourForce.io supports remote-first engineering through flexible working hours, clear communication, ownership, time-zone alignment, and dependable delivery.",
  },

  badge:
    "Remote-First Workplace",

  heading: {
    primary:
      "Work from anywhere.",

    accent:
      "Deliver with purpose.",
  },

  description:
    "YourForce.io is a remote-first software engineering and digital commerce company built around flexibility, collaboration, ownership, and dependable delivery.",

  status:
    "Remote-first • Globally aligned",

  principles: [
    {
      title:
        "Clear Communication",

      description:
        "We use direct, documented, and transparent communication to keep distributed teams informed and aligned.",

      icon: MessagesSquare,
    },

    {
      title:
        "Individual Ownership",

      description:
        "Team members are trusted to take responsibility, make thoughtful decisions, and follow commitments through to completion.",

      icon: Target,
    },

    {
      title:
        "Focused Collaboration",

      description:
        "We protect time for focused engineering while maintaining the collaboration windows required for effective delivery.",

      icon: Focus,
    },

    {
      title:
        "Continuous Improvement",

      description:
        "We review how we work, share knowledge, and improve our engineering and delivery practices over time.",

      icon: RefreshCw,
    },
  ],

  benefits: [
    {
      title:
        "Flexible Working Hours",

      description:
        "Working hours can be organized around delivery responsibilities, agreed collaboration windows, and customer needs.",

      icon: Clock3,
    },

    {
      title:
        "Remote Working Options",

      description:
        "Our remote-first model enables team members to contribute from a productive environment without requiring a daily office presence.",

      icon: HouseWifi,
    },

    {
      title:
        "Virtual Team Events",

      description:
        "Remote sessions support team connection, knowledge sharing, collaboration, and a healthy distributed culture.",

      icon: UsersRound,
    },
  ],

  model: {
    badge:
      "How We Work",

    heading:
      "A delivery model designed for distributed teams",

    description:
      "Remote work is most effective when expectations, collaboration, and accountability are intentionally designed into the delivery process.",

    steps: [
      {
        number: "01",

        title:
          "Align",

        description:
          "Agree on priorities, responsibilities, working agreements, and collaboration windows.",
      },

      {
        number: "02",

        title:
          "Communicate",

        description:
          "Use clear written updates, focused meetings, and accessible project documentation.",
      },

      {
        number: "03",

        title:
          "Deliver",

        description:
          "Work toward measurable outcomes with dependable execution and visible progress.",
      },

      {
        number: "04",

        title:
          "Improve",

        description:
          "Review outcomes, share lessons, and continuously strengthen the way the team works.",
      },
    ],
  },

  commitment: {
    badge:
      "Our Commitment",

    heading:
      "Flexibility supported by accountability",

    description:
      "Our workplace approach gives people flexibility while maintaining the standards required for dependable engineering delivery.",

    items: [
      "Respectful and inclusive collaboration",
      "Clear responsibilities and delivery expectations",
      "Reasonable time-zone alignment with customer teams",
      "Focused work with minimal unnecessary meetings",
      "Transparent progress and early communication of risks",
      "Knowledge sharing across distributed teams",
    ],
  },

  cta: {
    heading:
      "Build with a globally aligned engineering team.",

    description:
      "Partner with YourForce.io for scalable digital commerce, enterprise software, platform modernization, and dependable remote delivery.",

    primary: {
      label:
        "Start Your Project",

      href:
        "/contact",
    },

    secondary: {
      label:
        "Explore Our Work",

      href:
        "/portfolio",
    },
  },
};
