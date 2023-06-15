import AddProductForm from "../components/Forms/AddProduct";
import ProductSidebar from "../components/Sidebar";

interface Props {}
function ProductCreatePage({}: Props) {
  return (
    <div>
      <ProductSidebar />
      <AddProductForm />
    </div>
  );
}
export default ProductCreatePage;
