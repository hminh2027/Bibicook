import { Upload, Typography, UploadFile, Button } from "antd";
import { useHover, useHoverDirty } from "react-use";
import { AiFillEdit } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { mediaEndpoint } from "../../../../services/endpoint/media";
interface Props {
  previewSize?: number;
  endpoint: string;
}

export const ImageUpload = ({
  previewSize = 200,
  index,
  onRemove,
  register,
  field,
  setValue,
}) => {
  const [image, setImage] = useState(field);
  const inputRef = useRef(null);
  useEffect(() => {
    if (image.url) setValue(`images.${index}.url`, image?.url);
  }, [image]);
  const handleClick = () => {
    inputRef.current.click();
  };

  const onFileSelected = async (e) => {
    const fileToUpload = e.target.files[0];
    const formData = new FormData();
    formData.append("media", fileToUpload);

    try {
      const res = await mediaEndpoint.post(formData);
      console.log(res);
      setImage(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cursor-pointer w-[100px]" onClick={handleClick}>
      <div>
        <input
          type="file"
          onChange={onFileSelected}
          ref={inputRef}
          style={{ display: "none" }}
        />
        <input
          type="text"
          {...register(`images.${index}.url`)}
          style={{ display: "none" }}
        />
      </div>
      <div className="">
        {image && (
          <img
            className="w-full"
            src={image.url}
            // crossOrigin="anonymous"
          />
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
