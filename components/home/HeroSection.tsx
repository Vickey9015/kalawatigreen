import Image from "next/image";
import Link from "next/link";
import { heroImage, heroImageDesktop } from "@/lib/home-content";

export default function HeroSection() {
  return (
    <section className="relative min-h-[min(92vh,820px)] overflow-hidden bg-kg-cream">
      <Image
        src={heroImage}
        alt="Forest resort at Kalawati Greens"
        fill
        priority
        className="object-cover object-center lg:hidden"
        sizes="100vw"
      />
      <Image
        src={heroImageDesktop}
        alt="Forest resort cottage in a misty valley at Kalawati Greens"
        fill
        priority
        className="hidden object-cover object-center lg:block"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-kg-cream/85 via-kg-cream/40 to-transparent lg:hidden"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,820px)] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="ml-6 max-w-xl rounded-r-[2.5rem] bg-kg-cream px-6 py-10 sm:ml-10 sm:max-w-2xl sm:px-10 sm:py-12 lg:ml-14 lg:max-w-xl lg:rounded-none lg:bg-transparent lg:px-0 lg:py-0 xl:ml-20">
          <h1 className="kg-hero-title text-5xl leading-[1.02] text-white sm:text-6xl lg:text-[4.5rem]">
            A Forest.
            <br />
            A Retreat.
            <br />
            A Celebration.
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="kg-btn-primary">
              Book Your Experience
            </Link>
            <Link href="/services" className="kg-btn-secondary">
              Explore Spaces
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
