import type { Metadata } from "next";
import { Suspense } from "react";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login | Kalawati Greens",
  description: "Sign in to manage Kalawati Greens website content.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <div className="admin-shell flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[rgba(10,61,42,0.16)] bg-[rgba(255,255,255,0.92)] shadow-[0_24px_60px_-28px_rgba(1,38,22,0.45)]">
        <div className="bg-kg-green px-6 py-7 text-white">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-kg-green-light/40 ring-1 ring-white/20">
              <svg className="h-6 w-6 text-[#c5e6d4]" viewBox="0 0 48 48" fill="none" aria-hidden>
                <path
                  d="M24 6C17 15 13 21 13 29c0 6.5 3.5 11.5 11 13.5C31.5 40.5 35 35.5 35 29c0-8-4-14-11-23z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-[#9dceb4]">
                KALAWATI GREENS
              </p>
              <p className="mt-0.5 text-lg font-medium">Admin Login</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-7 sm:px-8">
          <h1 className="kg-serif-heading text-2xl text-kg-green">Welcome back</h1>
          <p className="mt-2 text-sm leading-relaxed text-kg-muted">
            Sign in to manage homepage, services, moments, and contact content.
          </p>

          <Suspense
            fallback={
              <div className="mt-8 h-48 animate-pulse rounded-xl bg-[rgba(10,61,42,0.06)]" />
            }
          >
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
