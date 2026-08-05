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
   * Called after a link is selected.
   * Useful for closing the mobile navigation.
   */
  onNavigate?: () => void;

  /**
   * Displays the links vertically for a mobile menu.
   */
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
  /**
   * The homepage prefix must use exact matching.
   * Otherwise "/" would match every route.
   */
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
  const activeItem = navigation.find(
    (item) =>
      item.routePrefixes?.some((prefix) =>
        matchesRoute(pathname, prefix),
      ),
  );

  return activeItem?.href ?? "";
}

function getHomepageSections(): ObservedSection[] {
  return navigation.flatMap((item) =>
    (item.sectionIds ?? []).flatMap(
      (sectionId) => {
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
   * This state is only for homepage scroll-spy updates.
   * Route-based active state is derived directly from pathname.
   */
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
    /**
     * Scroll-spy is only needed on the homepage.
     * No synchronous state update is performed here.
     */
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
          const visibleEntries =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting,
              )
              .sort(
                (first, second) =>
                  second.intersectionRatio -
                  first.intersectionRatio,
              );

          const visibleEntry =
            visibleEntries[0];

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

          /**
           * This update happens inside the observer callback,
           * which is an external-system subscription callback.
           */
          setActiveSectionHref(
            matchedSection.href,
          );
        },
        {
          /**
           * Uses a narrow activation area near the upper-middle
           * part of the viewport.
           */
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

  const handleNavigation = () => {
    onNavigate?.();
  };

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
            : "flex items-center gap-1"
        }
      >
        {navigation.map((item) => {
          const isActive =
            activeHref === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={
                  handleNavigation
                }
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
                className={`
                  relative
                  inline-flex
                  items-center
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
                        px-4
                        py-3
                        text-base
                      `
                      : `
                        rounded-lg
                        px-3
                        py-2
                        text-sm
                      `
                  }

                  ${
                    isActive
                      ? `
                        bg-blue-500/10
                        text-blue-400
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

                {!mobile && (
                  <span
                    aria-hidden="true"
                    className={`
                      absolute
                      bottom-0
                      left-3
                      right-3
                      h-0.5
                      origin-center
                      rounded-full
                      bg-blue-400
                      transition-transform
                      duration-200

                      ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0"
                      }
                    `}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
