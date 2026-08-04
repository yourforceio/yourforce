import Link from "next/link";

import FooterColumn from "@/components/footer/FooterColumn";
import FooterBottom from "@/components/footer/FooterBottom";
import SocialLinks from "@/components/footer/SocialLinks";

import { footer } from "@/data/footer";

export default function Footer() {
    return (
        <footer className="pt-20 border-t border-slate-800 bg-slate-950">

            <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">

                <div className="grid gap-16 lg:grid-cols-12">

                    {/* Company */}

                    <div className="lg:col-span-4">

                        <Link
                            href="/"
                            className="text-4xl font-black tracking-tight text-white transition-colors duration-300 hover:text-blue-400"
                        >
                            {footer.company.name}
                        </Link>

                        <p className="mt-3 text-sm font-medium tracking-wide text-blue-400">
                            {footer.company.tagline}
                        </p>

                        <p className="mt-6 max-w-xl leading-9 text-slate-400">
                            {footer.company.description}
                        </p>

                        <div className="mt-8">
                            <SocialLinks socials={footer.socials} />
                        </div>

                    </div>

                    {/* Footer Columns */}

                    <div
                        className="
                            grid
                            gap-10
                            sm:grid-cols-2
                            lg:col-span-8
                            lg:grid-cols-4
                        "
                    >
                        {footer.columns.map((column) => (
                            <FooterColumn
                                key={column.title}
                                column={column}
                            />
                        ))}
                    </div>

                </div>

                {/* Divider */}

                <div className="mt-20 border-t border-slate-800 pt-10">

                    <FooterBottom
                        copyright={footer.bottom.copyright}
                        builtWith={footer.bottom.builtWith}
                        links={footer.bottom.links}
                    />

                </div>

            </div>

        </footer>
    );
}