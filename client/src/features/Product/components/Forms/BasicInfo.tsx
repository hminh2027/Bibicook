import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface Props {}
export default function BasicInfo({}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <VStack>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">Tên</FormLabel>
        <Input id={"name"} {...register("name")} />
        <FormErrorMessage>
          {errors?.name && errors?.name?.message}
        </FormErrorMessage>
      </FormControl>
    </VStack>
  );
}
