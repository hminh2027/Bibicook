import { Button, Input, Select, Space, Spin } from "antd";
import React, { FC } from "react";
import { productAttributeApi } from "../../../../../services/endpoint";
import { useForm, Controller } from "react-hook-form";
import { useQueryMutate } from "../../../../../hooks";
import { useMutateAttribute, useQueryAttribute } from "../hooks";
import { AiOutlinePlus } from "react-icons/ai";
interface Props {
  data?: Attribute[];
}
interface Attribute {
  slug: string;
  name: string;
}

export const AttributeSelect: FC<any> = ({ name, value, onChange, onBlur }) => {
  const { attributes, isLoading, isError }: any = useQueryAttribute();
  const { handleSubmit, control } = useForm();
  const { postAttribute, isPosting } = useMutateAttribute();
  const onSubmit = async (data) => {
    await postAttribute(data);
  };
  return (
    <div>
      <Select
        className="w-[200px]"
        placeholder="Chọn thuộc tính"
        dropdownRender={(attribute) => (
          <>
            {!attributes && isLoading && <Spin />}
            {attributes && (
              <>
                <div className="flex flex-col">{attribute}</div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
                  <Space style={{ padding: "0.5em 0" }}>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => <Input {...field} />}
                    />
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={isPosting}
                      icon={<AiOutlinePlus />}
                    >
                      {isPosting ? <Spin /> : "Thêm"}
                    </Button>
                  </Space>
                </form>
              </>
            )}
          </>
        )}
        options={attributes?.map((attribute) => ({
          label: attribute.name,
          value: attribute.slug,
          slug: attribute.slug,
        }))}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
