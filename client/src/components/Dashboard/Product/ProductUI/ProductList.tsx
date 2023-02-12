import { ProductCard } from ".";
import { useQueryProduct } from "../hooks";

export const ProductList = () => {
  const { products, isLoading, isError }: any = useQueryProduct();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard className="col-span-1" product={product} />
      ))}
    </div>
  );
};

export default ProductList;
