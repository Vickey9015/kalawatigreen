import Link from "next/link";
import type { ReactNode } from "react";

export function AdminPageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <header className="admin-fade-in flex flex-col gap-4 border-b border-[rgba(1,49,31,0.14)] pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-kg-green-light">
          Content management
        </p>
        <h1 className="kg-serif-heading mt-2 text-3xl font-semibold text-kg-green sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-kg-muted">{description}</p>
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}

export function AdminPanel({
  title,
  description,
  children,
  actions,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="admin-panel overflow-hidden rounded-2xl border border-[rgba(1,49,31,0.14)] bg-[rgba(255,255,255,0.88)]">
      <div className="flex flex-col gap-3 border-b border-[rgba(1,49,31,0.1)] bg-[rgba(1,49,31,0.035)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-kg-green">{title}</h2>
          {description ? (
            <p className="mt-1 text-xs leading-relaxed text-kg-muted">{description}</p>
          ) : null}
        </div>
        {actions}
      </div>
      <div className="px-5 py-5 sm:px-6 sm:py-6">{children}</div>
    </section>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-kg-green">
        {label}
      </span>
      {children}
      {hint ? <span className="mt-1.5 block text-xs text-kg-muted/80">{hint}</span> : null}
    </label>
  );
}

export function TextInput({
  defaultValue,
  placeholder,
  type = "text",
}: {
  defaultValue?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="admin-input w-full rounded-lg border border-[rgba(1,49,31,0.18)] bg-[rgba(243,242,237,0.55)] px-3.5 py-2.5 text-sm text-kg-text outline-none transition focus:border-kg-green focus:bg-white focus:ring-2 focus:ring-[rgba(13,74,56,0.18)]"
    />
  );
}

export function TextArea({
  defaultValue,
  placeholder,
  rows = 4,
}: {
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      defaultValue={defaultValue}
      placeholder={placeholder}
      rows={rows}
      className="admin-input w-full resize-y rounded-lg border border-[rgba(1,49,31,0.18)] bg-[rgba(243,242,237,0.55)] px-3.5 py-2.5 text-sm leading-relaxed text-kg-text outline-none transition focus:border-kg-green focus:bg-white focus:ring-2 focus:ring-[rgba(13,74,56,0.18)]"
    />
  );
}

const primaryBtnClass =
  "inline-flex items-center justify-center rounded-lg bg-kg-green px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-kg-green-light";

const secondaryBtnClass =
  "inline-flex items-center justify-center rounded-lg border border-[rgba(1,49,31,0.28)] bg-white px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-kg-green transition hover:bg-[rgba(1,49,31,0.06)]";

export function AdminPrimaryButton({
  children,
  type = "button",
  href,
}: {
  children: ReactNode;
  type?: "button" | "submit";
  href?: string;
}) {
  if (href) {
    return (
      <Link href={href} className={primaryBtnClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={primaryBtnClass}>
      {children}
    </button>
  );
}

export function AdminSecondaryButton({
  children,
  type = "button",
  href,
  target,
}: {
  children: ReactNode;
  type?: "button" | "submit";
  href?: string;
  target?: string;
}) {
  if (href) {
    return (
      <Link href={href} target={target} className={secondaryBtnClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={secondaryBtnClass}>
      {children}
    </button>
  );
}

export function AdminGhostButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-kg-muted transition hover:bg-[rgba(1,49,31,0.06)] hover:text-kg-green"
    >
      {children}
    </button>
  );
}

export function StatusBadge({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "success" | "warn";
}) {
  const tones = {
    neutral: "bg-[rgba(1,49,31,0.1)] text-kg-green",
    success: "bg-[rgba(13,74,56,0.16)] text-kg-green",
    warn: "bg-[rgba(1,49,31,0.08)] text-kg-green-light ring-1 ring-[rgba(1,49,31,0.16)]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] ${tones[tone]}`}
    >
      {label}
    </span>
  );
}
