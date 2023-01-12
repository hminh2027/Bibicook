import React from "react";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
export const ProductDetail = () => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/product/${1}/edit`);
  };
  return (
    <div className="grid gap-4 grid-cols-12">
      <div className="flex flex-col gap-4 col-span-12 md:col-span-8">
        <section>
          <Title>Tên sản phẩm</Title>
        </section>
        <section>
          <Title level={4}>Thuộc tính</Title>
          <div className="flex flex-col gap-1">
            <div className="flex">
              <div className="w-[150px]">Tên thuộc tính</div>
              <div className="flex-1">Giá trị</div>
            </div>
            <div className="flex">
              <div className="w-[150px]">Tên thuộc tính</div>
              <div>Giá trị</div>
            </div>
            <div className="flex">
              <div className="w-[150px]">Tên thuộc tính</div>
              <div>Giá trị</div>
            </div>
          </div>
        </section>
        <section>
          <Title level={4}>Mô tả ngắn</Title>
          <div>
            Mô tả ngắn sp nèMô tả ngắn sp nèMô tả ngắn sp nèMô tả ngắn sp nèMô
            tả ngắn sp nèMô tả ngắn sp nèMô tả ngắn sp nèMô tả ngắn sp nèMô tả
            ngắn sp nèMô tả ngắn sp nèMô tả ngắn sp nèMô tả ngắn sp nèMô tả ngắn
            sp nèMô tả ngắn sp nèMô tả ngắn sp nèMô tả ngắn sp nèMô tả ngắn sp
            nèMô tả ngắn sp nèMô tả ngắn sp nèMô tả ngắn sp nèMô tả ngắn sp nè
          </div>
        </section>
        <section>
          <Title level={4}>Mô tả</Title>
          <div>
            <ul>
              <li>HELLO</li>
              <li>HELLO</li>
              <li>HELLO</li>
              <li>HELLO</li>
            </ul>
          </div>
        </section>
      </div>
      <div className="flex flex-col gap-4 col-span-12 md:col-span-4">
        <section>
          <Title level={4}>Danh mục</Title>
          <div>Món phụ</div>
        </section>
        <section>
          <Title level={4}>Ảnh chính</Title>
          <div className="overflow-hidden">
            <img
              className="w-[300px] h-[300px] object-cover rounded-md"
              src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/o-creating-circular-image-in-flutter.png?w=950&ssl=1"
            />
          </div>
        </section>
        <section>
          <Title level={4}>Ảnh phụ</Title>
          <div className="flex gap-2 flex-wrap overflow-hidden">
            <img
              className="w-[100px] h-[100px] object-cover "
              src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/o-creating-circular-image-in-flutter.png?w=950&ssl=1"
            />
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
        <Button danger className="flex-1" size="large">
          Xoá
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
