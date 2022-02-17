import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Footer from '../../subcomponents/footer'
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import LabTable from './labTable';



class LabTab extends Component {

    render() {
        
        return (
            <>
                <Breadcrumb>
                    <BreadcrumbItem>
                        Patient Selection
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Imaging
                    </BreadcrumbItem>
                </Breadcrumb>
                <PatientOverview/>
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static">
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color:'black'}}>
                            <Tab id='dashboard' label="Dashboard" href='/dashboard'/>
                            <Tab id='history' label="History" href='/history'/>
                            <Tab id='imaging' label="Imaging" href='/imaging'/>
                            <Tab id='labs' class='activ' label="Labs" href='/labs'/>
                            <Tab id='care' label="Care Plan" href='/care'/>
                        </Tabs>
                </AppBar>
                <LabTable></LabTable>
                
                <Footer />
            </>
        )}   
};
export default LabTab;