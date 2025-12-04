import { featuredProducts } from "@/constants/featuredProducts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Image } from "@unpic/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ProductCard from "@/components/HomePage/ProductCard/ProductCard";
import SlimProductCard from "@/components/HomePage/ProductCard/SlimProductCard";
import { GradientText } from "@/components/shadcn-io/GradientText";

export default function HorizontalScrollSection() {

  return (
    <section className="grid grid-cols max-w-7xl mx-auto gap-2 md:gap-4">
      <GradientText className="text-4xl font-bold px-2 text-shadow-md" text="Featured Products" />
      <div className="w-full flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl grid"
        >
          <CarouselContent>
            {featuredProducts.map((prod, index) => (
              <CarouselItem key={prod.id} className="basis-1/2 md:basis-1/6 lg:basis-1/8">
                <SlimProductCard key={prod.id} title={prod.title} imgUrl={prod.imgUrl} description={prod.description} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
}
