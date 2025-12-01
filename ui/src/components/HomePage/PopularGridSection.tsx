import { Image } from "@unpic/react";
import { Button } from '@/components/ui/button';
import { slides } from "@/constants/carouselProducts";
import { featuredProducts } from "@/constants/featuredProducts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card';

export default function PopularGridSection() {
  const products = featuredProducts.concat(slides)
  return (
    <section className="grid grid-cols max-w-7xl mx-auto w-full gap2 md:gap-4">
      <h2 className="text-4xl font-bold text-shadow-md px-2">Popular Products</h2>
      <div className='grid gap-2 grid-cols-[repeat(auto-fit,minmax(305px,1fr))] justify-center'>
        {products.map((prod) => (
          <Card className='grid grid-cols max-w-sm grid-cols-subgrid overflow-hidden'>
            <CardHeader className='flex justify-between'>
              <CardTitle className="text-sm text-bold">{prod.title}</CardTitle>
              <Badge className='rounded-sm font-bold'>
                <span >UGX</span> 38,000
              </Badge>
            </CardHeader>
            <CardContent className='px-0  mask-radial-from-[55%_92%]'>
              <Image
                src={prod.imgUrl}
                alt={prod.title}
                className='block h-48 w-full aspect-video object-cover'
              />
            </CardContent>
            <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
              <CardDescription className="line-clamp-3">
                Dive into the depths of an enchanting swirl where vibrant blues and soft pinks merge seamlessly, creating a
                mesmerizing flow of colors.
              </CardDescription>
              <Button>Explore More</Button>
              <Button variant={'outline'}>Download Now</Button>
            </CardFooter>
          </Card>
          ))
        }
      </div>
    </section>
    );
}



