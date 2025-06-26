import Head from "next/head";
import { AppProvider } from "context/AppProvider";
import "./globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Innovation Brindes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
