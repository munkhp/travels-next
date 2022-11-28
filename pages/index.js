import {
  HomeSlider,
  WhoWeAre,
  TourSection,
  Video,
  Testimonials,
  Events,
} from "../components/Home";
import axios from "axios";
import apiUrl from "../utils/apiUrl";
import { Fragment } from "react";
import Head from "next/head";
const Home = ({ tours, events }) => {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Travels in Mongolia - Safe and satisfaction guaranteed tours and travels in Mongolia"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://travelsinmongolia.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Travels in Mongolia - Safe and satisfaction guaranteed tours and travels in Mongolia"
        />
        <meta
          property="og:description"
          content="If you are planning to travel to Mongolia, our responsible tour guides and driver may provide high quality guided tours in all regions of Mongolia."
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
          content="Travels in Mongolia - Safe and satisfaction guaranteed tours and travels in Mongolia"
        />
        <meta
          name="twitter:description"
          content="If you are planning to travel to Mongolia, our responsible tour guides and driver may provide high quality guided tours in all regions of Mongolia."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359926/travels/homepage-default-banner-old_mqhjtd.jpg"
        />
      </Head>
      <HomeSlider />
      <WhoWeAre />
      <TourSection tours={tours} />
      <Video />
      <Events events={events} />
      <Testimonials />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const url1 = `${apiUrl}/all-tours`;
  const res1 = await axios.get(url1);
  const { data: tours } = await res1.data;
  const url2 = `${apiUrl}/events`;
  const res2 = await axios.get(url2);
  const { data: events } = await res2.data;
  return { props: { tours, events } };
}
export default Home;
