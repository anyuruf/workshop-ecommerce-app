import HeroCarousel from "@/components/HomePage/HeroCarousel";
import HorizontalScrollSection from "@/components/HomePage/HorizontalScrollSection";
import PopularGridSection from "@/components/HomePage/PopularGridSection";
import { HeroHeader } from "./Header/HeroHeader";

export default function HomePage() {
  return (
    <main className="grid relative">
      {/* Spacer for the hero section height 
          https://www.smashingmagazine.com/2024/09/sticky-headers-full-height-elements-tricky-combination/ */}
      <div className="h-dvh col-span-full row-span-2 row-start-1" />

      {/* Sticky Header */}
      <div className="sticky top-0 w-full row-start-1 col-start-1 z-35">
        <HeroHeader />
      </div>

      {/* Main content */}
      <section className="row-start-2 col-start-1">
        <HeroCarousel />
        <HorizontalScrollSection />
        <PopularGridSection />
      </section>
    </main>
  )
}
