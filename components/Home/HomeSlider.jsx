import Slider from "react-slick";
import Banner from "../Partials/Banner";
import { Link } from 'react-scroll'

export default function HomeSlider() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 700,
        className: 'home-slider',
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 381,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    }
    return <Slider {...settings}>
        <Banner customClass="homepage-default">
            <div className="homepage-banner-wrapper">
                <div className="homepage-banner-content">
                    <div className="group-title">
                        <h1 className="title">TRAVELS IN MONGOLIA</h1>
                        <p className="text">
                            delivering safe, reliable and adventurous tours since 2011
                            <span className="border"></span>
                        </p>
                    </div>
                    <div className="group-btn">
                        <Link to="about-us" spy={true} smooth={true}>
                            <button data-hover="LET'S GO!" className="btn-click" aria-label='Learn more about our Travels in Mongolia tour operator and its tours and services'>
                                <span className="text">learn more</span>
                                <span className="icons fa fa-long-arrow-right"></span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Banner>
        <Banner customClass="homepage-default" bgImg="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359936/travels/bg-eagle-festival_ouyp7l.jpg">
            <div className="homepage-banner-wrapper">
                <div className="homepage-banner-content">
                    <div className="group-title">
                        <h2 className="title">eagle festival tour</h2>
                        <p className="text">
                            special offer - explore western mongolian cultures and customs!
                            <span className="boder"></span>
                        </p>
                    </div>
                    <div className="group-btn">
                        <a href="/tour/western-mongolia/golden-eagle-festival-tour" aria-label='Learn more about Eagle festival tour and western Mongolian celebrations and cultures.'>
                            <button data-hover="LET'S GO!" className="btn-click">
                                <span className="text">learn more</span>
                                <span className="icons fa fa-long-arrow-right"></span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Banner>
    </Slider>
}