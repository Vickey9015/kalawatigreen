"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { isActiveNavPath, mainNavLinks } from "@/lib/nav-links";
import Logo from "./Logo";

type NavSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function NavSidebar({ open, onClose }: NavSidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] lg:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close menu"
        onClick={onClose}
      />
      <aside className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-kg-green/10 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-kg-green/10 px-5 py-4">
          <Logo variant="header" size="sm" />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-kg-green"
            aria-label="Close menu"
            onClick={onClose}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <ul className="space-y-1">
            {mainNavLinks.map((item) => {
              const isActive = isActiveNavPath(pathname, item.href);

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-lg px-3 py-3 text-[0.9375rem] font-semibold transition-colors ${
                      isActive
                        ? "bg-kg-green/8 font-bold text-kg-green"
                        : "text-kg-green/85 hover:bg-kg-green/6 hover:text-kg-green"
                    }`}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-kg-green/10 p-4">
          <Link href="/contact?intent=stay" className="kg-btn-gold w-full" onClick={onClose}>
            Book a Stay
          </Link>
        </div>
      </aside>
    </div>,
    document.body,
  );
}
