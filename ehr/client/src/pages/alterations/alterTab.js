import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import AlterTable from './alterTable';



class AlterTab extends Component {

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
                        Alterations
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='integumentary' label="Integumentary" href='/integumentary'/>
                            <Tab id='alterations' label="Alterations" class="activ" href='/alterations'/>
                            <Tab id='woundLocation' label="Wound Location" href='/wound-location'/>
                            <Tab id='woundCharacteristics' label="Wound Characteristics" href='/wound-characteristics'/>
                            <Tab id='dressingChange' label="Dressing Change" href='/dressing-change'/>
                        </Tabs>
                </AppBar>
                {/* Alterations Table */}
                <AlterTable></AlterTable>
            </>
        )}   
};
export default AlterTab;