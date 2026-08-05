"use client";

import Link from "next/link";

import Logo from "@/components/branding/Logo";
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
      <nav
        aria-label="Main navigation"
        className="
          mx-auto
          flex
          min-h-[72px]
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        {/* Brand */}
        <Logo />

        {/* Desktop navigation */}
        <NavLinks
          className="
            hidden
            items-center
            gap-8
            text-sm
            font-medium
            text-slate-300
            md:flex

            [&_a]:relative
            [&_a]:py-2
            [&_a]:transition-colors
            [&_a]:duration-200
            [&_a]:hover:text-white

            [&_a]:after:absolute
            [&_a]:after:-bottom-1
            [&_a]:after:left-0
            [&_a]:after:h-0.5
            [&_a]:after:w-0
            [&_a]:after:rounded-full
            [&_a]:after:bg-blue-500
            [&_a]:after:transition-all
            [&_a]:after:duration-200
            [&_a]:hover:after:w-full

            [&_a[aria-current='page']]:text-white
            [&_a[aria-current='page']]:after:w-full
          "
        />

        {/* Primary action */}
        <Link
          href="/contact"
          className="
            hidden
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
            sm:inline-flex
          "
        >
          {site.hireUs}
        </Link>
      </nav>
    </header>
  );
}
