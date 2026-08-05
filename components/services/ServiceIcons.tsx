import type { ServiceIconName } from "@/lib/services-content";

const icons: Record<ServiceIconName, React.ReactNode> = {
  cottage: (
    <>
      <path
        d="M4 11l8-7 8 7v9H4v-9z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  restaurant: (
    <>
      <path d="M6 4v8M8 4v8M7 12v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M16 4c0 4-2 5-2 8v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M14 4c0 4 2 5 2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  bar: (
    <>
      <path
        d="M8 4h8l-6 10v6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path d="M7 20h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  pool: (
    <>
      <path
        d="M3 10c3 2 6 2 9 0s6-2 9 0M3 14c3 2 6 2 9 0s6-2 9 0M3 18c3 2 6 2 9 0s6-2 9 0"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
  hall: (
    <>
      <path
        d="M5 20V9l7-5 7 5v11"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 4v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  lawn: (
    <>
      <path
        d="M8 20V11c0-3 2-5 4-7 2 2 4 4 4 7v9"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M16 20V13c0-2 1.5-4 3-5 1.5 1 3 3 3 5v7"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    </>
  ),
  garden: (
    <>
      <path
        d="M12 20V10M12 10c-3-2-6-1-7 2 3-1 5 0 7-2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path d="M5 20h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  conference: (
    <>
      <rect x="4" y="6" width="16" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 17v3M16 17v3M6 20h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="11" r="1.5" fill="currentColor" />
      <circle cx="15" cy="11" r="1.5" fill="currentColor" />
    </>
  ),
  parking: (
    <>
      <path
        d="M5 17h14l-1.5-9H6.5L5 17z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="17" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="17" r="1.5" fill="currentColor" />
      <path d="M9 8h4l1 4H8l1-4z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      {icons[name]}
    </svg>
  );
}
