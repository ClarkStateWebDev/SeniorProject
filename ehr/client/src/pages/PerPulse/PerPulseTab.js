import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import PerPulse from './PerPulse';



class PerPulseTab extends Component {

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
                        Peripheral Pulse
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='vascular' label="Peripheral Pulse" class='activ' href='/per-pulse'/>
                            <Tab id='vascular-notes' label="Peripheral Pulse Notes" href='/vascular-notes'/>
                        </Tabs>
                </AppBar>
                {/* Vascular Table */}
                <PerPulse></PerPulse>
            </>
        )}   
};
export default PerPulseTab;