import React, { FC } from "react";
import { CategoryCard } from ".";
import { Category } from "../type";
interface CategoriesProp {
  categories: Category[];
}
export const CategoryList: FC<CategoriesProp> = ({
  categories,
}: CategoriesProp) => {
  return (
    <div className="flex flex-col gap-4">
      {categories.map((category, index) => (
        <CategoryCard category={category} key={index} />
      ))}
    </div>
  );
};

export default CategoryList;
