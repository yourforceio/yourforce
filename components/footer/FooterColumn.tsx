import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { FooterColumn as FooterColumnType } from "@/types/footer";

type Props = {
    column: FooterColumnType;
};

export default function FooterColumn({ column }: Props) {
    return (
        <div>

            {/* Title */}

            <h3 className="text-lg font-semibold tracking-tight text-white">
                {column.title}
            </h3>

            {/* Links */}

            <ul className="mt-7 space-y-5">

                {column.links.map((link) => (
                    <li key={link.label}>

                        <Link
                            href={link.href}
                            className="
                                group
                                inline-flex
                                min-h-12
                                items-center
                                gap-2

                                text-slate-300
                                transition-all
                                duration-300

                                hover:text-blue-400
                            "
                        >
                            {/* Animated Arrow */}

                            <ArrowUpRight
                                size={15}
                                className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            />

                            {/* Label */}

                            <span className="relative">

                                {link.label}

                                {/* Underline */}

                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />

                            </span>

                        </Link>

                    </li>
                ))}

            </ul>

        </div>
    );
}