import { Button, Input, Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {}

export const CreateForm = (props: Props) => {
  const onSubmit = (data) => {
    console.log(data);
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
      <Button type="primary" htmlType="submit" className="btn-success">
        Thêm
      </Button>
    </Form>
  );
};

export default CreateForm;
