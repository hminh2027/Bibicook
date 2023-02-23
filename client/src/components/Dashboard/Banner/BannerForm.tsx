import React, { FC, useEffect } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Button } from "antd";
import { Upload } from "./BannerInput";
import { usePostBanner } from "./hook";

interface Banner {
  id: number;
  url: string;
}

export const BannerForm: FC<any> = ({ banners }) => {
  const { control, handleSubmit, register, setValue } = useForm({
    defaultValues: {
      banners: banners,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "banners",
  });
  const { postBanner } = usePostBanner();
  const onSubmit = async (data: any) => {
    try {
      postBanner(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col h-full justify-between gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="text-3xl">Banners:</div>
          <Button type="primary" onClick={() => append({ url: "" })}>
            Thêm
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field, index) => (
            <Upload
              key={field.id}
              register={register}
              index={index}
              onRemove={() => remove(index)}
              field={field}
              setValue={setValue}
            />
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
