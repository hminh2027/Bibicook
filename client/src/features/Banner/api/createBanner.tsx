import { privateClient } from "@/lib/api-client";
import { queryClient } from "@/lib/react-query";
import { generateOptimisticID } from "@/utils/random";
import { useMutation } from "@tanstack/react-query";

export const createBanner = ({ data }: { data: FormData }): Promise<any> => {
  return privateClient.postForm(`/media`, data);
};

export const useCreateBanner = () => {
  return useMutation({
    onMutate: async (newBanner) => {
      await queryClient.cancelQueries({ queryKey: ["banners"] });

      // Create optimistic
      const optimisticBanner = {
        id: generateOptimisticID(),
        url: "https://placehold.co/600x400",
      };
      console.log("NEW BANNER IN OPTIMISTIC UPDATE", optimisticBanner);

      // Add optimistic todo to todos list
      queryClient.setQueryData(["banners"], (old: any = []) => [
        ...old,
        optimisticBanner,
      ]);

      return { optimisticBanner };
    },
    onError: (error, variables, context) => {
      // Remove optimistic todo from the todos list
      queryClient.setQueryData(["banners"], (old: any) =>
        old.filter((banner: any) => banner.id !== context?.optimisticBanner.id)
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["banners"]);
    },
    mutationFn: createBanner,
  });
};
