import { contactPageHeader } from "@/lib/contact-content";

function CornerLeaves({ className }: { className: string }) {
  return (
    <svg
      className={`pointer-events-none absolute h-28 w-28 text-kg-green/15 sm:h-36 sm:w-36 ${className}`}
      viewBox="0 0 120 120"
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 95c8-35 22-55 45-70 8-6 18-12 12-22-12 6-22 20-28 38-4-22 6-48 28-62-6 28-2 54 14 76 8 12 20 18 30 14-12-4-26-4-38 6-10 8-14 22-10 38z" />
    </svg>
  );
}

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-kg-cream px-4 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8">
      <CornerLeaves className="-left-4 top-0 rotate-180" />
      <CornerLeaves className="-right-4 top-0 -scale-x-100 rotate-180" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="kg-section-title">{contactPageHeader.title}</p>
        <h1 className="kg-serif-heading mt-3 text-3xl font-medium text-kg-green sm:text-4xl lg:text-[2.75rem]">
          {contactPageHeader.subtitle}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-kg-muted sm:text-base">
          {contactPageHeader.description}
        </p>
      </div>
    </section>
  );
}
