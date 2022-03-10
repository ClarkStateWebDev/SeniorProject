import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import HeadTable from './headTable';



class HeadTab extends Component {

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
                        Head
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='eye' label="Eye"  href='/eye'/>
                            <Tab id='ears' label="Ears" href='/ears'/>
                            <Tab id='head' label="Head" class="activ" href='/head'/> 
                        </Tabs>
                </AppBar>
                {/* Head Table */}
                <HeadTable></HeadTable>
            </>
        )}   
};
export default HeadTab;