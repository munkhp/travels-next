import { Fragment } from "react";
import ContactForm from "../../components/ContactForm";
import Banner from "../../components/Partials/Banner"
import Layout from "../../components/_App/Layout"

const ContactUs = () => {
    return <Fragment>
        <Banner customClass="contact-page">
            <div className="page-title-wrapper">
                <div className="page-title-wrapper">
                    <div className="page-title-content">
                        <ol className="breadcrumb">
                            <li>
                                <a href="#" className="link home">Home</a>
                            </li>
                            <li className="active">
                                <a href="#" className="link">contact us</a>
                            </li>
                        </ol>
                        <div className="clearfix"></div>
                        <h1 className="captions">contact us</h1>
                    </div>
                </div>
            </div>
        </Banner>
        <section className="padding-top padding-bottom contact-organization">
            <div className="container">
                <h3 className="title-style-2">Our organization</h3>
                <div className="row">
                    <div className="wrapper-organization">
                        <div className="col-sm-offset-2 col-xs-6 col-sm-4 md-organization">
                            <div className="content-organization">
                                {/* <div className="wrapper-img">
                                    <img src="assets/images/homepage/avatar-contact-1.jpeg" alt="" className="img img-responsive" />
                                </div> */}
                                <div className="main-organization">
                                    <div className="organization-title">
                                        <a href="#" className="title">Batjargal Ulziibuyan</a>
                                        <p className="text">Sales Manager</p>
                                    </div>
                                </div>
                                <div className="content-widget">
                                    <div className="info-list">
                                        <ul className="list-unstyled">
                                            <li className="main-list">
                                                <i className="icons fa fa-phone"></i>
                                                <a href="#" className="link">+976-99277699</a>
                                            </li>
                                            <li className="main-list">
                                                <i className="icons fa fa-envelope-o"></i>
                                                <a href="#" className="link">info@travelsinmongolia.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 md-organization">
                            <div className="content-organization">
                                {/* <div className="wrapper-img">
                                    <img src="assets/images/homepage/avatar-contact-2.jpeg" alt="" className="img img-responsive" />
                                </div> */}
                                <div className="main-organization">
                                    <div className="organization-title">
                                        <a href="#" className="title">Doljmaa Songorov</a>
                                        <p className="text">Founder & CEO</p>
                                    </div>
                                </div>
                                <div className="content-widget">
                                    <div className="info-list">
                                        <ul className="list-unstyled">
                                            <li className="main-list">
                                                <i className="icons fa fa-phone"></i>
                                                <a href="#" className="link">+976-99277699</a>
                                            </li>
                                            <li className="main-list">
                                                <i className="icons fa fa-envelope-o"></i>
                                                <a href="#" className="link">info@travelsinmongolia.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4 col-sm-4 col-xs-4 md-organization">
                            <div className="content-organization">
                                <div className="wrapper-img">
                                    <img src="assets/images/homepage/avatar-contact-3.jpg" alt="" className="img img-responsive" />
                                </div>
                                <div className="main-organization">
                                    <div className="organization-title">
                                        <a href="#" className="title">Jason Williams</a>
                                        <p className="text">Tour Manager</p>
                                    </div>
                                </div>
                                <div className="content-widget">
                                    <div className="info-list">
                                        <ul className="list-unstyled">
                                            <li className="main-list">
                                                <i className="icons fa fa-phone"></i>
                                                <a href="#" className="link">+976-99277699</a>
                                            </li>
                                            <li className="main-list">
                                                <i className="icons fa fa-envelope-o"></i>
                                                <a href="#" className="link">info@travelsinmongolia.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        <section className="contact style-1 page-contact-form padding-top padding-bottom">
            <div className="container">
                <div className="wrapper-contact-form">
                    <div data-wow-delay="0.5s" className="contact-wrapper wow fadeInLeft">
                        <ContactForm title="CONTACT FORM" description="Ask any questions regarding our services." />
                    </div>
                    <div data-wow-delay="0.5s" className="wrapper-form-images wow fadeInRight">
                        <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359932/travels/contact_uzetww.jpg" alt="" className="img-responsive" />
                    </div>
                </div>
            </div>
        </section>
    </Fragment >
}
export default ContactUs;