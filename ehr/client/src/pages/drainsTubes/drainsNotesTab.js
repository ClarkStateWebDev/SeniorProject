import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Field from '../History/textfield';
import GreyField from '../History/greyField';
import DrainsNotesForm from './drainsNotesForm';


const DrainsNotesTab = () => {
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Drains & Tubes Notes & Interventions
                </BreadcrumbItem>
            </Breadcrumb>
            {/*<PatientOverview patient={patient} />*/}

            <br></br><br></br>
            
                 {/* Tabs */}
                 <AppBar position="static" style={{maxWidth: '100%'}}>
                 <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color: 'black'}}>
                 <Tab id='drains' label="Drains & Tubes" href='/drains'/>
                            <Tab id='drains-notes' label="Notes & Interventions" class="activ"  href='/drains-notes'/>
                        </Tabs>
                </AppBar>
            {/* Drains & Tubes notes box */}
            <h4 style={{margin: '10px', overflow: 'hidden'}}>Drains & Tubes Notes</h4>
            <Field></Field>
            <DrainsNotesForm></DrainsNotesForm>

            {/* Vascular intervention box */}
            <h4 style={{margin: '10px', overflow: 'hidden'}}>Drains & Tubes Interventions</h4>
            <GreyField></GreyField>
            <DrainsNotesForm></DrainsNotesForm>
            
            <Footer />
        </>
    )
};


export default DrainsNotesTab;