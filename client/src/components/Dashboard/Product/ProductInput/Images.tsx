import { Typography, Button } from "antd";
import { useFieldArray, useForm } from "react-hook-form";
import ImageUpload from "./ImageUpload";
import { AiFillPlusCircle } from "react-icons/ai";

export const Images = ({ control, register, setValue, ...props }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });
  return (
    <div className="grid">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {fields.map((field, index) => (
          <ImageUpload
            key={field.id}
            register={register}
            index={index}
            onRemove={() => remove(index)}
            field={field}
            setValue={setValue}
          />
        ))}
        <div className="grid place-items-center w-[100px] h-[100px]">
          <AiFillPlusCircle
            fontSize={"24px"}
            className="text-green-300"
            onClick={() => append({ url: "" })}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
