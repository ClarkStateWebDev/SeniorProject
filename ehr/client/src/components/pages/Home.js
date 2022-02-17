import React, { Component } from 'react';
import PatientOverview from './dashboard/patient-overview'
import Vitals from './dashboard/vitals'
import HospitalInfo from './dashboard/hospital-info'
import Health from './dashboard/health'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Footer from '../subcomponents/footer'
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import AddHealth from './dashboard/healthForm';


class Home extends Component {

    render() {
        
        return (
            <>
                <Breadcrumb>
                    <BreadcrumbItem>
                        Patient Selection
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Dashboard
                    </BreadcrumbItem>
                </Breadcrumb>
                <PatientOverview/>
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static">
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color:'black'}}>
                            <Tab id='dashboard'class='activ' label="Dashboard" href='/dashboard'/>
                            <Tab id='history' label="History" href='/history'/>
                            <Tab id='imaging' label="Imaging" href='/imaging'/>
                            <Tab id='labs' label="Labs" href='/labs'/>
                            <Tab id='care' label="Care Plan" href='/'/>
                        </Tabs>
                </AppBar>
                <Health/>
                <br></br>
                <Vitals/>
                <br></br>
                <HospitalInfo />
                <br></br>
                <Footer />
            </>
        )}   
};
export default Home;