<<<<<<< HEAD
/* import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({Component: Comp, loggedIn, path, ...rest}) => {
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                return loggedIn ? <Comp { ...props}/> : <Redirect to={{
                    pathname: "/login",
                    state: {
                        prevLocation: path,
                        error: "Please login first."
                    }
                }} />
            }}
        />
    )
}

=======
/* import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({Component: Comp, loggedIn, path, ...rest}) => {
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                return loggedIn ? <Comp { ...props}/> : <Redirect to={{
                    pathname: "/login",
                    state: {
                        prevLocation: path,
                        error: "Please login first."
                    }
                }} />
            }}
        />
    )
}

>>>>>>> c2169ba77d2dece1f9eeec06a233b2ede44b7181
export default ProtectedRoute; */