import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Protect from "@/components/protected/protect";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = new QueryClient();
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Protect initialUser={pageProps?.user}>
        <Component {...pageProps} />
      </Protect>
    </QueryClientProvider>
  );
}
