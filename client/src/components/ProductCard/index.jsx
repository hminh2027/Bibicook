import React from "react";
import Link from "next/link";
import Image from "next/image";
const ProductCard = ({
  imgSrc,
  title,
  className,
  href = "#",
  titlePlacement = "bottom",
}) => {
  return (
    <Link href={href}>
      <div
        className={`card flex-auto bg-white cursor-pointer shadow-lg border  hover:text-accent hover:border-accent brightness-100 hover:brightness-100 ${className}`}
      >
        <div className="card-body p-4">
          <div className="flex flex-col flex-1 items-center ">
            {titlePlacement === "top" && (
              <div className="font-bold text-lg text-center">{title}</div>
            )}
            <div className="w-full">
              <Image width={4} height={4} layout="responsive" src={imgSrc} />
            </div>
            {titlePlacement === "bottom" && (
              <div className="font-bold text-lg text-center">{title}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
