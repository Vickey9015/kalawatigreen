import Image from "next/image";
import Link from "next/link";
import { ctaImage } from "@/lib/home-content";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[360px] sm:min-h-[420px]">
        <Image
          src={ctaImage}
          alt="Dense forest canopy at Kalawati Greens"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-kg-green-dark/55" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[420px] sm:px-6 lg:px-8">
          <h2 className="kg-serif-heading text-3xl font-medium text-white sm:text-4xl lg:text-[2.75rem]">
            Experience nature like never before.
          </h2>
          <p className="mt-4 text-sm text-white/90 sm:text-base">
            Book your stay, event, or visit today.
          </p>
          <Link href="/contact" className="kg-btn-primary mt-8">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
