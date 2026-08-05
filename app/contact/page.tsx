import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { seoForRoute } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return seoForRoute({
    pathname: "/contact",
    title: "Get in Touch | Kalawati Greens",
    description:
      "Get in touch with Kalawati Greens in Ambedkar Nagar — call, email, or send a message to plan your stay, wedding, or event.",
    imageUrl: "/images/cottage.png",
  });
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
