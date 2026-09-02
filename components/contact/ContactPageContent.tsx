import { Suspense } from "react";
import ContactBanner from "@/components/contact/ContactBanner";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactHighlights from "@/components/contact/ContactHighlights";
import ContactInfoPanel from "@/components/contact/ContactInfoPanel";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPageContent() {
  return (
    <>
      <ContactHero />

      <section className="bg-[var(--kg-surface-soft)] px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8">
        <ContactBanner />

        <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-2xl border border-kg-green/15 bg-[var(--kg-surface-soft)] shadow-sm">
          <div className="grid lg:grid-cols-2">
            <ContactInfoPanel />
            <div className="border-t border-kg-green/15 lg:border-l lg:border-t-0">
              <Suspense fallback={<div className="min-h-[24rem] px-6 py-10 text-sm text-kg-muted">Loading enquiry form…</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
          <ContactMap />
        </div>
      </section>

      <ContactHighlights />
    </>
  );
}
