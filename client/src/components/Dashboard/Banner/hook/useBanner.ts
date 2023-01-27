import { useQuery } from "@tanstack/react-query";
import React from "react";
import { bannerEndpoint } from "../../../../services/endpoint";

export const useBanner = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["banner"],
    queryFn: bannerEndpoint.get,
  });
  return { data, isLoading, isError };
};

export default useBanner;
