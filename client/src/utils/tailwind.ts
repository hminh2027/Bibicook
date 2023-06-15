import { twMerge } from "tailwind-merge";

export const mergeClass = (string1: string, string2: string, ...rest) => {
  return twMerge(string1, string2, ...rest);
};
