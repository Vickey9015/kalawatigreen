import Image from "next/image";
import Link from "next/link";
import { homeMoments } from "@/lib/home-content";

export default function MomentsPreviewSection() {
  return (
    <section className="bg-kg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="kg-display-title text-4xl uppercase sm:text-5xl">Moments to Treasure</h2>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {homeMoments.map((moment) => (
            <li key={moment.label} className="group relative overflow-hidden rounded-md">
              <Link href="/moments" className="block">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={moment.image}
                    alt={moment.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/80 via-transparent to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 px-3 py-3 text-sm font-medium text-white">
                    {moment.label}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
