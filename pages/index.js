import {
  HomeSlider,
  WhoWeAre,
  TourSection,
  Video,
  Testimonials,
  Events,
} from "../components/Home";
import { Fragment } from "react";
import Head from "next/head";
const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Travels in Mongolia - One of the leading tour operators in Mongolia
        </title>
        <meta
          name="description"
          content="Travels in Mongolia is a local tour operator which specializes in providing unforgettable Mongolian tour experience. We aim to develop the sustainable ecotourism, deliver overall satisfaction to our customers, fulfill their requirements & needs with our professional team and introduce Mongolian culture, history and wild nature to foreigners."
        />
        <link rel="canonical" href="https://travelsinmongolia.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Travels in Mongolia - One of the leading tour operators in Mongolia"
        />
        <meta
          property="og:description"
          content="Travels in Mongolia is a local tour operator which specializes in providing unforgettable Mongolian tour experience. We aim to develop the sustainable ecotourism, deliver overall satisfaction to our customers, fulfill their requirements & needs with our professional team and introduce Mongolian culture, history and wild nature to foreigners. "
        />
        <meta property="og:url" content="https://travelsinmongolia.com" />
        <meta property="og:site_name" content="Travels in Mongolia" />
        <meta property="og:updated_time" content="2022-11-26T12:51:04+00:00" />
        <meta
          property="og:published_time"
          content="2022-11-26T12:51:04+00:00"
        />
        <meta property="og:modified_time" content="2022-11-26T12:51:04+00:00" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359926/travels/homepage-default-banner-old_mqhjtd.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Travels in Mongolia - One of the leading tour operators in Mongolia"
        />
        <meta
          name="twitter:description"
          content="Travels in Mongolia is a local tour operator which specializes in providing unforgettable Mongolian tour experience. We aim to develop the sustainable ecotourism, deliver overall satisfaction to our customers, fulfill their requirements & needs with our professional team and introduce Mongolian culture, history and wild nature to foreigners. "
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359926/travels/homepage-default-banner-old_mqhjtd.jpg"
        />
      </Head>
      <HomeSlider />
      <WhoWeAre />
      <TourSection />
      <Video />
      <Events />
      <Testimonials />
    </Fragment>
  );
};
export default Home;
