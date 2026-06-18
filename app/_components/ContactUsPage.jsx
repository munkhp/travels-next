"use client";

import { Fragment } from "react";
import ContactForm from "../../components/ContactForm";
import Banner from "../../components/Partials/Banner"

const ContactUs = () => {
    return <Fragment>
        <Banner customClass="contact-page">
            <div className="page-title-wrapper">
                <div className="page-title-wrapper">
                    <div className="page-title-content">
                        <ol className="breadcrumb">
                            <li>
                                <button className="link home">Home</button>
                            </li>
                            <li className="active">
                                <button className="link">contact us</button>
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
                                        <button className="title">Batjargal Ulziibuyan</button>
                                        <p className="text">Sales Manager</p>
                                    </div>
                                </div>
                                <div className="content-widget">
                                    <div className="info-list">
                                        <ul className="list-unstyled">
                                            <li className="main-list">
                                                <i className="icons fa fa-phone"></i>
                                                <button className="link">+976-99277699</button>
                                            </li>
                                            <li className="main-list">
                                                <i className="icons fa fa-envelope-o"></i>
                                                <button className="link">info@travelsinmongolia.com</button>
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
                                        <button className="title">Doljmaa Songorov</button>
                                        <p className="text">Founder & CEO</p>
                                    </div>
                                </div>
                                <div className="content-widget">
                                    <div className="info-list">
                                        <ul className="list-unstyled">
                                            <li className="main-list">
                                                <i className="icons fa fa-phone"></i>
                                                <button className="link">+976-99277699</button>
                                            </li>
                                            <li className="main-list">
                                                <i className="icons fa fa-envelope-o"></i>
                                                <button className="link">info@travelsinmongolia.com</button>
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
                                        <button className="title">Jason Williams</button>
                                        <p className="text">Tour Manager</p>
                                    </div>
                                </div>
                                <div className="content-widget">
                                    <div className="info-list">
                                        <ul className="list-unstyled">
                                            <li className="main-list">
                                                <i className="icons fa fa-phone"></i>
                                                <button className="link">+976-99277699</button>
                                            </li>
                                            <li className="main-list">
                                                <i className="icons fa fa-envelope-o"></i>
                                                <button className="link">info@travelsinmongolia.com</button>
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