import Link from "next/link";

import type { FooterSocial } from "@/types/footer";

type Props = {
    socials: FooterSocial[];
};

export default function SocialLinks({ socials }: Props) {
    return (
        <div className="flex items-center gap-4">
            {socials.map((social) => {
                const Icon = social.icon;

                const isExternal = social.href.startsWith("http");

                return (
                    <Link
                        key={social.name}
                        href={social.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        aria-label={social.name}
                        title={social.name}
                        className="
                            group
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-800
                            bg-slate-900
                            transition-all
                            duration-300

                            hover:border-blue-500
                            hover:bg-blue-500/10
                        "
                    >
                        <Icon
                            size={20}
                            className="
                                text-slate-300
                                transition-all
                                duration-300

                                group-hover:-translate-y-0.5
                                group-hover:text-blue-400
                            "
                        />
                    </Link>
                );
            })}
        </div>
    );
}