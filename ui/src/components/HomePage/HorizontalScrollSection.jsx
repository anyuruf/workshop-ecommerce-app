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

export default function HorizontalScrollSection() {

  return (
    <section className="grid grid-cols max-w-7xl mx-auto gap-6">
      <h2 className="text-5xl font-bold px-4">Featured Products</h2>
      <div className="w-full grid">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent>
            {featuredProducts.map((prod, index) => (
              <CarouselItem key={prod.id} className="grid md:basis-1/3 xl:basis-1/8 lg:basis-1/6">
                  <Card key={prod.id} className="grid grid-cols grid-cols-subgrid overflow-hidden  w-full">
                    <CardHeader>
                      <Badge>
                        {prod.cta}
                      </Badge>
                      <CardTitle className=" text-xs font-bold line-clamp-1">
                        {prod.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0">
                      <Image
                        src={prod.imgUrl}
                        alt={prod.title}
                        className="h-35 w-full object-cover"
                      />
                    </CardContent>
                    <CardFooter >
                      <CardDescription className="line-clamp-3">
                        {prod.description}
                      </CardDescription>
                    </CardFooter>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
