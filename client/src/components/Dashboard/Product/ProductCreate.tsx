import { CreateForm } from "./ProductInput";
import { Typography } from "antd";
const { Title } = Typography;
interface Props {}

export const ProductCreate = (props: Props) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4">
      <div>
        <Title level={3}>Thêm sản phẩm</Title>
      </div>
      <div>
        <CreateForm />
      </div>
    </div>
  );
};

export default ProductCreate;
