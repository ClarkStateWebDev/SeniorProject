import React, { Component } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../subcomponents/footer'
import { Breadcrumb, BreadcrumbItem, TextField } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Field from './textfield'
import GreyField from './greyField'
import AddComplaint from './complaintForm'
import AddMedHistory from './medHistoryForm'
import AddFamHistory from './famHistoryForm';
import AddSymptoms from './symptomForm';
import AddProgNotes from './progressNotesForm';
import AddConsultNotes from './consultNotesForm';

class HistoryTab extends Component {

    render() {
        
        return (
            <>
                <Breadcrumb>
                    <BreadcrumbItem>
                        Patient Selection
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        History
                    </BreadcrumbItem>
                </Breadcrumb>
                <PatientOverview/>
                <br></br><br></br>
                
                {/* Tabs */}
                <AppBar position="static">
                        <Tabs id='tabs' style={{backgroundColor: '#e9ecef', color:'black'}}>
                            <Tab id='dashboard' label="Dashboard" href='/dashboard'/>
                            <Tab id='history' class='activ' label="History" href='/history'/>
                            <Tab id='imaging' label="Imaging" href='/imaging'/>
                            <Tab id='labs' label="Labs" href='/labs'/>
                            <Tab id='care' label="Care Plan" href='/care'/>
                        </Tabs>
                </AppBar>
                <br></br>
                <h4 style={{margin: '10px', overflow: 'hidden'}}> Chief Complaint</h4>
                <Field></Field>
                <AddComplaint></AddComplaint>
                <br></br>
                <h4 style={{margin: '10px', overflow: 'hidden'}}>Medical History</h4>
                <GreyField></GreyField>
                <AddMedHistory></AddMedHistory>
                <br></br>
                <h4 style={{margin: '10px', overflow: 'hidden'}}> Family History</h4>
                <Field></Field>
                <AddFamHistory></AddFamHistory>
                <br></br>
                <h4 style={{margin: '10px', overflow: 'hidden'}}>Review of Symptoms</h4>
                <GreyField></GreyField>
                <AddSymptoms></AddSymptoms>
                <br></br>
                <h4 style={{margin: '10px', overflow: 'hidden'}}> Progress Notes</h4>
                <Field></Field>
                <AddProgNotes></AddProgNotes>
                <br></br>
                <h4 style={{margin: '10px', overflow: 'hidden'}}>Consultation Notes</h4>
                <GreyField></GreyField>
                <AddConsultNotes></AddConsultNotes>
                <br></br> <br></br><br></br>

                <Footer />
            </>
        )}   

};

export default HistoryTab;