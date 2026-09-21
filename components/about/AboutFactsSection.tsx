import Reveal from "@/components/Reveal";
import { aboutFacts } from "@/lib/about-content";

export default function AboutFactsSection() {
  return (
    <section className="border-y border-kg-green/10 bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {aboutFacts.map((fact, index) => (
            <Reveal key={fact.title} delayMs={index * 70} className="h-full">
              <article className="flex h-full min-h-[7.5rem] flex-col justify-center rounded-xl border border-kg-green/12 bg-kg-surface-soft px-3 py-4 text-center sm:min-h-0 sm:rounded-2xl sm:px-5 sm:py-6">
                <p className="font-serif text-xl leading-none text-kg-green-dark sm:text-3xl">{fact.value}</p>
                <p className="mt-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-kg-green sm:mt-2 sm:text-xs sm:tracking-[0.14em]">
                  {fact.title}
                </p>
                <p className="mt-1 text-[0.6rem] leading-snug text-kg-muted sm:mt-1.5 sm:text-xs">{fact.subtitle}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
