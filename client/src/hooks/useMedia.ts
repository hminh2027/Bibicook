import { useQuery } from "@tanstack/react-query";
import React from "react";
import { mediaEndpoint } from "../services/endpoint/media";

const useMedia = () => {
  const { data } = useQuery({
    queryKey: ["media"],
    queryFn: mediaEndpoint.get,
  });
  return { data };
};

export default useMedia;
