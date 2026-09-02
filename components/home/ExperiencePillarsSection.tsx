import Image from "next/image";
import Reveal from "@/components/Reveal";
import { experiencePillars } from "@/lib/home-content";

export default function ExperiencePillarsSection() {
  return (
    <section className="bg-kg-green-dark py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <p className="kg-eyebrow text-kg-gold-light">The Kalawati Greens experience</p>
            <h2 className="kg-display-title mt-4 text-4xl text-white sm:text-5xl">
              Rooted in Nature. Crafted for Celebration.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {experiencePillars.map((pillar, index) => (
            <Reveal key={pillar.eyebrow} delayMs={index * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/30 bg-kg-green shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.eyebrow}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/90 via-kg-green-dark/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="kg-eyebrow text-kg-gold-light">{pillar.eyebrow}</p>
                    <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">{pillar.slogan}</h3>
                  </div>
                </div>

                <ul className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                  {pillar.items.map((item) => (
                    <li
                      key={item.title}
                      className="flex gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 transition-colors hover:bg-white/15"
                    >
                      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-kg-gold-light">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-white/90">{item.description}</p>
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
