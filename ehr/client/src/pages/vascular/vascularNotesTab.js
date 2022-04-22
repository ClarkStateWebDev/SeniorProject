import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Field from '../History/textfield';
import GreyField from '../History/greyField';
import VascularNotesForm from './vascularNotesForm';


const VascularNotesTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Vascular Notes & Interventions
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                            <Tab id='vascular' label="Vascular" href='/vascular'/>
                            <Tab id='vascular-notes' label="Vascular Notes" class='activ' href='/vascular-notes'/>
                        </Tabs>
                </AppBar>
            {/* Vascular notes box */}
            <h4 style={{margin: '10px', overflow: 'hidden'}}>Vascular Notes</h4>
            <Field></Field>
            <VascularNotesForm></VascularNotesForm>

            {/* Vascular intervention box */}
            <h4 style={{margin: '10px', overflow: 'hidden'}}>Vascular Interventions</h4>
            <GreyField></GreyField>
            <VascularNotesForm></VascularNotesForm>
            
            <Footer />
        </>
    )
};


export default VascularNotesTab;