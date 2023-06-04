import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

function MainHeader({}: Props) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Image src="/logo.png" alt="bvn-logo" width={"80"} height={"80"} />
      <div>Controls</div>
    </Flex>
  );
}

export default MainHeader;
