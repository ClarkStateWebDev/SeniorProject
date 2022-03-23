import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import WoundCharTable from './woundCharTable';



class WoundCharTab extends Component {

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
                        Wound Characteristics
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='integumentary' label="Integumentary" href='/integumentary'/>
                            <Tab id='alterations' label="Alterations" href='/alterations'/>
                            <Tab id='woundLocation' label="Wound Location" href='/wound-location'/>
                            <Tab id='woundCharacteristics' label="Wound Characteristics" class="activ" href='/wound-characteristics'/>
                            <Tab id='dressingChange' label="Dressing Change" href='/dressing-change'/>
                        </Tabs>
                </AppBar>
                {/* Wound location Table */}
                <WoundCharTable></WoundCharTable>
            </>
        )}   
};
export default WoundCharTab;