import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { bannerEndpoint } from "../../../../services/endpoint";

export const useGetBanner = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["banner"],
    queryFn: bannerEndpoint.get,
  });

  return { data, isLoading, isError };
};
export const usePostBanner = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data) => bannerEndpoint.post(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["banner"]);
    },
  });
  const postBanner = (data) => mutate(data);
  return { postBanner };
};
