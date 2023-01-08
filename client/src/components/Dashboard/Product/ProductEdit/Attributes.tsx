import { Button, Input, Typography } from "antd";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { AttributeSelect } from "./AttributeSelect";

interface Props {}
const { Title } = Typography;
export const Attributes = (props: Props) => {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      attributes: [
        {
          id: 0,
          value: "",
        },
      ],
    },
  });
  const { append, remove, fields } = useFieldArray({
    control,
    name: "attributes",
  });
  return (
    <section>
      <div className="flex justify-between">
        <Title level={4}>Thuộc tính</Title>
        <Button
          type="primary"
          onClick={() =>
            append({
              id: 0,
              value: "",
            })
          }
        >
          Thêm
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        {fields.map((field, index) => (
          <div className="flex gap-2" key={field.id}>
            <Controller
              control={control}
              name={`attributes.${index}.id`}
              render={() => <AttributeSelect />}
            />
            <Input
              {...register(`attributes.${index}.value`)}
              className="flex-1"
            />
            <Button
              type="primary"
              danger
              htmlType="button"
              onClick={() => remove(index)}
            >
              Xoá
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attributes;
