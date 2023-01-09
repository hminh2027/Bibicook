import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Spin } from "antd";
import React, { FC } from "react";

interface Props {
  queryKey: string[];
  queryFn: any;
  Component: FC<any>;
}

export const withSpinner = ({ queryKey, queryFn, Component }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey,
    queryFn,
  });
  if (isLoading) return <Spin />;
  if (isError) {
    console.log(`error while fetching ${queryFn}`);
    // return <div></div>;
    return <Spin />;
  }
  return <Component data={data} />;
};

export default withSpinner;
