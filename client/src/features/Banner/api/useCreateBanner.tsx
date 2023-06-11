import { authClient } from "@/lib/api-client";

export const createBanner = ({ data }: { data: FormData }): Promise<any> => {
  return authClient.postForm(`/media`, data);
};

export const useCreateBanner = () => {};
