import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  mutationFn: any;
  queryKey: string[];
}

export const useQueryMutate = ({ mutationFn, queryKey }: Props) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(queryKey);
    },
  });
  return mutation;
};
export default useQueryMutate;
