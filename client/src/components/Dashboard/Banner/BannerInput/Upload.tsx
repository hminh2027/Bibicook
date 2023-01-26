import { Button, InputNumber } from "antd";
import axios from "axios";
import { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { mediaEndpoint } from "../../../../services/endpoint/media";

// interface Props {
//   url?: string;
//   index?: number;
// }

export const Upload = ({ control, index, onRemove, register, field }) => {
  const [file, setFile] = useState(field);
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };
  const { onChange, ref, value, name } = register(`banners.${index}.url`);
  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("media", file);
    try {
      const res = await mediaEndpoint.post(formData);
      setFile(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const uploadBtn = (
    <Button className="w-full" onClick={handleClick}>
      Upload
    </Button>
  );
  const showFile = (
    <div className="flex flex-col">
      <img onClick={handleClick} className="h-[200px]" src={file.url} />
      <div>{file?.name}</div>
    </div>
  );
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex">
        {file.url ? showFile : uploadBtn}
        <input
          type="file"
          onChange={(e) => {
            onFileSelected(e);
            onChange(e);
          }}
          ref={(el) => {
            inputRef.current = el;
            ref(el);
          }}
          name={name}
          style={{ display: "none" }}
          value={value}
        />
      </div>

      <div className="w-[120px]">
        <Button className="w-full" onClick={onRemove} danger>
          Xoá
        </Button>
      </div>
    </div>
  );
};

export default Upload;
