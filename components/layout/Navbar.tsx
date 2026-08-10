import Link from "next/link";

import Logo from "@/components/branding/Logo";
import MobileMenu from "@/components/navigation/MobileMenu";
import NavLinks from "@/components/navigation/NavLinks";

import { site } from "@/data/site";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-slate-950/90
        shadow-[0_8px_30px_rgba(2,6,23,0.18)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[72px]
          max-w-7xl
          items-center
          justify-between
          gap-4
          px-6
          lg:px-8
        "
      >
        {/* Brand */}
        <Logo />

        {/* Desktop navigation */}
        <NavLinks className="hidden md:block" />

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              shadow-blue-950/30
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-blue-500
              hover:shadow-lg
              hover:shadow-blue-600/20
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-400
              focus-visible:ring-offset-2
              focus-visible:ring-offset-slate-950
            "
          >
            {site.hireUs}
          </Link>
        </div>

        {/* Mobile navigation */}
        <MobileMenu />
      </div>
    </header>
  );
}
