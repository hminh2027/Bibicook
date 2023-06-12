import { privateClient } from "@/lib/api-client";
import { queryClient } from "@/lib/react-query";
import { generateOptimisticID } from "@/utils/random";
import { useMutation } from "@tanstack/react-query";

export interface CreateCategoryDTO {
  name: string;
}

export const createCategory = ({ name }: CreateCategoryDTO): Promise<any> => {
  return privateClient.post(`/category`, { name });
};

export const useCreateCategory = () => {
  return useMutation({
    onMutate: async (newCategory) => {
      await queryClient.cancelQueries({ queryKey: ["categories"] });

      // Create optimistic
      const optimistic = {
        id: generateOptimisticID(),
        name: newCategory.name,
      };
      console.log("NEW CATEGORY IN OPTIMISTIC UPDATE", optimistic);

      // Add optimistic
      queryClient.setQueryData(["categories"], (old: any = []) => [
        ...old,
        optimistic,
      ]);

      return { optimistic };
    },
    onError: (error, variables, context) => {
      // Remove optimistic
      queryClient.setQueryData(["categories"], (old: any) =>
        old.filter((item: any) => item.name !== context?.optimistic.name)
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
    mutationFn: createCategory,
  });
};
