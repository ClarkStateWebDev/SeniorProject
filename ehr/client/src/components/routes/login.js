import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../pages/login/login';

const loginRoutes = () => (
    <Switch>
      <Route exact path="/login/" component={Login}/>
    </Switch>
);

export default loginRoutes;