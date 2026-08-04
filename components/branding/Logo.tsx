// components/branding/Logo.tsx
"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center tracking-tight font-bold text-2xl text-white hover:opacity-90 transition-opacity ${className}`}
      aria-label="YourForce"
    >
      <span>Your</span>
      <span className="text-blue-500">Force</span>
    </Link>
  );
}
