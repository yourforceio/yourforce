import Link from "next/link";

import type { FooterSocial } from "@/types/footer";

type SocialLinksProps = {
  socials: FooterSocial[];
};

export default function SocialLinks({
  socials,
}: SocialLinksProps) {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.name}
            href={social.href}
            target={
              social.external
                ? "_blank"
                : undefined
            }
            rel={
              social.external
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={social.name}
            title={social.name}
            className="
              group
              inline-flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              text-slate-400
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-blue-500/40
              hover:bg-blue-500/10
              hover:text-blue-400
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-400
              focus-visible:ring-offset-2
              focus-visible:ring-offset-slate-950
            "
          >
            <Icon
              size={18}
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </Link>
        );
      })}
    </div>
  );
}
