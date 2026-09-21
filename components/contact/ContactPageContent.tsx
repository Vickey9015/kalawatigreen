import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactHighlights from "@/components/contact/ContactHighlights";
import ContactInfoPanel from "@/components/contact/ContactInfoPanel";
import ContactMap from "@/components/contact/ContactMap";

function FormFallback() {
  return (
    <div className="flex min-h-[20rem] items-center justify-center px-6 py-12 text-sm text-kg-muted">
      Loading enquiry form…
    </div>
  );
}

export default function ContactPageContent() {
  return (
    <>
      <ContactHero />

      <section className="bg-kg-surface-soft px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-kg-green/12 bg-white shadow-[0_24px_70px_-28px_rgba(1,49,31,0.22)] lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
              <ContactInfoPanel />
              <div className="border-t border-kg-green/10 bg-white lg:border-l lg:border-t-0">
                <Suspense fallback={<FormFallback />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactMap />
      <ContactHighlights />
    </>
  );
}
