import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Flex,
  VStack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateCategory } from "../api/createCategory";

const CategoryCreateForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const { mutate } = useCreateCategory();
  const onSubmit = async (value: any) => {
    const { name } = value;
    mutate({ name });
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={"column"} gap={"8px"}>
        <FormControl
          isInvalid={Boolean(errors?.name)}
          isRequired
          isDisabled={isSubmitting}
        >
          <FormLabel htmlFor="name">Tên danh mục</FormLabel>
          <Input
            id="name"
            placeholder="Tên danh mục"
            {...register("name", {
              required: "Cần nhập trường này",
              minLength: { value: 1, message: "Độ dài ít nhất là 1" },
            })}
          />
          <FormErrorMessage>
            {errors?.name?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
        <Flex justifyContent={"end"}>
          <Button colorScheme={"green"} type="submit" isDisabled={isSubmitting}>
            <Flex gap={2} alignItems={"center"}>
              {isSubmitting && <Spinner size={"sm"} />} <Text>Thêm</Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default CategoryCreateForm;
