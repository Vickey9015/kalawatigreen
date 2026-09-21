import Reveal from "@/components/Reveal";
import { contactInfo } from "@/lib/site";

export default function VisitSection() {
  const mapsQuery = encodeURIComponent(contactInfo.mapQuery);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=13&output=embed`;

  return (
    <section className="bg-kg-cream px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-8 text-center sm:mb-12">
            <p className="kg-eyebrow">Find us</p>
            <h2 className="kg-display-title kg-home-section-title mt-4 text-kg-green-dark">Let’s Get You Here</h2>
          </div>
        </Reveal>
        <div className="grid overflow-hidden rounded-2xl border border-kg-green/15 bg-white shadow-lg sm:rounded-[2rem] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-h-[14rem] sm:min-h-[22rem]">
            <iframe
              title="Kalawati Greens location"
              src={embedUrl}
              className="h-full min-h-[14rem] w-full border-0 sm:min-h-[22rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="border-t border-kg-green/12 bg-white px-5 py-8 sm:px-10 sm:py-12 lg:border-l lg:border-t-0">
            <p className="text-xs uppercase tracking-[0.22em] text-kg-gold">Bookings & arrivals</p>
            <p className="mt-3 font-serif text-2xl leading-snug text-kg-green-dark sm:mt-4 sm:text-3xl">
              Cottages and venues can be reserved year-round.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-kg-muted sm:mt-8 sm:space-y-4">
              <li>{contactInfo.address}</li>
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-kg-green">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="break-all sm:break-normal">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-kg-green">{contactInfo.email}</a>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a href="/contact/?intent=stay" className="kg-btn-gold w-full justify-center sm:w-auto">
                Book a stay
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kg-btn-secondary w-full justify-center px-5 py-3 sm:w-auto"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
