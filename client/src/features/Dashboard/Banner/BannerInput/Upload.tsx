import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { mediaEndpoint } from "../../../../services/endpoint/media";

export const Upload = ({ index, onRemove, register, field, setValue }) => {
  const [file, setFile] = useState(field);
  const inputRef = useRef(null);
  useEffect(() => {
    if (file?.url) setValue(`banners.${index}.url`, file?.url);
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
      setFile(res.data);
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
    <div className="grid place-items-center overflow-hidden object-cover">
      <img onClick={handleClick} className="w-full " src={file.url} />
    </div>
  );
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="grid grid-cols-1">
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
