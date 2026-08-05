import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { FooterColumn as FooterColumnType } from "@/types/footer";

type FooterColumnProps = {
  column: FooterColumnType;
};

export default function FooterColumn({
  column,
}: FooterColumnProps) {
  return (
    <div>
      <h3
        className="
          text-sm
          font-bold
          uppercase
          tracking-[0.12em]
          text-blue-400
        "
      >
        {column.title}
      </h3>

      <ul className="mt-6 space-y-3.5">
        {column.links.map((link) => {
          const Icon = link.icon;

          /*
           * Rich contact item
           */
          if (Icon) {
            const content = (
              <>
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    text-blue-400
                    transition-all
                    duration-200
                    group-hover:border-blue-500/40
                    group-hover:bg-blue-500/15
                  "
                >
                  <Icon
                    aria-hidden="true"
                    className="h-[18px] w-[18px]"
                  />
                </span>

                <span className="min-w-0">
                  <span
                    className="
                      block
                      break-words
                      text-sm
                      font-medium
                      leading-5
                      text-slate-200
                      transition-colors
                      duration-200
                      group-hover:text-blue-300
                    "
                  >
                    {link.label}
                  </span>

                  {link.description && (
                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      {link.description}
                    </span>
                  )}
                </span>
              </>
            );

            return (
              <li key={link.label}>
                {link.href ? (
                  <Link
                    href={link.href}
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
                      group
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      py-1
                      transition-transform
                      duration-200
                      hover:translate-x-0.5
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-400
                      focus-visible:ring-offset-4
                      focus-visible:ring-offset-slate-950
                    "
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="group flex items-start gap-3 py-1">
                    {content}
                  </div>
                )}
              </li>
            );
          }

          /*
           * Standard footer navigation item
           */
          return (
            <li key={link.label}>
              {link.href ? (
                <Link
                  href={link.href}
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
                    group
                    inline-flex
                    items-start
                    gap-1.5
                    text-sm
                    leading-6
                    text-slate-300
                    transition-all
                    duration-200
                    hover:translate-x-0.5
                    hover:text-blue-400
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-slate-950
                  "
                >
                  <span>{link.label}</span>

                  {link.external && (
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 h-3.5 w-3.5 shrink-0"
                    />
                  )}
                </Link>
              ) : (
                <span className="text-sm leading-6 text-slate-500">
                  {link.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
