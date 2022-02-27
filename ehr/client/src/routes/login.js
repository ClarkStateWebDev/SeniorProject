import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../pages/login/login';

const loginRoutes = () => (
      <Route exact path="/login/" component={Login}/>
);

export default loginRoutes;