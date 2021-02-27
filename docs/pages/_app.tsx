import "../styles/globals.css";
import "../styles/slang.css";
import DocsLayout from "../components/DocsLayout";

function MyApp({ Component, pageProps }) {
  return (
    <DocsLayout>
      <Component {...pageProps} />
    </DocsLayout>
  );
}

export default MyApp;
