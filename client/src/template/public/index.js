import React from 'react';
import { withRouter } from 'react-router';
import Header from '../../layout/pages/public/Header';
import Footer from '../../layout/pages/public/Footer';
import ScrollToTop from '../../components/ScrollToTop';
const Scroll = withRouter(ScrollToTop);
const removeFooter = ['/login', '/register'];
const PublicLayout = ({ component: Component, routerProps, user, setUser }) => {
  return (
    <Scroll>
      <Header user={user} setUser={setUser} />
      <Component user={user} setUser={setUser} {...routerProps} />
      {!removeFooter.includes(window.location.pathname) && <Footer />}
    </Scroll>
  );
};

export default withRouter(PublicLayout);
