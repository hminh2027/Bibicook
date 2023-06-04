"use client";
import {
  ChakraProvider,
  createStandaloneToast,
  Button,
  Spinner,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CacheProvider } from "@chakra-ui/next-js";
import { ErrorBoundary } from "react-error-boundary";

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
  children: ReactNode;
};
function Providers({ children }: AppProviderProps) {
  const { ToastContainer } = createStandaloneToast();
  const queryClient = new QueryClient();
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <CacheProvider>
            <ChakraProvider>
              {children}
              <ToastContainer />
            </ChakraProvider>
          </CacheProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default Providers;
