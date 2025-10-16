import HeroCarousel from "@/components/HomePage/HeroCarousel"
import HorizontalScrollSection from "@/components/HomePage/HorizontalScrollSection"
import PopularGridSection from "@/components/HomePage/PopularGridSection"

export default function HomePage() {
  return (
    <main className="space-y-16">
      <HeroCarousel />
      <HorizontalScrollSection />
      <PopularGridSection />
    </main>
  )
}
