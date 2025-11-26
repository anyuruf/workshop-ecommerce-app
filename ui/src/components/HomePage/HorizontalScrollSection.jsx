import { featuredProducts } from "@/constants/featuredProducts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge"
import { Image } from "@unpic/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function HorizontalScrollSection() {

  return (
    <section className="grid grid-cols max-w-7xl mx-auto gap-4">
      <h2 className="text-2xl font-bold px-4">Featured Products</h2>
      <div className="w-full grid">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent>
            {featuredProducts.map((prod, index) => (
              <CarouselItem key={prod.id} className="grid grid-cols-subgrid md:basis-1/3 lg:basis-1/6">
                  <Card key={prod.id} className="overflow-hidden p-3">
                    <CardHeader className="p-0">
                      <Badge>
                        {prod.cta}
                      </Badge>
                      <CardTitle className="line-clamp-2">
                        {prod.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 items-center justify-center">
                      <Image
                        src={prod.imgUrl}
                        alt={prod.title}
                        className="h-35 w-full object-cover"
                      />
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex items-center">
                      <CardDescription className="line-clamp-2">
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
