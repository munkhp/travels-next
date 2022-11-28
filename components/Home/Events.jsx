import EventCard from "./EventCard";

const Events = ({ events }) => {

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
                    <div className="row hotels-list">
                        {events.map((event, index) => (
                            <div key={index} className="col-sm-6">
                                <EventCard event={event} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section >
}
export default Events;