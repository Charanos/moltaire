import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black/10 selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Footer />
    </main>
  );
}
