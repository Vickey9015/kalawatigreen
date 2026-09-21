import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { contactHeroImages, contactIntents, contactPageHeader } from "@/lib/contact-content";
import { contactInfo } from "@/lib/site";

const phoneHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${contactInfo.email}`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.mapQuery)}`;

export default function ContactHero() {
  return (
    <section className="border-b border-kg-green/10 bg-white pb-8 pt-8 sm:pb-10 sm:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="kg-eyebrow">{contactPageHeader.eyebrow}</p>
            <h1 className="kg-display-title mt-4 text-3xl text-kg-green-dark sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              {contactPageHeader.title}
            </h1>
            <p className="mt-4 text-sm leading-7 text-kg-muted sm:text-base">{contactPageHeader.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {contactIntents.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full border border-kg-green/20 bg-kg-surface-soft px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-kg-green transition hover:border-kg-gold/50 hover:bg-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href={phoneHref}
                className="rounded-2xl border border-kg-green/12 bg-kg-surface-soft px-4 py-4 transition hover:border-kg-green/25 hover:shadow-sm"
              >
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-kg-muted">Call</p>
                <p className="mt-1 text-sm font-semibold text-kg-green-dark">{contactInfo.phone}</p>
              </a>
              <a
                href={mailHref}
                className="rounded-2xl border border-kg-green/12 bg-kg-surface-soft px-4 py-4 transition hover:border-kg-green/25 hover:shadow-sm"
              >
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-kg-muted">Email</p>
                <p className="mt-1 truncate text-sm font-semibold text-kg-green-dark">{contactInfo.email}</p>
              </a>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-kg-green/12 bg-kg-surface-soft px-4 py-4 transition hover:border-kg-green/25 hover:shadow-sm"
              >
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-kg-muted">Directions</p>
                <p className="mt-1 text-sm font-semibold text-kg-green-dark">Open in Maps</p>
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-12 sm:gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-kg-green/12 shadow-md sm:col-span-7 sm:aspect-auto sm:min-h-[17rem]">
                <Image
                  src={contactHeroImages.primary}
                  alt="Cottage stay at Kalawati Greens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 42vw"
                  priority
                />
              </div>
              <div className="grid gap-3 sm:col-span-5 sm:grid-rows-2 sm:gap-4">
                <div className="relative min-h-[9rem] overflow-hidden rounded-2xl border border-kg-green/12 shadow-md sm:min-h-0">
                  <Image
                    src={contactHeroImages.secondary}
                    alt="Celebration venue"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 28vw"
                  />
                </div>
                <div className="relative min-h-[9rem] overflow-hidden rounded-2xl border border-kg-green/12 shadow-md sm:min-h-0">
                  <Image
                    src={contactHeroImages.accent}
                    alt="Pool and leisure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 28vw"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
