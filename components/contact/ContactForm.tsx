"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { eventTypes } from "@/lib/contact-content";
import { contactInfo } from "@/lib/site";

const inputClass =
  "w-full rounded-lg border border-kg-green/20 bg-white px-4 py-3 text-sm text-kg-text outline-none transition-colors placeholder:text-kg-muted/70 focus:border-kg-green focus:ring-2 focus:ring-kg-green/15";

export default function ContactForm() {
  const params = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const intent = params.get("intent") ?? "";
  const checkin = params.get("checkin") ?? "";
  const checkout = params.get("checkout") ?? "";
  const guests = params.get("guests") ?? "";

  const defaultEventType = useMemo(() => {
    if (intent === "event") return "Wedding";
    if (intent === "stay") return "Leisure Stay";
    return "";
  }, [intent]);

  const defaultMessage = useMemo(() => {
    if (checkin || checkout || guests) {
      return [
        "I would like to check availability for a stay.",
        checkin ? `Check-in: ${checkin}` : null,
        checkout ? `Check-out: ${checkout}` : null,
        guests ? `Guests: ${guests}` : null,
        "",
      ]
        .filter((line) => line !== null)
        .join("\n");
    }
    if (intent === "event") {
      return "I would like to plan an event at Kalawati Greens.\n";
    }
    if (intent === "stay") {
      return "I would like to book a cottage stay at Kalawati Greens.\n";
    }
    return "";
  }, [intent, checkin, checkout, guests]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const eventType = String(data.get("eventType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Kalawati Greens enquiry — ${eventType || "General"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nEvent type: ${eventType}\n\n${message}`,
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <h2 className="text-xl font-bold text-kg-green sm:text-2xl">Send Us a Message</h2>
      {(intent === "stay" || checkin) && (
        <p className="mt-3 text-sm text-kg-muted">Your stay dates from the homepage are filled in below.</p>
      )}
      {intent === "event" && !checkin && (
        <p className="mt-3 text-sm text-kg-muted">Tell us about the celebration or gathering you would like to book.</p>
      )}

      {submitted ? (
        <p className="mt-8 rounded-lg border border-kg-green/20 bg-white px-5 py-6 text-sm leading-relaxed text-kg-green sm:text-base">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
      ) : (
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className={inputClass}
            autoComplete="name"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            className={inputClass}
            autoComplete="tel"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className={inputClass}
            autoComplete="email"
          />
          <div className="relative">
            <select
              name="eventType"
              required
              defaultValue={defaultEventType}
              className={`${inputClass} appearance-none pr-10`}
            >
              <option value="" disabled>
                Event Type
              </option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-kg-green">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <textarea
            name="message"
            required
            rows={5}
            defaultValue={defaultMessage}
            placeholder="Your Message"
            className={`${inputClass} resize-y min-h-[120px]`}
          />
          <button type="submit" className="kg-btn-primary w-full py-4 sm:w-auto sm:min-w-[12rem]">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
