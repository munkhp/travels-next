import { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import BackTop from './BackTop';
import MobileMenu from './MobileMenu';

const Layout = ({ enableSticyHeader = true, children }) => {
  return (
    <Fragment>
      <MobileMenu />
      <div className="wrapper-content">
        <Header sticky={enableSticyHeader} />
        <div id="wrapper-content">
          <div className="main-content">
            {children}
          </div>
          <BackTop />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;