import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { contactInfo } from "@/lib/site";

export default function ContactMap() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.mapQuery)}`;

  return (
    <section className="bg-kg-surface-soft px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kg-eyebrow">Find us</p>
              <h2 className="kg-display-title mt-3 text-2xl text-kg-green-dark sm:text-3xl">In the heart of Ambedkar Nagar</h2>
            </div>
            <Link href={mapsUrl} target="_blank" rel="noopener noreferrer" className="kg-btn-secondary px-6 py-3">
              Open in Google Maps
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={80} className="mt-8">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-kg-green/12 bg-white shadow-[0_20px_60px_-24px_rgba(1,49,31,0.25)]">
            <div className="relative min-h-[16rem] sm:min-h-[22rem] lg:min-h-[26rem]">
              <Image
                src="/images/lawn-upawan.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80rem"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/85 via-kg-green-dark/35 to-kg-green-dark/15" />

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-1/2 top-[42%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition hover:scale-105"
                aria-label="Open Kalawati Greens on Google Maps"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-kg-green shadow-lg sm:h-16 sm:w-16">
                  <svg className="h-7 w-7" viewBox="0 0 48 48" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M24 4C16.8 4 11 9.8 11 17c0 9.8 11.4 24.5 12 25.3.4.5 1 .5 1.4 0 .6-.8 12-15.5 12-25.3C36.5 9.8 31.2 4 24 4zm0 9.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
                    />
                  </svg>
                </span>
                <span className="mt-2 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-kg-green-dark shadow">
                  Get directions
                </span>
              </a>

              <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-kg-green-dark/75 px-5 py-5 backdrop-blur-md sm:px-8 sm:py-6">
                <p className="text-sm font-semibold text-white sm:text-base">{contactInfo.address}</p>
                <p className="mt-1 text-xs text-white/75 sm:text-sm">Akbarpur · Uttar Pradesh · India</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
