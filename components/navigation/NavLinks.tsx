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

const SECTION_ACTIVATION_OFFSET = 160;
const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";

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

function getHomepageSections(): ObservedSection[] {
  return navigation.flatMap((item) =>
    (item.sectionIds ?? []).flatMap(
      (sectionId) => {
        const element =
          document.getElementById(sectionId);

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

    const desktopMediaQuery =
      window.matchMedia(
        DESKTOP_MEDIA_QUERY,
      );

    let observer: IntersectionObserver | null =
      null;

    const stopObserving = () => {
      observer?.disconnect();
      observer = null;
    };

    const startObserving = () => {
      stopObserving();

      /*
       * The desktop navigation is hidden below md.
       *
       * Do not perform section tracking for that
       * hidden navigation on mobile.
       *
       * A dedicated mobile NavLinks instance can
       * still enable tracking through mobile=true.
       */
      if (
        !mobile &&
        !desktopMediaQuery.matches
      ) {
        return;
      }

      const sections =
        getHomepageSections();

      if (sections.length === 0) {
        return;
      }

      const hrefByElement = new Map<
        Element,
        string
      >(
        sections.map((section) => [
          section.element,
          section.href,
        ]),
      );

      observer = new IntersectionObserver(
        (entries) => {
          const intersectingEntries =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting,
              )
              .sort(
                (first, second) =>
                  first.boundingClientRect.top -
                  second.boundingClientRect.top,
              );

          const activeEntry =
            intersectingEntries[0];

          if (!activeEntry) {
            return;
          }

          const nextActiveHref =
            hrefByElement.get(
              activeEntry.target,
            );

          if (!nextActiveHref) {
            return;
          }

          setActiveSectionHref(
            (currentActiveHref) =>
              currentActiveHref ===
              nextActiveHref
                ? currentActiveHref
                : nextActiveHref,
          );
        },
        {
          /*
           * Activate a section shortly after it
           * passes beneath the sticky header.
           *
           * The large bottom margin creates a
           * focused activation zone near the
           * upper portion of the viewport.
           */
          root: null,
          rootMargin: `-${SECTION_ACTIVATION_OFFSET}px 0px -65% 0px`,
          threshold: 0,
        },
      );

      sections.forEach((section) => {
        observer?.observe(
          section.element,
        );
      });
    };

    startObserving();

    /*
     * Re-create the observer only if crossing
     * the md breakpoint changes whether this
     * navigation is visible.
     */
    const handleBreakpointChange = () => {
      startObserving();
    };

    if (!mobile) {
      desktopMediaQuery.addEventListener(
        "change",
        handleBreakpointChange,
      );
    }

    return () => {
      stopObserving();

      if (!mobile) {
        desktopMediaQuery.removeEventListener(
          "change",
          handleBreakpointChange,
        );
      }
    };
  }, [pathname, mobile]);

  const handleNavigation = (
    href: string,
  ) => {
    onNavigate?.();

    if (
      pathname === "/" &&
      href.startsWith("/#")
    ) {
      setActiveSectionHref(href);
    }
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
                aria-current={ariaCurrent}
                onClick={() =>
                  handleNavigation(
                    item.href,
                  )
                }
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
                          pt-3
                          pb-2
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
