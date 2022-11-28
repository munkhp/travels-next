import Slider from "react-slick"

export default function Tools({ selected }) {
    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: false,
        speed: 700,
        className: 'wrapper-tools',
        arrows: true,
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
                    arrows: true,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <button className="item feature-item" onClick={() => selected(0)}>
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359924/travels/question_emd24s.png" alt="bottled water" />
            <p className="text">Frequently asked questions</p>
        </button>
        <button className="item feature-item" onClick={() => selected(1)}>
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359924/travels/plane_gcmukr.png" alt="plane" />
            <p className="text">International flight information</p>
        </button>
        <button className="item feature-item" onClick={() => selected(2)}>
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359924/travels/airplane_twdl0x.png" alt="bottled water" />
            <p className="text">Domestic flight information</p>
        </button>
        <button className="item feature-item" onClick={() => selected(3)}>
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359924/travels/passport_bgkiru.png" alt="bottled water" />
            <p className="text">Visa information</p>
        </button>
        <button className="item feature-item" onClick={() => selected(4)}>
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359925/travels/light-bulb_cqzjvu.png" alt="bottled water" />
            <p className="text">Useful facts</p>
        </button>
        <button className="item feature-item" onClick={() => selected(5)}>
            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359923/travels/underground_zlyfgt.png" alt="bottled water" />
            <p className="text">Trans Siberian Railway</p>
        </button>
    </Slider>
}