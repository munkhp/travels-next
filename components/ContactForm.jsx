import axios from 'axios';
import React from 'react'
import apiUrl from '../utils/apiUrl'

export default function ContactForm({ title, description }) {
    const INITIAL_MESSAGE = {
        name: '',
        email: '',
        comment: '',
    }

    const [message, setMessage] = React.useState(INITIAL_MESSAGE);
    const [loading, setLoading] = React.useState(false);
    const [showForm, setShowForm] = React.useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target
        setMessage((prevState) => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios.post(`${apiUrl}/message`, message).then(res => {
            setLoading(false);
            setMessage(INITIAL_MESSAGE);
            setShowForm(false);
        })
    }

    return <div className="contact-box">
        <h5 className="title">{title}</h5>
        <p className="text">{description}</p>
        {showForm ? <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" className="form-control form-input" name="name" value={message.name} onChange={handleChange} required />
            <input type="email" placeholder="Your Email" className="form-control form-input" name="email" value={message.email} onChange={handleChange} required />
            <textarea placeholder="Your Message" className="form-control form-input" name="comment" value={message.comment} onChange={handleChange} required></textarea>
            <div className="contact-submit">
                <button type="submit" data-hover="SEND NOW" className="btn btn-slide" disabled={loading}>
                    <span className="text">send message</span>
                    <span className="icons fa fa-long-arrow-right"></span>
                </button>
            </div>
        </form> : <p className="text">Thank you for your message! We will contact you as soon as possible.</p>}
    </div>
}