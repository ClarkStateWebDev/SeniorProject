import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
//import Field from '../History/textfield';
//import GreyField from '../History/greyField';
import DiscMedTable from './discMedTable';


const DiscMedTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Discontinued Medications
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='schedMeds' label="Scheduled Medications" href='/scheduled-medications'/>
                            <Tab id='prnMeds' label="PRN Medications" href='/prn-medications'/>
                            <Tab id='continuous' label="Continuous Medications" href='/continuous-medications'/>
                            <Tab id='respMeds' label="Respiratory Medications" href='/respiratory-medications'/>
                            <Tab id='discontinued' label="Discontinued Medications" class="activ" href='/discontinued-medications'/>
                        </Tabs>
                </AppBar>

                {/* discontinued medications table */}
                <DiscMedTable></DiscMedTable>

            <Footer />
        </>
    )
};


export default DiscMedTab;