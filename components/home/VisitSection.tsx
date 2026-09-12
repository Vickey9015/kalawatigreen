import Reveal from "@/components/Reveal";
import { contactInfo } from "@/lib/site";

export default function VisitSection() {
  const mapsQuery = encodeURIComponent(contactInfo.mapQuery);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=13&output=embed`;

  return (
    <section className="bg-kg-cream px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="kg-eyebrow">Find us</p>
            <h2 className="kg-display-title mt-4 text-4xl text-kg-green-dark sm:text-5xl">Let’s Get You Here</h2>
          </div>
        </Reveal>
        <div className="grid overflow-hidden rounded-[2rem] border border-kg-green/15 bg-white shadow-lg lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-h-[22rem]">
            <iframe
              title="Kalawati Greens location"
              src={embedUrl}
              className="h-full min-h-[22rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="border-l border-kg-green/12 bg-white px-8 py-12 sm:px-10">
            <p className="text-xs uppercase tracking-[0.22em] text-kg-gold">Bookings & arrivals</p>
            <p className="mt-4 font-serif text-3xl text-kg-green-dark">Cottages and venues can be reserved year-round.</p>
            <ul className="mt-8 space-y-4 text-sm text-kg-muted">
              <li>{contactInfo.address}</li>
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-kg-green">{contactInfo.phone}</a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-kg-green">{contactInfo.email}</a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact?intent=stay" className="kg-btn-gold">
                Book a stay
              </a>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="kg-btn-secondary px-5 py-3">
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
