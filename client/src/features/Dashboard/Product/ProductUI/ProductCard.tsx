import React, { FC, useRef } from "react";
import { Button, Typography } from "antd";
import { useHoverDirty } from "react-use";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../type";
import { useRemoveProduct } from "../hooks";
const { Title } = Typography;
interface ProductCardProps {
  className: string;
  product?: ProductType;
}

export const ProductCard: FC<any> = ({
  product,
  className,
}: ProductCardProps) => {
  const { name, medias, slug, shortDesc } = product;
  const { removeProduct, isRemoving } = useRemoveProduct(slug);
  const cardRef = useRef();
  const isHovering = useHoverDirty(cardRef);
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/product/${slug}/edit`);
  };
  const handleDetail = () => {
    navigate(`/product/${slug}`);
  };
  return (
    <div
      className={`card flex gap-2 overflow-hidden cursor-pointer ${
        isHovering
          ? "bg-gradient-to-r from-[rgba(0,97,255,0.1)] to-[rgba(96,239,255,0.1)]"
          : ""
      } ${className}`}
      ref={cardRef}
    >
      <div className="w-[150px] h-[150px]">
        <img src={medias[0]?.url} className="object-cover min-w-full h-full" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-2" onClick={handleDetail}>
          <Title level={5} className={`${isHovering ? "text-violet-600" : ""}`}>
            {name}
          </Title>
          <p
            className={`${
              isHovering ? "text-violet-400" : ""
            } h-[50px] w-40 truncate `}
          >
            {shortDesc}
          </p>
        </div>
        <div className="flex gap-4 justify-end">
          <Button type="primary" onClick={handleEdit} className="btn-success">
            Sửa
          </Button>
          <Button onClick={() => removeProduct()} disabled={isRemoving} danger>
            Xoá
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
