import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="initial-scale=0.7, width=device-width" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
