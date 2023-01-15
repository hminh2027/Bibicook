import { Button } from "antd";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

interface Props {}

export const Upload = (props: Props) => {
  const { register, watch } = useForm();
  const inputRef = useRef(null);
  const { onChange, name, ref } = register("file");
  const handleClick = (event) => {
    inputRef.current.click();
  };

  const files = watch("file");
  const getInputFiles = () => {
    const formData = new FormData();
    if (files)
      for (let i = 0; i < files.length; i++) {
        formData.append("image", files[i]);
      }
    return formData;
  };
  useEffect(() => {
    const formData = getInputFiles();
    (async () => {
      const res = await fetch("localhost:8000/api/banner/create", {
        body: formData,
        method: "POST",
      });
      console.log(res);
    })();
    return () => {
      // second;
    };
  }, [files]);
  console.log(files);

  return (
    <div>
      <Button onClick={handleClick}>Upload</Button>
      <input
        type="file"
        onChange={onChange}
        name={name}
        ref={(el) => {
          inputRef.current = el;
          ref(el);
        }}
        multiple
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Upload;
