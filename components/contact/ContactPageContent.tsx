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

      <section className="bg-[#eef3ee] px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8">
        <ContactBanner />

        <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-2xl border border-kg-green/15 bg-[#eef3ee] shadow-sm">
          <div className="grid lg:grid-cols-2">
            <ContactInfoPanel />
            <div className="border-t border-kg-green/15 lg:border-l lg:border-t-0">
              <ContactForm />
            </div>
          </div>
          <ContactMap />
        </div>
      </section>

      <ContactHighlights />
    </>
  );
}
