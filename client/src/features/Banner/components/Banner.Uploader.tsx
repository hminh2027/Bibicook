import FileUploadIcon from "@/components/common/FileUploadIcon";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
interface Props {}
export default function BannerUploader({}: Props) {
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    // Do something with the files
    const formData = new FormData();
    for (const file of acceptedFiles) {
      formData.append("files", file);
    }
    console.log(formData);
  }, []);
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
