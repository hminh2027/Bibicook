import { Button, Input, Radio, Typography } from "antd";
import { Editor } from "../../lib/ReactQuillEditor";
import { Attributes } from "../Attribute";
import Images from "./Images";
import { useForm, Controller } from "react-hook-form";
import CategoryRadioList from "./CategoryRadioList";
import { usePostProduct } from "../hooks";
const { Title, Text } = Typography;
const { TextArea } = Input;
export const CreateForm = () => {
  const { postProduct, isPosting, isError } = usePostProduct();
  const { control, handleSubmit, register, setValue } = useForm({
    defaultValues: {
      name: "",
      shortDesc: "",
      longDesc: "",
      categorySlug: 0,
      attributes: [
        {
          slug: "",
          value: "",
        },
      ],
      medias: [{ url: "" }],
    },
  });
  const onSubmit = (data) => {
    postProduct(data);
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
            render={({ field }) => <Attributes control={control} {...field} />}
          />
        </section>
        <section className="card">
          <Title level={4}>Mô tả ngắn</Title>
          <Controller
            control={control}
            name="shortDesc"
            render={({ field }) => (
              <TextArea size="large" rows={6} {...field} />
            )}
          />
        </section>
        <section className="card">
          <Title level={4}>Mô tả</Title>
          <Controller
            control={control}
            name="longDesc"
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
              name="categorySlug"
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
            name="medias"
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
          disabled={isPosting}
        >
          Tạo
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
