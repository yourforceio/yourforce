"use client";

import { useRef } from "react";

import {
  Menu,
  X,
} from "lucide-react";

import NavLinks from "@/components/navigation/NavLinks";

export default function MobileMenu() {
  const detailsRef =
    useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <details
      ref={detailsRef}
      className="group md:hidden"
    >
      <summary
        aria-label="Toggle navigation menu"
        className="
          inline-flex
          h-11
          w-11
          cursor-pointer
          list-none
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/[0.04]
          text-slate-200
          transition-colors
          duration-200
          hover:border-blue-500/40
          hover:bg-blue-500/10
          hover:text-white
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-400
          focus-visible:ring-offset-2
          focus-visible:ring-offset-slate-950
          [&::-webkit-details-marker]:hidden
        "
      >
        <span className="sr-only">
          Toggle navigation menu
        </span>

        <Menu
          aria-hidden="true"
          className="
            h-5
            w-5
            group-open:hidden
          "
        />

        <X
          aria-hidden="true"
          className="
            hidden
            h-5
            w-5
            group-open:block
          "
        />
      </summary>

      <div
        id="mobile-navigation"
        className="
          fixed
          inset-x-0
          top-[72px]
          z-[60]
          border-t
          border-white/10
          bg-slate-950
          px-6
          py-5
          shadow-2xl
          shadow-black/30
        "
      >
        <div className="mx-auto max-w-7xl">
          <NavLinks
            mobile
            onNavigate={closeMenu}
          />
        </div>
      </div>
    </details>
  );
}
