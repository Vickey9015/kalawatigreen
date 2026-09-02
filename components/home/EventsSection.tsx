import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { upcomingEvents } from "@/lib/home-content";

export default function EventsSection() {
  return (
    <section className="bg-kg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="kg-eyebrow">The calendar</p>
            <h2 className="kg-display-title mt-4 text-4xl uppercase text-kg-green-dark sm:text-5xl">Upcoming Events</h2>
            <Link href="/contact" className="mt-3 inline-flex text-xs uppercase tracking-[0.16em] text-kg-gold">
              View all events
            </Link>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map((event, index) => (
            <li key={event.title}>
              <Reveal delayMs={index * 70}>
                <article className="overflow-hidden rounded-[1.5rem] bg-white/70 shadow-sm backdrop-blur-md">
                  <div className="relative aspect-[4/5]">
                    <Image src={event.image} alt={event.title} fill className="object-cover" sizes="25vw" />
                    <span className="absolute left-4 top-4 kg-glass-dark rounded-xl px-3 py-2 text-center text-white">
                      <span className="block text-lg font-semibold leading-none">{event.date}</span>
                      <span className="text-[0.65rem] tracking-widest">{event.month}</span>
                    </span>
                  </div>
                  <div className="px-5 py-5">
                    <h3 className="font-serif text-xl text-kg-green-dark">{event.title}</h3>
                    <p className="mt-2 text-sm text-kg-muted">{event.description}</p>
                    <Link href="/contact?intent=event" className="mt-4 inline-flex text-xs uppercase tracking-[0.16em] text-kg-gold">
                      Reserve a place
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
