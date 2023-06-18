import { ReactNode, createContext, useContext, useMemo } from "react";
import { useCounter } from "react-use";
import { StepListType } from "../constant";

interface StepContextType {
  list: StepListType;
  curStep: number;
  inc: (step?: number) => void;
  dec: (step?: number) => void;
  set: (step: number) => void;
  reset: () => void;
}
const StepContext = createContext<StepContextType>(null!);

export const StepProvider = ({
  children,
  list,
}: {
  children: ReactNode;
  list: StepListType;
}) => {
  const [curStep, { inc, dec, set, reset }] = useCounter(
    0,
    list.items.length - 1,
    0
  );
  const value = useMemo(
    () => ({
      list,
      curStep,
      inc,
      dec,
      set,
      reset,
    }),
    [curStep, inc, dec, set, reset, list]
  );
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
export default function useStep() {
  const stepContext = useContext(StepContext);
  if (!StepContext) {
    throw new Error("useStep has to be used within <StepProvider>");
  }
  return stepContext;
}
