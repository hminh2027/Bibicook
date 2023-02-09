import { Button, Typography } from "antd";
import React, { FC } from "react";
import { Category } from "../type";
const { Title, Text } = Typography;

interface CategoryCardProp {
  category: Category;
}
export const CategoryCard: FC<CategoryCardProp> = ({
  category,
}: CategoryCardProp) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col flex-1">
        <Title level={5}>{category.name}</Title>
        <Text>Số sản phẩm: 10</Text>
      </div>
      <div className="flex gap-1 flex-col w-[120px]">
        <Button type="primary" className="btn-success">
          Sửa
        </Button>
        <Button danger>Xoá</Button>
      </div>
    </div>
  );
};

export default CategoryCard;
