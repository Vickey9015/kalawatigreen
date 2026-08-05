import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { seoForRoute } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return seoForRoute({
    pathname: "/privacy",
    title: "Privacy Policy | Kalawati Greens",
    description: "Privacy policy for Kalawati Greens website.",
  });
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-kg-cream px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="kg-section-title">Privacy Policy</h1>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-kg-muted sm:text-base">
            <p>
              Kalawati Greens respects your privacy. Information submitted through our contact
              forms is used only to respond to your enquiries and plan your visit or event.
            </p>
            <p>
              We do not sell or share your personal information with third parties for marketing
              purposes. Data may be stored securely for customer service and booking coordination.
            </p>
            <p>
              For questions about this policy, contact us at{" "}
              <a href="mailto:Kalawatigreens@avconexpo.com" className="text-kg-green hover:underline">
                Kalawatigreens@avconexpo.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
