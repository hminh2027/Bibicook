import React from "react";
import { ProductList } from "./ProductUI";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
interface Props {}

export const ProductMain = (props: Props) => {
  const navigate = useNavigate();
  const handleCreate = () => navigate("/product/create");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Title level={3}>Danh sách sản phẩm:</Title>
        <div className="w-[120px] flex">
          <Button
            onClick={handleCreate}
            type="primary"
            size="large"
            className="flex-1"
          >
            Thêm
          </Button>
        </div>
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductMain;
