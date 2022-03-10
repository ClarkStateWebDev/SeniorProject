import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import IntakeTable from './intakeTable';



class IntakeTab extends Component {

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
                        Intake 
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='elimination' label="Elimination" href='/elimination'/>
                            <Tab id='intake' label="Intake" class="activ" href='/intake'/>
                            <Tab id='hygiene' label="Hygiene" href='/hygiene'/>
                            <Tab id='mobility' label="Mobility" href='/mobility'/>  
                        </Tabs>
                </AppBar>
                {/* Intake Table */}
                <IntakeTable></IntakeTable>
            </>
        )}   
};
export default IntakeTab;