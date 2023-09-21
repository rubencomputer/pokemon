import { Layout } from "@/components/Layout";
import { MyContextProvider } from "@/providers/PokeContext";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <MyContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyContextProvider>
    </NextUIProvider>
  );
}
