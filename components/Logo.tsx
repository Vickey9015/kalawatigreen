import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** header: leaf icon + wordmark. footer: stacked brand. withBg / noBg: image logos. */
  variant?: "header" | "footer" | "withBg" | "noBg";
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: { width: 120, height: 48, className: "h-10 w-auto" },
  md: { width: 150, height: 60, className: "h-12 w-auto" },
  lg: { width: 180, height: 72, className: "h-16 w-auto" },
};

function HeaderLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center gap-3 ${className}`}>
      <svg
        className="h-11 w-11 shrink-0 text-kg-gold-light"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
      >
        <path
          d="M24 6C17 15 13 21 13 29c0 6.5 3.5 11.5 11 13.5C31.5 40.5 35 35.5 35 29c0-8-4-14-11-23z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M31 11c-4.5 6.5-6.5 12-6.5 18.5 0 4.5 2.5 8 6 9.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 13c4.5 5.5 6.5 11 6.5 17.5 0 4-2 7.5-5 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-tight text-white">
        <span className="block text-[0.95rem] font-semibold tracking-[0.24em]">KALAWATI</span>
        <span className="block text-[0.95rem] font-semibold tracking-[0.24em]">GREENS</span>
      </span>
    </Link>
  );
}

function FooterLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex flex-col items-start ${className}`}>
      <svg
        className="mb-4 h-12 w-12 shrink-0 text-kg-gold-light"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
      >
        <path
          d="M24 6C17 15 13 21 13 29c0 6.5 3.5 11.5 11 13.5C31.5 40.5 35 35.5 35 29c0-8-4-14-11-23z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M31 11c-4.5 6.5-6.5 12-6.5 18.5 0 4.5 2.5 8 6 9.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 13c4.5 5.5 6.5 11 6.5 17.5 0 4-2 7.5-5 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="kg-serif-heading leading-tight text-white">
        <span className="block text-lg font-medium tracking-[0.2em]">KALAWATI</span>
        <span className="block text-lg font-medium tracking-[0.2em]">GREENS</span>
      </span>
    </Link>
  );
}

export default function Logo({
  className = "",
  variant = "noBg",
  size = "md",
}: LogoProps) {
  if (variant === "header") {
    return <HeaderLogo className={className} />;
  }

  if (variant === "footer") {
    return <FooterLogo className={className} />;
  }

  const src = variant === "withBg" ? "/images/kg-logo.png" : "/images/kg-logo-nobg.png";
  const dimensions = sizeMap[size];

  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src={src}
        alt="Kalawati Greens"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className={`${dimensions.className} object-contain`}
      />
    </Link>
  );
}
