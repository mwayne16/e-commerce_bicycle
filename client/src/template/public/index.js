import React from 'react';
import Header from '../../layout/pages/public/Header';

const PublicLayout = Component => {
  return props => (
    //Maybe do path and components as the prop to Route in Index?
    //
    <>
      <Header />
      <Component path={props.route} component={Component} />
    </>
  );
};
export default PublicLayout;
