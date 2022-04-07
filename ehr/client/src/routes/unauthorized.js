import React from 'react';
import { Switch, Route } from 'react-router';
import Unauthorized from "../pages/Unauthorized";

const unauthRoutes = () => {
    <Switch>
        <Route exact path="/unauthorized" component={Unauthorized} />
    </Switch>
    
}

export default unauthRoutes;