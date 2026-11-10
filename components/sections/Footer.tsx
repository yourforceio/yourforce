import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

import Logo from "@/components/branding/Logo";
import { engineering, homeProducts, operations } from "@/data/home";

type FooterLink = { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Engineering",
    links: engineering.services.map((s) => ({ label: s.menuTitle, href: s.href })),
  },
  {
    title: "Products",
    links: homeProducts.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
  },
  {
    title: "Operations · US",
    links: operations.desks.map((d) => ({ label: d.menuTitle, href: d.href })),
  },
  {
    title: "Company",
    links: [
      { label: "Labs", href: "/lab" },
      { label: "About", href: "/#founder" },
      { label: "Workplace", href: "/workplace" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function FooterAnchor({ href, label }: FooterLink) {
  const cls = "text-[15px] leading-8 text-mist hover:text-paper";
  return href.startsWith("http") ? (
    <a href={href} className={cls}>{label}</a>
  ) : (
    <Link href={href} className={cls}>{label}</Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-mist">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-x-8 gap-y-10 px-6 pb-8 pt-16 md:grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr_0.8fr] lg:gap-x-10">
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <Logo />
          <p className="mt-3 max-w-[270px] text-[15px]">Commerce engineering, business software and operations support.</p>
          <a
            href="https://www.linkedin.com/company/yourforce-io/"
            aria-label="YourForce on LinkedIn"
            className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-line text-paper hover:border-paper"
          >
            <FaLinkedinIn aria-hidden className="h-4 w-4" />
          </a>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="min-w-0">
            <p className="mb-3 font-bold text-paper">{col.title}</p>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}><FooterAnchor {...l} /></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 border-t border-ink-line px-6 pb-9 pt-5 text-sm">
        <span>© {new Date().getFullYear()} YourForce</span>
        <a href="mailto:hello@yourforce.io" className="font-bold text-paper hover:underline">hello@yourforce.io</a>
      </div>
    </footer>
  );
}
