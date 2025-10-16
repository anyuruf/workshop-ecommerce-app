import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const product = {
  product_id: "f8f6adc7-466d-4028-a691-52677ad59cdb",
  name: "magna enim elit",
  brand: "DataStax",
  short_desc:
    "Proident laboris amet aute reprehenderit voluptate duis. Tempor elit dolor esse enim exercitation ullamco.",
  price: 43,
  images: ["/mocks/tshirt4.jpg"],
}

export default function HorizontalScrollSection() {
  const items = Array(5).fill(product)

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 px-4">Featured Products</h2>

      <div className="flex overflow-x-auto space-x-6 px-4 scrollbar-hide">
        {items.map((item, i) => (
          <Card
            key={i}
            className="min-w-[300px] rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <CardHeader className="p-0">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <p className="text-sm text-gray-500">{item.brand}</p>
              <p className="text-sm mt-2 line-clamp-2">{item.short_desc}</p>
              <p className="font-semibold mt-2">${item.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
