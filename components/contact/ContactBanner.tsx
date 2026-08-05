import Image from "next/image";
import { contactBannerImage } from "@/lib/contact-content";

export default function ContactBanner() {
  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl">
      <div className="relative min-h-[180px] sm:min-h-[220px]">
        <Image
          src={contactBannerImage}
          alt="Evening celebration at Kalawati Greens"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 72rem"
        />
        <div className="absolute inset-0 bg-kg-green-dark/55" aria-hidden />
        <div className="relative flex min-h-[180px] flex-col items-center justify-center px-6 py-10 text-center sm:min-h-[220px]">
          <p className="kg-serif-heading text-xl font-medium text-white sm:text-2xl lg:text-3xl">
            Bringing nature to you
          </p>
          <p className="mt-2 max-w-xl text-sm text-white/90 sm:text-base">
            A forest. A retreat. A celebration — nestled in the heart of Ambedkar Nagar.
          </p>
        </div>
      </div>
    </div>
  );
}
