import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserAuth } from '../../layout/pages/UserAuth';
const LoginLayout = () => {
  return (
    <>
      <Route path='/Login' component={UserAuth} />
    </>
  );
};

export default withRouter(LoginLayout);
