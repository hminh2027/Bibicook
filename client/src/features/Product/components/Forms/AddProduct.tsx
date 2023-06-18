import { ReactStyle } from "@/types";
import { Button, Flex } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import useStep from "../../context/useStep";

interface AddProductFormProps extends ReactStyle {}

function AddProductForm({ className, style }: AddProductFormProps) {
  const methods = useForm();
  const {
    list: { items },
    curStep,
    inc,
    dec,
  } = useStep();
  const CurrentStepComponent = items[curStep]?.item;
  return (
    <FormProvider {...methods}>
      <Flex
        w={"100%"}
        direction={"column"}
        gap={8}
        className={className}
        style={style}
      >
        {CurrentStepComponent && <CurrentStepComponent />}
        <Flex justifyContent={"end"} alignItems={"center"} gap={4}>
          <Button onClick={() => dec()}>Trước</Button>
          <Button onClick={() => inc()}>Sau</Button>
        </Flex>
      </Flex>
    </FormProvider>
  );
}
export default AddProductForm;
