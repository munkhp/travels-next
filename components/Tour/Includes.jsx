import Slider from "react-slick"
import { useRouter } from 'next/router'

export default function Includes() {
    let router = useRouter()

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
        {router.pathname === '/tour/western-mongolia/altai-mountain-tour' && (<div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359924/travels/airplane_twdl0x.png" alt="two way domestic flights" />
            <p className="text">2 way domestic flight</p>
        </div>)}
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359936/travels/conversation_pe5upf.png" alt="total trips" />
            <p className="text">English speaking guide and driver</p>
        </div>
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359937/travels/jeep_2_f692nb.png" alt="transportation" />
            <p className="text">All transfers and transportation</p>
        </div>
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359934/travels/hotel_budpzr.png" alt="accomodation" />
            <p className="text">Accommodation at tourist camps</p>
        </div>
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359935/travels/dinner_js1rra.png" alt="meals" />
            <p className="text">Meals mentioned in the itinerary</p>
        </div>
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359937/travels/water-bottle_poubn2.png" alt="bottled water" />
            <p className="text">Bottled drinking water (unlimited)</p>
        </div>
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359935/travels/passport_meeqcm.png" alt="visa support invitation letter" />
            <p className="text">Visa support invitation letter</p>
        </div>
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359937/travels/plane-tickets_xkufii.png" alt="entrance fee at natinal park" />
            <p className="text">Entrance fees at national parks</p>
        </div>
        <div className="item feature-item">
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359935/travels/road_iczlck.png" alt="Road toll fees" />
            <p className="text">Road, toll fees, petrol and fuel</p>
        </div>
    </Slider>
}