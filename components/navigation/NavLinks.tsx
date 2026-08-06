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
  return navigation
    .flatMap((item) =>
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
    )
    .sort((first, second) => {
      const firstTop =
        first.element.getBoundingClientRect()
          .top + window.scrollY;

      const secondTop =
        second.element.getBoundingClientRect()
          .top + window.scrollY;

      return firstTop - secondTop;
    });
}

function getActiveHomepageHref(
  sections: ObservedSection[],
): string {
  if (sections.length === 0) {
    return "/";
  }

  const activationPoint =
    window.scrollY +
    SECTION_ACTIVATION_OFFSET;

  let activeHref =
    sections[0]?.href ?? "/";

  for (const section of sections) {
    const sectionTop =
      section.element.getBoundingClientRect()
        .top + window.scrollY;

    if (
      activationPoint >= sectionTop
    ) {
      activeHref = section.href;
    } else {
      break;
    }
  }

  const documentHeight =
    document.documentElement.scrollHeight;

  const viewportBottom =
    window.scrollY +
    window.innerHeight;

  const hasReachedPageBottom =
    viewportBottom >= documentHeight - 4;

  if (hasReachedPageBottom) {
    activeHref =
      sections[sections.length - 1]
        ?.href ?? activeHref;
  }

  return activeHref;
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

    let animationFrameId = 0;

    const updateActiveSection = () => {
      const sections =
        getHomepageSections();

      const nextActiveHref =
        getActiveHomepageHref(sections);

      setActiveSectionHref(
        (currentActiveHref) =>
          currentActiveHref ===
          nextActiveHref
            ? currentActiveHref
            : nextActiveHref,
      );
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(
        animationFrameId,
      );

      animationFrameId =
        window.requestAnimationFrame(
          updateActiveSection,
        );
    };

    scheduleUpdate();

    window.addEventListener(
      "scroll",
      scheduleUpdate,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      scheduleUpdate,
    );

    window.addEventListener(
      "hashchange",
      scheduleUpdate,
    );

    return () => {
      window.cancelAnimationFrame(
        animationFrameId,
      );

      window.removeEventListener(
        "scroll",
        scheduleUpdate,
      );

      window.removeEventListener(
        "resize",
        scheduleUpdate,
      );

      window.removeEventListener(
        "hashchange",
        scheduleUpdate,
      );
    };
  }, [pathname]);

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
