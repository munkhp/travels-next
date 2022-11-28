import Slider from "react-slick"
import ContactForm from "../../components/ContactForm"
import Banner from "../../components/Partials/Banner"
import Layout from "../../components/_App/Layout"

const AboutUs = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1500,
        dots: false,
        autoplay: true,
        className: 'wrapper-expert',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 381,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    }
    return <Layout>
        <Banner customClass="about-us-page">
            <div className="page-title-wrapper">
                <div className="page-title-content">
                    <ol className="breadcrumb">
                        <li>
                            <a href="#" className="link home">Home</a>
                        </li>
                        <li className="active">
                            <a href="#" className="link">about us</a>
                        </li>
                    </ol>
                    <div className="clearfix"></div>
                    <h1 className="captions">about us</h1>
                </div>
            </div>
        </Banner>
        <section className="about-us layout-2 padding-top padding-bottom about-us-4">
            <div className="container">
                <div className="row">
                    <div className="wrapper-contact-style">
                        <div className="col-md-6">
                            <h3 className="title-style-2">Who we are</h3>
                            <div className="about-us-wrapper">
                                <p className="text">We are the best travel company owned by fully dedicated and experienced tour guides.
                                    Our tour operator is a government certified, registered with the Ministry of Tourism and Green Development and a member of Mongolian Tourism Association. We have been working in the tourism industry since 2011 and with our professional team, high quality service became known to travelers and highly rated on TripAdvisor.
                                    We always make sure that our customers are satisfied. Travelers who want to experience real Mongolian culture, custom and the way of life come to our tour agency.
                                    Our goal is to develop sustainable ecotourism, deliver overall satisfaction to our customer, fulfill their requirements & needs with our professional team and introduce Mongolian culture, custom and history to travelers and make your trip memorable.
                                    <br /><br />
                                    All our team comprises of fully trained and licensed professionals that have many years of experience in organizing a variety of tours in Mongolia. Our drivers and guides are professionally trained in the culture, natural features, traditional customs and history of Mongolia and each is expert in the skills necessary for leading rewarding adventure travel. We train our guides every year.
                                    We offer a wide range of tours in Mongolia.  We hope you will find the right tour for you here, but unless we will be ready to help you to create your own custom tours to meet your requirements.
                                    <br /><br />
                                    Travels in Mongolia team
                                </p>

                            </div>
                        </div>
                        <div data-wow-delay="0.4s" className="col-md-6">
                            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359928/travels/about-us-4_iaptzl.jpg" alt="" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="videos padding-top padding-bottom page-our-values">
            <div className="container">
                <h3 className="title-style-2 white">Our Values</h3>
                <div className="row">
                    <div className="our-wrapper">
                        <div className="col-sm-3 col-xs-3">
                            <div className="our-content">
                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359933/travels/destinations_s1bytr.png" height="40" width="40" alt="destinations" />
                                <div className="main-our">
                                    <p className="our-title">28+ Destinations </p>
                                    <p className="text">We travel to all regions of Mongolia and visit the main highlights of each region</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <div className="our-content">
                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359932/travels/best-price_s7wshp.png" height="40" width="40" alt="best price guaranteed" />
                                <div className="main-our">
                                    <p className="our-title">Best Price Guarantee</p>
                                    <p className="text">If you find other tour operators cheaper than us, please let us know.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <div className="our-content">
                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359934/travels/quality_yu52zu.png" height="40" width="40" alt="quality assured" />
                                <div className="main-our">
                                    <p className="our-title">Quality Assured</p>
                                    <p className="text">We do our best to properly train our guides and send out only reliable drivers for our trips</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <div className="our-content">
                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359931/travels/resort_fxfgjj.png" height="40" width="40" alt="tourist camps" />
                                <div className="main-our">
                                    <p className="our-title">Tourist camps only</p>
                                    <p className="text">To ensure utmost comfort for our customers, we only make contracts with tourist camps for accomodations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-wrapper">
                        <div className="col-sm-3 col-xs-3">
                            <div className="our-content">
                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359933/travels/customize_c4liw8.png" height="40" width="40" alt="tailor made experience" />
                                <div className="main-our">
                                    <p className="our-title">Tailor made experience</p>
                                    <p className="text">You may contact us and make small adjustments to your trips</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <div className="our-content">
                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359931/travels/refund_wupzyr.png" height="40" width="40" alt="payback guaranteed" />
                                <div className="main-our">
                                    <p className="our-title">Payback guaranteed</p>
                                    <p className="text">100% refund upon cancellation. Certain conditions may apply</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <div className="our-content">
                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359934/travels/certification_c97agk.png" height="40" width="40" alt="11 years of experience" />
                                <div className="main-our">
                                    <p className="our-title">11 years of experience</p>
                                    <p className="text">We are an experienced tour operator and immune to mistakes that new tour operators tend to come across</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <div className="our-content">
                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359932/travels/suv-car_t1ukpk.png" height="40" width="40" alt="SUV vehicles" />
                                <div className="main-our">
                                    <p className="our-title">SUV Vehicles</p>
                                    <p className="text">For your comfort, we will serve with Toyota SUV vehicles with an air conditioning only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="our-expert padding-top padding-bottom-50">
            <div className="container">
                <h3 className="title-style-2">our guides</h3>
                <Slider {...settings}>
                    <div className="item content-expert">
                        <a href="#" className="img-expert">
                            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359927/travels/about-5_ljgyku.jpg" alt="" className="img-responsive img" />
                        </a>
                        <div className="caption-expert">
                            <a href="#" className="title">Anarbayar</a>
                            <p className="text">Tour Guide</p>
                        </div>
                    </div>
                    <div className="item content-expert">
                        <a href="#" className="img-expert">
                            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359929/travels/about-6_rxxsvm.jpg" alt="" className="img-responsive img" />
                        </a>
                        <div className="caption-expert">
                            <a href="#" className="title">Enkhmandakh</a>
                            <p className="text">Tour Guide</p>
                        </div>
                    </div>
                    <div className="item content-expert">
                        <a href="#" className="img-expert">
                            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359927/travels/about-8_jwuqhx.jpg" alt="" className="img-responsive img" />
                        </a>
                        <div className="caption-expert">
                            <a href="#" className="title">Amarzaya</a>
                            <p className="text">Tour Guide</p>
                        </div>
                    </div>
                    <div className="item content-expert">
                        <a href="#" className="img-expert">
                            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359928/travels/about-7_hchntp.jpg" alt="" className="img-responsive img" />
                        </a>
                        <div className="caption-expert">
                            <a href="#" className="title">Zolzaya</a>
                            <p className="text">Tour Guide</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
        <div className="about-tours padding-top padding-bottom">
            <div className="container">
                <div className="wrapper-tours">
                    <div className="content-icon-tours">
                        <div className="content-tours">
                            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359931/travels/happy-man_jc5qi0.png" height="35" alt="customers" />
                            <div className="wrapper-thin">
                                <span className="wrapper-icon-thin">
                                    <i className="icon-thin fa fa-circle-thin"></i>
                                </span>
                                <div className="tours-title">~80000</div>
                            </div>
                            <div className="text">Customers</div>
                        </div>
                        <div className="content-tours">
                            {/* <i className="icon flaticon-man"></i> */}
                            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359933/travels/employee_vclemz.png" height="35" alt="employee" />
                            <div className="wrapper-thin">
                                <span className="wrapper-icon-thin">
                                    <i className="icon-thin fa fa-circle-thin"></i>
                                </span>
                                <div className="tours-title">70</div>
                            </div>
                            <div className="text">Employees</div>
                        </div>
                        <div className="content-tours">
                            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359931/travels/jeep_cnsewy.png" height="35" alt="tours" />
                            <div className="wrapper-thin">
                                <span className="wrapper-icon-thin">
                                    <i className="icon-thin fa fa-circle-thin"></i>
                                </span>
                                <div className="tours-title">12</div>
                            </div>
                            <div className="text">Number of Tours</div>
                        </div>
                        <div className="content-tours">
                            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359933/travels/medal_x9cadl.png" height="35" alt="experience" />
                            <div className="wrapper-thin">
                                <span className="wrapper-icon-thin">
                                    <i className="icon-thin fa fa-circle-thin"></i>
                                </span>
                                <div className="tours-title">11</div>
                            </div>
                            <div className="text">Years of Experience</div>
                        </div>
                        <div className="content-tours">
                            <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359932/travels/distance_jyzzrj.png" height="35" alt="total trips" />
                            <div className="wrapper-thin">
                                <span className="wrapper-icon-thin">
                                    <i className="icon-thin fa fa-circle-thin"></i>
                                </span>
                                <div className="tours-title">8960</div>
                            </div>
                            <div className="text">Total Trips</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="contact style-1 page-contact-form padding-top padding-bottom">
            <div className="container">
                <div className="wrapper-contact-form" style={{ 'position': 'relative' }}>
                    <div data-wow-delay="0.5s" className="wrapper-form-images wow fadeInLeft about-left">
                        <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359920/travels/about_x9krwq.jpg" alt="" className="img-responsive" />
                    </div>
                    <div data-wow-delay="0.5s" className="contact-wrapper wow fadeInRight about-right">
                        <ContactForm title="contact us" description="Just pack and go! Leave your travel plans to travel experts!" />
                    </div>
                </div>
            </div>
        </section>
    </Layout >
}
export default AboutUs;