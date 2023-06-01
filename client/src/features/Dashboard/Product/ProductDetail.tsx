import React, { useEffect, useState } from "react";
import { Button, Spin, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryProductBySlug, useRemoveProduct } from "./hooks";
import { htmlParser } from "../../../utils/html-parser";
const { Title } = Typography;
export const ProductDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { product } = useQueryProductBySlug(slug);
  const { removeProduct, isRemoving } = useRemoveProduct(slug);
  if (!product || !slug) return <Spin />;
  const handleEdit = () => {
    navigate(`/product/${slug}/edit`);
  };
  const { name, attributes, medias, shortDesc, longDesc, category }: any =
    product;
  return (
    <div className="grid gap-4 grid-cols-12">
      <div className="flex flex-col gap-4 col-span-12 md:col-span-8">
        <section>
          <Title>{name}</Title>
        </section>
        <section>
          <Title level={4}>Thuộc tính</Title>
          <div className="flex flex-col gap-1">
            {attributes.map((attribute) => (
              <div className="flex" key={attribute.name}>
                <div className="w-[150px]">{attribute.name}</div>
                <div className="flex-1">{attribute.value}</div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <Title level={4}>Mô tả ngắn</Title>
          <div>{shortDesc}</div>
        </section>
        <section>
          <Title level={4}>Mô tả</Title>
          <div>{htmlParser(longDesc)}</div>
        </section>
      </div>
      <div className="flex flex-col gap-4 col-span-12 md:col-span-4">
        <section>
          <Title level={4}>Danh mục</Title>
          <div>{category.name}</div>
        </section>
        <section>
          <Title level={4}>Ảnh chính</Title>
          <div className="overflow-hidden">
            <img
              className="w-[300px] h-[300px] object-cover rounded-md"
              src={medias[0].url}
            />
          </div>
        </section>
        <section>
          <Title level={4}>Ảnh phụ</Title>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden">
            {medias.map((media) => (
              <div>
                <img
                  className="max-w-full h-full object-cover "
                  src={media.url}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="col-span-12 flex gap-2 justify-end">
        <Button
          onClick={handleEdit}
          type="primary"
          className="flex-1"
          size="large"
        >
          Cập nhật
        </Button>
        <Button
          onClick={removeProduct}
          danger
          className="flex-1"
          size="large"
          disabled={isRemoving}
        >
          Xoá
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
