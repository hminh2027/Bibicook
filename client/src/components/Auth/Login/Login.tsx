import React, { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import { useAuth } from "../Context";

interface Props {
  title?: string;
}
const { Title, Text } = Typography;
export const Login = ({ title = "BVN" }: Props) => {
  const [isLogging, setIsLogging] = useState(false);
  const { login } = useAuth();
  const handleSubmit = async (data) => {
    try {
      setIsLogging(true);
      await login(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLogging(false);
    }
  };
  return (
    <Form
      onFinish={handleSubmit}
      className="card flex flex-col w-[300px] md:w-[500px]"
    >
      <div className="text-center">
        <img src="/logo.png" width={80} />
      </div>
      <Title level={5}>Chào mừng tới {title} 😀!</Title>
      <Text>Bạn đang đăng nhập vào trang quản lý!</Text>
      <Form.Item
        label={<div className="w-[100px]">Tên đăng nhập </div>}
        name="username"
        rules={[{ required: true, message: "Hãy điền tên đăng nhập" }]}
      >
        <Input placeholder="Tên tài khoản" className="flex-1" />
      </Form.Item>
      <Form.Item
        label={<div className="w-[100px]">Mật khẩu </div>}
        name="password"
        rules={[{ required: true, message: "Hãy điền mật khẩu" }]}
      >
        <Input.Password placeholder="Mật khẩu" className="flex-1" />
      </Form.Item>
      <Button
        type="primary"
        className="btn-bvn"
        disabled={isLogging ? true : false}
        htmlType="submit"
      >
        Đăng nhập
      </Button>
    </Form>
  );
};

export default Login;
