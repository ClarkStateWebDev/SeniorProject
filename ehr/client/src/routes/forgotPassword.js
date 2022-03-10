<<<<<<< HEAD
import React from 'react';
import { Switch, Route } from 'react-router';
import ForgotPassword from '../pages/login/forgotPassword';

const forgotPasswordRoutes = () => (
    <Switch>
      <Route exact path="/forgotpassword" component={ForgotPassword}/>
    </Switch>
);

=======
import React from 'react';
import { Switch, Route } from 'react-router';
import ForgotPassword from '../pages/login/forgotPassword';

const forgotPasswordRoutes = () => (
    <Switch>
      <Route exact path="/forgotpassword" component={ForgotPassword}/>
    </Switch>
);

>>>>>>> c2169ba77d2dece1f9eeec06a233b2ede44b7181
export default forgotPasswordRoutes;