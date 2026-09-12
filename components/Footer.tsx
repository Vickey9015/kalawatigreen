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
    <footer className="w-full border-t border-kg-green/12 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="text-center sm:text-left lg:col-span-3 lg:border-r lg:border-kg-green/15 lg:pr-10">
              <div className="mx-auto max-w-[16rem] sm:mx-0">
                <Logo variant="footer" className="justify-center sm:justify-start" />
                <p className="mt-4 text-sm leading-relaxed text-kg-muted sm:mt-5">
                  A forest. A retreat.
                  <br />
                  A celebration.
                  <br />
                  Bringing nature to you.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-6 sm:justify-start">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-kg-green/25 text-kg-green transition-colors hover:border-kg-gold hover:bg-kg-gold/10 hover:text-kg-gold"
                    >
                      <SocialIcon id={link.id} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left lg:col-span-2">
              <h3 className="mb-4 text-base font-bold text-kg-green-dark sm:mb-5">Quick Links</h3>
              <ul className="space-y-2.5 text-sm text-kg-muted sm:space-y-3">
                {footerQuickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-kg-green">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/privacy" className="transition-colors hover:text-kg-green">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left lg:col-span-3">
              <h3 className="mb-4 text-base font-bold text-kg-green-dark sm:mb-5">Our Spaces</h3>
              <ul className="space-y-2.5 text-sm text-kg-muted sm:space-y-3">
                {footerSpacesLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-kg-green">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left lg:col-span-4">
              <h3 className="mb-4 text-base font-bold text-kg-green-dark sm:mb-5">Newsletter</h3>
              <p className="text-sm leading-relaxed text-kg-muted">
                Get seasonal updates, events, and forest-retreat stories.
              </p>
              <form
                action={`mailto:${contactInfo.email}`}
                method="post"
                encType="text/plain"
                className="mt-4 flex flex-col gap-2 sm:flex-row"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-sm border border-kg-green/20 bg-white px-3 py-2.5 text-sm text-kg-text placeholder:text-kg-muted/70"
                />
                <button type="submit" className="kg-btn-gold px-4 py-2.5">
                  Join
                </button>
              </form>
              <address className="mt-6 space-y-3 break-words text-sm not-italic text-kg-muted">
                <p>{contactInfo.address}</p>
                <p>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-kg-green">
                    {contactInfo.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-kg-green">
                    {contactInfo.email}
                  </a>
                </p>
              </address>
            </div>
          </div>
      </div>

      <div className="border-t border-kg-green/12 bg-kg-surface-soft px-4 py-4">
        <p className="text-center text-xs leading-relaxed text-kg-muted sm:text-sm">
          © {new Date().getFullYear()} Kalawati Greens. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
