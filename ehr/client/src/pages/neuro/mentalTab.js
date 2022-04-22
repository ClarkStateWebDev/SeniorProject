import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
//import Field from '../History/textfield';
//import GreyField from '../History/greyField';
import MentalTable from './mentalTable';


const MentalTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Mental Status
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='mental' label="Mental Status" class="activ" href='/mental-status'/>
                            <Tab id='seizure' label="Seizure Activity" href='/seizure-activity'/>
                            <Tab id='cranial' label="Cranial Nerve Assessment" href='/cranial-nerve'/>
                            <Tab id='neuroNotes' label="Notes" href='/neurological-notes'/>
                        </Tabs>
                </AppBar>

                {/* mental status table */}
                <MentalTable></MentalTable>

            <Footer />
        </>
    )
};


export default MentalTab;