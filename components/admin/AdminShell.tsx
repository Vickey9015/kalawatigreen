"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";
import { isActiveNavPath } from "@/lib/nav-links";
import { AdminIcon } from "./AdminIcon";
import { adminNavItems } from "./admin-nav";

function hasAdminSession() {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split(";")
    .some((part) => part.trim().startsWith(`${ADMIN_SESSION_COOKIE}=`));
}

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    if (!hasAdminSession()) {
      setAuthed(false);
      router.replace(`/login/?next=${encodeURIComponent(pathname)}`);
      return;
    }
    setAuthed(true);
  }, [pathname, router]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  function handleLogout() {
    document.cookie = `${ADMIN_SESSION_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
    setAuthed(false);
    router.replace("/login/");
  }

  const current = adminNavItems.find((item) =>
    item.href === "/admin"
      ? pathname === "/admin" || pathname === "/admin/"
      : isActiveNavPath(pathname, item.href) || pathname.startsWith(`${item.href}/`),
  );

  if (authed !== true) {
    return (
      <div className="admin-shell flex min-h-screen items-center justify-center px-4">
        <div className="rounded-2xl border border-[rgba(10,61,42,0.14)] bg-white/90 px-6 py-5 text-sm text-kg-muted">
          Checking admin access…
        </div>
      </div>
    );
  }

  return (
    <div className="admin-shell min-h-screen text-kg-text">
      <div
        className={`fixed inset-0 z-40 bg-[rgba(1,38,22,0.45)] backdrop-blur-[2px] transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      <aside
        className={`admin-sidebar fixed inset-y-0 left-0 z-50 flex w-[17.5rem] flex-col text-white transition-transform duration-300 ease-out lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-white/10 px-5 py-6">
          <Link href="/admin/" className="group block">
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-kg-green-light/35 ring-1 ring-white/25">
                <svg className="h-6 w-6 text-[#9dceb4]" viewBox="0 0 48 48" fill="none" aria-hidden>
                  <path
                    d="M24 6C17 15 13 21 13 29c0 6.5 3.5 11.5 11 13.5C31.5 40.5 35 35.5 35 29c0-8-4-14-11-23z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <span className="block text-[0.7rem] font-semibold tracking-[0.22em] text-[#9dceb4]">
                  KALAWATI GREENS
                </span>
                <span className="mt-0.5 block text-sm font-medium text-white/90">Admin Studio</span>
              </span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {adminNavItems.map((item) => {
            const href = item.href.endsWith("/") ? item.href : `${item.href}/`;
            const active =
              item.href === "/admin"
                ? pathname === "/admin" || pathname === "/admin/"
                : isActiveNavPath(pathname, item.href) || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={href}
                className={`admin-nav-link group flex items-start gap-3 rounded-xl px-3 py-2.5 transition ${
                  active
                    ? "bg-kg-green-light/40 text-white ring-1 ring-[#9dceb4]/40"
                    : "text-white/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                    active
                      ? "bg-[#9dceb4]/25 text-[#c5e6d4]"
                      : "bg-white/5 text-white/60 group-hover:text-white"
                  }`}
                >
                  <AdminIcon name={item.icon} className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{item.label}</span>
                  <span className="mt-0.5 block truncate text-[0.7rem] text-white/45 group-hover:text-white/55">
                    {item.description}
                  </span>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="space-y-2 border-t border-white/10 p-4">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between rounded-xl bg-kg-green-light/25 px-3 py-2.5 text-sm text-white/85 transition hover:bg-kg-green-light/40 hover:text-white"
          >
            <span>View live site</span>
            <span aria-hidden className="text-[#9dceb4]">
              ↗
            </span>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/8 hover:text-white"
          >
            <span>Sign out</span>
            <span aria-hidden>↩</span>
          </button>
        </div>
      </aside>

      <div className="lg:pl-[17.5rem]">
        <header className="sticky top-0 z-30 border-b border-[rgba(10,61,42,0.14)] bg-[rgba(232,240,234,0.88)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(10,61,42,0.18)] bg-white text-kg-green lg:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open admin menu"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-kg-green-light">
                  {current?.label ?? "Admin"}
                </p>
                <p className="text-sm font-medium text-kg-green">Website content control</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden items-center gap-2 rounded-full border border-[rgba(10,61,42,0.16)] bg-white/90 px-3 py-1.5 text-xs text-kg-green sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-kg-green-light" />
                Draft preview UI
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="hidden rounded-lg border border-[rgba(10,61,42,0.16)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-kg-green transition hover:bg-[rgba(10,61,42,0.06)] sm:inline-flex"
              >
                Sign out
              </button>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-kg-green text-[0.7rem] font-bold text-white ring-2 ring-[rgba(26,92,62,0.25)]">
                KG
              </div>
            </div>
          </div>
        </header>

        <main className="admin-main px-4 py-6 sm:px-6 sm:py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
