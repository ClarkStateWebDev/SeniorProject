import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Footer from '../../subcomponents/footer'
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
//import VitalsTable from './vitalTable';
//import VitalsForm from './vitalsForm';
import EliminationTable from './eliminationTable';



class EliminationTab extends Component {

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
                        Elimination 
                    </BreadcrumbItem>
                </Breadcrumb>
                <PatientOverview/>
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='elimination' label="Elimination" class="activ" href='/elimination'/>
                            <Tab id='intake' label="Intake" href='/intake'/>
                            <Tab id='hygiene' label="Hygiene" href='/hygiene'/>
                            <Tab id='mobility' label="Mobility" href='/mobility'/>  
                        </Tabs>
                </AppBar>
                {/* Elimination Table */}
                <EliminationTable></EliminationTable>
                <Footer />
            </>
        )}   
};
export default EliminationTab;