import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { experiencePillars } from "@/lib/home-content";

const pillarIcons: Record<(typeof experiencePillars)[number]["icon"], ReactNode> = {
  spaces: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  dine: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M6 3v8a4 4 0 0 0 4 4" />
      <path d="M6 11v10" />
      <path d="M8 3v5" />
      <path d="M18 3v18" />
      <path d="M16 3v5a4 4 0 0 0 4 4" />
    </svg>
  ),
  venues: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4 20h16" />
      <path d="M6 20V9l6-5 6 5v11" />
      <path d="M10 20v-5h4v5" />
      <path d="M12 4v3" />
    </svg>
  ),
};

export default function ExperiencePillarsSection() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kg-eyebrow">The Kalawati Greens experience</p>
            <h2 className="kg-display-title mt-4 text-4xl text-kg-green-dark sm:text-5xl">
              Rooted in Nature. Crafted for Celebration.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {experiencePillars.map((pillar, index) => (
            <Reveal key={pillar.eyebrow} delayMs={index * 100}>
              <article className="flex h-full flex-col rounded-[1.75rem] border border-kg-green/15 bg-white p-6 shadow-xl shadow-kg-green/8 sm:p-7">
                <div className="flex flex-col items-center text-center">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-kg-gold/35 bg-kg-gold/10 text-kg-green"
                    aria-hidden
                  >
                    {pillarIcons[pillar.icon]}
                  </span>
                  <p className="kg-eyebrow mt-5">{pillar.eyebrow}</p>
                  <h3 className="mt-2 font-serif text-2xl text-kg-green-dark sm:text-[1.65rem]">{pillar.slogan}</h3>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-kg-green/10 pt-6">
                  {pillar.items.map((item) => (
                    <li key={item.title} className="flex gap-3 text-left">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-kg-gold"
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-kg-green-dark">{item.title}</p>
                        <p className="mt-0.5 text-sm leading-6 text-kg-muted">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
