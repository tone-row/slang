import "../styles/globals.css";
import DocsLayout from "../components/DocsLayout";
import { config } from "../styles/slang.config";
import { getThemeCss } from "@tone-row/slang";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>{getThemeCss(config)}</style>
      </Head>
      <DocsLayout>
        <Component {...pageProps} />
      </DocsLayout>
    </>
  );
}

export default MyApp;
