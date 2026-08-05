import Image from "next/image";
import { aboutClosingImage, aboutClosingQuote } from "@/lib/about-content";

export default function AboutClosingBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]">
        <Image
          src={aboutClosingImage}
          alt="Rolling green hills and forest landscape"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-kg-green-dark/90 px-4 py-8 sm:px-6 sm:py-10">
          <p className="kg-serif-heading mx-auto max-w-4xl text-center text-lg font-medium leading-relaxed text-white sm:text-xl lg:text-2xl">
            {aboutClosingQuote}
          </p>
        </div>
      </div>
    </section>
  );
}
