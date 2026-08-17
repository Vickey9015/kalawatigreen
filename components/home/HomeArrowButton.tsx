export default function HomeArrowButton({
  direction,
  onClick,
  className = "",
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-current transition-colors hover:bg-white/10 ${className}`}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        {direction === "prev" ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}
