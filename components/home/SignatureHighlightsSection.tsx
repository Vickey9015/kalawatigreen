import Image from "next/image";
import { signatureHighlights } from "@/lib/home-content";

export default function SignatureHighlightsSection() {
  return (
    <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="kg-section-title text-center">Signature Highlights</h2>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {signatureHighlights.map((item) => (
            <li
              key={item.title}
              className="group overflow-hidden rounded-xl border border-kg-green/20 bg-kg-cream"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="border-t border-kg-green/15 bg-kg-cream px-3 py-4 text-center">
                <h3 className="text-sm font-bold text-kg-green">{item.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
