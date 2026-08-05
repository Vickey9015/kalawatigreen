import Link from "next/link";
import { socialLinks } from "@/lib/contact-content";
import { footerQuickLinks, footerSpacesLinks } from "@/lib/nav-links";
import { contactInfo } from "@/lib/site";
import Logo from "./Logo";

function SocialIcon({ id }: { id: (typeof socialLinks)[number]["id"] }) {
  const paths: Record<(typeof socialLinks)[number]["id"], React.ReactNode> = {
    facebook: (
      <path
        fill="currentColor"
        d="M14 8h2.5V5.5H14c-2.1 0-3.5 1.3-3.5 3.5V11H8v2.75h2.5V20h2.75v-6.25H16L16.5 11h-3V9c0-.8.2-1 1.2-1z"
      />
    ),
    instagram: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2.5" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2.5" strokeWidth="1.5" />
      </>
    ),
    pinterest: (
      <path
        fill="currentColor"
        d="M12 4c-3.9 0-7 3.1-7 7 0 2.9 1.7 5.4 4.2 6.5-.1-.8-.1-2 0-2.9.1-.6.7-3.2.7-3.2s-.2-.4-.2-1c0-.9.5-1.6 1.2-1.6.6 0 .9.4.9 1 0 .6-.4 1.5-.6 2.3-.2.7.4 1.3 1.1 1.3 1.3 0 2.3-1.4 2.3-3.4 0-1.8-1.3-3-3.1-3-2.1 0-3.4 1.6-3.4 3.2 0 .6.2 1.3.6 1.6.1.1.1.1 0 .3l-.2.8c0 .1-.1.2-.3.1-1.1-.5-1.8-2.1-1.8-3.4 0-2.8 2-5.4 5.8-5.4 3.1 0 5.4 2.2 5.4 5.2 0 3-.9 5.3-2.3 5.3-.7 0-1.3-.6-1.1-1.4.2-.9.7-1.9.7-2.6 0-.6-.3-1.1-1-1.1-.8 0-1.4.8-1.4 1.9 0 .7.2 1.2.2 1.2l-.9 3.6c-.3 1.1-.1 2.5 0 3.5C6.5 18.7 5 16 5 13c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7z"
      />
    ),
    youtube: (
      <path
        fill="currentColor"
        d="M10 9.5v5l4.5-2.5L10 9.5zm8.9-3.2c.3 1.1.3 3.4.3 3.4s0 2.3-.3 3.4c-.2.7-.7 1.2-1.4 1.4-1.1.3-5.5.3-5.5.3s-4.4 0-5.5-.3c-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.3-3.4-.3-3.4s0-2.3.3-3.4c.2-.7.7-1.2 1.4-1.4C7.6 5.5 12 5.5 12 5.5s4.4 0 5.5.3c.7.2 1.2.7 1.4 1.4z"
      />
    ),
  };

  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      {paths[id]}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="footer-leaf-pattern relative bg-kg-green-dark">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3 lg:border-r lg:border-kg-gold/25 lg:pr-10">
              <div className="max-w-[16rem]">
                <Logo variant="footer" />
                <p className="mt-5 text-sm leading-relaxed text-white/85">
                  A forest. A retreat.
                  <br />
                  A celebration.
                  <br />
                  Bringing nature to you.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-kg-gold-light hover:text-kg-gold-light"
                    >
                      <SocialIcon id={link.id} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="mb-5 text-base font-bold text-white">Quick Links</h3>
              <ul className="space-y-3 text-sm text-white/90">
                {footerQuickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-kg-gold-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/privacy" className="transition-colors hover:text-kg-gold-light">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="mb-5 text-base font-bold text-white">Our Spaces</h3>
              <ul className="space-y-3 text-sm text-white/90">
                {footerSpacesLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-kg-gold-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h3 className="mb-5 text-base font-bold text-white">Contact Info</h3>
              <address className="space-y-4 text-sm not-italic text-white/90">
                <p className="flex items-start gap-3">
                  <FooterIcon>
                    <path d="M9.69 18.93l.003.002.007.003.018.009a.4.4 0 00.162 0l.018-.009.007-.003.003-.002C10.11 18.82 17 14.52 17 8A7 7 0 103 8c0 6.52 6.89 10.82 6.69 10.93zM10 10.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z" />
                  </FooterIcon>
                  <span>{contactInfo.address}</span>
                </p>
                <p className="flex items-start gap-3">
                  <FooterIcon>
                    <path d="M2 3.5A1.5 1.5 0 013.5 2h2.1a1.5 1.5 0 011.43 1.05l.78 2.46a1.5 1.5 0 01-.38 1.53L6.2 8.26a11.03 11.03 0 005.54 5.54l1.22-1.23a1.5 1.5 0 011.53-.38l2.46.78A1.5 1.5 0 0118 14.4v2.1a1.5 1.5 0 01-1.5 1.5H15C7.82 18 2 12.18 2 5V3.5z" />
                  </FooterIcon>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {contactInfo.phone}
                  </a>
                </p>
                <p className="flex items-start gap-3">
                  <FooterIcon>
                    <path d="M2.94 6.34A2 2 0 014.89 5h10.22a2 2 0 011.95 1.34L10 10.76 2.94 6.34zM18 8.12l-7.47 4.67a1 1 0 01-1.06 0L2 8.12V14a2 2 0 002 2h12a2 2 0 002-2V8.12z" />
                  </FooterIcon>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                    {contactInfo.email}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#1a4d35] py-4">
        <p className="text-center text-sm text-white/85">
          © {new Date().getFullYear()} Kalawati Greens. All Rights Reserved.
        </p>
      </div>

      <FooterLeaves />
    </footer>
  );
}

function FooterIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-0.5 shrink-0 text-white">
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
        {children}
      </svg>
    </span>
  );
}

function FooterLeaves() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 right-0 z-10 h-36 w-44 sm:h-44 sm:w-52"
      aria-hidden
    >
      <svg viewBox="0 0 220 200" className="h-full w-full" fill="none">
        <path
          d="M200 190c-8-45 5-85 35-110 12-18 30-32 18-50-18 8-35 28-42 52-6-35 8-72 38-95-8 45-2 88 22 125 14 20 35 32 48 25-20-6-40-6-58 8-14 12-20 32-14 55z"
          fill="#2f9b5a"
        />
        <path
          d="M145 195c6-28 2-55-18-76-14-16-32-28-26-48 15 7 28 24 32 42 4-24 16-46 36-60-10 28-7 58 12 82 10 13 22 21 34 18-16-3-32-1-46 12-11 10-16 26-11 44z"
          fill="#3cb86c"
        />
        <path
          d="M95 198c0-20-10-38-26-52-10-10-22-18-18-32 12 5 22 18 24 32 3-16 12-32 28-42-8 22-5 46 10 64 8 10 18 15 28 12-12-2-24 2-34 14-8 9-11 22-7 38z"
          fill="#52cc7f"
        />
        <path d="M175 120 L195 40 L205 120 Z" fill="#45b86a" opacity="0.9" />
        <path d="M155 130 L170 55 L180 135 Z" fill="#3aa85e" opacity="0.85" />
        <path d="M135 140 L148 70 L158 145 Z" fill="#2f9b5a" opacity="0.8" />
      </svg>
    </div>
  );
}
