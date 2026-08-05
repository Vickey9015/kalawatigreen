import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** header/footer: circular badge on dark UI. mark: transparent artwork. */
  variant?: "header" | "footer" | "withBg" | "noBg" | "mark";
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: { width: 88, height: 88, className: "h-11 w-11" },
  md: { width: 128, height: 128, className: "h-14 w-14 sm:h-16 sm:w-16" },
  lg: { width: 176, height: 176, className: "h-[5.5rem] w-[5.5rem]" },
};

export default function Logo({
  className = "",
  variant = "header",
  size,
}: LogoProps) {
  const resolvedSize = size ?? (variant === "footer" ? "lg" : variant === "header" ? "md" : "md");
  const dimensions = sizeMap[resolvedSize];
  const src = variant === "mark" || variant === "noBg" ? "/images/kg-logo-mark.png" : "/images/kg-logo.png";

  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`} aria-label="Kalawati Greens home">
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
