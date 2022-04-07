import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
//import Field from '../History/textfield';
//import GreyField from '../History/greyField';
import SafeTable from './safetyTable';


const SafetyTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Safety
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            <p>Click <a href="https://www.ahrq.gov/patient-safety/settings/hospital/fall-prevention/toolkit/morse-fall-scale.html" target="_blank">here</a> to access the Fall Risk Assessment form.</p>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='safety' label="safety" class="activ" href='/safety'/>
                            <Tab id='safeNotes' label="Safety Notes" href='/safety-notes'/>
                        </Tabs>
                </AppBar>

                {/* saftey table */}
                <SafeTable></SafeTable>

            
            <br></br><br></br>
            <p>* Source: From Agency for Healthcare Research and Quality. **rest of citation goes here**</p>
                <br></br>
            <Footer />
        </>
    )
};


export default SafetyTab;