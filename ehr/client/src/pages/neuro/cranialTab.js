import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
//import Field from '../History/textfield';
//import GreyField from '../History/greyField';
import CranialTable from './cranialTable';


const CranialTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Cranial Assessment
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='mental' label="Mental Status" href='/mental-status'/>
                            <Tab id='seizure' label="Seizure Activity" href='/seizure-activity'/>
                            <Tab id='cranial' label="Cranial Nerve Assessment" class="activ" href='/cranial-nerve'/>
                            <Tab id='neuroNotes' label="Notes" href='/neurological-notes'/>
                        </Tabs>
                </AppBar>

                {/* cranial nerve assessment table */}
                <CranialTable></CranialTable>

            <Footer />
        </>
    )
};


export default CranialTab;