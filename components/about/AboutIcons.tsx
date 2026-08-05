type IconName =
  | "story"
  | "mission"
  | "vision"
  | "nature"
  | "hospitality"
  | "growth";

const storyMissionVisionIcons: Record<
  "story" | "mission" | "vision",
  React.ReactNode
> = {
  story: (
    <>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  mission: (
    <>
      <path
        d="M4 11l8-7 8 7v9H4v-9z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 8c-2-3-5-3-5 0 0 2 2 5 2s5-2 5-2c0-3-3-3-5 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </>
  ),
  vision: (
    <>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </>
  ),
};

const valueIcons: Record<"nature" | "hospitality" | "growth", React.ReactNode> = {
  nature: (
    <path
      d="M12 3C8 8 6 12 6 17c0 4 2 7 6 8 4-1 6-4 6-8 0-5-2-9-6-14z"
      fill="#1a5c3e"
    />
  ),
  hospitality: (
    <>
      <path
        d="M8 14c0-2 1.5-4 4-4s4 2 4 4"
        stroke="#1a5c3e"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M6 16c1.5-2 3.5-3 6-3s4.5 1 6 3"
        stroke="#1a5c3e"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M12 8c-1.5-2-3-2-4 0-1 2 0 4 2 2-2 3-2 4-2 1-2 2.5-2 4 0"
        stroke="#1a5c3e"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    </>
  ),
  growth: (
    <>
      <path
        d="M12 4v16M12 4c-3 2-5 4-5 7a5 5 0 0010 0c0-3-2-5-5-7z"
        stroke="#1a5c3e"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M7 10c1.5-1 3-1 5 0M17 10c-1.5-1-3-1-5 0"
        stroke="#1a5c3e"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
};

export function AboutPillarIcon({
  name,
  className = "h-10 w-10",
}: {
  name: "story" | "mission" | "vision";
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      {storyMissionVisionIcons[name]}
    </svg>
  );
}

export function AboutValueIcon({
  name,
  className = "h-12 w-12",
}: {
  name: "nature" | "hospitality" | "growth";
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      {valueIcons[name]}
    </svg>
  );
}

export type { IconName };
