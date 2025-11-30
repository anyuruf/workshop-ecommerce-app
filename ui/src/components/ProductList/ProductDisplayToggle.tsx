import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Grid2x2, List } from "lucide-react";

export const ProductDisplayToggle = ({ products }) => {
  const [view, setView] = useState("grid");

  return (
    <div className="w-full">
      {/* View Toggle */}
      <div className="flex justify-end items-center gap-2 mb-6">
        <Button
          variant={view === "grid" ? "default" : "outline"}
          size="icon"
          onClick={() => setView("grid")}
          aria-pressed={view === "grid"}
        >
          <Grid2x2 className="h-4 w-4" />
        </Button>
        <Button
          variant={view === "list" ? "default" : "outline"}
          size="icon"
          onClick={() => setView("list")}
          aria-pressed={view === "list"}
        >
          <List className="h-4 w-4" />
        </Button>
      </div>

      {/* Product Container */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col gap-4"
        }
      >
        {products.map((product) => (
          <Card
            key={product.product_id}
            className={`transition-all hover:shadow-md ${
              view === "list" ? "flex flex-row items-center p-4" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`overflow-hidden rounded-md ${
                view === "grid" ? "w-full h-56" : "w-36 h-36 flex-shrink-0 mr-4"
              }`}
            >
              <img
                src={product.images?.[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div
              className={
                view === "grid"
                  ? "flex flex-col flex-1"
                  : "flex flex-col flex-1 justify-between"
              }
            >
              <CardHeader
                className={view === "grid" ? "px-4 pt-4 pb-2" : "p-0 mb-2"}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold truncate">
                    {product.name}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    #{product.model_number}
                  </span>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {product.brand}
                </CardDescription>
              </CardHeader>

              <CardContent className={view === "grid" ? "px-4 py-2" : "p-0"}>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {product.short_desc}
                </p>

                {/* Color options */}
                <div className="flex items-center gap-2 mt-3">
                  {product.specifications.colors.map((color) => (
                    <div
                      key={color.name}
                      className={`h-5 w-5 rounded-full border ${color.bgColor}`}
                      title={color.name}
                    />
                  ))}
                </div>

                {/* Size options */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {product.specifications.sizes.map((size) => (
                    <Badge
                      key={size.name}
                      variant={size.inStock ? "outline" : "secondary"}
                      className={
                        size.inStock
                          ? "text-xs"
                          : "text-xs opacity-50 line-through"
                      }
                    >
                      {size.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter
                className={
                  view === "grid"
                    ? "px-4 pb-4 pt-2 flex justify-between items-center"
                    : "p-0 mt-2 flex justify-between items-center"
                }
              >
                <span className="text-primary font-medium text-lg">
                  ${product.price}
                </span>
                <Button size="sm" variant="secondary">
                  Add to cart
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
