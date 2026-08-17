import Image from "next/image";
import Link from "next/link";
import { welcomeContent, welcomeFeatures } from "@/lib/home-content";

const icons: Record<(typeof welcomeFeatures)[number]["icon"], React.ReactNode> = {
  leaf: <path d="M12 3C8 8 6 12 6 17c0 4 2 7 6 8 4-1 6-4 6-8 0-5-2-9-6-14z" stroke="currentColor" strokeWidth="1.5" fill="none" />,
  tree: (
    <>
      <path d="M12 21V11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 4c-5 6-7 10-4 13h8c3-3 1-7-4-13z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  diamond: <path d="M12 4l8 8-8 8-8-8 8-8z" stroke="currentColor" strokeWidth="1.5" fill="none" />,
  spark: (
    <path
      d="M12 3l1.2 6.3L19 10l-5.8 2.2L12 19l-1.2-6.8L5 10l5.8-.7L12 3z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
};

export default function WelcomeSection() {
  return (
    <section className="bg-kg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="kg-eyebrow">{welcomeContent.eyebrow}</p>
          <h2 className="kg-display-title mt-3 text-4xl sm:text-5xl">{welcomeContent.title}</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-kg-muted sm:text-base">
            {welcomeContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {welcomeFeatures.map((feature) => (
              <li key={feature.title} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-kg-gold text-kg-gold">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                    {icons[feature.icon]}
                  </svg>
                </span>
                <span className="text-sm font-semibold text-kg-green-dark">{feature.title}</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="kg-btn-primary mt-8">
            Read Our Story
          </Link>
        </div>

        <Link href="/video" className="group relative block min-h-[22rem] overflow-hidden rounded-md sm:min-h-[28rem]">
          <Image
            src={welcomeContent.videoImage}
            alt={welcomeContent.videoCaption}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-kg-green-dark/35" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <span className="kg-play-btn h-16 w-16 border-white">
              <svg className="ml-0.5 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9 7.5v9l8-4.5-8-4.5z" />
              </svg>
            </span>
            <p className="mt-4 text-sm font-semibold tracking-wide">{welcomeContent.videoCaption}</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
