import { Typography, Button } from "antd";
import { useFieldArray, useForm } from "react-hook-form";
import ImageUpload from "./ImageUpload";

export const Images = ({
  images = [
    {
      url: "http://localhost:8000/upload/banh-gao-huu-co-moms-care-hinh-ong-mat-troi-1675593531955.jpg",
    },
  ],
}) => {
  const { control, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      images,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-wrap gap-2">
        {fields.map((field, index) => (
          <ImageUpload
            key={field.id}
            register={register}
            index={index}
            onRemove={() => remove(index)}
            field={field}
            setValue={setValue}
          />
          // <img
          //   src="localhost:8000/upload/banh-gao-huu-co-moms-care-hinh-que-vi-ngu-coc-1674906328808.jpg"
          //   width={500}
          // />
        ))}
      </div>

      <Button onClick={() => append({ url: "" })}>Add</Button>
    </div>
  );
};

export default Images;
