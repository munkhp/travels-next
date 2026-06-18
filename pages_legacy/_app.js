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
import App from "next/app";
import Layout from "../components/_App/Layout";
import Script from "next/script";

class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getStaticProps) {
      pageProps = await Component.getStaticProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
