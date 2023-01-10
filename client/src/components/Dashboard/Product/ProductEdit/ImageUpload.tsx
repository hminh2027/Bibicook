import { Upload, Typography, UploadFile } from "antd";
import { useHover, useHoverDirty } from "react-use";
import { AiFillEdit } from "react-icons/ai";
import { useRef, useState } from "react";
interface Props {
  previewSize?: number;
  endpoint: string;
}

export const ImageUpload = ({
  previewSize = 200,
  endpoint = "https://www.mocky.io/v2/5cc8019d300000980a055e76",
}) => {
  const preview = useRef();
  const isHovering = useHoverDirty(preview);
  const [imgScr, setImgScr] = useState(
    "https://hibabi.vn/bebecook/2021/12/banh-bi-bebecook-vi-bap-phomai-600x600.png"
  );
  const handleUploadChange = ({ file }: { file: UploadFile }) => {
    console.log(file);
  };
  return (
    <div className="overflow-hidden rounded-sm cursor-pointer">
      <Upload
        action={endpoint}
        listType="picture"
        defaultFileList={[]}
        maxCount={1}
        accept="image/png, image/jpeg"
        onChange={handleUploadChange}
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
            src={imgScr}
            width={previewSize}
            height={previewSize}
            className="object-cover rounded-md"
          />
        </div>
      </Upload>
    </div>
  );
};

export default ImageUpload;
