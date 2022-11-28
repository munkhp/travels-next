import React from 'react'
import TourCard from '../Tour/TourCard'
import Slider from "react-slick";


const TourSection = ({ tours }) => {

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
          <Slider {...settings}>
            {tours.map(tour => (
              <TourCard tour={tour} key={tour._id} />
            )
            )}
          </Slider>
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