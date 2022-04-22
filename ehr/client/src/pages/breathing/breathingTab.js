import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import BreathingTable from './breathingTable';



class BreathingTab extends Component {

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
                        Breathing Quality
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='breathing' label="Breathing" class="activ" href='/breathing'/>
                            <Tab id='lungs' label="Lungs" href='/lungs'/>
                            <Tab id='oxygen' label="Oxygen" href='/oxygen'/>
                            <Tab id='airways' label="Airways" href='/airways'/>
                            <Tab id='notes' label="Notes" href='/respiratory-notes'/>
                        </Tabs>
                </AppBar>
                {/* Breathing Table */}
                <BreathingTable></BreathingTable>
            </>
        )}   
};
export default BreathingTab;