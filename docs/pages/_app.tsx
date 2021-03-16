import "../styles/globals.css";
import "../components/slang/slang.css";
import DocsLayout from "../components/DocsLayout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-domain="slang.tone-row.com"
          src="https://plausible.io/js/plausible.js"
        />
      </Head>
      <Component {...pageProps} />
      {/* <DocsLayout>
        <Component {...pageProps} />
      </DocsLayout> */}
    </>
  );
}

export default MyApp;
