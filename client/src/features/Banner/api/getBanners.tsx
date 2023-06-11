import { privateClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

const getBanners = () => privateClient.get("/banners");

export const useGetBanners = () => {
  return useQuery({
    queryKey: ["banners"],
    queryFn: () => getBanners(),
  });
};
