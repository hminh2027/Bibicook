import { Divider, Flex, IconButton } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import useCollapsible, { CollapsibleProvider } from "../context/useCollapsible";

interface CollapsibleProps {
  children: ReactNode;
}
function Collapsible({ children }: CollapsibleProps) {
  return (
    <CollapsibleProvider>
      <Flex direction={"column"} gap={4}>
        <CollapsibleTrigger />
        <Divider />
        {children}
      </Flex>
    </CollapsibleProvider>
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
      {/* <span onClick={() => toggle()} className="p-2">
        <Icon />
      </span> */}
    </div>
  );
};
export default Collapsible;
