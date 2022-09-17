import React from "react";
import ProductPageLayout from "@/layout/ProductPageLayout";
import Filter from "@/components/Filter";
import ProductGrid from "@/components/ProductGrid";
import Select from "@/components/Select";
import { products } from "@/utils/const/product";
const Category = () => {
  return (
    <div className="flex flex-col gap-4 p-4 ">
      <div>Trang chủ / Tên danh mục</div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 w-full md:w-96 lg:w-96">
          <Filter title="Khoảng giá" content={PriceFilter} />
          <Filter title="Categories" content={CategoriesFilter} />
        </div>
        <div className="flex-auto">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="text-pink-salmon-900 font-semibold text-2xl">
                Món phụ
              </div>
              <div>
                <Select />
              </div>
            </div>

            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};
Category.Layout = ProductPageLayout;
export default Category;
const PriceFilter = [
  {
    label: "Tất cả",
    value: 0,
  },
  {
    label: "Nhỏ hơn 100,000₫",
    value: 1,
  },
  {
    label: "Từ 100,000₫ - 2,000,000₫",
    value: 2,
  },
];
const CategoriesFilter = [
  { label: "Tất cả", value: 0 },
  { label: "Gạo", value: "gao" },
  { label: "Món phụ", value: "side-dish" },
  { label: "Đồ ăn nhẹ", value: "snack" },
];
