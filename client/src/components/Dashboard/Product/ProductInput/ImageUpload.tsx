import { Upload, Typography, UploadFile, Button } from "antd";
import { useHover, useHoverDirty } from "react-use";
import { AiFillEdit, AiFillFileAdd, AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { mediaEndpoint } from "../../../../services/endpoint/media";
interface Props {
  previewSize?: number;
  endpoint: string;
}

export const ImageUpload = ({
  name,
  index,
  onRemove,
  register,
  field,
  setValue,
}) => {
  const [image, setImage] = useState(field);
  const inputRef = useRef(null);
  useEffect(() => {
    if (image.url) setValue(`${name}`, image?.url);
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
      setImage(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[100px] h-[100px] relative">
      <div>
        <input
          type="file"
          onChange={onFileSelected}
          ref={inputRef}
          style={{ display: "none" }}
        />
        <input
          type="text"
          {...register(`medias.${index}.url`)}
          style={{ display: "none" }}
        />
      </div>
      <Button
        danger
        icon={<AiOutlineClose fontSize={"20px"} />}
        className="absolute top-0 right-0 hover:bg-red-200"
        onClick={onRemove}
      ></Button>
      <div
        className="grid place-items-center h-full cursor-pointer "
        onClick={handleClick}
      >
        {image.url ? (
          <img className="w-full" src={image.url} />
        ) : (
          <AiFillFileAdd fontSize={"32px"} />
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
