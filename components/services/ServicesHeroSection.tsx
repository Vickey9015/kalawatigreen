import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { serviceCategories, servicesHeroImages, servicesPageHeader } from "@/lib/services-content";

export default function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-kg-green-dark">
      <div className="absolute inset-0">
        <Image
          src={servicesHeroImages.accent}
          alt="Outdoor venues at Kalawati Greens"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-kg-green-dark/92 via-kg-green-dark/72 to-kg-green-dark/35 sm:via-kg-green-dark/65 sm:to-kg-green-dark/25"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/80 via-transparent to-kg-green-dark/20" aria-hidden />
      </div>

      <div className="relative mx-auto flex min-h-[min(28rem,78vh)] max-w-7xl flex-col justify-end px-4 pb-10 pt-4 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8 lg:pb-14">
        <Reveal>
          <div className="max-w-2xl">
            <p className="kg-eyebrow text-kg-gold-light">Stays · Dine · Celebrate</p>
            <h1 className="kg-display-title mt-4 text-4xl text-white sm:text-5xl lg:text-[3.25rem]">
              {servicesPageHeader.title}
            </h1>
            <p className="mt-4 text-sm leading-7 text-white/88 sm:text-base">{servicesPageHeader.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?intent=stay" className="kg-btn-gold">Book a stay</Link>
              <Link
                href="/contact?intent=event"
                className="rounded-sm border border-white/55 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:bg-white hover:text-kg-green"
              >
                Host an event
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="mt-10 hidden border-t border-white/20 pt-6 sm:block">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-kg-gold-light">Browse by category</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {serviceCategories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white/95 backdrop-blur-sm transition hover:border-kg-gold-light hover:bg-white/20"
                >
                  {category.eyebrow}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-40 w-40 overflow-hidden rounded-tl-[3rem] border-l border-t border-white/20 sm:block lg:h-48 lg:w-48">
        <div className="relative h-full w-full">
          <Image
            src={servicesHeroImages.secondary}
            alt=""
            fill
            className="object-cover opacity-90"
            sizes="192px"
          />
          <div className="absolute inset-0 bg-kg-green-dark/25" aria-hidden />
        </div>
      </div>
    </section>
  );
}
