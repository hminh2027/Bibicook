import { createStandaloneToast } from "@chakra-ui/react";
import { AxiosResponse } from "axios";

const { toast } = createStandaloneToast();

const onSuccess = (response: AxiosResponse<any, any>) => {
  return response.data;
};
const onError = (error: any) => {
  const message = error.response?.data?.message || error.message;
  toast({
    status: "error",
    title: "Error",
    description: message,
  });

  return Promise.reject(error);
};
export { onError, onSuccess };
