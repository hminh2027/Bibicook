import { ReactStyle } from "@/types";
import { Flex, Text } from "@chakra-ui/react";
import useCollapsible from "../../context/useCollapsible";
import useStep from "../../context/useStep";
import SidebarList from "./SidebarList";

interface Props extends ReactStyle {}
export default function Sidebar({ className, style }: Props) {
  const { list } = useStep();
  const { isCollapsing } = useCollapsible();
  const shouldShowText = !isCollapsing;
  return (
    <Flex direction={"column"} gap={2} className={className} style={style}>
      {shouldShowText && <Text as="b">{list.label}</Text>}
      <SidebarList />
    </Flex>
  );
}
