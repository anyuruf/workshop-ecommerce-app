import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { slides } from "@/constants/carouselProducts"

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



  return (
    <section className="max-w-7xl mx-auto w-full">
      <Carousel
        plugins={[Autoplay({ delay: 3500 })]}
        opts={{ loop: true, align: "center" }}
        setApi={setCarouselAPI}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
            >
                {/********* Image Overlay *************/}
              <div
                className="relative w-full h-[480px] overflow-hidden bg-muted bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.imgUrl})`,
                }}>
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center text-chart-2 justify-center p-8 text-center">
                  <h2 className="mb-2 font-bold text-shadow-md  tracking-tight text-7xl">{slide.title}</h2>
                  <p className="mb-6 max-w-md text-sm text-white opacity-90">
                    {slide.description}
                  </p>
                  <Button variant="secondary">{slide.cta}</Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}
