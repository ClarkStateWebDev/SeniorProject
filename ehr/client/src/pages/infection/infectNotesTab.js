import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Field from '../History/textfield';
//import GreyField from '../History/greyField';
import InfectNotesForm from './infectNotesForm';


const InfectNotesTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Infection Control
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='infect' label="Infection Control" href='/infection-control'/>
                            <Tab id='infectNotes' label="Infection Notes" class="activ" href='/infection-notes'/>
                        </Tabs>
                </AppBar>

                {/* Infection notes field */}
                <h4 style={{margin: '10px', overflow: 'hidden'}}>Infection Notes</h4>
                <Field></Field>
                <InfectNotesForm></InfectNotesForm>

                <br></br>
            <Footer />
        </>
    )
};


export default InfectNotesTab;