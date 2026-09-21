import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { videoHeroImages } from "@/lib/video-content";

export default function VideoClosingBanner() {
  return (
    <section className="relative overflow-hidden bg-kg-green-dark">
      <div className="absolute inset-0" aria-hidden>
        <Image src={videoHeroImages.closing} alt="" fill className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-kg-green-dark/95 via-kg-green-dark/88 to-kg-green-dark/75" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="kg-eyebrow text-kg-gold-light">Visit the retreat</p>
            <p className="kg-serif-heading mt-4 text-2xl text-white sm:text-3xl">
              The full story is best lived on the lawn
            </p>
            <p className="mt-3 text-sm leading-7 text-white/78">
              Book a stay, host a celebration, or spend an afternoon by the pool — we will show you the rest in person.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact?intent=stay" className="kg-btn-gold">Book a stay</Link>
              <Link
                href="/contact?intent=event"
                className="rounded-sm border border-white/50 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:bg-white hover:text-kg-green"
              >
                Plan an event
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
