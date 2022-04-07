import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Field from '../History/textfield';
import GreyField from '../History/greyField';
import RespNotesForm from './respNotesForm';


const RespNotesTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Respiratory Notes & Interventions
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='breathing' label="Breathing" href='/breathing'/>
                            <Tab id='lungs' label="Lungs" href='/lungs'/>
                            <Tab id='oxygen' label="Oxygen" href='/oxygen'/>
                            <Tab id='airways' label="Airways" href='/airways'/>
                            <Tab id='notes' label="Notes" class="activ" href='/respiratory-notes'/>
                        </Tabs>
                </AppBar>

            <h4 style={{margin: '10px', overflow: 'hidden'}}>Respiratory Notes</h4>
            <Field></Field>
            <RespNotesForm></RespNotesForm>

            <h4 style={{margin: '10px', overflow: 'hidden'}}>Respiratory Interventions</h4>
            <GreyField></GreyField>
            <RespNotesForm></RespNotesForm>
            
            <Footer />
        </>
    )
};


export default RespNotesTab;