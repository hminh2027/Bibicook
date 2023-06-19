import { ReactStyle } from "@/types";
import { Divider, Flex, IconButton } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import useCollapsible, { CollapsibleProvider } from "../context/useCollapsible";

interface CollapsibleProps extends ReactStyle {
  children: ReactNode;
}
function Collapsible({ children, className }: CollapsibleProps) {
  return (
    <CollapsibleProvider>
      <CollapsibleWrapper className={className}>{children}</CollapsibleWrapper>
    </CollapsibleProvider>
  );
}
function CollapsibleWrapper({ children, className }: CollapsibleProps) {
  const { isCollapsing } = useCollapsible();
  return (
    <Flex
      direction={"column"}
      gap={4}
      className={`transition-[width,transform] ${
        isCollapsing ? "w-10" : "w-48"
      } ${className}  `}
    >
      <CollapsibleTrigger />
      <Divider />
      {children}
    </Flex>
  );
}
const CollapsibleTrigger = () => {
  const { isCollapsing, toggle } = useCollapsible();
  const Icon = isCollapsing ? FaAngleDoubleLeft : FaAngleDoubleRight;
  return (
    <div className="flex justify-end">
      <IconButton
        onClick={() => toggle()}
        aria-label="collapse-trigger"
        variant={"ghost"}
        icon={<Icon />}
      />
    </div>
  );
};
export default Collapsible;
