import Slider from "react-slick";
import Fancybox from "./FancyBox";

export default function Gallery({ mediaUrls }) {

    const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: 'special-offer-list',
        speed: 1000,
        dots: true,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    }
    return <Slider {...settings}>
        {mediaUrls.map((url, index) => (
            <Fancybox options={{ infinite: false }} key={index}>
                <div className="special-offer-layout">
                    <div className="image-wrapper">
                        <div className="link" data-fancybox="gallery" data-src={url}>
                            <div style={{ backgroundImage: `url(${url})` }} className="img-responsive" />
                            <div className="overlay">
                                <span className="icon">
                                    <i className="fa fa-eye"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fancybox>
        )
        )}
    </Slider>
}