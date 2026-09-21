import Image from "next/image";
import Reveal from "@/components/Reveal";
import { videoHighlights } from "@/lib/video-content";

export default function VideoHighlightsSection() {
  const [lead, ...rest] = videoHighlights;

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kg-eyebrow">Chapters</p>
              <h2 className="kg-display-title mt-3 text-2xl text-kg-green-dark sm:text-3xl">
                Stories in the landscape
              </h2>
            </div>
            <p className="max-w-sm text-sm text-kg-muted">Three moods that define time at Kalawati Greens.</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-12 sm:gap-4 lg:mt-10">
          <Reveal className="sm:col-span-7">
            <article className="group relative min-h-[16rem] overflow-hidden rounded-2xl sm:min-h-[22rem] lg:min-h-[26rem]">
              <Image
                src={lead.image}
                alt={lead.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/90 via-kg-green-dark/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-kg-gold-light">01</span>
                <h3 className="kg-display-title mt-2 text-2xl text-white sm:text-3xl">{lead.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/85">{lead.description}</p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-3 sm:col-span-5 sm:grid-rows-2 sm:gap-4">
            {rest.map((item, index) => (
              <Reveal key={item.title} delayMs={(index + 1) * 80}>
                <article className="group relative min-h-[11rem] overflow-hidden rounded-2xl sm:min-h-0 sm:h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/88 via-kg-green-dark/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-kg-gold-light">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/80 sm:text-sm">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
