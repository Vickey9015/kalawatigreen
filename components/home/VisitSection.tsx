import { contactInfo } from "@/lib/site";

export default function VisitSection() {
  const mapsQuery = encodeURIComponent(contactInfo.mapQuery);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=13&output=embed`;

  return (
    <section className="bg-kg-cream px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="kg-eyebrow">Plan Your Visit</p>
          <h2 className="kg-display-title mt-3 text-4xl sm:text-5xl">Let’s Get You Here</h2>
        </div>
        <div className="grid overflow-hidden rounded-md lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-h-[22rem] bg-[#dce8dc]">
            <iframe
              title="Kalawati Greens location"
              src={embedUrl}
              className="h-full min-h-[22rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="bg-kg-green-dark px-6 py-10 text-white sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kg-gold-light">Contact</p>
            <p className="kg-serif-heading mt-3 text-2xl font-semibold sm:text-3xl">Visit Kalawati Greens</p>
            <ul className="mt-8 space-y-5 text-sm text-white/90">
              <li className="flex gap-3">
                <VisitIcon>
                  <path d="M12 3C8 8 6 12 6 16a6 6 0 0012 0c0-4-2-8-6-13z" />
                </VisitIcon>
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex gap-3">
                <VisitIcon>
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8z" />
                </VisitIcon>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-kg-gold-light">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <VisitIcon>
                  <path d="M4 6h16v12H4V6zm8 7L5.5 8h13L12 13z" />
                </VisitIcon>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-kg-gold-light">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="kg-btn-gold mt-8">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisitIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-kg-gold-light text-kg-gold-light">
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        {children}
      </svg>
    </span>
  );
}
