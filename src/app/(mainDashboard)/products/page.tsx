import ProductsList from "@/components/_products/ProductsList";
import React from "react";

const ProductsPage = () => {
  return (
    <div className="section-gap mt-5">
      <h2 className="uppercase section-title-big ">Məhsullar</h2>
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
