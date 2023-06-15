import FileUploadIcon from "@/components/common/FileUploadIcon";
import { useDropzone } from "react-dropzone";

export default function ImagesUpload() {
  const onDrop = (acceptedFiles: Array<File>) => {};
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      className="bg-slate-100 flex items-center flex-col gap-4 p-4 rounded-sm"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <FileUploadIcon className={isDragActive ? "text-blue-500" : ""} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
