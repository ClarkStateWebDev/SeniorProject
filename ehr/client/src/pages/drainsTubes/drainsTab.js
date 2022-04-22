import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import DrainsTable from './drainsTable';



class DrainsTab extends Component {

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
                        Drains & Tubes
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='drains' label="Drains & Tubes" class="activ" href='/drains'/>
                            <Tab id='drains-notes' label="Notes & Interventions"  href='/drains-notes'/>
                        </Tabs>
                </AppBar>
                {/* Drains & Tubes Table */}
                <DrainsTable></DrainsTable>
            </>
        )}   
};
export default DrainsTab;