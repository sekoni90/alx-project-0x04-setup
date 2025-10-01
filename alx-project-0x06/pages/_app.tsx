// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store/store";
import Layout from "@/components/layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  );
};