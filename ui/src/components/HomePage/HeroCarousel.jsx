import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HeroCarousel() {
  const images = [
    "https://cdn.pixabay.com/photo/2016/03/27/19/18/t-shirt-1281708_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/01/06/19/15/t-shirt-1955076_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/06/08/26/t-shirt-2593123_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/08/05/02/07/tshirt-875911_1280.jpg",
  ]

  return (
    <section className="relative w-full h-[600px] overflow-hidden rounded-2xl">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div
                className="w-full h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Search Bar Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-2 w-[90%] max-w-lg shadow-lg">
          <Input
            placeholder="Search for products..."
            className="flex-1 bg-transparent focus-visible:ring-0"
          />
          <Button>Search</Button>
        </div>
      </div>
    </section>
  )
}
