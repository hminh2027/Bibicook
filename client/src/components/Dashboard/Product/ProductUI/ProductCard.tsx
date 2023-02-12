import React, { FC, useRef } from "react";
import { Button, Typography } from "antd";
import { useHoverDirty } from "react-use";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../type";
const { Title } = Typography;
interface ProductCardProps {
  className: string;
  product: ProductType;
}

export const ProductCard: FC<any> = ({
  product,
  className,
}: ProductCardProps) => {
  const { name, medias, slug, shortDesc } = product;
  const cardRef = useRef();
  const isHovering = useHoverDirty(cardRef);
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/product/${slug}/edit`);
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
      <div>
        <img src={medias[0].url} width={150} height={150} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <Title level={4} className={`${isHovering ? "text-violet-600" : ""}`}>
            {name}
          </Title>
          <div className={`${isHovering ? "text-violet-400" : ""}`}>
            {shortDesc}
          </div>
        </div>
        <div className="flex gap-4 justify-end">
          <Button type="primary" onClick={handleEdit} className="btn-success">
            Sửa
          </Button>
          <Button danger>Xoá</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
