import React from "react";
import { CategoryCard } from ".";

interface Props {}

export const CategoryList = (props: Props) => {
  const categories = new Array(4).fill(1);
  return (
    <div className="flex flex-col gap-4">
      {categories.map((category, index) => (
        <CategoryCard key={index} />
      ))}
    </div>
  );
};

export default CategoryList;
