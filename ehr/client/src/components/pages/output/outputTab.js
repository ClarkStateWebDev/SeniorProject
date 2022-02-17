import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Footer from '../../subcomponents/footer'
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import OutputTable from './outputTable';



class OutputTab extends Component {

    render() {
        
        return (
            <>
            <div>
            {/* Make Home the patient selection page
            and add breadcrumb for patient dashboard */}
            
            
                <Breadcrumb>
                    <BreadcrumbItem>
                        Patient Selection
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Output
                    </BreadcrumbItem>
                </Breadcrumb>
               
                
                <PatientOverview/>
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color:'black'}}>
                            <Tab id='vitals' label="Vitals" href='/vitals'/>
                            <Tab id='weight' label="Weight" href='/weight'/>
                            <Tab id='pain' label="Pain" href='/pain'/>
                            <Tab id='input' label="Input" href='/input'/>
                            <Tab id='output' label="Output" class="activ" href='/output'/>   
                        </Tabs>
                </AppBar>
                <OutputTable></OutputTable>
                
                <Footer/>
                </div>
            </>
        )}   
};
export default OutputTab;