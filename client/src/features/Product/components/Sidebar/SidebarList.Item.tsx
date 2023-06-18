import { ReactStyle } from "@/types";
import { mergeClass } from "@/utils/tailwind";
import { Flex, Text } from "@chakra-ui/react";
import useStep from "../../context/useStep";

interface SidebarItemProps extends ReactStyle {
  index: number;
  label: string;
  shouldDisplayText?: boolean;
}
export default function SidebarItem({
  index,
  label,
  className,
  style,
  shouldDisplayText,
}: SidebarItemProps) {
  const { curStep, set } = useStep();

  const defaultStyle =
    "inline-flex justify-center items-center w-10 h-10 rounded-full border bg-gray-100 border-gray-100 text-black";
  const activeStyle = "text-green-500 border-green-500 bg-white";
  const passedStyle = "bg-green-500 border-green-500 text-white";

  const curClass = () => {
    if (curStep > index) return passedStyle;
    if (curStep === index) return activeStyle;
    return "";
  };

  const onClickHandler = () => {
    if (curStep > index) set(index);
  };
  return (
    <Flex
      className={className}
      style={style}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      onClick={onClickHandler}
    >
      <div className={mergeClass(defaultStyle, curClass())}>
        <Text>{index + 1}</Text>
      </div>
      {shouldDisplayText && <Text>{label}</Text>}
    </Flex>
  );
}
