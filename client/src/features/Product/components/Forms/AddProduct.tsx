import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import useStep from "../../context/useStep";
import { Flex, Button } from "@chakra-ui/react";

interface Props {}

function AddProductForm({}: Props) {
  const methods = useForm();
  const { steps, curStep, inc, dec } = useStep();
  const CurrentStepComponent = steps[curStep]?.item;
  return (
    <FormProvider {...methods}>
      <Flex w={"100%"} direction={"column"} gap={8}>
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
