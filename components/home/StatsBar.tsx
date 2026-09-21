import Reveal from "@/components/Reveal";
import { homeStats } from "@/lib/home-content";

function StatIcon({ icon }: { icon: string }) {
  if (icon === "oxygen") {
    return <span className="text-[0.7rem] font-bold sm:text-xs">O₂</span>;
  }
  if (icon === "carbon") {
    return <span className="text-[0.65rem] font-bold sm:text-[0.7rem]">CO₂</span>;
  }
  if (icon === "plants") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 21c-4-4-7-8-7-13a7 7 0 0 1 14 0c0 5-3 9-7 13z" />
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 3v18M7 8l5-5 5 5" />
    </svg>
  );
}

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden border-y border-kg-green/10 bg-white py-8 sm:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(13,74,56,0.06),transparent_70%)]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {homeStats.map((stat, index) => (
            <Reveal key={stat.title} delayMs={index * 90} className="h-full">
              <article
                className="group flex h-full min-h-[9.5rem] flex-col overflow-hidden rounded-xl border border-kg-green/15 bg-white shadow-lg shadow-kg-green/5 transition-transform duration-300 hover:-translate-y-1 hover:border-kg-gold/45 sm:min-h-[12.5rem] sm:rounded-2xl"
              >
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-kg-gold to-transparent opacity-90" />

                <div className="flex flex-1 flex-col items-center justify-between px-3 py-4 text-center sm:px-5 sm:py-6">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-kg-gold/40 bg-kg-gold/10 text-[0.65rem] font-bold tracking-wide text-kg-gold transition-colors group-hover:bg-kg-gold/18 sm:h-10 sm:w-10 sm:text-xs"
                    aria-hidden
                  >
                    <StatIcon icon={stat.icon} />
                  </span>

                  <p className="font-serif text-2xl leading-none text-kg-green-dark sm:text-4xl">{stat.value}</p>

                  <div className="flex min-h-[2.75rem] flex-col items-center justify-end sm:min-h-[3.25rem]">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-kg-green sm:text-[0.8125rem] sm:tracking-[0.14em]">
                      {stat.title}
                    </p>
                    <p className="mt-1 text-[0.6rem] leading-snug text-kg-muted sm:mt-1.5 sm:text-xs">{stat.subtitle}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
