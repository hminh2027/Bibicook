import { Flex, VStack, Text, Button, HStack } from "@chakra-ui/react";
import React from "react";

function CategoryItem() {
  return (
    <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
      <VStack alignItems={"start"}>
        <Text as={"b"}>Cate name</Text>
        <Text>Số sản phẩm: {10}</Text>
      </VStack>
      <HStack>
        <Button colorScheme="green">Sửa</Button>
        <Button colorScheme="red">Xoá</Button>
      </HStack>
    </Flex>
  );
}

export default CategoryItem;
