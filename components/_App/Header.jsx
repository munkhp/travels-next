import { useRouter } from 'next/router'
import HamburgerMenu from './HamburgerMenu';
import { useState, useEffect } from "react";
export default function Header({ sticky }) {
  const router = useRouter()
  const [show, setShow] = useState(true);
  const [fixed, setFixed] = useState(false);
  const [lastScroll, setLastScroll] = useState(50);

  useEffect(() => {
    window.addEventListener("scroll", shouldShow);
    return () => window.removeEventListener("scroll", shouldShow);
  });
  const shouldShow = () => {
    if (!sticky)
      return;
    let top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > lastScroll) {
      setShow(false);
    } else if (top < lastScroll && top > 200) {
      setShow(true);
    }
    if (top < window.innerHeight && top > 0) {
      setShow(false);
    }
    setLastScroll(top);
    if (top > 200) {
      setFixed(true);
    } else {
      setShow(true);
      setFixed(false);
    }
  }
  return <header id="main-header">
    <div className={'bg-transparent'}>
      <div className="header-topbar">
        <div className="container">
          <ul className="topbar-left list-unstyled list-inline pull-left">
            <li>
              <a href="tel:+97699277699">
                <i className="fa fa-phone fa-fw" aria-hidden="true"></i>+976 99277699</a>
            </li>
            <li>
              <a href="mailto:info@travelsinmongolia.com">
                <i className="fa fa-envelope fa-fw" aria-hidden="true"></i>info@travelsinmongolia.com
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/TravelsinMongolia">
                <i className="fa fa-facebook-f fa-fw" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={'header-main ' + (fixed ? 'header-secondary header-fixed ' : null) + (show ? null : ' hide-menu')}>
        <div className="container">
          <div className="header-main-wrapper">
            <HamburgerMenu />
            <div className="navbar-header">
              <a href="/" className="logo">
                <div className="header-logo">
                  <img src='https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359938/travels/travels-logo_xt12yr.png' alt=""
                  />
                </div>
                <div className='title-wrapper'><span className="title">Travels in Mongolia</span><span className="sub-title">Tour Operator</span></div>
              </a>
            </div>
            <nav className="navigation">
              <ul className="nav-links nav navbar-nav">
                <li className={router.pathname === '/' ? "active" : null}>
                  <a href="/" className="main-menu">
                    <span className="text">home</span>
                  </a>
                </li>
                <li className={router.pathname === '/about-us' ? "active" : null}>
                  <a href="/about-us" className="main-menu">
                    <span className="text">about us</span>
                  </a>
                </li>
                <li className={router.pathname === '/tours' ? "active" : null}>
                  <a href="/tours" className="main-menu">
                    <span className="text">tours</span>
                  </a>
                </li>
                <li className={router.pathname === '/group-tours' ? "active" : null}>
                  <a href="/group-tours" className="main-menu">
                    <span className="text">group tours</span>
                  </a>
                </li>
                {/* <DropdownNavItem /> */}
                <li className={router.pathname === '/travel-tools' ? "active" : null}>
                  <a href="/travel-tools" className="main-menu">
                    <span className="text">travel tools</span>
                  </a>
                </li>
                <li>
                  <a href="https://payments.travelsinmongolia.com" className="main-menu">
                    <span className="text">online payment</span>
                  </a>
                </li>
                <li className={router.pathname === '/contact-us' ? "active" : null}>
                  <a href="/contact-us" className="main-menu">
                    <span className="text">contact us</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
}