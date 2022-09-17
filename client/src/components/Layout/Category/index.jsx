import React from "react";
import CategoryItem from "./item";
const Category = ({ categories, className }) => {
  return (
    <div className={`flex flex-col font-bold gap-2 ${className}`}>
      <div className="text-center text-3xl font-bold">Danh mục sản phẩm</div>
      <div className="flex flex-col w-full gap-4 lg:flex-row">
        <div className="flex w-full gap-4">
          <CategoryItem
            title="Món phụ"
            imgSrc="https://admin.bebecook.com/__data/kid/prod/690_05_52.jpg"
            className=""
          />
          <CategoryItem
            title="Gạo"
            imgSrc="https://admin.bebecook.com/__data/kid/prod/%EC%B9%98%EC%A6%88%EC%9A%94%EA%B1%B0%ED%8A%B8(3)_3.jpg"
            className=""
          />
        </div>
        <div className="flex w-full gap-4">
          <CategoryItem
            title="Đồ ăn nhẹ"
            imgSrc="https://admin.bebecook.com/__data/kid/prod/690_05_63.jpg"
          />
          <CategoryItem
            title="Đồ ăn nhẹ"
            imgSrc="https://admin.bebecook.com/__data/kid/prod/690_05_63.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
