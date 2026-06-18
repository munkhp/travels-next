import "../public/assets/font/font-icon/font-awesome/css/font-awesome.min.css";
import "../public/assets/font/font-icon/font-flaticon/flaticon.css";
import "../public/assets/font/google/roboto.css";
import "../public/assets/font/google/montserrat.css";
import "../public/assets/libs/bootstrap/css/bootstrap.min.css";
import "../public/assets/libs/slick/slick.min.css";
import "../public/assets/libs/slick/slick-theme.min.css";
import "../public/assets/css/layout.css";
import "../public/assets/css/components.css";
import "../public/assets/css/responsive.css";
import "../public/assets/css/color.css";
import "../public/assets/css/datepicker.css";
import Script from "next/script";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: {
    default: "Travels in Mongolia - One of the leading tour operators in Mongolia",
    template: "%s",
  },
  description: "Travels in Mongolia Tour Operator",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  other: {
    "facebook-domain-verification": "4012m8ky4e12eore29v32gkdkar7bp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BNB9NTM2XD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BNB9NTM2XD');
          `}
        </Script>
      </body>
    </html>
  );
}
