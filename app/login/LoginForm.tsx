"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useEffect, useState, type FormEvent } from "react";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";

function hasAdminSession() {
  return document.cookie
    .split(";")
    .some((part) => part.trim().startsWith(`${ADMIN_SESSION_COOKIE}=`));
}

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (hasAdminSession()) {
      router.replace("/admin/");
    }
  }, [router]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const maxAge = 60 * 60 * 24 * 7;
    document.cookie = `${ADMIN_SESSION_COOKIE}=1; path=/; max-age=${maxAge}; SameSite=Lax`;

    const next = searchParams.get("next");
    const destination =
      next && next.startsWith("/admin") ? next : "/admin/";

    startTransition(() => {
      router.replace(destination);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <label className="block">
        <span className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-kg-green">
          Email
        </span>
        <input
          type="text"
          name="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Kalawatigreens@avconexpo.com"
          className="w-full rounded-lg border border-[rgba(1,49,31,0.18)] bg-[rgba(243,242,237,0.55)] px-3.5 py-2.5 text-sm text-kg-text outline-none transition focus:border-kg-green focus:bg-white focus:ring-2 focus:ring-[rgba(13,74,56,0.18)]"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-kg-green">
          Password
        </span>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter any password"
          className="w-full rounded-lg border border-[rgba(1,49,31,0.18)] bg-[rgba(243,242,237,0.55)] px-3.5 py-2.5 text-sm text-kg-text outline-none transition focus:border-kg-green focus:bg-white focus:ring-2 focus:ring-[rgba(13,74,56,0.18)]"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="kg-btn-primary mt-2 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-[0.7rem] font-bold uppercase tracking-[0.14em] disabled:opacity-70"
      >
        {submitting ? "Signing in…" : "Sign in"}
      </button>

      <p className="pt-1 text-center text-xs text-kg-muted">
        Temporary access — any email and password will open the panel.{" "}
        <Link href="/" className="font-medium text-kg-green underline-offset-2 hover:underline">
          Back to site
        </Link>
      </p>
    </form>
  );
}
