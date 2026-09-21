import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { homeMoments } from "@/lib/home-content";

export default function MomentsPreviewSection() {
  return (
    <section className="bg-kg-cream px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="kg-eyebrow">The gallery</p>
            <h2 className="kg-display-title kg-home-section-title mt-4 uppercase text-kg-green-dark">Moments to Treasure</h2>
          </div>
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5 lg:gap-4">
          {homeMoments.map((moment, index) => (
            <li key={moment.label} className={index === 0 ? "col-span-2 row-span-1 sm:col-span-2 sm:row-span-2" : ""}>
              <Reveal delayMs={index * 40}>
                <Link href="/moments/" className="group relative block overflow-hidden rounded-xl sm:rounded-2xl">
                  <div className={`relative ${index === 0 ? "aspect-[16/10] sm:aspect-square" : "aspect-[4/3]"}`}>
                    <Image
                      src={moment.image}
                      alt={moment.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/80 via-transparent to-transparent" />
                    <p className="absolute inset-x-0 bottom-0 px-3 py-2.5 text-xs text-white sm:px-4 sm:py-4 sm:text-sm">{moment.label}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Link href="/moments/" className="kg-btn-gold min-w-[min(100%,14rem)] px-10 py-3.5">
            See more
          </Link>
        </div>
      </div>
    </section>
  );
}
