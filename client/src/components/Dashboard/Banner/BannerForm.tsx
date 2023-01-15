import React, { useEffect } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Button, Form, Input } from "antd";
import BannerPreview from "./BannerPreview";
import { Upload } from "./BannerInput";
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
  const { control, handleSubmit, setValue, getValues, watch, register } =
    useForm({
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
    const formData = new FormData();
    for (let i = 0; i < banners.length; i++) {
      formData.append("banner", banners[i]);
      formData.append("index", `${i}`);
    }

    const res = await fetch("http://localhost:8000/api/banner", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
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
        <div className="flex flex-col gap-4">
          <Controller
            control={control}
            name={`banners`}
            render={({ field }) => <Upload {...field} />}
          />
          {/* <input {...register("banners")} /> */}
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
