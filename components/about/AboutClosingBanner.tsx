import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { aboutClosingImage, aboutClosingQuote } from "@/lib/about-content";

export default function AboutClosingBanner() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-kg-green/12 bg-white shadow-lg sm:rounded-[2rem]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="order-2 flex flex-col justify-center px-5 py-8 sm:order-1 sm:px-10 sm:py-12 lg:py-14">
            <p className="kg-eyebrow">The feeling</p>
            <blockquote className="kg-serif-heading mt-3 text-lg leading-relaxed text-kg-green-dark sm:mt-4 sm:text-2xl lg:text-3xl">
              “{aboutClosingQuote}”
            </blockquote>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href="/contact/?intent=stay" className="kg-btn-primary w-full justify-center sm:w-auto">
                Book a stay
              </Link>
              <Link href="/moments/" className="kg-btn-secondary w-full justify-center sm:w-auto">
                View moments
              </Link>
            </div>
          </Reveal>

          <div className="relative order-1 min-h-[12rem] sm:order-2 sm:min-h-[16rem] lg:min-h-full">
            <Image
              src={aboutClosingImage}
              alt="Poolside greenery at Kalawati Greens"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/25 via-transparent to-transparent lg:bg-gradient-to-l lg:from-white/20 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
