import { Fragment } from "react";
import Banner from "../../components/Partials/Banner"
import apiUrl from "../../utils/apiUrl";
import { Gallery } from "../../components/Tour";
import modifyImgUrl from '../../utils/image';
import axios from "axios";
const Event = ({ event, otherEvents }) => {

    return (<Fragment>
        <Banner customClass="tour-view" bgImg={modifyImgUrl(event.mediaUrl)} >
            <div className="page-title-wrapper">
                <div className="page-title-content">
                    <ol className="breadcrumb">
                        <li>
                            <a href="#" className="link home">Home</a>
                        </li>
                        <li>
                            <a href="#" className="link home">Events</a>
                        </li>
                    </ol>
                    <div className="clearfix"></div>
                    <h1 className="captions">{event.name}</h1>
                </div>
            </div>
        </Banner>
        <section className="page-main padding-top padding-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="item-blog-detail">
                            <div className="blog-post blog-text">
                                <div className="blog-content">
                                    <div className="row">
                                        <div className="col-xs-12 blog-text">
                                            <div className="blog-descritption">
                                                <ul className="event-list list-unstyled">
                                                    <li>
                                                        <i className="icons fa fa-map-marker"></i>
                                                        <span>{event.locationText}</span>
                                                    </li>
                                                    <li>
                                                        <i className="icons fa fa-calendar"></i>
                                                        <span>{event.scheduleText}</span>
                                                    </li>
                                                </ul>
                                                <p className="text">{event.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <Gallery mediaUrls={event.mediaUrls} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 sidebar-widget">
                        <div className="col-2">
                            <div className="col-1">
                                <div className="categories-widget widget">
                                    <div className="title-widget">
                                        <div className="title">OTHER EVENTS</div>
                                    </div>
                                    <div className="content-widget">
                                        <ul className="widget-list">
                                            {otherEvents.map((event, index) => (
                                                <li key={index} className="single-widget-item">
                                                    <a href={'/event/' + event.path} className="link">
                                                        <span className="fa-custom category">{event.name}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
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
export async function getServerSideProps({ params }) {
    const url1 = `${apiUrl}/event/${params.path}/`;
    const res1 = await axios.get(url1);
    const { data: event } = await res1.data;
    const url2 = `${apiUrl}/other-events/${params.path}/`;
    const res2 = await axios.get(url2);
    const { data: otherEvents } = await res2.data;
    return { props: { event, otherEvents } };
}
export default Event