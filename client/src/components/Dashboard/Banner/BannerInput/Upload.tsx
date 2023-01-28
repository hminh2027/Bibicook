import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { mediaEndpoint } from "../../../../services/endpoint/media";

// interface Props {
//   url?: string;
//   index?: number;
// }

export const Upload = ({ index, onRemove, register, field, setValue }) => {
  const [file, setFile] = useState(field);
  const inputRef = useRef(null);
  useEffect(() => {
    if (file.url) setValue(`banners.${index}.url`, file?.url);
  }, [file]);

  const handleClick = () => {
    inputRef.current.click();
  };
  const onFileSelected = async (e) => {
    const fileToUpload = e.target.files[0];
    const formData = new FormData();
    formData.append("media", fileToUpload);

    try {
      const res = await mediaEndpoint.post(formData);
      setFile(res);
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
          onChange={onFileSelected}
          ref={inputRef}
          style={{ display: "none" }}
        />
        <input
          type="text"
          {...register(`banners.${index}.url`)}
          style={{ display: "none" }}
        />
      </div>

      <Button className="w-full" onClick={onRemove} danger>
        Xoá
      </Button>
    </div>
  );
};

export default Upload;
