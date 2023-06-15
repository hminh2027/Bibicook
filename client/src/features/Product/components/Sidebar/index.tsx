import { VStack } from "@chakra-ui/react";
import SidebarItem from "./Sidebar.Item";

interface Props {}
export function ProductSidebar({}: Props) {
  return (
    <VStack>
      {[1, 2, 3, 4].map((item, index) => (
        <SidebarItem />
      ))}
    </VStack>
  );
}
export default ProductSidebar;
