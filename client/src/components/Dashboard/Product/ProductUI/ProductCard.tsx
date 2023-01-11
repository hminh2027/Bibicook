import React, { useRef } from "react";
import { Button, Typography } from "antd";
import { useHoverDirty } from "react-use";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
interface Props {
  className: string;
}

export const ProductCard = (props: Props) => {
  const cardRef = useRef();
  const isHovering = useHoverDirty(cardRef);
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/product/${1}/edit`);
  };
  return (
    <div
      className={`card flex gap-2 overflow-hidden cursor-pointer ${
        isHovering
          ? "bg-gradient-to-r from-[rgba(0,97,255,0.1)] to-[rgba(96,239,255,0.1)]"
          : ""
      }  ${props.className}`}
      ref={cardRef}
    >
      <div>
        <img
          src="https://hibabi.vn/bebecook/2021/12/banh-bi-bebecook-vi-bap-phomai-600x600.png"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <Title level={4} className={`${isHovering ? "text-violet-600" : ""}`}>
            Tên sản phẩm
          </Title>
          <div className={`${isHovering ? "text-violet-400" : ""}`}>
            Mô tả ngắn spMô tả ngắn spMô tả ngắn spMô tả ngắn spMô tả ngắn spMô
            tả ngắn sp
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
