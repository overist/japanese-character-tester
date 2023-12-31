import Modals from "@/containers/Modals";
import "@/styles/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
          <title>JA Character Tester</title>
          <meta name="description" content="random japanse charater tester" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <Modals />
      </RecoilRoot>
    </>
  );
}
