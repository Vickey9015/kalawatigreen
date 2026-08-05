import Image from "next/image";
import { contactInfo } from "@/lib/site";

export default function ContactMap() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.mapQuery)}`;

  return (
    <div className="relative mt-0 overflow-hidden rounded-b-2xl bg-[#dce8dc]">
      <svg
        className="absolute -top-px left-0 z-10 w-full text-[#eef3ee]"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,32 C200,8 400,48 600,28 C800,8 1000,40 1200,24 L1200,48 L0,48 Z"
        />
      </svg>

      <div className="relative min-h-[260px] sm:min-h-[320px]">
        <Image
          src="/images/lawn-upawan.png"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          aria-hidden
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-50"
          viewBox="0 0 800 300"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <rect width="800" height="300" fill="#d4e4d4" fillOpacity="0.6" />
          <path
            d="M0 80h800M0 140h800M0 200h800M0 260h800M120 0v300M280 0v300M440 0v300M600 0v300M760 0v300"
            stroke="#b8cfb8"
            strokeWidth="2"
          />
        </svg>

        <div className="absolute inset-x-0 bottom-0 z-10 bg-kg-green-dark/85 px-4 py-4 text-center sm:py-5">
          <p className="text-sm font-semibold text-white sm:text-base">{contactInfo.address}</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-xs text-white/85 underline-offset-2 hover:text-white hover:underline sm:text-sm"
          >
            Get directions on Google Maps
          </a>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 top-[42%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          aria-label="Open Kalawati Greens on Google Maps"
        >
          <svg className="h-14 w-14 text-kg-green drop-shadow-lg sm:h-16 sm:w-16" viewBox="0 0 48 48" aria-hidden>
            <path
              fill="currentColor"
              d="M24 4C16.8 4 11 9.8 11 17c0 9.8 11.4 24.5 12 25.3.4.5 1 .5 1.4 0 .6-.8 12-15.5 12-25.3C36.5 9.8 31.2 4 24 4zm0 9.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
