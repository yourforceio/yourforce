"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ArrowRightLeft,
  Check,
  ChevronDown,
  ClipboardPlus,
  Code2,
  FileText,
  Layers,
  Menu,
  Plug,
  ShieldCheck,
  Truck,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

import Logo from "@/components/branding/Logo";
import { engineering, healthCheck, homeProducts, operations } from "@/data/home";

type MenuName = "services" | "products" | null;

// Icons for the Services menu, in the same order as engineering.services and operations.desks.
const serviceIcons: LucideIcon[] = [Layers, ShieldCheck, Zap, ArrowRightLeft, Plug, Code2];
const deskIcons: Record<string, LucideIcon> = { truck: Truck, billing: ClipboardPlus, documents: FileText, insurance: ShieldCheck };

/** One link in a menu: icon tile, title and a one-line note. */
function MenuItem({ href, title, note, Icon, onClick }: { href: string; title: string; note: string; Icon: LucideIcon; onClick: () => void }) {
  const inner = (
    <>
      <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper text-ink transition-colors group-hover:bg-ink group-hover:text-gold">
        <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
      </span>
      <span className="min-w-0">
        <span className="block text-[15px] font-bold leading-snug text-ink">{title}</span>
        <span className="mt-0.5 block text-[13px] leading-snug text-subtle">{note}</span>
      </span>
    </>
  );
  const cls = "group flex items-start gap-3 rounded-2xl p-2.5 hover:bg-paper";
  return href.startsWith("http") ? (
    <a href={href} onClick={onClick} className={cls}>{inner}</a>
  ) : (
    <Link href={href} onClick={onClick} className={cls}>{inner}</Link>
  );
}

const menuPanel = "absolute inset-x-0 top-full hidden border-b border-line bg-white text-ink shadow-[0_30px_60px_rgba(0,0,0,.28)] lg:block";
const menuHeading = "mb-2 px-2.5 text-xs font-bold uppercase tracking-[0.08em] text-subtle";

const productGroups = ["Education", "Health", "Shops & food", "Property", "Vehicles & services"].map((group) => ({
  group,
  items: homeProducts.filter((p) => p.group === group),
}));

/**
 * Site header (2026 redesign): Services and Products menus that open on click and close on Escape, an outside
 * click or navigation; a menu button on phones.
 */
