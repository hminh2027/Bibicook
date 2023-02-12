import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { attributeEnpoint } from "./../../../../../services/endpoint/attribute";

export const useQueryAttribute = () => {
  const {
    data: attributes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["attributes"],
    queryFn: attributeEnpoint.get,
  });
  return { attributes, isLoading, isError };
};
export const useMutateAttribute = (
  onSuccess = () => {},
  onError = () => {}
) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (data) => attributeEnpoint.post(data),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries(["attributes"]);
    },
    onError,
  });
  const postAttribute = (data) => mutate(data);
  return { postAttribute, isPosting: isLoading, isError };
};
