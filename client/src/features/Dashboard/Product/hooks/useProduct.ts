import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productEndpoint } from "../../../../services/endpoint";

export const useQueryProduct = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productEndpoint.get,
  });
  return { products, isLoading, isError };
};
export const useQueryProductBySlug = (slug) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", slug],
    queryFn: () => productEndpoint.getBySlug(slug),
  });
  return { product, isLoading, isError };
};
export const useMutateProductBySlug = (
  slug,
  onSuccess = () => {},
  onError = () => {}
) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (data: any) => productEndpoint.update(data, slug),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries(["products", slug]);
    },
    onError,
  });
  const mutateProduct = (data) => mutate(data);
  return { mutateProduct, isMutating: isLoading, isError };
};
export const usePostProduct = (onSuccess = () => {}, onError = () => {}) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (data) => productEndpoint.post(data),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries(["products"]);
    },
    onError,
  });
  const postProduct = (data) => mutate(data);
  return { postProduct, isPosting: isLoading, isError };
};
export const useRemoveProduct = (
  slug,
  onSuccess = () => {},
  onError = () => {}
) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: () => productEndpoint.delete(slug),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries(["products"]);
    },
    onError,
  });
  const removeProduct = () => mutate();
  return { removeProduct, isRemoving: isLoading, isError };
};
