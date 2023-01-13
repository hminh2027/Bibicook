import React, { useState } from "react";
import { ProductList } from "./ProductUI";
import { Button, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
interface Props {}

export const ProductMain = (props: Props) => {
  const [filter, setFilter] = useState({
    name: "",
  });
  const navigate = useNavigate();
  const handleCreate = () => navigate("/product/create");

  const handleSearch = (e) => {
    const value = e.target.value;
    setFilter({ ...filter, name: value });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Input.Search
          size="large"
          placeholder="Tên sản phẩm"
          enterButton
          className="w-[200px]"
          value={filter.name}
          onChange={handleSearch}
        />
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
