import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Footer from '../../subcomponents/footer'
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import HygieneTable from './hygieneTable';



class HygieneTab extends Component {

    render() {
        
        return (
            <>
            {/* Make Home the patient selection page
            and add breadcrumb for patient dashboard */}
                <Breadcrumb>
                    <BreadcrumbItem>
                        Patient Selection
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Hygiene 
                    </BreadcrumbItem>
                </Breadcrumb>
                <PatientOverview/>
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='elimination' label="Elimination" href='/elimination'/>
                            <Tab id='intake' label="Intake" href='/intake'/>
                            <Tab id='hygiene' label="Hygiene" class="activ" href='/hygiene'/>
                            <Tab id='mobility' label="Mobility" href='/mobility'/>  
                        </Tabs>
                </AppBar>
                {/* Hygiene Table */}
                <HygieneTable></HygieneTable>
                <Footer />
            </>
        )}   
};
export default HygieneTab;