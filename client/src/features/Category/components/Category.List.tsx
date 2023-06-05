import { List, ListItem, Divider } from "@chakra-ui/react";
import React from "react";
import CategoryItem from "./Category.Item";
function CategoryList() {
  return (
    <List>
      {[1, 2, 3].map((item) => (
        <ListItem key={item}>
          <CategoryItem />
          <Divider />
        </ListItem>
      ))}
    </List>
  );
}

export default CategoryList;
