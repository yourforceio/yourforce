// components/navigation/NavLinks.tsx

import Link from "next/link";
import { navigation } from "@/data/navigation";

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className = "" }: NavLinksProps) {
  return (
    <ul className={className}>
      {navigation.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="
                flex
                h-12
                items-center
                px-3

                text-slate-200
                transition-colors
                hover:text-blue-400
            "
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
