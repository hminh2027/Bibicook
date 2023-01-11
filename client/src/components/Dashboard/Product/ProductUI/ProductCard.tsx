import React, { useRef } from "react";
import { Button, Typography } from "antd";
import { useHoverDirty } from "react-use";
const { Title } = Typography;
interface Props {
  className: string;
}

export const ProductCard = (props: Props) => {
  const cardRef = useRef();
  const isHovering = useHoverDirty(cardRef);
  return (
    <div
      className={`card flex items-center gap-2 relative overflow-hidden cursor-pointer ${props.className}`}
      ref={cardRef}
    >
      <div>
        <img
          src="https://hibabi.vn/bebecook/2021/12/banh-bi-bebecook-vi-bap-phomai-600x600.png"
          width={150}
          height={150}
        />
      </div>
      <div className="flex-1 flex justify-evenly flex-col gap-1">
        <Title level={4} className={`${isHovering ? "text-violet-600" : ""}`}>
          Tên sản phẩm
        </Title>
        <div
          className={`flex-1 max-h-[120px] ${
            isHovering ? "text-violet-400" : ""
          }`}
        >
          Mô tả ngắn spMô tả ngắn spMô tả ngắn spMô tả ngắn spMô tả ngắn spMô tả
          ngắn sp
        </div>
        <div className="flex gap-2 justify-end">
          <Button type="primary" onClick={() => {}} className="btn-success">
            Sửa
          </Button>
          <Button danger>Xoá</Button>
        </div>
      </div>
      {/* Mask */}
      <div
        className={`${
          isHovering ? "" : "hidden"
        } absolute top-0 left-0 w-full h-full opacity-10   bg-gradient-to-r from-[#0061ff] to-[#60efff] `}
      ></div>
    </div>
  );
};

export default ProductCard;
