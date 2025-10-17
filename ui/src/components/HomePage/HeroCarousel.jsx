import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  const images = [ "/mocks/tshirt1.jpg", "/mocks/tshirt2.jpg",
    "/mocks/tshirt4.jpg", "/mocks/tshirt3.jpg"];

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <Carousel 
        plugins={[Autoplay({ delay: 2500 })]}
        opts={{ loop: true, align: "center" }}
        setApi={setCarouselAPI}
        className="w-full h-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div
                className="w-full h-[480px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex items-center justify-center gap-2">        
        {images.map((_, index) => (
          <button  key={index}  onClick={() => carouselAPI?.scrollTo(index)}            
          className={cn("h-3.5 w-3.5 rounded-full border-2", {              "border-primary": selectedIndex === index + 1,})}/>
          ))}      
      </div>
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
    </section>
  )
}
