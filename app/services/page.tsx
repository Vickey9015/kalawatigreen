import type { Metadata } from "next";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { seoForRoute } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return seoForRoute({
    pathname: "/services",
    title: "Spaces & Services | Kalawati Greens",
    description:
      "Explore luxury cottages, Palash Restaurant, Baa-Ya-Bia Bar, swimming pool, banquet halls, lawns, conference spaces, and more at Kalawati Greens.",
    imageUrl: "/images/cottage.png",
  });
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPageContent />
      </main>
      <Footer />
    </>
  );
}
