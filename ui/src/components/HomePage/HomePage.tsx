import HeroCarousel from "@/components/HomePage/HeroCarousel";
import HorizontalScrollSection from "@/components/HomePage/HorizontalScrollSection";
import PopularGridSection from "@/components/HomePage/PopularGridSection";
import { HeroHeader } from "./Header/HeroHeader";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      {/* Sticky Header */}
        <HeroHeader />

      {/* Main content */}
      <section className="grid grid-cols gap-4 row-start-2 col-start-1">
        <HeroCarousel />
        <HorizontalScrollSection />
        <PopularGridSection />
        <Footer />
      </section>
    </main>
  );
}
