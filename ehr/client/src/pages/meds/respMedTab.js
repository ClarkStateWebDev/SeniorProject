import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
//import Field from '../History/textfield';
//import GreyField from '../History/greyField';
import RespMedTable from './respMedTable';


const RespMedTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Respiratory Medications
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
                            <Tab id='respMeds' label="Respiratory Medications" class="activ" href='/respiratory-medications'/>
                            <Tab id='discontinued' label="Discontinued Medications" href='/discontinued-medications'/>
                        </Tabs>
                </AppBar>

                {/* respiratory medications table */}
                <RespMedTable></RespMedTable>

            <Footer />
        </>
    )
};


export default RespMedTab;