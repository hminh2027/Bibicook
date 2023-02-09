import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { categoryEndpoint } from "../../../../services/endpoint";

export const useQueryCategory = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["category"],
    queryFn: categoryEndpoint.get,
  });

  return { categories, isLoading, isError };
};
export const useMutateCategory = (onSuccess = () => {}, onError = () => {}) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (data) => categoryEndpoint.post(data),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries(["category"]);
    },
    onError,
  });
  const postCategory = (data) => mutate(data);
  return { postCategory, isLoading, isError };
};
