import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="YourForce home"
      className={`
        group
        inline-flex
        shrink-0
        items-center
        gap-3
        rounded-lg
        transition-opacity
        duration-200
        hover:opacity-90
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-400
        focus-visible:ring-offset-4
        focus-visible:ring-offset-slate-950
        ${className}
      `}
    >
      <Image
        src="/logo/yf-mark-dark.svg"
        alt=""
        width={38}
        height={38}
        priority
        className="
          h-9
          w-9
          shrink-0
          object-contain
          transition-transform
          duration-200
          group-hover:scale-105
          sm:h-[38px]
          sm:w-[38px]
        "
      />

      <span
        className="
          text-[21px]
          font-semibold
          tracking-[-0.03em]
          text-slate-100
          sm:text-[23px]
        "
      >
        YourForce
      </span>
    </Link>
  );
}
