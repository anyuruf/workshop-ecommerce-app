import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { slides } from "@/constants/carouselProducts"
import { GradientText } from '@/components/shadcn-io/GradientText';
import ButtonGroup from "@/components/shadcn-io/ButtonGroup";

export default function HeroCarousel() {
  const [carouselAPI, setCarouselAPI] = useState(null);

  // Check state
  const canScrollNext = carouselAPI?.canScrollNext();
  const currentPrev = carouselAPI?.canScrollPrev();
  const isPlaying = carouselAPI?.onPlaying();


  const scrollPrev = () => {
    if (!carouselAPI) return;
    carouselAPI.scrollPrev();
  };

  const play = () => {
    if (!carouselAPI) return;
    carouselAPI.play();
  };

  const pause = () => {
    if (!carouselAPI) return;
    carouselAPI.pause();
  };

  const scrollNext = () => {
    if (!carouselAPI) return;
    carouselAPI.scrollNext();
  };

  useEffect(() => {
    onSelect();
    setScrollSnaps(carouselAPI.scrollSnapList());
    carouselAPI.on("select", onSelect);
  }, [carouselAPI, onSelect]);



  return (
    <section className="max-w-7xl mx-auto w-full">
      <Carousel
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
                  <GradientText className="mb-2 font-bold text-shadow-md  tracking-tight text-6xl" text={slide.title}/>
                  <p className="mb-6 max-w-md text-sm text-white opacity-90">
                    {slide.description}
                  </p>
                  <Button variant="secondary">{slide.cta}</Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <ButtonGroup className="right-12 bottom-8" play={play} scrollPrev={scrollPrev} scrollNext={scrollNext} canScrollPrev={currentPrev} canScrollNext={canScrollNext} isPlaying={isPlaying} pause={pause}/>
        <div className="flex justify-center mt-4 space-x-2">
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              onClick={() => scrollTo(index)}
              size="icon"
              className={`w-2 h-2 rounded-full ${
                selectedIndex === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
