import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { productEndpoint } from "../../../../services/endpoint";

export const useQueryProduct = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productEndpoint.get,
  });
  return { products, isLoading, isError };
};
export const usePostProduct = (onSuccess = () => {}, onError = () => {}) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (data) => productEndpoint.post(data),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries(["products"]);
    },
    onError,
  });
  const postProduct = (data) => mutate(data);
  return { postProduct, isPosting: isLoading, isError };
};
