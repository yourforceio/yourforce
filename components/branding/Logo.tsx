import Link from "next/link";

import YFMark from "@/components/branding/YFMark";

type LogoProps = {
  className?: string;
  /** "light" for dark backgrounds (the default), "dark" for light ones. */
  tone?: "light" | "dark";
};

export default function Logo({ className = "", tone = "light" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="YourForce home"
      className={`inline-flex shrink-0 items-center gap-2.5 rounded-lg transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink ${className}`}
    >
      <YFMark tone={tone} className="h-9 w-10 shrink-0" />
      <span
        className={`font-display text-[24px] font-extrabold tracking-[-0.02em] ${tone === "light" ? "text-paper" : "text-ink"}`}
      >
        YourForce
      </span>
    </Link>
  );
}
