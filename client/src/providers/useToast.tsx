import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config: ToastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  theme: "colored",
};

const ToastContext = createContext<{
  makeToast: (body: string, type: string) => void;
} | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const makeToast = useCallback((body: string, type: string) => {
    switch (type) {
      case "success":
        toast.success(`${body.replace(/(\")+/g, "")}`, config);
        break;
      case "error":
        toast.error(`${body.replace(/(\")+/g, "")}`, config);
        break;
      case "warn":
        toast.warn(`${body.replace(/(\")+/g, "")}`, config);
        break;
    }
  }, []);

  const value = useMemo(
    () => ({
      makeToast,
    }),
    [makeToast]
  );

  return (
    <ToastContext.Provider value={value}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};
export const useToast = () => useContext(ToastContext);
