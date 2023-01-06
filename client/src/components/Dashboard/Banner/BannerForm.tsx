import React, { useEffect } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Button, Form, Input } from "antd";

interface Banner {
  url: string;
}

export const BannerForm = ({
  banners = [{ url: "HELLO" }, { url: "123" }],
}: Banner[]) => {
  const { control, handleSubmit, setValue, getValues, watch } = useForm({
    defaultValues: {
      banners: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "banners",
  });
  const bannerWatcher = watch("banners");
  useEffect(() => {
    if (banners) setValue("banners", banners);
  }, [banners]);

  useEffect(() => {
    renderPreview();
  }, [bannerWatcher]);

  const onSubmit = (values: any) => {
    console.log(values);
  };
  const renderPreview = () => {
    const bannersPreview = getValues("banners");
    return (
      <div className="flex flex-col justify-center gap-4">
        <div className="font-bold text-center">
          Preview (slide chạy từ trái qua phải)
        </div>
        <div className="flex gap-2 flex-wrap">
          {bannersPreview?.map((banner: Banner) => (
            <img src={banner?.url} className="w-[320px] h-[190px] rounded-md" />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="text-3xl">Banners:</div>
          <Button type="primary" onClick={() => append({ url: "" })}>
            Add
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {fields.map((field, index) => (
            <div className="flex flex-col">
              <div className="flex gap-4 items-center">
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
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
      {renderPreview()}
    </div>
  );
};
export default BannerForm;
