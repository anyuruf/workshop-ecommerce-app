import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarousel() {
  const [carouselAPI, setCarouselAPI] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!carouselAPI) return;
    setSelectedIndex(carouselAPI.selectedScrollSnap());
  }, [carouselAPI]);

  const scrollTo = (index) => {
    if (!carouselAPI) return;
    carouselAPI.scrollTo(index);
  };

  useEffect(() => {
    if (!carouselAPI) return;
    onSelect();
    setScrollSnaps(carouselAPI.scrollSnapList());
    carouselAPI.on("select", onSelect);
  }, [carouselAPI, onSelect]);

  const images = [
    "/mocks/palm-tree.jpg",
    "/mocks/dough.jpg",
    "/mocks/pumpkin.jpg",
    "/mocks/tractor.jpg",
  ];

  return (
    <section className="max-w-7xl mx-auto h-[600px]">
      <Carousel
        plugins={[Autoplay({ delay: 2500 })]}
        opts={{ loop: true, align: "center" }}
        setApi={setCarouselAPI}
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className={`
                w-full h-[480px]
                bg-cover bg-center
                flex items-center justify-center
                text-white 
              `}
              style={{
                backgroundImage: `url(${img})`,
                backgroundBlendMode: "multiply",
                backgroundColor: "hsla(35, 65%, 52%, 0.35)", // translucent gold overlay, // goldenrod tone
              }}
            >
              <h1 className="scroll-m-20 text-center text-shadow-md text-6xl font-extrabold tracking-tight text-balance z-10">
                Go to Shopping Lounge
              </h1>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
