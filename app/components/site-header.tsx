"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ContentNavMenu } from "./content-nav-menu";
import { MobileContentNav } from "./mobile-content-nav";
import { SoftTyreIcon } from "./soft-tyre-icon";

export const navLinkClassName =
  "group relative px-1 pb-2 text-[0.65rem] font-medium tracking-[0.16em] text-white transition-all duration-300 ease-out after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-gradient-to-r after:from-transparent after:via-violet-400/90 after:to-transparent after:shadow-[0_0_8px_rgba(168,85,247,0.5)] after:transition-all after:duration-300 after:ease-out after:content-[''] hover:font-semibold hover:text-[#c084fc] hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.45)] hover:after:w-full lg:text-xs lg:tracking-[0.2em]";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "STANDINGS", href: "/standings" },
  { label: "TELEMETRY", href: "/telemetry" },
  { label: "ABOUT", href: "/about" },
] as const;

function HeaderBrandMark() {
  return (
    <span className="inline-flex items-center gap-0 text-sm font-bold italic tracking-[0.1em] [font-family:var(--font-orbitron)] sm:text-base sm:tracking-[0.12em]">
      <span className="text-white">GRIDL</span>
      <SoftTyreIcon className="mx-0.5 h-[1.1em] w-[1.1em] drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
      <span className="text-white">CKED</span>
      <span className="text-[#c084fc] drop-shadow-[0_0_22px_rgba(168,85,247,0.95)]">
        .F1
      </span>
    </span>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 h-0.5 w-5 bg-white transition-all duration-300 ${open ? "top-[7px] rotate-45" : "top-0"}`}
      />
      <span
        className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute left-0 h-0.5 w-5 bg-white transition-all duration-300 ${open ? "top-[7px] -rotate-45" : "top-[14px]"}`}
      />
    </span>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-20 flex shrink-0 items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 md:px-10 md:py-6 lg:px-14">
      <Link href="/" className="min-w-0 shrink" onClick={closeMenu}>
        <HeaderBrandMark />
      </Link>

      {/* Desktop / large tablet landscape: horizontal nav */}
      <nav
        className="hidden items-center gap-4 lg:flex xl:gap-8"
        aria-label="Main navigation"
      >
        {navItems.slice(0, 3).map((item) => (
          <Link key={item.label} href={item.href} className={navLinkClassName}>
            {item.label}
          </Link>
        ))}
        <ContentNavMenu />
        {navItems.slice(3).map((item) => (
          <Link key={item.label} href={item.href} className={navLinkClassName}>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Phone + tablet portrait: menu button */}
      <button
        type="button"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-violet-500/30 bg-violet-950/40 text-white shadow-[0_0_16px_rgba(139,92,246,0.2)] transition-colors hover:border-violet-400/50 hover:bg-violet-900/50 lg:hidden"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuIcon open={menuOpen} />
      </button>

      {/* Mobile / tablet overlay menu */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-30 lg:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-[#03040c]/80 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          aria-label="Close menu"
          onClick={closeMenu}
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-violet-500/25 bg-[#05030f]/95 px-6 pb-10 pt-20 shadow-[-8px_0_32px_rgba(88,28,135,0.35)] transition-transform duration-300 ease-out sm:w-80 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium tracking-[0.2em] text-white transition-colors hover:text-[#c084fc]"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <MobileContentNav menuOpen={menuOpen} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
