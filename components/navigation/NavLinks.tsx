"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";

type NavLinksProps = {
  onNavigate?: () => void;
  mobile?: boolean;
  className?: string;
};

type ObservedSection = {
  element: HTMLElement;
  href: string;
};

function matchesRoute(
  pathname: string,
  prefix: string,
): boolean {
  if (prefix === "/") {
    return pathname === "/";
  }

  return (
    pathname === prefix ||
    pathname.startsWith(`${prefix}/`)
  );
}

function getRouteActiveHref(
  pathname: string,
): string {
  const activeItem =
    navigation.find((item) =>
      item.routePrefixes?.some(
        (prefix) =>
          matchesRoute(
            pathname,
            prefix,
          ),
      ),
    );

  return activeItem?.href ?? "";
}

function getHomepageSections(): ObservedSection[] {
  return navigation.flatMap(
    (item) =>
      (
        item.sectionIds ?? []
      ).flatMap((sectionId) => {
        const element =
          document.getElementById(
            sectionId,
          );

        return element
          ? [
              {
                element,
                href: item.href,
              },
            ]
          : [];
      }),
  );
}

export default function NavLinks({
  onNavigate,
  mobile = false,
  className = "",
}: NavLinksProps) {
  const pathname = usePathname();

  const [
    activeSectionHref,
    setActiveSectionHref,
  ] = useState("/");

  const routeActiveHref =
    getRouteActiveHref(pathname);

  const activeHref =
    pathname === "/"
      ? activeSectionHref
      : routeActiveHref;

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const observedSections =
      getHomepageSections();

    if (
      observedSections.length === 0
    ) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const activeEntry =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting,
              )
              .sort(
                (
                  first,
                  second,
                ) =>
                  second.intersectionRatio -
                  first.intersectionRatio,
              )[0];

          if (!activeEntry) {
            return;
          }

          const matchedSection =
            observedSections.find(
              ({ element }) =>
                element ===
                activeEntry.target,
            );

          if (!matchedSection) {
            return;
          }

          setActiveSectionHref(
            matchedSection.href,
          );
        },
        {
          rootMargin:
            "-20% 0px -65% 0px",

          threshold: [
            0,
            0.1,
            0.25,
            0.5,
          ],
        },
      );

    observedSections.forEach(
      ({ element }) => {
        observer.observe(element);
      },
    );

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <nav
      aria-label={
        mobile
          ? "Mobile navigation"
          : "Primary navigation"
      }
      className={className}
    >
      <ul
        className={
          mobile
            ? "flex flex-col gap-2"
            : "flex items-center gap-2"
        }
      >
        {navigation.map(
          (item) => {
            const isActive =
              activeHref ===
              item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={
                    onNavigate
                  }
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                  className={`
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    font-medium
                    transition-all
                    duration-200
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-slate-950

                    ${
                      mobile
                        ? `
                          w-full
                          px-4
                          py-3
                          text-base
                        `
                        : `
                          px-4
                          py-2.5
                          text-sm
                        `
                    }

                    ${
                      isActive
                        ? `
                          bg-blue-500/15
                          text-white
                          shadow-sm
                          ring-1
                          ring-blue-400/15
                        `
                        : `
                          text-slate-300
                          hover:bg-white/5
                          hover:text-white
                        `
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          },
        )}
      </ul>
    </nav>
  );
}
