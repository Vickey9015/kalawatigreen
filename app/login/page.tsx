import type { Metadata } from "next";
import Image from "next/image";
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
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[rgba(1,49,31,0.16)] bg-[rgba(255,255,255,0.92)] shadow-[0_24px_60px_-28px_rgba(1,49,31,0.45)]">
        <div className="border-b border-kg-green/12 bg-white px-6 py-7">
          <div className="flex items-center gap-3">
            <Image
              src="/images/kg-logo.png"
              alt="Kalawati Greens"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-contain"
            />
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-kg-gold">
                KALAWATI GREENS
              </p>
              <p className="mt-0.5 text-lg font-medium text-kg-green-dark">Admin Login</p>
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
              <div className="mt-8 h-48 animate-pulse rounded-xl bg-[rgba(1,49,31,0.06)]" />
            }
          >
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
