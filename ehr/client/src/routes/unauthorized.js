<<<<<<< HEAD
import React from 'react';
import { Switch, Route } from 'react-router';
import Unauthorized from "../pages/Unauthorized";

const unauthRoutes = () => {
    <Switch>
        <Route exact path="/unauthorized" component={Unauthorized} />
    </Switch>
    
}

=======
import React from 'react';
import { Switch, Route } from 'react-router';
import Unauthorized from "../pages/Unauthorized";

const unauthRoutes = () => {
    <Switch>
        <Route exact path="/unauthorized" component={Unauthorized} />
    </Switch>
    
}

>>>>>>> c2169ba77d2dece1f9eeec06a233b2ede44b7181
export default unauthRoutes;