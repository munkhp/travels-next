import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import baseUrl from "../utils/baseUrl";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={`${baseUrl}/favicon.ico`} />
          <meta
            name="description"
            content="Travels in Mongolia Tour Operator"
          />
          <meta
            name="facebook-domain-verification"
            content="4012m8ky4e12eore29v32gkdkar7bp"
          />
          <link rel="apple-touch-icon" href={`${baseUrl}/logo192.png`} />
          <link rel="manifest" href={`${baseUrl}/manifest.json`} />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=UA-247992572-1"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-247992572-1');
        `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
