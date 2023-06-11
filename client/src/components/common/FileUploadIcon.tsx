import { CSSProperties } from "react";
import { FaFileUpload } from "react-icons/fa";
interface Props {
  className?: string;
  style?: CSSProperties;
}
export default function FileUploadIcon({ className, style }: Props) {
  return <FaFileUpload fontSize={"5rem"} className={className} style={style} />;
}
