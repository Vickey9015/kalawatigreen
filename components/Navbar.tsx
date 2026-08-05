"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isActiveNavPath, mainNavLinks } from "@/lib/nav-links";
import Logo from "./Logo";
import NavSidebar from "./NavSidebar";

const linkBase =
  "px-2.5 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors lg:px-3 lg:text-[0.875rem] xl:text-[0.9375rem]";

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-kg-green-dark shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <Logo variant="header" className="shrink-0" />

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
                          ? "font-semibold text-kg-gold-light after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:rounded-full after:bg-kg-gold-light lg:after:left-3 lg:after:right-3"
                          : "text-white/85 hover:text-kg-gold-light"
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
            <Link href="/contact" className="kg-btn-gold hidden whitespace-nowrap sm:inline-flex">
              Book Now
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
              aria-expanded={sidebarOpen}
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
              onClick={() => setSidebarOpen((open) => !open)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <NavSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
