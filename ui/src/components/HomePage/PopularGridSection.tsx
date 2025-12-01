import { Image } from "@unpic/react";
import { Button } from '@/components/ui/button';
import { slides } from "@/constants/carouselProducts";
import { featuredProducts } from "@/constants/featuredProducts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card';
import ProductCard from "@/components/HomePage/ProductCard/ProductCard";

export default function PopularGridSection() {
  const products = featuredProducts.concat(slides)
  return (
    <section className="grid grid-cols max-w-7xl mx-auto w-full gap2 md:gap-4">
      <h2 className="text-4xl font-bold text-shadow-md px-2">Popular Products</h2>
      <div className='grid gap-3 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center'>
        {products.map((prod) => (
          <ProductCard key={prod.id} title={prod.title} imgUrl={prod.imgUrl} description={prod.description} />
          ))
        }
      </div>
    </section>
    );
}



