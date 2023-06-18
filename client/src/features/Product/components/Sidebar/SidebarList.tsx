import { ReactStyle } from "@/types";
import { VStack } from "@chakra-ui/react";
import useCollapsible from "../../context/useCollapsible";
import useStep from "../../context/useStep";
import SidebarItem from "./SidebarList.Item";

interface ProductSidebarProps extends ReactStyle {}
export function SidebarList({ className, style }: ProductSidebarProps) {
  const {
    list: { items },
  } = useStep();
  const { isCollapsing } = useCollapsible();

  return (
    <VStack alignItems={"start"} className={className} style={style}>
      {items?.map((step, index) => (
        <SidebarItem
          label={step.label}
          index={index}
          key={step.label}
          shouldDisplayText={!isCollapsing}
        />
      ))}
    </VStack>
  );
}
export default SidebarList;
