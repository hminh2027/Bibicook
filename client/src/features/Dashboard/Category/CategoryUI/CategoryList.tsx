import React, { FC } from "react";
import { CategoryCard } from ".";
import { CategoryType } from "../type";
interface CategoriesProp {
  categories: CategoryType[];
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
