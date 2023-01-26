import React, { useEffect } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Button, Form, Input } from "antd";
import BannerPreview from "./BannerPreview";
import { Upload } from "./BannerInput";
import axios from "axios";
import { bannerEndpoint } from "../../../services/endpoint";
interface Props {
  banners?: Banner[];
}
interface Banner {
  url: string;
}

export const BannerForm = ({
  banners = [
    {
      url: "https://images.unsplash.com/photo-1587502537147-2ba64a62e3d3",
    },
    {
      url: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe",
    },
  ],
}: Props) => {
  const { control, handleSubmit, watch, register } = useForm({
    defaultValues: {
      banners: banners,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "banners",
  });

  const onSubmit = async (data: any) => {
    const { banners } = data;
    console.log(banners);
  };
  const bannersToWatch = watch("banners");
  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="text-3xl">Banners:</div>
          <Button type="primary" onClick={() => append({ url: "" })}>
            Thêm
          </Button>
        </div>
        <div className="flex gap-4">
          {fields.map((field, index) => (
            <Upload
              key={field.id}
              register={register}
              index={index}
              onRemove={() => remove(index)}
              control={control}
              field={field}
            />
          ))}
        </div>

        <Button type="primary" htmlType="submit" className="btn-success">
          Lưu
        </Button>
      </form>
      {/* <BannerPreview banners={bannersToWatch} /> */}
    </div>
  );
};
export default BannerForm;
