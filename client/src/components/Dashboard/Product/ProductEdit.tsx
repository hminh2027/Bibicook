import { useParams } from "react-router-dom";
import { EditForm } from "./ProductInput";
import { Spin, Typography } from "antd";
import { useQueryProductBySlug } from "./hooks";
const { Title } = Typography;

export const ProductEdit = () => {
  const { slug } = useParams();
  const { product } = useQueryProductBySlug(slug);
  if (!product) return <Spin />;
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Title level={3}>Sửa sản phẩm</Title>
      </div>
      <div className="">
        <EditForm product={product} slug={slug} />
      </div>
    </div>
  );
};

export default ProductEdit;
