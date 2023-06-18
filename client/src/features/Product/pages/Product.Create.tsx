import { HStack } from "@chakra-ui/react";
import AddProductForm from "../components/Forms/AddProduct";
import Sidebar from "../components/Sidebar";
import Collapsible from "../components/common";
import { CreateStepList } from "../constant";
import { StepProvider } from "../context/useStep";

interface Props {}
function ProductCreatePage({}: Props) {
  return (
    <StepProvider list={CreateStepList}>
      <HStack>
        <Collapsible>
          <Sidebar className="" />
        </Collapsible>
        <AddProductForm className="flex-1" />
      </HStack>
    </StepProvider>
  );
}
export default ProductCreatePage;
