import React from 'react';
import { withRouter } from 'react-router';
import Header from '../../layout/pages/public/Header';
import Footer from '../../layout/pages/public/Footer';

const PublicLayout = props =>
  window.location.pathname !== '/Login' &&
  window.location.pathname !== '/Signup' ? (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  ) : (
    <>
      <Header />
      {props.children}
    </>
  );

export default withRouter(PublicLayout);
