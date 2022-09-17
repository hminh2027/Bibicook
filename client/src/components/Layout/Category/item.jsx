import React from "react";
import Image from "next/image";
const CategoryItem = ({ imgSrc, title, className }) => {
  return (
    <div
      className={`card flex-auto bg-white shadow-lg lg:w-1/4 hover:border hover:border-accent hover:brightness-105 ${className}`}
    >
      <div className="card-body p-4">
        <div className="flex flex-col flex-1 items-center ">
          <div className="font-bold text-lg ">{title}</div>
          <div className="w-full">
            <Image width={4} height={3} layout="responsive" src={imgSrc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
