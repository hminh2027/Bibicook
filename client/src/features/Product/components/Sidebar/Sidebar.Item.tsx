import { ReactStyle } from "@/types";
import { mergeClass } from "@/utils/tailwind";
import { Flex, Text } from "@chakra-ui/react";

interface SidebarItemProps extends ReactStyle {}
export default function SidebarItem({ className, style }: SidebarItemProps) {
  const defaultStyle =
    "inline-flex justify-center items-center w-10 h-10 rounded-full border bg-gray-100 border-gray-100 text-black";
  const activeStyle = "text-green-500 border-green-500 bg-white";
  const passedStyle = "bg-green-500 text-white";
  console.log(mergeClass(defaultStyle, activeStyle));
  return (
    <Flex
      className={className}
      style={style}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <div className={mergeClass(defaultStyle, activeStyle)}>
        <Text>1</Text>
      </div>
      <Text>Hello</Text>
    </Flex>
  );
}
