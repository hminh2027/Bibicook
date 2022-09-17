import React from "react";
import ProductCard from "@/components/ProductCard";

const ProductSlide = ({ products }) => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 ">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          imgSrc={product.imgSrc}
          href={`products/${product.slug}`}
          className="p-1 lg:p-4"
        />
      ))}
    </div>
  );
};

export default ProductSlide;
