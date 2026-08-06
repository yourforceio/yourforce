import Link from "next/link";

import type { FooterLink } from "@/types/footer";

type FooterBottomProps = {
  copyright: string;
  builtWith: string;
  links: FooterLink[];
};

type FooterLinkWithHref = FooterLink & {
  href: string;
};

function hasHref(
  link: FooterLink,
): link is FooterLinkWithHref {
  return (
    typeof link.href === "string" &&
    link.href.trim().length > 0
  );
}

function isExternalLink(
  link: FooterLinkWithHref,
): boolean {
  return (
    link.external === true ||
    link.href.startsWith("http://") ||
    link.href.startsWith("https://")
  );
}

export default function FooterBottom({
  copyright,
  builtWith,
  links,
}: FooterBottomProps) {
  const validLinks = links.filter(hasHref);

  return (
    <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
      <div className="text-sm leading-6 text-slate-500">
        <p>{copyright}</p>

        <p className="mt-1">
          {builtWith}
        </p>
      </div>

      {validLinks.length > 0 && (
        <nav aria-label="Legal links">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
            {validLinks.map((link) => {
              const className =
                "text-sm font-medium text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950";

              return (
                <li
                  key={`${link.label}-${link.href}`}
                >
                  {isExternalLink(link) ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={className}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={className}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
