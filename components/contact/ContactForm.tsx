"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { eventTypes } from "@/lib/contact-content";
import { contactInfo } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-kg-green/15 bg-kg-surface-soft px-4 py-3 text-sm text-kg-text outline-none transition placeholder:text-kg-muted/70 focus:border-kg-green focus:bg-white focus:ring-2 focus:ring-kg-green/12";

const labelClass = "mb-1.5 block text-[0.65rem] font-bold uppercase tracking-[0.12em] text-kg-muted";

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
    if (intent === "visit") return "Other";
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
    if (intent === "visit") {
      return "I would like to schedule a site visit or venue walkthrough at Kalawati Greens.\n";
    }
    if (intent === "event") {
      return "I would like to plan an event at Kalawati Greens.\n";
    }
    if (intent === "stay") {
      return "I would like to book a cottage stay at Kalawati Greens.\n";
    }
    return "";
  }, [intent, checkin, checkout, guests]);

  const intentHint = useMemo(() => {
    if (intent === "stay" || checkin) {
      return "Your stay details from the homepage are included below — adjust anything you need.";
    }
    if (intent === "event") return "Share dates, guest count, and the kind of celebration you have in mind.";
    if (intent === "visit") return "Tell us when you would like to visit and what you would like to see.";
    return "Send a message and we will reply within one business day.";
  }, [intent, checkin]);

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
    <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <p className="kg-eyebrow">Enquiry form</p>
      <h2 className="kg-display-title mt-3 text-2xl text-kg-green-dark sm:text-[1.65rem]">Send us a message</h2>
      <p className="mt-3 text-sm leading-6 text-kg-muted">{intentHint}</p>

      {submitted ? (
        <div className="mt-8 rounded-2xl border border-kg-green/15 bg-kg-surface-soft px-6 py-8">
          <p className="font-semibold text-kg-green-dark">Thank you for reaching out.</p>
          <p className="mt-2 text-sm leading-relaxed text-kg-muted">
            Your email app should have opened with your message — send it when you are ready and our team will get back
            to you shortly.
          </p>
        </div>
      ) : (
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className={inputClass}
                autoComplete="name"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="contact-phone">Phone</label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                required
                placeholder="Phone number"
                className={inputClass}
                autoComplete="tel"
              />
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              placeholder="Email address"
              className={inputClass}
              autoComplete="email"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="contact-event-type">Enquiry type</label>
            <div className="relative">
              <select
                id="contact-event-type"
                name="eventType"
                required
                defaultValue={defaultEventType}
                className={`${inputClass} appearance-none pr-10`}
              >
                <option value="" disabled>Select a category</option>
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
          </div>

          <div>
            <label className={labelClass} htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              defaultValue={defaultMessage}
              placeholder="Tell us about your plans"
              className={`${inputClass} min-h-[8.5rem] resize-y`}
            />
          </div>

          <button type="submit" className="kg-btn-primary w-full py-4 sm:w-auto sm:min-w-[13rem]">
            Send enquiry
          </button>
        </form>
      )}
    </div>
  );
}
