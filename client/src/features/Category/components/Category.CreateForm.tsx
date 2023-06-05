import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={"column"} gap={"8px"}>
        <FormControl isInvalid={Boolean(errors?.name)} isRequired>
          <FormLabel htmlFor="name">Category name</FormLabel>
          <Input
            id="name"
            placeholder="Category name"
            {...register("name", {
              required: "This is required",
              minLength: { value: 1, message: "Minimum length should be 1" },
            })}
          />
          <FormErrorMessage>
            {errors?.name?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
        <Flex justifyContent={"end"}>
          <Button colorScheme={"green"}>Add</Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default CategoryCreateForm;
