import { AboutValueIcon } from "@/components/about/AboutIcons";
import { aboutValues } from "@/lib/about-content";

export default function AboutValuesSection() {
  return (
    <section className="bg-kg-cream px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-kg-green sm:text-base">
          {aboutValues.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-kg-muted sm:text-base">
          {aboutValues.intro}
        </p>
        <p className="mt-3 text-sm text-kg-green sm:text-[0.9375rem]">
          {aboutValues.subtitle}
        </p>

        <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {aboutValues.items.map((item, index) => (
            <article key={item.title} className="flex flex-col items-center">
              <AboutValueIcon name={item.icon} className="mb-5 h-14 w-14" />
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-kg-green">
                {index + 1}. {item.title}
              </h3>
              <p className="mt-4 max-w-[14rem] text-sm leading-relaxed text-kg-green">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
