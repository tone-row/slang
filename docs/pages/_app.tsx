import "../styles/globals.css";
import "../components/slang/slang.css";
import DocsLayout from "../components/DocsLayout";

function MyApp({ Component, pageProps }) {
  return (
    <DocsLayout>
      <Component {...pageProps} />
    </DocsLayout>
  );
}

export default MyApp;
