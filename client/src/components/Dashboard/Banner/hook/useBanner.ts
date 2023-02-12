import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { bannerEndpoint } from "../../../../services/endpoint";
import { BannerType } from "../type";

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
