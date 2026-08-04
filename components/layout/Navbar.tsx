"use client";

import NavLinks from "@/components/navigation/NavLinks";
import Logo from "@/components/branding/Logo";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Brand / Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navigation Links */}
        <NavLinks className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300" />

        {/* Action Callout */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => alert("Thanks for visiting YourForce!")}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-4 py-2 rounded-full transition-colors"
          >
            {site.hireus}
          </Button>
        </div>
      </nav>
    </header>
  );
}
