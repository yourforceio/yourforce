import Link from "next/link";

import type { FooterLink } from "@/types/footer";

type Props = {
    copyright: string;
    builtWith: string;
    links: FooterLink[];
};

export default function FooterBottom({
    copyright,
    builtWith,
    links,
}: Props) {
    return (
        <div className="flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">

            <div>

                <p>{copyright}</p>

                <p className="mt-2 text-slate-600">
                    Designed & Developed by YourForce
                </p>

            </div>

            <div className="flex items-center gap-8">

                {links.map((link) => (

                    <Link
                        key={link.label}
                        href={link.href}
                        className="transition-colors duration-300 hover:text-blue-400 hover:text-blue-400 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-blue-500 hover:after:w-full"
                    >
                        {link.label}
                    </Link>

                ))}

            </div>

        </div>
    );
}