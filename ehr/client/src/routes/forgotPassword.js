import React from 'react';
import { Switch, Route } from 'react-router';
import ForgotPassword from '../pages/login/forgotPassword';

const forgotPasswordRoutes = () => (
    <Switch>
      <Route exact path="/forgotpassword" component={ForgotPassword}/>
    </Switch>
);

export default forgotPasswordRoutes;