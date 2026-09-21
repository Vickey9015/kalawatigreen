import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { homeBooking } from "@/lib/home-content";

export default function BookingBand() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <Image src="/images/cottage.png" alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-kg-green-dark/80 via-kg-green-dark/70 to-kg-green-dark/85" />
      <Reveal>
        <div className="kg-on-image relative mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
          <p className="kg-eyebrow text-kg-gold-light">{homeBooking.kicker}</p>
          <h2 className="kg-display-title kg-home-section-title mt-4 text-white">{homeBooking.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white sm:text-base">{homeBooking.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact?intent=stay" className="kg-btn-gold">
              {homeBooking.primaryCta}
            </Link>
            <Link href="/contact?intent=event" className="rounded-sm border border-white/60 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition hover:bg-white hover:text-kg-green">
              {homeBooking.secondaryCta}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
