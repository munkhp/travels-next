import { Link } from 'react-scroll'
export default function WhoWeAre() {
  return <section id="about-us" className="about-us layout-1 padding-top padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="group-title">
            <div className="sub-title">
              <p className="text">tour operator</p>
              <i className="icons flaticon-people"></i>
            </div>
            <h1 className="main-title">travels in mongolia</h1>
          </div>
          <div className="about-us-wrapper">
            <p className="text">
              Travels in Mongolia is a local tour operator which specializes in providing unforgettable Mongolian tour experience.
              We aim to develop the sustainable ecotourism, deliver overall satisfaction to our customers, fulfill their requirements & needs with our professional team and introduce Mongolian culture, history and wild nature to foreigners.
              Founder & CEO Doljmaa Songorov is a great expert in Mongolian tourism field and she will be organizing the tours.
              Due to our exceptional work, Travels in Mongolia is one of the most professional and best tour operators in Mongolia.
            </p>
            <div className="group-list">
              <ul className="list-unstyled about-us-list">
                <li>
                  <p className="text">60+ destinations</p>
                </li>
                <li>
                  <p className="text">Tours to all regions in Mongolia</p>
                </li>
                <li>
                  <p className="text">Reasonable prices</p>
                </li>
                <li>
                  <p className="text">Responsible drivers</p>
                </li>
              </ul>
              <ul className="list-unstyled about-us-list">
                <li>
                  <p className="text">Well trained tour guides</p>
                </li>
                <li>
                  <p className="text">All accodomations at tourist camps</p>
                </li>
                <li>
                  <p className="text">Easy booking</p>
                </li>
                <li>
                  <p className="text">24/7 support</p>
                </li>
              </ul>
            </div>
            <div className="group-button">
              <Link to="our-tours" spy={true} smooth={true}>
                <button
                  className="btn btn-maincolor"
                >
                  Explore tours
                </button>
              </Link>
              <a href="mailto:info@sunpath-mongolia.com" className="btn">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div
            data-wow-delay="0.5s"
            className="about-us-image wow zoomIn"
          >
            <img
              src="https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359930/travels/about-us-1_v4qebx.jpg"
              alt=""
              className="img-responsive"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
}