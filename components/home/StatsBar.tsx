import Image from "next/image";
import Reveal from "@/components/Reveal";
import { homeStats } from "@/lib/home-content";

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-kg-green-dark py-16 sm:py-20">
      <Image
        src="/images/lawn-upawan.png"
        alt=""
        fill
        className="object-cover opacity-35 mix-blend-luminosity"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-kg-green-dark/75" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {homeStats.map((stat, index) => (
          <Reveal key={stat.label} delayMs={index * 90}>
            <div className="rounded-2xl border border-white/45 bg-kg-green/55 px-4 py-7 text-center text-white shadow-xl backdrop-blur-md sm:px-5">
              <p className="font-serif text-3xl text-kg-gold-light sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[0.65rem] leading-snug tracking-wide text-white sm:text-xs">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
