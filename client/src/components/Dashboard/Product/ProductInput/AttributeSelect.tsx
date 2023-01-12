import { Button, Input, Select } from "antd";
import React, { FC } from "react";
import { withSpinner } from "../../../../HOC";
import { productAttributeApi } from "../../../../services/endpoint";
import { useForm, Controller } from "react-hook-form";
import { useQueryMutate } from "../../../../hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../../../../services/api";
interface Props {
  data?: Attribute[];
}
interface Attribute {
  id: number | string;
  name: string;
}

export const AttributeSelect: FC<any> = ({
  data = [{ name: "HELLO", id: 1 }],
}: Props) => {
  const { handleSubmit, control } = useForm();
  const mutation = useQueryMutate({
    mutationFn: (name: string) => {
      return productAttributeApi.create(name);
    },
    queryKey: ["product-attributes"],
  });

  const onSubmit = ({ name }: any) => {
    // console.log(name);
    mutation.mutate(name);
    console.log(mutation.data);
  };
  return (
    <div>
      <Select
        className="w-[200px]"
        placeholder="Chọn thuộc tính"
        dropdownRender={(data) => (
          <>
            <div className="flex flex-col">{data}</div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              <Button type="primary" htmlType="submit">
                Thêm
              </Button>
            </form>
          </>
        )}
        options={data.map((attribute) => ({
          label: attribute.name,
          value: attribute.id,
        }))}
      />
    </div>
  );
};

// export const AttributeSelectWithSpinner: FC = () =>
//   withSpinner({
//     queryKey: ["product-attributes"],
//     queryFn: productAttributeApi.getAll(),
//     Component: AttributeSelect,
//   });
// export default AttributeSelect;
