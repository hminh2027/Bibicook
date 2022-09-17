import React from "react";
import ProductCard from "@/components/ProductCard";
const ProductGrid = ({ products, colNum = 4, gap = 4 }) => {
  const className = "grid grid-cols-4 gap-4";
  return (
    <div className={className}>
      {products.map((product) => (
        <ProductCard imgSrc={product.imgSrc} title={product.title} />
      ))}
    </div>
  );
};

export default ProductGrid;
