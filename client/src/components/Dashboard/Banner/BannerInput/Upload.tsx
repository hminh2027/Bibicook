import { Button, InputNumber } from "antd";
import { useRef, useState } from "react";
import { Controller } from "react-hook-form";

// interface Props {
//   url?: string;
//   index?: number;
// }

export const Upload = ({ control, index, onRemove, register, field }) => {
  const [fileName, setFileName] = useState(field.url);
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };
  const { onChange, ref, value, name } = register(`banners.${index}.url`);
  const onFileSelected = async (e) => {
    const { name } = e.target.files[0];
    setFileName(name);
    // setFile(e.target.files[0]);
  };
  const uploadBtn = (
    <Button className="w-full" onClick={handleClick}>
      Upload
    </Button>
  );
  const showFileName = <div onClick={handleClick}>{fileName}</div>;
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <div className="">
          {fileName ? showFileName : uploadBtn}
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

        <div className="flex items-center  gap-2">
          <div className="">Thứ tự: </div>
          <Controller
            control={control}
            name={`banners.${index}.index`}
            render={({ field }) => <InputNumber type="number" {...field} />}
          />
        </div>
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
