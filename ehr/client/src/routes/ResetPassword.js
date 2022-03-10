import React from 'react';
import { Switch, Route } from 'react-router';
import ResetPassword from '../pages/login/ResetPassword';

const forgotPasswordRoutes = () => (
    <Switch>
      <Route exact path="/reset/:token" component={ResetPassword}/>
    </Switch>
);

export default forgotPasswordRoutes;