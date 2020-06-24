import React from 'react';
import { withRouter } from 'react-router';
import PublicHeader from '../../layout/pages/Header';
import PublicFooter from '../../layout/pages/Footer';
const PublicLayout = props =>
  window.location.pathname !== '/Login' &&
  window.location.pathname !== '/Signup' ? (
    <>
      <PublicHeader />
      {props.children}
      <PublicFooter />
    </>
  ) : (
    <>
      <PublicHeader />
      {props.children}
    </>
  );

export default withRouter(PublicLayout);
