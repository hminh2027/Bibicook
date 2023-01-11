import React from "react";
import { ProductCard } from "./ProductUI";
import { Link } from "react-router-dom";

interface Props {}

export const ProductList = (props: Props) => {
  const products = new Array(10).fill(1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-cols-auto  gap-4">
      {products.map((product, index) => (
        <Link to={"/product/1"} key={index} className="no-underline">
          <ProductCard className="col-span-1" />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
