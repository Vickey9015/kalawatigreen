import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { contactHighlights } from "@/lib/contact-content";

export default function ContactHighlights() {
  return (
    <section className="border-t border-kg-green/10 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="kg-eyebrow">While you are planning</p>
            <h2 className="kg-display-title mt-3 text-2xl text-kg-green-dark sm:text-3xl">Explore what awaits on property</h2>
            <p className="mt-3 text-sm leading-7 text-kg-muted">
              From forest cottages to banquet lawns — browse spaces before you visit.
            </p>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactHighlights.map((item, index) => (
            <li key={item.title}>
              <Reveal delayMs={index * 60}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-kg-green/12 bg-kg-surface-soft shadow-sm transition hover:border-kg-gold/40 hover:shadow-md"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/75 via-transparent to-transparent" />
                    <h3 className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="flex flex-1 items-start px-4 py-3 text-xs leading-relaxed text-kg-muted sm:text-sm">
                    {item.description}
                    <span className="ml-auto shrink-0 pl-2 text-kg-green opacity-0 transition group-hover:opacity-100" aria-hidden>
                      →
                    </span>
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
