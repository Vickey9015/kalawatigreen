import { AboutValueIcon } from "@/components/about/AboutIcons";
import Reveal from "@/components/Reveal";
import { aboutValues } from "@/lib/about-content";

export default function AboutValuesSection() {
  const [featured, ...rest] = aboutValues.items;

  return (
    <section className="bg-kg-surface-soft px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="kg-eyebrow">Philosophy</p>
            <h2 className="kg-display-title kg-home-section-title mt-3 text-kg-green-dark sm:mt-4">{aboutValues.title}</h2>
            <p className="mt-3 text-sm leading-7 text-kg-muted sm:mt-4 sm:text-base">{aboutValues.intro}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-5">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <article className="flex h-full flex-col justify-between rounded-2xl border border-kg-green/12 bg-white p-5 shadow-sm sm:rounded-[1.75rem] sm:p-9">
              <AboutValueIcon name={featured.icon} className="h-11 w-11 sm:h-14 sm:w-14" />
              <div className="mt-6 sm:mt-0">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-kg-gold sm:text-xs sm:tracking-[0.18em]">
                  Principle 01
                </p>
                <h3 className="mt-2 font-serif text-2xl text-kg-green-dark sm:mt-3 sm:text-3xl">{featured.title}</h3>
                <p className="mt-3 text-sm leading-7 text-kg-muted sm:mt-4 sm:max-w-md sm:text-base">{featured.description}</p>
              </div>
            </article>
          </Reveal>

          {rest.map((item, index) => (
            <Reveal key={item.title} delayMs={(index + 1) * 80} className="lg:col-span-5">
              <article className="flex h-full flex-col gap-3 rounded-2xl border border-kg-green/12 bg-white p-5 shadow-sm sm:flex-row sm:gap-4 sm:rounded-[1.5rem] sm:p-7">
                <AboutValueIcon name={item.icon} className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
                <div className="min-w-0">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-kg-gold sm:text-[0.65rem] sm:tracking-[0.18em]">
                    Principle {String(index + 2).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 font-serif text-lg text-kg-green-dark sm:mt-2 sm:text-xl">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-kg-muted sm:mt-2">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
