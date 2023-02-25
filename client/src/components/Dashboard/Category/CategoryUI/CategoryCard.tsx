import { Button, Typography } from "antd";
import React, { FC } from "react";
import { CategoryType } from "../type";
import { useRemoveCategory } from "../hooks";
const { Title, Text } = Typography;

interface CategoryCardProp {
  category: CategoryType;
}
export const CategoryCard: FC<CategoryCardProp> = ({
  category,
}: CategoryCardProp) => {
  const { removeCategory, isLoading, isError } = useRemoveCategory();
  const handleRemove = async () => {
    removeCategory(category.slug);
  };
  return (
    <div className="flex justify-between">
      <div className="flex flex-col flex-1">
        <Title level={5}>{category.name}</Title>
        <Text>Số sản phẩm: 10</Text>
      </div>
      <div className="flex gap-1 flex-col w-[120px]">
        <Button type="primary" className="btn-success" disabled={isLoading}>
          Sửa
        </Button>
        <Button danger onClick={handleRemove} disabled={isLoading}>
          Xoá
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
