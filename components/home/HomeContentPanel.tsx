import IntroSection from "@/components/home/IntroSection";
import SignatureHighlightsSection from "@/components/home/SignatureHighlightsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export default function HomeContentPanel() {
  return (
    <section className="bg-kg-cream px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg border-2 border-[#7a9e88] bg-kg-cream shadow-sm">
        <div className="kg-smoky-greenery pointer-events-none absolute inset-x-0 bottom-0 h-56 sm:h-64" aria-hidden />

        <div className="relative">
          <IntroSection />
          <hr className="kg-section-divider" />
          <WhyChooseUsSection />
          <hr className="kg-section-divider" />
          <SignatureHighlightsSection />
        </div>
      </div>
    </section>
  );
}
