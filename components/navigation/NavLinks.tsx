"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";

type NavLinksProps = {
  /**
   * Used by the mobile menu to close after navigation.
   */
  onNavigate?: () => void;

  /**
   * Enables the vertical mobile navigation layout.
   */
  mobile?: boolean;

  className?: string;
};

type ObservedSection = {
  element: HTMLElement;
  href: string;
};

/**
 * Match a pathname against a configured route prefix.
 *
 * The homepage must use exact matching because "/" would
 * otherwise match every route.
 */
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

/**
 * Determine which navigation item is active for a route.
 */
function getRouteActiveHref(
  pathname: string,
): string {
  const activeItem = navigation.find(
    (item) =>
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

/**
 * Find the homepage sections that participate in scroll-spy.
 */
function getHomepageSections(): ObservedSection[] {
  return navigation.flatMap(
    (item) =>
      (item.sectionIds ?? []).flatMap(
        (sectionId) => {
          const element =
            document.getElementById(
              sectionId,
            );

          if (!element) {
            return [];
          }

          return [
            {
              element,
              href: item.href,
            },
          ];
        },
      ),
  );
}

export default function NavLinks({
  onNavigate,
  mobile = false,
  className = "",
}: NavLinksProps) {
  const pathname = usePathname();

  /**
   * Homepage active state is controlled by the
   * IntersectionObserver callback.
   */
  const [
    activeSectionHref,
    setActiveSectionHref,
  ] = useState("/");

  /**
   * Non-homepage active state is derived directly
   * from the current pathname.
   */
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
          const visibleEntry =
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

          if (!visibleEntry) {
            return;
          }

          const matchedSection =
            observedSections.find(
              ({ element }) =>
                element ===
                visibleEntry.target,
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
            : "flex items-center gap-3"
        }
      >
        {navigation.map((item) => {
          const isActive =
            activeHref === item.href;

          const ariaCurrent =
            isActive
              ? item.href.includes("#")
                ? "location"
                : "page"
              : undefined;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={ariaCurrent}
                className={`
                  inline-flex
                  items-center
                  justify-center
                  font-medium
                  transition-colors
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
                        rounded-xl
                        border-0
                        px-4
                        py-3
                        text-base
                      `
                      : `
                        rounded-none
                        border-b-2
                        bg-transparent
                        px-2
                        py-4
                        text-sm
                        shadow-none
                        ring-0
                      `
                  }

                  ${
                    isActive
                      ? mobile
                        ? `
                          bg-blue-500/10
                          text-white
                        `
                        : `
                          border-blue-400
                          text-white
                        `
                      : mobile
                        ? `
                          bg-transparent
                          text-slate-300
                          hover:bg-white/5
                          hover:text-white
                        `
                        : `
                          border-transparent
                          text-slate-300
                          hover:border-blue-400/50
                          hover:text-white
                        `
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
