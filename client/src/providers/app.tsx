import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

import { queryClient } from "@/lib/react-query";
import { Button, ChakraProvider, Spinner } from "@chakra-ui/react";
import { AuthProvider } from "@/features/Auth";
import { HelmetProvider } from "react-helmet-async";
import { ToastProvider } from "./useToast";
import theme from "./chakra-theme";
import { WishlistProvider } from "../../../../../../Downloads/do-an-main/client/src/features/WishList/context";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ToastProvider>
        <WishlistProvider>
          <ChakraProvider theme={theme}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                  <AuthProvider>
                    <Router>{children}</Router>
                  </AuthProvider>
                </QueryClientProvider>
              </HelmetProvider>
            </ErrorBoundary>
          </ChakraProvider>
        </WishlistProvider>
      </ToastProvider>
    </React.Suspense>
  );
};
