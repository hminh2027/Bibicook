import React from "react";
import { CategoryList } from "./CategoryUI";
import CreateForm from "./CategoryInput/CreateForm";
import { Typography } from "antd";
import { useQueryCategory } from "./hooks";
const { Title } = Typography;

export const CategoryMain = () => {
  const { categories, isLoading, isError }: any = useQueryCategory();
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="card col-span-12">
        <CreateForm />
      </div>
      <div className="card col-span-12">
        <Title level={3}>Các danh mục: </Title>
        {isLoading && <div className="animate-pulse">Loading ...</div>}
        {categories && !isError && <CategoryList categories={categories} />}
      </div>
    </div>
  );
};

export default CategoryMain;
