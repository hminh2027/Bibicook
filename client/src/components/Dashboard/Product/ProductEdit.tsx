import React from "react";
import { Button, Input, Radio, Select, Typography, Upload } from "antd";
import { Editor } from "../lib/ReactQuillEditor";
const { Title } = Typography;
const { TextArea } = Input;
export const ProductEdit = () => {
  return (
    <div className="grid gap-4 grid-cols-12">
      <div className="flex flex-col gap-4 col-span-8 md:col-span-8">
        <section>
          <Title level={4}>Tên sản phẩm</Title>
          <Input size="large" />
        </section>
        <section>
          <div className="flex justify-between">
            <Title level={4}>Thuộc tính</Title>
            <Button type="primary">Thêm</Button>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <Select
                className="w-[200px]"
                placeholder="Chọn thuộc tính"
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <div className="flex gap-2">
                      <Input
                        placeholder="Tên thuộc tính"
                        // ref={inputRef}
                        // value={name}
                        // onChange={onNameChange}
                      />
                      <Button
                        type="primary"
                        //   onClick={addItem}
                      >
                        Thêm
                      </Button>
                    </div>
                  </>
                )}
                options={["Hello"].map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
              <Input className="flex-1" />
              <Button type="primary" danger htmlType="button">
                Xoá
              </Button>
            </div>
          </div>
        </section>
        <section>
          <Title level={4}>Mô tả ngắn</Title>
          <TextArea />
        </section>
        <section>
          <Title level={4}>Mô tả</Title>
          <div className="">
            <Editor />
          </div>
        </section>
      </div>
      <div className="flex flex-col gap-4 col-span-4 md:col-span-4">
        <section>
          <Title level={4}>Danh mục</Title>
          <div>
            <Radio.Group className="flex flex-col gap-1">
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
          </div>
        </section>
        <section>
          <Title level={4}>Ảnh chính</Title>

          <div className="overflow-hidden cursor-pointer">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              defaultFileList={[]}
              maxCount={1}
            >
              <img
                src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/o-creating-circular-image-in-flutter.png?w=950&ssl=1"
                className="w-[300px] h-[300px] object-cover rounded-md"
              />
            </Upload>
          </div>
        </section>
        <section>
          <div className="flex flex-col">
            <Title level={4}>Ảnh phụ</Title>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              defaultFileList={[]}
              className="upload-list-inline"
            >
              <Button>Upload</Button>
            </Upload>
          </div>
          <div className="flex gap-2 flex-wrap overflow-hidden">
            <img
              className="w-[100px] h-[100px] object-cover "
              src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/o-creating-circular-image-in-flutter.png?w=950&ssl=1"
            />
          </div>
        </section>
      </div>
      <div>Nút</div>
    </div>
  );
};

export default ProductEdit;
