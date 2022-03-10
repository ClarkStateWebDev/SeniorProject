import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import ImagingTable from './imagingTable';



class imagingTab extends Component {

    render() {
        
        return (
            <>
                <Breadcrumb>
                    <BreadcrumbItem active>
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        Imaging
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <PatientOverview/> */}
                <br></br><br></br>
                 {/* Tabs */}
                 <AppBar position="static">
                        <Tabs id='tabs' style={{backgroundColor: '#89a9d0'}}>
                            <Tab id='dashboard' label="Dashboard" href='/dashboard'/>
                            <Tab id='history' label="History" href='/history'/>
                            <Tab id='imaging' class='activ' label="Imaging" href='/imaging'/>
                            <Tab id='labs' label="Labs" href='/labs'/>
                            <Tab id='care' label="Care Plan" href='/care'/>
                        </Tabs>
                </AppBar>
                <ImagingTable></ImagingTable>
                
                <Footer />
            </>
        )}   
};
export default imagingTab;