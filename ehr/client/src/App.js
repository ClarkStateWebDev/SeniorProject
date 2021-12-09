import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import './css/App.css';
import patientRoutes from './components/routes/patients';
import adminRoutes from './components/routes/admin';
import loginRoutes from './components/routes/login';
import NavBar from './components/NavBar';


// sets up routing outside of app
const patientRoute = patientRoutes();
const adminRoute = adminRoutes();
const loginRoute = loginRoutes();


class App extends Component {

    render() {
        return (
            <Router>
                <div id="App">
                    <NavBar />
                    <div id="App-body">
                    </div>
                </div>
                {loginRoute}
                {patientRoute}
                {adminRoute}
            </Router>
        );
    }
}

export default App;
