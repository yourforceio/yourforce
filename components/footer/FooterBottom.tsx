import Link from "next/link";

import type { FooterLink } from "@/types/footer";

type FooterBottomProps = {
  copyright: string;
  builtWith: string;
  links: FooterLink[];
};

export default function FooterBottom({
  copyright,
  builtWith,
  links,
}: FooterBottomProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-6
        text-sm
        text-slate-500
        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      <div>
        <p>{copyright}</p>

        <p className="mt-1.5 text-slate-600">
          {builtWith}
        </p>
      </div>

      {links.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href ?? "/"}
              target={
                link.external
                  ? "_blank"
                  : undefined
              }
              rel={
                link.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="
                relative
                transition-colors
                duration-200
                hover:text-blue-400
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400
                focus-visible:ring-offset-4
                focus-visible:ring-offset-slate-950
              "
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
