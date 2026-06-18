import { useState, useEffect } from 'react'
import Booking from './Booking';
import Modal from 'react-modal';
import ReactCardFlip from 'react-card-flip';
import useWindowDimensions from '../../utils/windowDimensions';
import arrayChunk from '../../utils/arrayChunk';
import modifyImgUrl from '../../utils/image';
import { useRouter } from 'next/navigation';
import baseUrl from '../../utils/baseUrl';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

if (typeof document !== "undefined") {
    Modal.setAppElement('body');
}

export default function GroupTourCard({ tour }) {
    const router = useRouter()
    const [bookingShown, setBookingShown] = useState(false);
    const [isSmall, setIsSmall] = useState(false);
    const { width } = useWindowDimensions();

    function redirectToSuccess() {
        router.push('/success');
    }

    useEffect(() => {
        setIsSmall(width <= 600)
    }, [width])

    function showBooking() {
        setBookingShown(true);
    }

    function hideBooking() {
        setBookingShown(false);
    }

    const elements = [<div key={0} className="image-wrapper" style={{
        backgroundImage: `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0.4) 75%,
    rgba(0, 0, 0, 0.5) 85%,
    rgba(0, 0, 0, 0.6) 90%,
    rgba(0, 0, 0, 0.7) 100%
  ), url(${modifyImgUrl(tour.mediaUrl)})`
    }}>
        <div className="label-sale">
            <p className="text">{tour.destination.title}</p>
        </div>
        <div className="title-wrapper">
            <a href={'/tour/' + tour.path} className="title" aria-label={tour.summary}>
                {tour.name}
            </a>
        </div>
    </div>,
    <div key={1} className="content-wrapper">
        <div className="sub-title"><label>Summary</label></div>
        <p className="text">
            {tour.summary}
        </p>
        <div className="sub-title">
            <label>Availability</label></div>
        {arrayChunk([...tour.schedules], 2).map((row, i) => (
            <div className="row schedule-row" key={i}>
                {row.map((col, i) => (
                    <div className="col-md-6 schedule-item" key={i}>
                        {col.start + ' - ' + col.end}
                    </div>
                ))}
            </div>
        ))
        }
    </div>,
    <div key={2} className="price-wrapper">
        <div className="sub-title"><label>Price</label></div>
        <div>
            <div className="price">
                <sup>$</sup>
                <span className="number">1200</span>
            </div>
            <span> per person</span>
        </div>
        <div className="supplement-price">single supplement: <sup>$</sup>
            <span className="number">{tour.supplement}</span></div>

        <button className="btn btn-maincolor btn-book-tour" onClick={showBooking}>join now</button>
    </div>,
    ]

    return <div className="group-tour">
        {!isSmall && elements}
        {!isSmall && <Modal
            isOpen={bookingShown}
            onRequestClose={hideBooking}
            style={customStyles}
            className="booking-modal"
            overlayClassName="booking-overlay"
        >
            <Booking name={tour.name} isSingleTourPage={false} close={hideBooking} success={redirectToSuccess} />
        </Modal >}
        {isSmall && <ReactCardFlip isFlipped={bookingShown} flipDirection="vertical">
            <div>{elements}</div>
            <Booking name={tour.name} isSingleTourPage={false} close={hideBooking} success={redirectToSuccess} />
        </ReactCardFlip>}
    </div>
}
