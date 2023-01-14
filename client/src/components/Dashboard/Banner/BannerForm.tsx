import React, { useEffect } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Button, Form, Input } from "antd";
interface Props {
  banners?: Banner[];
}
interface Banner {
  url: string;
}

export const BannerForm = ({
  banners = [
    {
      url: "https://images.unsplash.com/photo-1587502537147-2ba64a62e3d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1896&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1642&q=80",
    },
  ],
}: Props) => {
  const { control, handleSubmit, setValue, getValues, watch } = useForm({
    defaultValues: {
      banners: banners,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "banners",
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="text-3xl">Banners:</div>
          <Button type="primary" onClick={() => append({ url: "" })}>
            Thêm
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {fields.map((field, index) => (
            <div className="flex flex-col">
              <div className="flex gap-4 items-center" key={index}>
                <Controller
                  control={control}
                  name={`banners.${index}.url`}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                  }) => (
                    <Input type={"text"} onChange={onChange} value={value} />
                  )}
                />
                <Button
                  type="primary"
                  htmlType="button"
                  danger
                  onClick={() => remove(index)}
                >
                  Xoá
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button type="primary" htmlType="submit" className="btn-success">
          Lưu
        </Button>
      </form>
    </div>
  );
};
export default BannerForm;
