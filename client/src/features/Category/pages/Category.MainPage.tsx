import React from "react";
import CategoryList from "../components/Category.List";
import { Flex, VStack, Box, Text } from "@chakra-ui/react";
import CategoryCreateModal from "../components/Category.CreateModal";
import Card from "@/components/common/Card";

type Props = {};

function CategoryMainPage({}: Props) {
  return (
    // <VStack align={"start"}>
    <Card
      cardTitle={
        <Flex justifyContent={"space-between"} w="100%">
          <Text as={"b"} fontSize={"2xl"}>
            Category
          </Text>
          <CategoryCreateModal />
        </Flex>
      }
    >
      <CategoryList />
    </Card>
    // </VStack>
  );
}

export default CategoryMainPage;
