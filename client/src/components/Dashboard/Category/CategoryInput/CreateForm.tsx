import { Button, Input, Form } from "antd";
import { usePostCategory } from "../hook";
import { useState } from "react";

interface Props {}

export const CreateForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { postCategory } = usePostCategory();
  const onSubmit = (data) => {
    setIsSubmitting(true);
    postCategory(data);
    setIsSubmitting(false);
  };
  return (
    <Form onFinish={onSubmit} layout="vertical" className="flex flex-col">
      <Form.Item
        label="Tên danh mục"
        name="name"
        rules={[{ required: true, message: "Nhập tên danh mục" }]}
      >
        <Input placeholder="Tên danh mục" />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="btn-success"
        disabled={isSubmitting}
      >
        Thêm
      </Button>
    </Form>
  );
};

export default CreateForm;
