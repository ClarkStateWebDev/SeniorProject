import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import OxygenTable from './oxygenTable';



class OxygenTab extends Component {

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
                        Oxygenation
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='breathing' label="Breathing" href='/breathing'/>
                            <Tab id='lungs' label="Lungs" href='/lungs'/>
                            <Tab id='oxygen' label="Oxygen" class="activ" href='/oxygen'/>
                            <Tab id='airways' label="Airways" href='/airways'/>
                            <Tab id='notes' label="Notes" href='/respiratory-notes'/>
                        </Tabs>
                </AppBar>
                {/* Oxygenation Table */}
                <OxygenTable></OxygenTable>
            </>
        )}   
};
export default OxygenTab;