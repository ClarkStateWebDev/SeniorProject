import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../subcomponents/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Field from '../History/textfield';
import GreyField from '../History/greyField';
import CareForm from './careForm';

class CareTab extends Component {

    render() {
        
        return (
            <>
                <Breadcrumb>
                    <BreadcrumbItem active>
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        History
                    </BreadcrumbItem>
                </Breadcrumb>
                <PatientOverview/>
                <br></br><br></br>
                
                {/* Tabs */}
                <AppBar position="static">
                        <Tabs id='tabs' style={{backgroundColor: '#89a9d0'}}>
                            <Tab id='dashboard' label="Dashboard" href='/'/>
                            <Tab id='history' class='activ' label="History" href='/history'/>
                            <Tab id='imaging' label="Imaging" href='/imaging'/>
                            <Tab id='labs' label="Labs" href='/labs'/>
                            <Tab id='care' label="Care Plan" href='/care'/>
                        </Tabs>
                </AppBar>
                <br></br>
                <CareForm></CareForm>
                <br></br>
                <h4 style={{margin: '10px', overflow: 'hidden'}}>Care Plan</h4>
                <GreyField></GreyField>
                
                <br></br> <br></br><br></br>

                <Footer />
            </>
        )}   

};

export default CareTab;