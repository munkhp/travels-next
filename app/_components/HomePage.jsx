"use client";

import {
  HomeSlider,
  WhoWeAre,
  TourSection,
  Video,
  Testimonials,
  Events,
} from "../../components/Home";
import { Fragment } from "react";
const Home = () => {
  return (
    <Fragment>
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
