import type { NavigationItem } from "@/types/navigation";

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    sectionIds: ["home"],
    routePrefixes: ["/"],
    showInFooter: true,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    sectionIds: ["portfolio"],
    routePrefixes: ["/portfolio"],
    showInFooter: true,
  },
  {
    label: "Services",
    href: "/#services",
    sectionIds: [
      "services",
      "highlights",
    ],
    showInFooter: true,
  },
  {
    label: "About",
    href: "/#about",
    sectionIds: [
      "about",
      "why-us",
      "process",
      "cta",
    ],
    showInFooter: true,
  },
  {
    label: "Contact",
    href: "/contact",
    routePrefixes: ["/contact"],
    showInFooter: true,
  },
];
