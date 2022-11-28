export default function Footer() {
    return <footer>
        <div className="footer-main padding-top padding-bottom">
            <div className="container">
                <div className="footer-main-wrapper">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <div className="contact-us-widget widget">
                                <div className="title-widget">contact us</div>
                                <div className="content-widget">
                                    <div className="info-list">
                                        <ul className="list-unstyled">
                                            <li>
                                                <i className="icons fa fa-map-marker"></i>
                                                <p className="link">Address : 37-56, United Nations Street, 4th khoroo, Chingeltei District, Ulaanbaatar, Mongolia</p>
                                            </li>
                                            <li>
                                                <i className="icons fa fa-phone"></i>
                                                <a href="tel:+97699277699" className="link">Phone : +976 – 99277699</a>
                                            </li>
                                            <li>
                                                <i className="icons fa fa-envelope-o"></i>
                                                <a href="mailto:info@travelsinmongolia.com" className="link">info@travelsinmongolia.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="social-footer">
                                        <ul className="list-inline list-unstyled">
                                            <li style={{ paddingLeft: 0 }}>
                                                <a href="https://www.facebook.com/TravelsinMongolia" className="link facebook" style={{ paddingLeft: 0 }}>
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="destination-widget widget">
                                <div className="title-widget">Destinations</div>
                                <div className="content-widget">
                                    <ul className="list-unstyled list-inline">
                                        <li>
                                            <div className="thumb">
                                                <img
                                                    src="https://res.cloudinary.com/dmyps1mg3/image/upload/v1669359923/travels/gallery-01_byhd6c.jpg" alt="" className="img-responsive" />
                                                <div className="overlay">Central Mongolia</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/v1669359922/travels/gallery-02_sajuhj.jpg" alt="" className="img-responsive" />
                                                <div className="overlay">Gobi Desert</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/v1669359922/travels/gallery-03_nqy8oe.jpg" alt="" className="img-responsive" />
                                                <div className="overlay">Northern Mongolia</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/v1669359921/travels/gallery-04_f5fciw.jpg" alt="" className="img-responsive" />
                                                <div className="overlay">Eastern Mongolia</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/v1669359921/travels/gallery-05_vdkunp.jpg" alt="" className="img-responsive" />
                                                <div className="overlay">Western Mongolia</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/v1669359923/travels/gallery-06_ckyrwb.jpg" alt="" className="img-responsive" />
                                                <div className="overlay">Around Ulaanbaatar</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="destination-widget widget">
                                <div className="title-widget">We are member of:</div>
                                <div className="content-widget">
                                    <ul className="list-unstyled list-inline natural">
                                        <li>
                                            <a href="#" className="thumb">
                                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/v1669359923/travels/gallery-07_cuniov.jpg" alt="" className="img-responsive" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="thumb">
                                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/v1669359921/travels/gallery-08_jnypdk.jpg" alt="" className="img-responsive" />
                                            </a>
                                        </li>
                                        <li></li>
                                        <li>
                                            <a href="#" className="thumb">
                                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/v1669359921/travels/gallery-09_eyekcy.jpg" alt="" className="img-responsive" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="thumb">
                                                <img src="https://res.cloudinary.com/dmyps1mg3/image/upload/v1669359923/travels/gallery-10_qotrkv.jpg" alt="" className="img-responsive" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hyperlink">
            <div className="container">
                <div className="name-company">&copy; Copyright Travels in Mongolia 2022</div>
            </div>
        </div>
    </footer>
}