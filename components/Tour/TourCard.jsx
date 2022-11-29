import modifyImgUrl from '../../utils/image';

export default function TourCard(props) {
    const { tour } = props
    return <div key={tour._id} className="tours-layout">
        <div className="image-wrapper">
            <a href={'/tour/' + tour.path} className="link" style={{ backgroundImage: `url(${modifyImgUrl(tour.mediaUrl)})` }}>
            </a>
            <div className="title-wrapper">
                <a href={'/tour/' + tour.path} className="title">
                    {tour.name}
                </a>
            </div>
            <div className="label-sale">
                <p className="text">{tour.destination.title}</p>
            </div>
        </div>
        <div className="content-wrapper">
            <div className="content">
                <div className="title">
                    <span>from</span>
                    <div className="price">
                        <sup>$</sup>
                        <span className="number">{tour.prices.length > 0 ? tour.prices[tour.prices.length - 1].amount : 0}</span>
                    </div>
                    <p className="for-price">{tour.duration + " days " + (tour.duration - 1) + " nights"}</p>
                </div>
                <p className="text">
                    {tour.summary}
                </p>
                <div className="group-btn-tours">
                    <a href={'/tour/' + tour.path} className="btn" aria-label={tour.summary}>Learn more </a>
                </div>
            </div>
        </div>
    </div>
}