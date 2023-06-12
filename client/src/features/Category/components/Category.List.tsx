import { List, ListItem, Divider, Spinner } from "@chakra-ui/react";
import React from "react";
import CategoryItem from "./Category.Item";
import { useGetCategories } from "../api/getCategories";
import ErrorContent from "@/components/common/ErrorContent";
function CategoryList() {
  const { data, isLoading, isError, refetch } = useGetCategories();
  if (isLoading) return <Spinner />;
  if (isError) return <ErrorContent name="categories" refetch={refetch} />;
  return (
    <List w={"100%"}>
      {data?.map((item: any) => (
        <ListItem key={item}>
          <CategoryItem />
          <Divider />
        </ListItem>
      ))}
    </List>
  );
}

export default CategoryList;
