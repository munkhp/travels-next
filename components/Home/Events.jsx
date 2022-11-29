import EventCard from "./EventCard"
import { useState, useEffect } from 'react'
import arrayChunk from "../../utils/arrayChunk"
import ContentLoader from 'react-content-loader'
import apiUrl from "../../utils/apiUrl"
import axios from 'axios'

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const url = `${apiUrl}/events`;
                const res = await axios.get(url);
                const { data: events } = await res.data;
                setEvents(events);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])
    const MyLoader = () => (
        <ContentLoader uniqueKey="events-loader" viewBox="0 0 300 70">
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="8" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="8" />
        </ContentLoader>
    );

    return <section className="hotels padding-top padding-bottom">
        <div className="container">
            <div className="hotels-wrapper">
                <div className="group-title">
                    <div className="sub-title">
                        <p className="text">ONLY IN MONGOLIA</p>
                        <i className="icons flaticon-people"></i>
                    </div>
                    <h2 className="main-title">SPECIAL EVENTS</h2>
                </div>
                <div className="hotels-content margin-top70">
                    {(loading && events.length === 0) ? (
                        arrayChunk([...Array(4)], 2).map((row, i) => (
                            <div key={i} className="row">
                                {row.map((col, i) => (
                                    <div className="col-xs-12 col-md-6" key={i}>
                                        <MyLoader />
                                    </div>
                                ))}
                            </div>
                        ))
                    ) :
                        <div className="row hotels-list">
                            {events.map((event, index) => (
                                <div key={index} className="col-sm-6">
                                    <EventCard event={event} />
                                </div>
                            ))}
                        </div>}
                </div>
            </div>
        </div>
    </section >
}
export default Events;