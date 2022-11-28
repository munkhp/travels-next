import Slider from "react-slick";

export default function Testimonials() {

    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        className: 'traveler-list',
        autoplay: false,
        speed: 700,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    }

    return <section className="travelers">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="traveler-wrapper padding-top padding-bottom">
                        <div className="group-title white">
                            <div className="sub-title">
                                <p className="text">HEAR FROM</p>
                                <i className="icons flaticon-people"></i>
                            </div>
                            <h2 className="main-title">our customers</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <Slider {...settings}>

                        <div className="traveler">
                            <div className="cover-image">
                                <img
                                    src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359930/travels/cover-image-2_dqi2u5.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="wrapper-content">
                                <div className="avatar">
                                    <img
                                        src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359929/travels/avatar-2_uzf2e7.jpg"
                                        alt=""
                                        className="img-responsive"
                                    />
                                </div>
                                <p className="name">Felix Assouly</p>
                                <p className="address">Paris, France</p>
                                <p className="description">
                                    " We had a great time traveling around Gobi.The driver is skilled and friendly and the guide speaks perfect English and knowledgeable. The Gobi destinations were all amazing and diverse, everyday there was something new. But I think without the service of Travel in Mongolia, it would not be this great and I want to thank the team. Strongly recommend Travels in Mongolia to anyone coming to Mongolia and looking for adventure!"
                                </p>
                            </div>
                        </div>
                        <div className="traveler">
                            <div className="cover-image">
                                <img
                                    src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359930/travels/cover-image-3_d19hbz.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="wrapper-content">
                                <div className="avatar">
                                    <img
                                        src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359927/travels/avatar-1_fgkuut.jpg"
                                        alt=""
                                        className="img-responsive"
                                    />
                                </div>
                                <p className="name">Kim Jon Pak</p>
                                <p className="address">Seoul, South Korea</p>
                                <p className="description">
                                    " They are very professional. We did 7-days Central Mongolian tour. It was extremely fantastic we can't express our feelings in words. Horse riding,hiking, camel riding, sightseeing, photographing, visiting nomadic families were the main activities. Our tour guide and driver were very professional. We will never forget this amazing tour. Therefore, we will highly recommend Travels in Mongolia  tour agency."
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
}