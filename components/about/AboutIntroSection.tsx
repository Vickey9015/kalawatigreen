import { aboutIntro } from "@/lib/about-content";

function CornerLeaves({ className }: { className: string }) {
  return (
    <svg
      className={`pointer-events-none absolute h-28 w-28 text-kg-green/15 sm:h-36 sm:w-36 ${className}`}
      viewBox="0 0 120 120"
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 95c8-35 22-55 45-70 8-6 18-12 12-22-12 6-22 20-28 38-4-22 6-48 28-62-6 28-2 54 14 76 8 12 20 18 30 14-12-4-26-4-38 6-10 8-14 22-10 38z" />
      <path d="M55 98c4-18 2-34-10-46-8-8-18-14-14-26 8 4 14 14 16 26 2-14 10-28 24-36-6 16-4 34 8 48 6 8 14 12 22 10-10-2-20 0-28 10-6 8-8 18-4 30z" />
    </svg>
  );
}

export default function AboutIntroSection() {
  return (
    <section className="relative overflow-hidden bg-kg-cream px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8 lg:pb-14 lg:pt-20">
      <CornerLeaves className="-left-4 top-0 rotate-180" />
      <CornerLeaves className="-right-4 top-0 -scale-x-100 rotate-180" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="kg-section-title">{aboutIntro.eyebrow}</p>
        <h1 className="kg-serif-heading mt-3 text-4xl font-medium text-kg-green sm:text-5xl lg:text-[3.25rem]">
          {aboutIntro.title}
        </h1>
        <p className="kg-serif-heading mt-3 text-xl font-medium text-kg-green sm:text-2xl">
          {aboutIntro.tagline}
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-kg-green sm:text-[0.9375rem]">
          {aboutIntro.description}
        </p>
      </div>
    </section>
  );
}
