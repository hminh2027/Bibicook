import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { bannerEndpoint } from "../../../../services/endpoint";

export const useGetBanner = () => {
  const {
    data: banners,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["banner"],
    queryFn: bannerEndpoint.get,
  });

  return { banners, isLoading, isError };
};
export const usePostBanner = (onSuccess, onError) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (data) => bannerEndpoint.post(data),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries(["banner"]);
    },
    onError,
  });
  const postBanner = (data) => mutate(data);
  return { postBanner, isLoading, isError };
};
