<<<<<<< HEAD
import React from 'react';
import { Switch, Route } from 'react-router';
import ResetPassword from '../pages/login/ResetPassword';

const forgotPasswordRoutes = () => (
    <Switch>
      <Route exact path="/reset/:token" component={ResetPassword}/>
    </Switch>
);

=======
import React from 'react';
import { Switch, Route } from 'react-router';
import ResetPassword from '../pages/login/ResetPassword';

const forgotPasswordRoutes = () => (
    <Switch>
      <Route exact path="/reset/:token" component={ResetPassword}/>
    </Switch>
);

>>>>>>> c2169ba77d2dece1f9eeec06a233b2ede44b7181
export default forgotPasswordRoutes;