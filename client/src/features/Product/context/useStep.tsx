import { ReactNode, createContext, useContext, useMemo } from "react";
import { useCounter } from "react-use";
import { Step } from "../constant";

const StepContext = createContext(null);

export const StepProvider = ({
  children,
  steps,
}: {
  children: ReactNode;
  steps: Step[];
}) => {
  const [curStep, { inc, dec, set, reset }] = useCounter(
    0,
    steps.length - 1,
    0
  );
  const value = useMemo(
    () => ({
      steps,
      curStep,
      inc,
      dec,
      set,
      reset,
    }),
    [curStep, inc, dec, set, reset]
  );
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
export default function useStep() {
  return useContext(StepContext);
}
