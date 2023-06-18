import { ReactNode, createContext, useContext, useMemo } from "react";
import { useToggle } from "react-use";

interface CollapsibleContextType {
  isCollapsing: boolean;
  toggle: (status?: boolean) => void;
}
const CollapsibleContext = createContext<CollapsibleContextType>(null!);

export const CollapsibleProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsing, toggle] = useToggle(false);
  const value = useMemo(
    () => ({
      isCollapsing,
      toggle,
    }),
    [isCollapsing, toggle]
  );
  return (
    <CollapsibleContext.Provider value={value}>
      {children}
    </CollapsibleContext.Provider>
  );
};
export default function useCollapsible() {
  const collapsibleContext = useContext(CollapsibleContext);
  if (!collapsibleContext) {
    throw new Error(
      "useCollapsible has to be used within <CollapsibleProvider>"
    );
  }
  return collapsibleContext;
}
