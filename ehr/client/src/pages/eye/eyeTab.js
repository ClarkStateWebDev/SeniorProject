import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import EyeTable from './eyeTable';



class EyeTab extends Component {

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
                        Eye 
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='eye' label="Eye" class="activ" href='/eye'/>
                            <Tab id='ears' label="Ears" href='/ears'/>
                            <Tab id='head' label="Head" href='/head'/> 
                        </Tabs>
                </AppBar>
                {/* Eye Table */}
                <EyeTable></EyeTable>
            </>
        )}   
};
export default EyeTab;