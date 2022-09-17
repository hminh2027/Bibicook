import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap`}
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="beforeInteractive"
          // crossOrigin={"anonymous"}
          src={`https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v14.0&appId=1326553517365456&autoLogAppEvents=1`}
          nonce="B7oynq4a"
        ></Script>
      </body>
    </Html>
  );
}
