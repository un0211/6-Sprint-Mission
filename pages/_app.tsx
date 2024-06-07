import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <meta name="description" content="일상의 모든 물건을 거래해보세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:image" content="/preview.png" />
        <meta property="og:title" content="판다 마켓" />
        <meta
          property="og:description"
          content="일상의 모든 물건을 거래해보세요"
        />
        <meta
          property="og:url"
          content="https://panda-market-hw.netlify.app/"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="%PUBLIC_URL%/preview.png" />
        <meta property="twitter:title" content="판다 마켓" />
        <meta
          property="twitter:description"
          content="일상의 모든 물건을 거래해보세요"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
