import React, { Fragment } from 'react'
import apiUrl from '../../utils/apiUrl';
import DatePicker from "react-datepicker";
import axios from 'axios';
export default function Booking({ name, isSingleTourPage, close, success }) {
    const INITIAL_ORDER = {
        blockClass: null,
        tourName: name,
        name: '',
        country: '',
        age: 18,
        adults: 1,
        children: 0,
        email: '',
        title: 'Mr.',
        comment: '',
        arrivalDate: new Date()
    }

    const [order, setOrder] = React.useState(INITIAL_ORDER)
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        setOrder((prevState) => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios.post(`${apiUrl}/order`, order).then(res => {
            setLoading(false);
            setOrder(INITIAL_ORDER);
            success();
        })
    }
    return (
        <Fragment>
            <div className="timeline-book-block book-tour ">
                <div className="find-widget widget new-style">
                    <h4 className="title-widgets">{'BOOK ' + order.tourName}</h4>
                    <form className="content-widget" onSubmit={handleSubmit}>
                        <div className="text-input small-margin-top">
                            <div className="input-daterange">
                                <div className="text-box-wrapper half">
                                    <label className="tb-label">Arrival date</label>
                                    <div className="input-group">
                                        {/* <input type="text" placeholder="MM/DD/YY" className="tb-input" /> */}
                                        <DatePicker selected={order.arrivalDate} className="tb-input" onChange={(date) => setOrder((prevState) => ({ ...prevState, arrivalDate: date }))} />
                                        <i className="tb-icon fa fa-calendar input-group-addon"></i>
                                    </div>
                                </div>
                                <div className="place text-box-wrapper half">
                                    <label className="tb-label">Country</label>
                                    <div className="input-group">
                                        <input type="text" placeholder="Please enter your country" className="tb-input" name="country"
                                            value={order.country}
                                            onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="count adult-count text-box-wrapper">
                                <label className="tb-label">Adults</label>
                                <div className="input-group">
                                    <input type="number" placeholder="Number of adults" className="tb-input" name="adults"
                                        value={order.adults}
                                        onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="count child-count text-box-wrapper">
                                <label className="tb-label">Children</label>
                                <div className="input-group">
                                    <input type="number" placeholder="Number of children" className="tb-input" name="children"
                                        value={order.children}
                                        onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="phone text-box-wrapper">
                                <label className="tb-label">Title</label>
                                <div className="select-wrapper">
                                    <select className="form-control custom-select selectbox" name="title"
                                        value={order.title}
                                        onChange={handleChange} required>
                                        <option>Mr.</option>
                                        <option>Miss</option>
                                        <option>Ms.</option>
                                        <option>Mrs.</option>
                                    </select>
                                </div>
                            </div>
                            <div className="first-name text-box-wrapper">
                                <label className="tb-label">Full Name</label>
                                <div className="input-group">
                                    <input type="text" placeholder="Please enter your name" className="tb-input" name="name"
                                        value={order.name}
                                        onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="last-name text-box-wrapper">
                                <label className="tb-label">Age</label>
                                <div className="input-group">
                                    <input type="number" placeholder="Enter your age" className="tb-input" name="age"
                                        value={order.age}
                                        onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="email text-box-wrapper">
                                <label className="tb-label">Email</label>
                                <div className="input-group">
                                    <input type="email" placeholder="Enter your email address" className="tb-input" name="email"
                                        value={order.email}
                                        onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="note text-box-wrapper">
                                <label className="tb-label">Comment:</label>
                                <div className="input-group">
                                    <textarea placeholder="Additional comments" rows="3" className="tb-input" name="comment"
                                        value={order.comment}
                                        onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <div className="button-box-wrapper">
                                <button type="submit" data-hover="SEND REQUEST" className="btn btn-slide" disabled={loading}>
                                    <span className="text">BOOK Now</span>
                                    <span className="icons fa fa-long-arrow-right"></span>
                                </button>
                                {!isSingleTourPage && <button type="button" className="btn booking-close-button" onClick={close}>
                                    Cancel
                                </button>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
