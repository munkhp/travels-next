import { useRouter } from 'next/router';

export default function MobileMenu() {
    const router = useRouter();
    const closeMenu = () => {
        document.body.classList.remove("show-nav")
        document.querySelector('.hamburger-menu-wrapper').classList.remove("open");
    }
    return <div className="wrapper-mobile-nav">
        <div className="header-main">
            <div className="menu-mobile">
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
                    <li>
                        <button className="main-menu close-button" onClick={closeMenu}><i className="fa fa-times-circle-o"></i><span className="text">close</span></button>
                    </li>
                </ul>
            </div>
        </div>
    </div >
}