import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import MobilityTable from './mobilityTable';



class MobilityTab extends Component {

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
                        Mobility 
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='elimination' label="Elimination" href='/elimination'/>
                            <Tab id='intake' label="Intake" href='/intake'/>
                            <Tab id='hygiene' label="Hygiene" href='/hygiene'/>
                            <Tab id='mobility' label="Mobility" class="activ" href='/mobility'/>  
                        </Tabs>
                </AppBar>
                {/* Mobility Table */}
                <MobilityTable></MobilityTable>
            </>
        )}   
};
export default MobilityTab;