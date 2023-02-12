import { Radio, Spin } from "antd";
import React, { FC } from "react";
import { useQueryCategory } from "../../Category/hook";
import { Category } from "../../Category/type";
interface Props {}

export const CategoryRadioList: FC<any> = (props: Props) => {
  const { categories, isLoading, isError }: any = useQueryCategory();
  return (
    <Radio.Group {...props} className="flex flex-col gap-1">
      {!categories && isLoading && <Spin />}
      {categories?.map((category) => (
        <Radio key={category.slug} value={category.slug}>
          {category.name}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default CategoryRadioList;
