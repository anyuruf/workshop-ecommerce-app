import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"



export default function PopularGridSection() {
    const products = Array(6).fill({
        name: "magna enim elit",
        brand: "DataStax",
        price: 43,
        image: "/mocks/tshirt4.jpg",
        })
  return (
    <section className="py-12 max-w-7xl bg-gray-50">
      <h2 className="text-2xl font-bold mb-8 px-4">Popular Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {products.map((p, i) => (
          <Card
            key={i}
            className="rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <CardHeader className="p-0">
              <img
                src={p.image}
                alt={p.name}
                className="w-full aspect-square object-cover rounded-t-xl"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg">{p.name}</CardTitle>
              <p className="text-sm text-gray-500">{p.brand}</p>
              <p className="font-semibold mt-2">${p.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
