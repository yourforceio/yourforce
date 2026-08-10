"use client";

import { useState } from "react";

import {
  Menu,
  X,
} from "lucide-react";

import NavLinks from "@/components/navigation/NavLinks";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={
          isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() =>
          setIsOpen((current) => !current)
        }
        className="
          inline-flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/[0.04]
          text-slate-200
          transition-all
          duration-200
          hover:border-blue-500/40
          hover:bg-blue-500/10
          hover:text-white
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-400
          focus-visible:ring-offset-2
          focus-visible:ring-offset-slate-950
        "
      >
        {isOpen ? (
          <X
            aria-hidden="true"
            className="h-5 w-5"
          />
        ) : (
          <Menu
            aria-hidden="true"
            className="h-5 w-5"
          />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="
            absolute
            inset-x-0
            top-full
            border-t
            border-white/10
            bg-slate-950/98
            px-6
            py-5
            shadow-2xl
            shadow-black/30
            backdrop-blur-xl
          "
        >
          <div className="mx-auto max-w-7xl">
            <NavLinks
              mobile
              onNavigate={closeMenu}
            />
          </div>
        </div>
      )}
    </div>
  );
}
