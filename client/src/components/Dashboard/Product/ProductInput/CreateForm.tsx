import { Button, Input, Radio, Typography } from "antd";
import { Editor } from "../../lib/ReactQuillEditor";
import { Attributes } from "../Attribute";
import Images from "./Images";
import { useForm, Controller } from "react-hook-form";
import CategoryRadioList from "./CategoryRadioList";
const { Title, Text } = Typography;
const { TextArea } = Input;
export const CreateForm = () => {
  const { control, handleSubmit, register, setValue } = useForm({
    defaultValues: {
      name: "",
      shortDescription: "",
      description: "",
      category: 0,
      attributes: [
        {
          id: 0,
          value: "",
        },
      ],
      images: [{ url: "" }],
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 grid-cols-12">
      <div className="flex flex-col gap-4 col-span-8 md:col-span-8">
        <section className="card">
          <Title level={4}>Tên sản phẩm</Title>
          <Controller
            control={control}
            name="name"
            render={({ field }) => <Input size="large" {...field} />}
          />
        </section>
        <section className="card">
          <Controller
            control={control}
            name="attributes"
            render={({ field }) => (
              <Attributes control={control} register={register} {...field} />
            )}
          />
        </section>
        <section className="card">
          <Title level={4}>Mô tả ngắn</Title>
          <Controller
            control={control}
            name="shortDescription"
            render={({ field }) => <TextArea size="large" {...field} />}
          />
        </section>
        <section className="card">
          <Title level={4}>Mô tả</Title>
          <Controller
            control={control}
            name="description"
            render={({ field }) => <Editor {...field} />}
          />
        </section>
      </div>
      <div className="flex flex-col gap-4 col-span-4 md:col-span-4">
        <section className="card">
          <Title level={4}>Danh mục</Title>
          <div>
            <Controller
              control={control}
              name="category"
              render={({ field }) => <CategoryRadioList {...field} />}
            />
          </div>
        </section>

        <section className="flex flex-col gap-2 card">
          <div className="flex gap-2 items-baseline">
            <Title level={4}>Ảnh</Title>
            <Text>(Ảnh đầu là ảnh chính)</Text>
          </div>
          <Controller
            name="images"
            control={control}
            render={({ field }) => (
              <Images
                control={control}
                register={register}
                setValue={setValue}
                {...field}
              />
            )}
          />
        </section>
      </div>
      <div className="flex col-span-12">
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          className="flex-1 btn-success"
        >
          Tạo
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
