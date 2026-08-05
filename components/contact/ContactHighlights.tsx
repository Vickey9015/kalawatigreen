import Image from "next/image";
import { contactHighlights } from "@/lib/contact-content";

export default function ContactHighlights() {
  return (
    <section className="bg-kg-cream px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="kg-section-title text-center">Plan Your Visit</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-kg-muted sm:text-base">
          From intimate getaways to grand celebrations — discover what awaits you at our
          forest-inspired retreat.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactHighlights.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-kg-green/15 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/50 to-transparent opacity-80"
                  aria-hidden
                />
                <h3 className="absolute bottom-3 left-3 right-3 text-sm font-bold text-white sm:text-base">
                  {item.title}
                </h3>
              </div>
              <p className="px-4 py-3 text-xs leading-relaxed text-kg-muted sm:text-sm">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
