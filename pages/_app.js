import "@/styles/general.sass";
import "@/styles/globals.css";

import Layout from "../src/components/layout/main-layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
