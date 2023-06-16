import { HStack } from "@chakra-ui/react";
import AddProductForm from "../components/Forms/AddProduct";
import ProductSidebar from "../components/Sidebar";
import { CreateSteps } from "../constant";
import { StepProvider } from "../context/useStep";

interface Props {}
function ProductCreatePage({}: Props) {
  return (
    <StepProvider steps={CreateSteps}>
      <HStack>
        <ProductSidebar />
        <AddProductForm />
      </HStack>
    </StepProvider>
  );
}
export default ProductCreatePage;
