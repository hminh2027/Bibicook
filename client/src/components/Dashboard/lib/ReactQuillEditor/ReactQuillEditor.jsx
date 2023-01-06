import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });
export const ReactQuillEditor = (props) => {
  return <ReactQuill theme="snow" {...props} />;
};
