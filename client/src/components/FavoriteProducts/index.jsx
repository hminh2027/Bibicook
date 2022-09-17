import React from "react";
import ProductCard from "@/components/ProductCard";
const FavoriteProducts = ({ products, className }) => {
  return (
    <div className={`flex flex-col font-bold gap-2 ${className}`}>
      <div className="text-center text-3xl font-bold">
        Bebecook's Best Seller
      </div>
      <div className="flex flex-col w-full gap-4 lg:flex-row">
        <div className="flex w-full gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              imgSrc={product.imgSrc}
              href={`products/${product.slug}`}
              className="p-1 lg:p-4"
              titlePlacement="top"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteProducts;
