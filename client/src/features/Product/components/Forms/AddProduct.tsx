import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BasicInfo from "./BasicInfo";
import ImagesUpload from "./ImagesUpload";
import { Button, Flex } from "@chakra-ui/react";

interface Props {}
function AddProductForm({}: Props) {
  const methods = useForm();
  const [step, setStep] = useState(0);
  const renderStep = () => {
    switch (step) {
      case 0:
        return <BasicInfo />;
      case 1:
        return <ImagesUpload />;

      default:
        return <BasicInfo />;
    }
  };
  return (
    <FormProvider {...methods}>
      {renderStep()}
      <Flex justifyContent={"end"} alignItems={"center"}>
        <Button onClick={() => setStep((prev) => prev - 1)}>Trước</Button>
        <Button onClick={() => setStep((prev) => prev + 1)}>Sau</Button>
      </Flex>
    </FormProvider>
  );
}
export default AddProductForm;
