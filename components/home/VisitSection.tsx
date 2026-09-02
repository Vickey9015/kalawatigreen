import Reveal from "@/components/Reveal";
import { contactInfo } from "@/lib/site";

export default function VisitSection() {
  const mapsQuery = encodeURIComponent(contactInfo.mapQuery);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=13&output=embed`;

  return (
    <section className="bg-kg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="kg-eyebrow">Find us</p>
            <h2 className="kg-display-title mt-4 text-4xl text-kg-green-dark sm:text-5xl">Let’s Get You Here</h2>
          </div>
        </Reveal>
        <div className="grid overflow-hidden rounded-[2rem] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-h-[22rem]">
            <iframe
              title="Kalawati Greens location"
              src={embedUrl}
              className="h-full min-h-[22rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="bg-kg-green-dark px-8 py-12 text-white sm:px-10">
            <p className="text-xs uppercase tracking-[0.22em] text-kg-gold-light">Bookings & arrivals</p>
            <p className="mt-4 font-serif text-3xl">Cottages and venues can be reserved year-round.</p>
            <ul className="mt-8 space-y-4 text-sm text-white/85">
              <li>{contactInfo.address}</li>
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>{contactInfo.phone}</a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact?intent=stay" className="kg-btn-gold">
                Book a stay
              </a>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="border border-white/40 px-5 py-3 text-xs uppercase tracking-[0.16em]">
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
