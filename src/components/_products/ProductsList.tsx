import { productsList } from "@/data/ProductSections";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <div className="mt-5 grid gap-10 lg-cols-1 sm:lg-cols-2 lg:grid-cols-4 min-h-[600px]">
      {productsList.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductsList;
