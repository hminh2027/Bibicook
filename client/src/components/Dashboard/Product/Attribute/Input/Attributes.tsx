import { Button, Input, Typography } from "antd";
import { useFieldArray, Controller } from "react-hook-form";
import { AttributeSelect } from "./AttributeSelect";

const { Title } = Typography;
export const Attributes = ({ control }) => {
  const { append, remove, fields } = useFieldArray({
    control,
    name: "attributes",
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Title level={4}>Thuộc tính</Title>
        <Button
          type="primary"
          onClick={() =>
            append({
              slug: "",
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
              name={`attributes.${index}.slug`}
              render={({ field }) => <AttributeSelect {...field} />}
            />
            <Controller
              control={control}
              name={`attributes.${index}.value`}
              render={({ field }) => <Input className="flex-1" {...field} />}
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
    </div>
  );
};

export default Attributes;
