import { EditForm } from "./ProductInput";
import { Typography } from "antd";
const { Title } = Typography;
interface Props {}

export const ProductEdit = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Title level={3}>Sửa sản phẩm</Title>
      </div>
      <div className="">
        <EditForm />
      </div>
    </div>
  );
};

export default ProductEdit;
