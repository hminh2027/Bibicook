import { Button, Input, Radio, Typography } from "antd";
import { Editor } from "../lib/ReactQuillEditor";
import { Attributes, ImageUpload, SubImage } from "./ProductInput/index";
import { useForm, Controller } from "react-hook-form";
const { Title } = Typography;
const { TextArea } = Input;
export const ProductCreate = () => {
  const { control, handleSubmit } = useForm();
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
          <Attributes />
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
              render={({ field }) => (
                <Radio.Group {...field} className="flex flex-col gap-1">
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                  <Radio value={3}>C</Radio>
                  <Radio value={4}>D</Radio>
                </Radio.Group>
              )}
            />
          </div>
        </section>
        <section className="card">
          <Title level={4}>Ảnh chính</Title>
          <ImageUpload curImage="" />
        </section>
        <section className="card">
          <Title level={4}>Ảnh phụ</Title>
          <SubImage />
        </section>
      </div>
      <div>
        <Button size="large" type="primary" htmlType="submit">
          Tạo
        </Button>
      </div>
    </form>
  );
};

export default ProductCreate;
