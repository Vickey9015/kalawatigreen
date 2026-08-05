import { socialLinks, visitInfo } from "@/lib/contact-content";
import { contactInfo } from "@/lib/site";

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-kg-green/30 text-kg-green">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        {children}
      </svg>
    </span>
  );
}

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
        <circle cx="15.2" cy="8.8" r="0.8" fill="currentColor" stroke="none" />
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

export default function ContactInfoPanel() {
  return (
    <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <h2 className="text-xl font-bold text-kg-green sm:text-2xl">Get In Touch</h2>

      <ul className="mt-8 space-y-6">
        <li className="flex gap-4">
          <ContactIcon>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"
            />
            <circle cx="12" cy="10" r="2.25" strokeWidth={1.75} />
          </ContactIcon>
          <p className="pt-1.5 text-sm leading-relaxed text-kg-green sm:text-base">
            {contactInfo.address}
          </p>
        </li>

        <li className="flex gap-4">
          <ContactIcon>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M6.5 4.8c.4-.9 1.5-1.2 2.3-.6l1.6 1.2c.7.5.8 1.5.3 2.2l-.7.9c.8 1.6 2.1 2.9 3.7 3.7l.9-.7c.7-.5 1.7-.4 2.2.3l1.2 1.6c.6.8.3 1.9-.6 2.3-1 .5-2.1.8-3.2.8-4.1 0-8-3.9-8-8 0-1.1.3-2.2.8-3.2z"
            />
          </ContactIcon>
          <div className="space-y-1 pt-1.5 text-sm text-kg-green sm:text-base">
            {contactInfo.phones.map((phone) => (
              <p key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-kg-green-light">
                  {phone}
                </a>
              </p>
            ))}
          </div>
        </li>

        <li className="flex gap-4">
          <ContactIcon>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M4 7.5A2.5 2.5 0 016.5 5h11A2.5 2.5 0 0120 7.5v9A2.5 2.5 0 0117.5 19h-11A2.5 2.5 0 014 16.5v-9z"
            />
            <path strokeLinecap="round" strokeWidth={1.75} d="M5 8l7 5 7-5" />
          </ContactIcon>
          <p className="pt-1.5 text-sm text-kg-green sm:text-base">
            <a href={`mailto:${contactInfo.email}`} className="hover:text-kg-green-light">
              {contactInfo.email}
            </a>
          </p>
        </li>
      </ul>

      <div className="mt-8 rounded-xl border border-kg-green/15 bg-white/80 px-4 py-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-kg-green">Visiting Hours</h3>
        <p className="mt-2 text-sm text-kg-green">{visitInfo.hours}</p>
        <p className="mt-1 text-xs text-kg-muted">{visitInfo.note}</p>
        <p className="mt-3 text-xs font-medium text-kg-green-light">{visitInfo.response}</p>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-kg-green">Follow Us</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-kg-green/35 text-kg-green transition-colors hover:border-kg-green hover:bg-kg-green hover:text-white"
            >
              <SocialIcon id={link.id} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