export default function Navbar() {
  const [open, setOpen] = useState<MenuName>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Close everything when the page changes (including back/forward), by resetting during render.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const toggle = (name: Exclude<MenuName, null>) => setOpen((cur) => (cur === name ? null : name));
  const close = () => {
    setOpen(null);
    setMobileOpen(false);
  };

  const menuButton = "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-3 text-[15px] font-medium text-paper hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";
  const navLink = "rounded-lg px-3.5 py-3 text-[15px] font-medium text-paper hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-ink">
      <div className="mx-auto flex min-h-[72px] max-w-[1240px] items-center justify-between gap-4 px-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <Link href="/#founder" className={navLink}>About</Link>
          <button type="button" className={menuButton} aria-expanded={open === "services"} aria-controls="menu-services" onClick={() => toggle("services")}>
            Services <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${open === "services" ? "rotate-180" : ""}`} />
          </button>
          <button type="button" className={menuButton} aria-expanded={open === "products"} aria-controls="menu-products" onClick={() => toggle("products")}>
            Products <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${open === "products" ? "rotate-180" : ""}`} />
          </button>
          <Link href="/lab" className={navLink}>Labs</Link>
          <Link href="/contact" className="ml-2 rounded-full border-[1.5px] border-[#4A525B] px-[18px] py-2.5 text-[15px] font-bold text-paper hover:border-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
            Talk to us
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-paper lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {open === "services" && (
        <div id="menu-services" className={menuPanel}>
          <div className="mx-auto grid max-w-[1240px] grid-cols-[1.55fr_1fr_0.95fr] gap-8 px-6 pb-6 pt-7">
            <div>
              <p className={menuHeading}>Commerce engineering</p>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                {engineering.services.map((s, i) => (
                  <MenuItem key={s.title} href={s.href} title={s.menuTitle} note={s.menu} Icon={serviceIcons[i]} onClick={close} />
                ))}
              </div>
            </div>
            <div className="border-l border-line-soft pl-8">
              <p className={menuHeading}>Operations support · US</p>
              <div className="flex flex-col gap-1">
                {operations.desks.map((d) => (
                  <MenuItem key={d.title} href={d.href} title={d.menuTitle} note={d.menu} Icon={deskIcons[d.icon]} onClick={close} />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5 rounded-[22px] bg-ink p-6 text-paper">
              <div>
                <p className="yf-label text-xs text-mist">Free · no obligation</p>
                <p className="mt-3 font-display text-[22px] font-extrabold leading-tight">PHP health check for your store</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {healthCheck.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-[#C9CED4]">
                      <Check aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={healthCheck.cta.href} onClick={close} className="self-start rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-[#f7c561]">
                Request yours
              </Link>
            </div>
          </div>
          <div className="border-t border-line-soft bg-paper/60">
            <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-6 py-4 text-sm">
              <span className="text-muted">
                <strong className="text-ink">Not sure where to start?</strong> Tell us what you run and we&apos;ll point you to the right team.
              </span>
              <span className="flex items-center gap-5">
                <a href="mailto:hello@yourforce.io" className="font-bold text-ink hover:underline">hello@yourforce.io</a>
                <Link href="/contact" onClick={close} className="inline-flex items-center gap-1.5 font-bold text-ink hover:underline">
                  Book a call <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}

      {open === "products" && (
        <div id="menu-products" className={menuPanel}>
          <div className="mx-auto grid max-w-[1240px] grid-cols-5 gap-6 px-6 pb-6 pt-7">
            {productGroups.map(({ group, items }, gi) => (
              <div key={group} className={gi > 0 ? "border-l border-line-soft pl-6" : ""}>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-subtle">{group}</p>
                <div className="flex flex-col gap-1">
                  {items.map((p) => (
                    <Link key={p.slug} href={`/products/${p.slug}`} onClick={close} className="group -mx-2.5 flex items-center gap-3 rounded-2xl p-2.5 hover:bg-paper">
                      <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style={{ background: `${p.color}14` }}>
                        <span className="h-3 w-3 rounded-[4px]" style={{ background: p.color }} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[15px] font-bold leading-snug">{p.name}</span>
                        <span className="block text-[13px] leading-snug text-subtle">{p.menu}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-line-soft bg-paper/60">
            <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-6 py-4 text-sm">
              <span className="text-muted">
                <strong className="text-ink">Every product has a live demo.</strong> Free trial, no setup fee, cancel any time.
              </span>
              <Link href="/products" onClick={close} className="inline-flex items-center gap-1.5 font-bold text-ink hover:underline">
                Compare all products <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/10 bg-ink px-6 pb-8 pt-4 lg:hidden">
          <Link href="/#founder" onClick={close} className="block border-b border-white/10 pb-3 pt-1 text-lg font-bold text-paper">About</Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.08em] text-mist">Commerce engineering</p>
          {engineering.services.map((s) => (
            <Link key={s.title} href={s.href} onClick={close} className="block py-2.5 font-bold text-paper">{s.title}</Link>
          ))}
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.08em] text-mist">Operations support · US</p>
          {operations.desks.map((d) => (
            <a key={d.title} href={d.href} onClick={close} className="block py-2.5 font-bold text-paper">{d.title}</a>
          ))}
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.08em] text-mist">Products</p>
          <div className="grid grid-cols-2 gap-x-4">
            {homeProducts.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} onClick={close} className="flex items-center gap-2 py-2.5 font-bold text-paper">
                <span aria-hidden className="h-2.5 w-2.5 rounded-[3px]" style={{ background: p.color }} />
                {p.name}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-col border-t border-white/10 pt-3">
            <Link href="/lab" onClick={close} className="py-2.5 font-bold text-paper">Labs</Link>
          </div>
          <Link href="/contact" onClick={close} className="mt-4 inline-flex rounded-full bg-gold px-6 py-3.5 font-bold text-ink">Talk to us</Link>
        </div>
      )}
    </header>
  );
}
