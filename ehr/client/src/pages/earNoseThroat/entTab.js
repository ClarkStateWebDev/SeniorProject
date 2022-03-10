import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import EntTable from './entTable';



class EntTab extends Component {

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
                        Ear, Nose, Throat
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='eye' label="Eye" href='/eye'/>
                            <Tab id='ears' label="Ears" class="activ" href='/ears'/>
                            <Tab id='head' label="Head" href='/head'/> 
                        </Tabs>
                </AppBar>
                {/* Ent Table */}
                <EntTable></EntTable>
            </>
        )}   
};
export default EntTab;