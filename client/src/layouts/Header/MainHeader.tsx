import PageLogo from "@/components/common/PageLogo";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

function MainHeader({}: Props) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <PageLogo />
      <div>Controls</div>
    </Flex>
  );
}

export default MainHeader;
