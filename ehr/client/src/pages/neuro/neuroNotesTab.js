import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Field from '../History/textfield';
import GreyField from '../History/greyField';
import NeuroNotesForm from './neuroNotesForm';


const NeuroNotesTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Neurological Notes
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='mental' label="Mental Status" href='/mental-status'/>
                            <Tab id='seizure' label="Seizure Activity" href='/seizure-activity'/>
                            <Tab id='cranial' label="Cranial Nerve Assessment" href='/cranial-nerve'/>
                            <Tab id='neuroNotes' label="Notes" class="activ" href='/neurological-notes'/>
                        </Tabs>
                </AppBar>

                {/* Neurological notes field */}
                <h4 style={{margin: '10px', overflow: 'hidden'}}>Neurological Notes</h4>
                <Field></Field>
                <NeuroNotesForm></NeuroNotesForm>

                {/* Neurological interventions field */}
                <h4 style={{margin: '10px', overflow: 'hidden'}}>Neurological Interventions</h4>
                <GreyField></GreyField>
                <NeuroNotesForm></NeuroNotesForm>


                <br></br>
            <Footer />
        </>
    )
};


export default NeuroNotesTab;