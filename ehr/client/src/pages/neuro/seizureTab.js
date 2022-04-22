import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
//import Field from '../History/textfield';
//import GreyField from '../History/greyField';
import SeizureTable from './seizureTable';


const SeizureTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Seizure Activity
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='mental' label="Mental Status" href='/mental-status'/>
                            <Tab id='seizure' label="Seizure Activity" class="activ" href='/seizure-activity'/>
                            <Tab id='cranial' label="Cranial Nerve Assessment" href='/cranial-nerve'/>
                            <Tab id='neuroNotes' label="Notes" href='/neurological-notes'/>
                        </Tabs>
                </AppBar>

                {/* seizure assessment table */}
                <SeizureTable></SeizureTable>

            <Footer />
        </>
    )
};


export default SeizureTab;