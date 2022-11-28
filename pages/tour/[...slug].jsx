/* eslint-disable react-hooks/exhaustive-deps */
import Banner from "../../components/Partials/Banner"
import apiUrl from "../../utils/apiUrl";
import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import { Includes, Excludes, Gallery, Booking, StickyNavBar } from "../../components/Tour"
import modifyImgUrl from '../../utils/image';
import axios from "axios";
import baseUrl from "../../utils/baseUrl";

const Tour = ({ tour }) => {
    const POSITION_OVERVIEW = 0;
    const POSITION_ITINERARY = 1;
    const POSITION_BOOKING = 2;
    const router = useRouter();
    const [tabTop, setTabTop] = useState(null);
    const [itineraryTop, setItineraryTop] = useState(null);
    const [bookingTop, setBookingTop] = useState(null);
    const [fixed, setFixed] = useState(false);
    const [position, setPosition] = useState(POSITION_OVERVIEW);
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    });

    const scrollHandler = (e) => {
        let top = window.pageYOffset || document.documentElement.scrollTop;
        const relativeTab = document.getElementById('relative-tab-container');
        const tabHeight = relativeTab.offsetHeight;
        if (relativeTab) {
            if (top <= tabTop) {
                setFixed(false);
            } else {
                setFixed(true);
            }
        }
        const itinerary = document.getElementById('itinerary');
        const booking = document.getElementById('booking');
        if (itinerary && booking) {
            if (top < itineraryTop - tabHeight) {
                setPosition(POSITION_OVERVIEW);
            } else if (top >= itineraryTop - tabHeight && top < bookingTop - tabHeight) {
                setPosition(POSITION_ITINERARY);
            } else {
                setPosition(POSITION_BOOKING);
            }
        }
    }
    function redirectToSuccess() {
        router.push(`${baseUrl}/success`, { replace: true });
    }
    useEffect(() => {
        const relativeTab = document.getElementById('relative-tab-container');
        const itinerary = document.getElementById('itinerary');
        const booking = document.getElementById('booking');
        setTabTop(relativeTab.getBoundingClientRect().top);
        setItineraryTop(itinerary.getBoundingClientRect().top);
        setBookingTop(booking.getBoundingClientRect().top);
    }, [])
    return (<Fragment>
        {/* <MetaTags title={'Travels in Mongolia - ' + tour.name} description={tour.summary} url={'https://travelsinmongolia.com/tour/' + tour.path} image={tour.mediaUrl} /> */}
        <Banner customClass="tour-view" bgImg={modifyImgUrl(tour.mediaUrl)}>
            <div className="page-title-wrapper">
                <div className="page-title-content">
                    <ol className="breadcrumb">
                        <li>
                            <a href="#" className="link home">Home</a>
                        </li>
                        <li>
                            <a href="#" className="link">tour</a>
                        </li>
                        <li className="active">
                            <a href="#" className="link">{tour.name}</a>
                        </li>
                    </ol>
                    <div className="clearfix"></div>
                    <h1 className="captions">{tour.name}</h1>
                    <div className="price">
                        <span className="text">from</span>
                        <span className="number">{tour.prices.length > 0 ? tour.prices[tour.prices.length - 1].amount : 0}</span>
                        <sup className="unit">$</sup>
                    </div>
                </div>
            </div>
        </Banner>
        <StickyNavBar fixed={false} position={position} />
        {fixed && <StickyNavBar fixed={true} position={position} />}
        <section>
            <div className="tour-view-main padding-top padding-bottom">
                <div className="container">
                    <h2 className="title-style-2">{tour.name}
                        <span> ({'0' + (tour.duration > 1 ? tour.duration + ' days' : tour.duration + ' day')})</span>
                    </h2>
                    <div className="margin-bottom30">
                        <p>{tour.summary}</p>
                    </div>
                    <div className="margin-bottom30">
                        <h3 className="title-style-3">Availability</h3>
                        <ul className="reason-list list-unstyled">
                            <li>May 10th to October 5th</li>
                        </ul>
                    </div>
                    <div className="margin-bottom70">
                        <h3 className="title-style-3">{'Reasons to choose ' + tour.name}</h3>
                        <ul className="reason-list list-unstyled">
                            {tour.reasons.map((reason, index) => (
                                <li key={index}>{reason}</li>
                            ))}
                        </ul>
                    </div>
                    <h3 className="title-style-3">Prices</h3>
                    <div className="schedule-block">
                        {tour.prices.map((price, index) => (
                            <div className="element" key={index}>
                                <p className="schedule-title">{price.label}</p>
                                <span className="schedule-content">{'$' + price.amount}</span>
                            </div>
                        )
                        )}
                    </div>
                    <div className="journey-block margin-top70">
                        <h3 className="title-style-3">Price includes</h3>
                        <Includes />
                        <h3 className="title-style-3 excludes">Price excludes</h3>
                        <Excludes />
                        <div id="itinerary" className="itinerary-block clearfix">
                            <h3 className="title-style-3">Itineraries</h3>
                            <div className="timeline-container">
                                <div className="timeline">
                                    {tour.itineraries.map((object, index) => (
                                        <div className="timeline-block" key={index}>
                                            <div className="timeline-title">
                                                <span>{object.label}</span>
                                            </div>
                                            <div className="timeline-content medium-margin-top">
                                                <div className="row">
                                                    <div className="timeline-point">
                                                        <i className="fa fa-circle-o"></i>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="timeline-location-block">
                                                            <p className="location-name">{object.itinerary.title}
                                                            </p>
                                                            <p className="description">{object.itinerary.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="timeline-image-block">
                                                            <div className="image" style={{ backgroundImage: `url(${object.itinerary.featuredImage})` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="timeline-meals-block">
                                                            <div className="itinerary-subtitle">Meals</div>
                                                            {index !== 0 && <a href="https://travelsinmongolia.com/activity/3" target="_blank" className="itinerary-activity"><img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359938/travels/breakfast_dcebnd.png" /> <div className="itinerary-activity-title">
                                                                Breakfast
                                                            </div></a>}
                                                            <a href="https://travelsinmongolia.com/activity/5" target="_blank" className="itinerary-activity"><img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359938/travels/lunch_vd4cyy.png" /> <div className="itinerary-activity-title">
                                                                Lunch
                                                            </div></a>
                                                            {index < (tour.itineraries.length - 1) && <a href="https://travelsinmongolia.com/activity/6" target="_blank" className="itinerary-activity"><img src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359937/travels/dinner_ldyiku.png" /> <div className="itinerary-activity-title">
                                                                Dinner
                                                            </div></a>}</div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="timeline-activities-block">
                                                            <div className="itinerary-subtitle">Included activities</div>
                                                            {object.itinerary.activities.map((activity, index) => (
                                                                <div className="itinerary-activity" key={index}>
                                                                    <img src={activity.featuredImage} alt="activity" />
                                                                    <div className="itinerary-activity-title">
                                                                        {activity.title}
                                                                    </div></div>
                                                            )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-block margin-top70" >
                        <h3 className="title-style-2">Gallery</h3>
                        <Gallery mediaUrls={tour.mediaUrls} />
                    </div>
                </div>
                <div id="booking" className="container">
                    <Booking name={tour.name} isSingleTourPage={true} success={redirectToSuccess} />
                </div>
                <div className="container">
                    <div className="expert-block padding-top">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <h3 className="title-style-2">TALK TO OUR EXPERT</h3>
                                <p>Have any questions about this tour?</p>
                                <p>Feel free to email us anytime. We will try reply as soon as possible.</p>
                                <p>Private tours are more flexible in general compared to group tours and we may allow you to be in control of some parts of your trip to a certain extent. Please provide us with all the details of your request and questions you may have and we will do our best to provide a custom taylor made experience to suit your needs.</p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="about-us-wrapper">
                                    <div className="avatar">
                                        <div className="content-wrapper">
                                            <p className="name">Doljmaa Songorov</p>
                                            <p className="position">Founder & CEO</p>
                                        </div>
                                    </div>
                                    <div className="row group-list contact-list">
                                        <div className="col-sm-4 col-xs-4 col-contact">
                                            <div className="media contact-list-media">
                                                <div className="media-left">
                                                    <a href="mailto:info@travelsinmongolia.com" className="icons">
                                                        <i className="fa fa-envelope-o"></i>
                                                    </a>
                                                </div>
                                                <div className="media-right">
                                                    <a href="mailto:info@travelsinmongolia.com" className="title">Email</a>
                                                    <p className="text">info@travelsinmongolia.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-4 col-contact">
                                            <div className="media contact-list-media">
                                                <div className="media-left">
                                                    <a href="tel:+97699277699" className="icons">
                                                        <i className="fa fa-phone"></i>
                                                    </a>
                                                </div>
                                                <div className="media-right">
                                                    <a href="tel:+97699277699" className="title">Phone</a>
                                                    <p className="text">+976-99277699</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-4 col-contact">
                                            <div className="media contact-list-media">
                                                <div className="media-left">
                                                    <a href="http://m.me/TravelsinMongolia" className="icons">
                                                        <i className="fa fa-commenting-o"></i>
                                                    </a>
                                                </div>
                                                <div className="media-right">
                                                    <a href="http://m.me/TravelsinMongolia" className="title">Chat</a>
                                                    <p className="text">Travels in Mongolia</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment >)
}
export async function getServerSideProps({ req }) {
    const url = `${apiUrl}${req.url}/`;
    const res = await axios.get(url);
    const { data: tour } = await res.data;
    return { props: { tour } };
}
export default Tour;