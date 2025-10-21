import HeroCarousel from "@/components/HomePage/HeroCarousel"
import HorizontalScrollSection from "@/components/HomePage/HorizontalScrollSection"
import PopularGridSection from "@/components/HomePage/PopularGridSection"
import { HeroHeader } from "./Header/HeroHeader"

export default function HomePage() {
  return (
    <main>
      <HeroHeader />
      <HeroCarousel />
      <HorizontalScrollSection />
      <PopularGridSection />
    </main>
  )
}
