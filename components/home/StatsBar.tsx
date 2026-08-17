import { homeStats } from "@/lib/home-content";

const icons: Record<(typeof homeStats)[number]["icon"], React.ReactNode> = {
  acres: (
    <>
      <path d="M4 19V10l8-6 8 6v9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M9 19v-6h6v6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M7 11.5c2.2-2 4.2-2 5-2s2.8 0 5 2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  plants: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 19V8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 11c-3-.6-5-2.4-6-5 3 .8 5.2 2.6 6 5zM12 11c3-.6 5-2.4 6-5-3 .8-5.2 2.6-6 5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  varieties: (
    <path
      d="M12 20c0-6 4-9 8-10-1 5-4 8-8 10-4-2-7-5-8-10 4 1 8 4 8 10z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  events: (
    <>
      <path d="M7 14c.4-3 2.2-5 5-5s4.6 2 5 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M6 16.5c1.2 1.8 3.4 3 6 3s4.8-1.2 6-3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M9 9.5c-.4-1.8.4-3.4 2-4M15 9.5c.4-1.8-.4-3.4-2-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
};

export default function StatsBar() {
  return (
    <section className="bg-kg-green-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {homeStats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex items-center gap-4 px-6 py-8 text-white sm:px-8 ${
              index > 0 ? "lg:border-l lg:border-white/20" : ""
            } ${index % 2 === 1 ? "border-l border-white/15 lg:border-l-white/20" : ""}`}
          >
            <span className="shrink-0 text-kg-gold-light">
              <svg className="h-10 w-10" viewBox="0 0 24 24" aria-hidden>
                {icons[stat.icon]}
              </svg>
            </span>
            <div>
              <p className="text-2xl font-semibold tracking-wide sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs tracking-wide text-white/80 sm:text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
