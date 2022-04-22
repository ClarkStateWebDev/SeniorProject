import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Field from '../History/textfield';
import GreyField from '../History/greyField';
import SafetyNotesForm from './safeNotesForm';


const SafetyNotesTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Safety Notes & Interventions
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='safety' label="safety" href='/safety'/>
                            <Tab id='safeNotes' label="Safety Notes" class="activ" href='/safety-notes'/>
                        </Tabs>
                </AppBar>

            {/* Safety notes field */}
            <h4 style={{margin: '10px', overflow: 'hidden'}}>Safety Notes</h4>
            <Field></Field>
            <SafetyNotesForm></SafetyNotesForm>

            {/* Safety interventions field */}
            <h4 style={{margin: '10px', overflow: 'hidden'}}>Safety Interventions</h4>
            <GreyField></GreyField>
            <SafetyNotesForm></SafetyNotesForm>
            
            <Footer />
        </>
    )
};


export default SafetyNotesTab;