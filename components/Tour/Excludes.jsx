import Slider from "react-slick"

export default function Excludes() {
    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: false,
        speed: 700,
        className: 'wrapper-journey',
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 381,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    }
    return <Slider {...settings}>
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359937/travels/expenses_z53ftd.png" alt="daily expenses" />
            <p className="text">Daily personal expenses</p>
        </div>
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359935/travels/earnings_enu3wk.png" alt="voluntary tips" />
            <p className="text">Tips for your driver and guide (discretionary)</p>
        </div>
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359936/travels/insurance_fhgbjl.png" alt="travel insurance" />
            <p className="text">Travel insurance</p>
        </div>
    </Slider>
}