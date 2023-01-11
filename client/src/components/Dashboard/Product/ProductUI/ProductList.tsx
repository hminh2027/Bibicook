import React from "react";
import { ProductCard } from ".";
import { Link } from "react-router-dom";

interface Props {}

export const ProductList = (props: Props) => {
  const products = new Array(10).fill(1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard className="col-span-1" />
      ))}
    </div>
  );
};

export default ProductList;
