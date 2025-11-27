import { Image } from "@unpic/react";
import { Button } from '@/components/ui/button';
import { slides } from "@/constants/carouselProducts";
import { featuredProducts } from "@/constants/featuredProducts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card';

export default function PopularGridSection() {
  const products = featuredProducts.concat(slides)
  return (
    <div className='flex max-w-7xl *:rounded-none *:shadow-none max-xl:flex-col max-xl:*:not-last:border-b-0 max-xl:*:first:rounded-t-xl max-xl:*:last:rounded-b-xl xl:*:not-last:border-r-0 xl:*:first:rounded-l-xl xl:*:last:rounded-r-xl'>
      {products.map((prod) => (
        <Card className='overflow-hidden pt-0 w-full'>
          <CardHeader className='flex justify-between px-0 '>
            <CardTitle>{prod.title}</CardTitle>
            <Badge variant='outline' className='rounded-sm'>
              <span>UGX</span> 38,000
            </Badge>
          </CardHeader>
          <CardContent className='px-0'>
            <Image
              src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-7.png?width=368&format=auto'
              alt='Banner'
              className='aspect-video w-full object-cover'
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
    </div> );
}



