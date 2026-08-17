import Image from "next/image";
import Link from "next/link";
import { upcomingEvents } from "@/lib/home-content";

export default function EventsSection() {
  return (
    <section className="bg-kg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="kg-display-title text-4xl uppercase sm:text-5xl">Upcoming Events</h2>
          <Link href="/contact" className="mt-3 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-kg-gold">
            View All Events →
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map((event) => (
            <li key={event.title} className="overflow-hidden rounded-md bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={event.image} alt={event.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                <span className="absolute left-3 top-3 bg-kg-green-dark px-2 py-1 text-center text-white">
                  <span className="block text-sm font-bold leading-none">{event.date}</span>
                  <span className="text-[0.65rem] tracking-wider">{event.month}</span>
                </span>
              </div>
              <div className="px-4 py-5">
                <h3 className="text-base font-semibold text-kg-green-dark">{event.title}</h3>
                <p className="mt-2 text-sm text-kg-muted">{event.description}</p>
                <Link href="/contact" className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-kg-gold">
                  View Details →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
