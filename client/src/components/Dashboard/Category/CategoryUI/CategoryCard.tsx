import { Button, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;
interface Props {}

export const CategoryCard = (props: Props) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col flex-1">
        <Title level={5}>Tên danh mục</Title>
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
