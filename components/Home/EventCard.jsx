import modifyImgUrl from '../../utils/image';

export default function EventCard({ event }) {
    return <div className="events-layout">
        <div className="image-wrapper">
            <a href={'/event/' + event.path} aria-label={event.summary} className="link" style={{ backgroundImage: `url(${modifyImgUrl(event.mediaUrl)})` }}>
            </a>
            <div className="title-wrapper">
                <a href={'/event/' + event.path} aria-label={event.summary} className="title">{event.name}</a>
            </div>
        </div>
        <div className="content-wrapper">
            <div className="content">
                <ul className="list-unstyled">
                    <li className="main-list">
                        <i className="icons fa fa-map-marker"></i>
                        <span>{event.locationText}</span>
                    </li>
                    <li className="main-list">
                        <i className="icons fa fa-calendar"></i>
                        <span>{event.scheduleText}</span>
                    </li>
                </ul>
                <p className="text">{event.summary}</p>
                <a href={'/event/' + event.path} className="btn" aria-label={event.summary}>Learn more </a>
            </div>
        </div>
    </div>
}