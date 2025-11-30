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
    <section className="grid grid-cols max-w-7xl mx-auto gap-2 md:gap-6">
      <h2 className="text-5xl font-bold px-4">Featured Products</h2>
      <div className="w-full p-2 md:p-6 flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl grid"
        >
          <CarouselContent className=''>
            {featuredProducts.map((prod, index) => (
              <CarouselItem key={prod.id} className="basis-1/2 md:basis-1/6 lg:basis-1/8">
                  <Card className="grid grid-cols-subgrid w-full">
                    <CardHeader className="px-1 md:px-2">
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
                        className="h-35 w-full object-cover px-0"
                      />
                    </CardContent>
                    <CardFooter className="px-1 md:px-2">
                      <CardDescription className="line-clamp-1 md:line-clamp-2">
                        {prod.description}
                      </CardDescription>
                    </CardFooter>
                  </Card>
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
