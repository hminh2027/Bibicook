import Attribute from "../components/Forms/Attribute";
import { BasicInfo } from "../components/Forms/BasicInfo";
import ImagesUpload from "../components/Forms/ImagesUpload";

export interface Step {
  label: string;
  item: React.ComponentType;
}
export const CreateSteps: Step[] = [
  {
    label: "Thông tin cơ bản",
    item: BasicInfo,
  },
  {
    label: "Thuộc tính",
    item: Attribute,
  },
  {
    label: "Ảnh",
    item: ImagesUpload,
  },
];
export const CreateStepList = {
  label: "Tạo sản phẩm",
  items: CreateSteps,
};
export type StepListType = typeof CreateStepList;
