import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Field from '../History/textfield';
import GreyField from '../History/greyField';
import PsychosocialForm from './psycSocForm';


const PsychosocialTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Psychosocial
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            <p>Click <a href="http://www.phqscreeners.com" target="_blank">here</a> to access the Patient Health Questionaire.</p>
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='psychosocial' label="psychosocial" class="activ" href='/psychosocial'/>
                            <Tab/>
                        </Tabs>
                </AppBar>

            <h4 style={{margin: '10px', overflow: 'hidden'}}>Psychosocial Notes</h4>
            <Field></Field>
            <PsychosocialForm></PsychosocialForm>

            <h4 style={{margin: '10px', overflow: 'hidden'}}>Psychosocial Interventions</h4>
            <GreyField></GreyField>
            <PsychosocialForm></PsychosocialForm>
            <br></br><br></br>
            <p>* Source: From Patient Health Questionnaire (PHQ) Screeners. Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, 
                with an educational grant from Pfizer Inc. No permission required to reproduce, translate, display, or distribute. Retrieved from: http://www.phqscreeners.com</p>
                <br></br>
            <Footer />
        </>
    )
};


export default PsychosocialTab;