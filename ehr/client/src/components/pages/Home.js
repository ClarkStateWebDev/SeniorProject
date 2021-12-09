import React, { Component } from 'react';
import PatientOverview from './dashboard/patient-overview'
import Vitals from './dashboard/vitals'
import HospitalInfo from './dashboard/hospital-info'
import Health from './dashboard/health'
import Tabs from '../subcomponents/tabs'
import Footer from '../subcomponents/footer'
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'

class Home extends Component {

    render() {
        
        return (
            <>
                <Breadcrumb>
                    <BreadcrumbItem active>
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        Dashboard
                    </BreadcrumbItem>
                </Breadcrumb>
                <Tabs />
                <PatientOverview/>
                <Health/>
                <Vitals/>
                <HospitalInfo />
                <Footer />
            </>
        )}   
};
export default Home;