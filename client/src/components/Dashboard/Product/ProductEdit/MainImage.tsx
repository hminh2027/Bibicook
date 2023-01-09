import { Upload, Typography } from "antd";
import { useHover, useHoverDirty } from "react-use";
import { AiFillEdit } from "react-icons/ai";
import { useRef } from "react";
const { Title } = Typography;
interface Props {}

export const MainImage = (props: Props) => {
  const preview = useRef();
  const isHovering = useHoverDirty(preview);
  return (
    <div>
      <Title level={4}>Ảnh chính</Title>
      <div className="overflow-hidden rounded-sm cursor-pointer">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          defaultFileList={[]}
          maxCount={1}
          accept="image/png, image/jpeg"
          // itemRender={() => {}}
        >
          <div className="relative" ref={preview}>
            <div
              className={`${
                isHovering ? "" : "hidden"
              } absolute grid place-items-center w-full h-full bg-slate-300 opacity-80 rounded-md `}
            >
              <AiFillEdit className="text-blue-600 text-6xl p-4 rounded-full bg-blue-300" />
            </div>
            <img
              src="https://hibabi.vn/bebecook/2021/12/banh-bi-bebecook-vi-bap-phomai-600x600.png"
              className="w-[200px] h-[200px] object-cover rounded-md"
            />
          </div>
        </Upload>
      </div>
    </div>
  );
};

export default MainImage;
