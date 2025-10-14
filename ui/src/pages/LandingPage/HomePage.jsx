import ProductList from "../../components/ProductList";
import { useFeaturedProducts } from "../../hooks";
import { useLoaderData } from "react-router";




export function loader() {
  // you can now fetch data here
  const products = useFeaturedProducts();
  return products;

}

export default function Component() {
  
  const products = useLoaderData();
 
  return <ProductList products={products} />;

}



