import { VStack } from "@chakra-ui/react";
import useStep from "../../context/useStep";
import SidebarItem from "./Sidebar.Item";

interface Props {}
export function ProductSidebar({}: Props) {
  const { curStep, steps, set } = useStep();

  return (
    <VStack alignItems={"start"}>
      {steps?.map((step, index) => (
        <SidebarItem label={step.label} index={index} key={step.label} />
      ))}
    </VStack>
  );
}
export default ProductSidebar;
