import { FC } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Editor: FC<any> = (props) => {
  return <ReactQuill theme="snow" {...props} />;
};
export default Editor;
