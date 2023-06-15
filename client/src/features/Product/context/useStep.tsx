import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const StepContext = createContext(null);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(0);
  const next = useCallback(() =>
    setStep((prev) => {
      if (prev >= 5) return prev;
      return prev + 1;
    })
  []);
  const value = useMemo(
    () => ({
      step,
      next,
    }),
    [step, next]
  );
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
export default function useStep() {
  return useContext(StepContext);
}
