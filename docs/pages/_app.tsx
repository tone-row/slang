import "../styles/globals.css";
import "../components/slang/slang.css";
import DocsLayout from "../components/DocsLayout";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const withLayout = !(pathname === "/");
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
      {withLayout ? (
        <DocsLayout>
          <Component {...pageProps} />
        </DocsLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
