/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";


import { removeDataFromCookie } from "@/utils/auth";
import { USER_INFORMATION, USER_LOGIN_PAYLOAD } from "@/utils/constants";
import { removeAccessCookie } from "@/utils/storage";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast, Toaster } from "sonner";

// function makeQueryClient() {
//   return new QueryClient({
//     defaultOptions: {
//       queries: {
//         refetchOnWindowFocus: false,
//       },
//     },
//   });
// }

// let browserQueryClient: QueryClient | undefined = undefined;

// function getQueryClient() {
//   if (typeof window === "undefined") {
//     return makeQueryClient();
//   } else {
//     if (!browserQueryClient) browserQueryClient = makeQueryClient();
//     return browserQueryClient;
//   }
// }

export default function Providers({ children }: { children: React.ReactNode }) {
  // const queryClient = getQueryClient();
  const router = useRouter();

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
        queryCache: new QueryCache({
          onError: (error: unknown, _query: any) => {
            if (
              ((error as AxiosError)?.response?.status as number) === 401 ||
              ((error as AxiosError)?.response?.status as number) === 403
            ) {
              router.push("/");
              toast.error("Invalid token");
              sessionStorage.clear();
              removeAccessCookie();
              removeDataFromCookie(USER_INFORMATION);
              removeDataFromCookie(USER_LOGIN_PAYLOAD);
            }
          },
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors pauseWhenPageIsHidden position="top-right" />
      <>{children}</>
      <ReactQueryDevtools position="bottom" initialIsOpen={false} />
    </QueryClientProvider>
  );
}
