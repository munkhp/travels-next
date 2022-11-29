import React from 'react'
import TourCard from '../Tour/TourCard'
import Slider from "react-slick"
import ContentLoader from 'react-content-loader'
import { useState, useEffect } from 'react'
import arrayChunk from "../../utils/arrayChunk"
import apiUrl from "../../utils/apiUrl"
import axios from 'axios'

const TourSection = () => {

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    className: "tours-list",
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 600,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 600,
        },
      },
    ],
  }
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const url = `${apiUrl}/all-tours`;
        const res = await axios.get(url);
        const { data: tours } = await res.data;
        setTours(tours);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])
  const MyLoader = () => (
    <ContentLoader uniqueKey="tours-loader" viewBox="0 0 360 328">
      <rect x="0" y="0" rx="5" ry="5" width="360" height="220" />
      <rect x="0" y="253" rx="4" ry="4" width="360" height="13" />
      <rect x="0" y="287" rx="3" ry="3" width="330" height="10" />
      <rect x="0" y="318" rx="3" ry="3" width="350" height="10" />
    </ContentLoader>
  );
  return <section id="our-tours" className="tours padding-top padding-bottom">
    <div className="container">
      <div className="tours-wrapper">
        <div className="group-title">
          <div className="sub-title">
            <p className="text">EXPLORE</p>
            <i className="icons flaticon-people"></i>
          </div>
          <h2 className="main-title">our tours</h2>
        </div>
        <div className="tours-content margin-top70">
          {loading ? (
            arrayChunk([...Array(3)], 3).map((row, i) => (
              <div key={i} className="row">
                {row.map((col, i) => (
                  <div className="col-xs-12 col-sm-6 col-md-4" key={i}>
                    <MyLoader />
                  </div>
                ))}
              </div>
            ))
          ) :
            <Slider {...settings}>
              {tours.map(tour => (
                <TourCard tour={tour} key={tour._id} />
              )
              )}
            </Slider>}
          <a
            href="/tours"
            className="btn btn-transparent margin-top70"
          >
            more tours
          </a>
        </div>
      </div>
    </div>
  </section>
}
export default TourSection;