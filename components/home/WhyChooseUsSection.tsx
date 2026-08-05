import { whyChooseUsItems } from "@/lib/home-content";

const icons: Record<(typeof whyChooseUsItems)[number]["icon"], React.ReactNode> = {
  leaf: (
    <path
      d="M12 3C8 8 6 12 6 17c0 4 2 7 6 8 4-1 6-4 6-8 0-5-2-9-6-14z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  diamond: (
    <path
      d="M12 4l8 8-8 8-8-8 8-8z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  rings: (
    <>
      <circle cx="9" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="15" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  home: (
    <>
      <path
        d="M4 11l8-7 8 7v9H4v-9z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 8c2-2 4-1 4 2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  droplet: (
    <>
      <path
        d="M12 4c-4 6-6 10-6 14a6 6 0 1012 0c0-4-2-8-6-14z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M12 10v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
};

export default function WhyChooseUsSection() {
  return (
    <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <h2 className="kg-section-title text-center">Why Choose Us</h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {whyChooseUsItems.map((item) => (
            <li key={item.title} className="flex flex-col items-center text-center">
              <span className="mb-4 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-kg-green/50 text-kg-green">
                <svg className="h-8 w-8" viewBox="0 0 24 24" aria-hidden>
                  {icons[item.icon]}
                </svg>
              </span>
              <p className="max-w-[11rem] text-sm leading-relaxed text-kg-green">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
