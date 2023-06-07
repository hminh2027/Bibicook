import React from "react";
import CategoryList from "../components/Category.List";
import { VStack, useDisclosure } from "@chakra-ui/react";
import CategoryCreateModal from "../components/Category.CreateModal";

type Props = {};

function CategoryMainPage({}: Props) {
  return (
    <VStack align={"start"}>
      <CategoryCreateModal />
      <CategoryList />
    </VStack>
  );
}

export default CategoryMainPage;
