import { privateClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

const getCategories = () => privateClient.get("/category");

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
};
