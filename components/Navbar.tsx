"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isActiveNavPath, mainNavLinks } from "@/lib/nav-links";
import Logo from "./Logo";
import NavSidebar from "./NavSidebar";

const linkBase =
  "px-2.5 py-2 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] transition-colors lg:px-3 lg:text-[0.875rem]";

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent
            ? "border-b border-white/25 bg-kg-green-dark/90 backdrop-blur-sm"
            : "border-b border-kg-green-light/30 bg-kg-green shadow-lg"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <Logo variant="header" size="sm" className="shrink-0" />

          <nav className="hidden flex-1 items-center justify-center lg:flex" aria-label="Main">
            <ul className="flex items-center">
              {mainNavLinks.map((item) => {
                const isActive = isActiveNavPath(pathname, item.href);

                return (
                  <li key={item.label} className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`${linkBase} relative ${
                        isActive
                          ? "font-bold text-kg-gold-light after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-kg-gold-light"
                          : "text-white/90 hover:text-kg-gold-light"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact?intent=stay" className="kg-btn-gold hidden whitespace-nowrap sm:inline-flex">
              Book a Stay
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
              aria-expanded={sidebarOpen}
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
              onClick={() => setSidebarOpen((open) => !open)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <NavSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {isHome ? null : <div className="h-[4.35rem]" aria-hidden />}
    </>
  );
}
