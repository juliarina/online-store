import React from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 flex-1 gap-3">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}

export default ProductList;
