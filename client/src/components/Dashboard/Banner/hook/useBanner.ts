import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { bannerEndpoint } from "../../../../services/endpoint";
import { BannerType } from "../type";

export const useGetBanner = () => {
  const {
    data: banners,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: bannerEndpoint.get,
  });

  return { banners, isLoading, isError };
};
export const usePostBanner = (onSuccess?: () => {}, onError?: () => {}) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (data) => bannerEndpoint.post(data),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries(["banners"]);
    },
    onError,
  });
  const postBanner = (data) => mutate(data);
  return { postBanner, isLoading, isError };
};
export const useRemoveBanner = (id, onSuccess: () => {}, onError: () => {}) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: () => bannerEndpoint.remove(id),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries(["banners"]);
    },
    onError,
  });
  const removeBanner = () => mutate();
  return { removeBanner, isRemoving: isLoading, isError };
};
