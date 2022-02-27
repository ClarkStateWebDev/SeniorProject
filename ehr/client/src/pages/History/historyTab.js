import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from '../dashboard/patient-overview'
import Footer from '../../layout/footer'
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
import Axios from 'axios';

const HistoryTab = () => {
    const [patient, setPatient] = useState({
        patient_id: 0,
        fname: '',
        lname: '',
        date_birth: '',
        bio_sex: '',
        gender: '',
        medical_record_number: 0,
        userList: [],
        userId: 0
    })
    let patientID = 0;

    useEffect(() => {
        getPatient();
      }, []);

    const getPatientID = () => {
        var query = window.location.search.substring(1);
        console.log(query)
        var vars = query.split("&");
        console.log(vars)
        let patientID = 0
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    console.log(pair)
            if(pair[0] == "patientID"){
                return patientID = pair[1];
            }

        }
    }

    const getPatient = () => {
    
        const patient_id = getPatientID()
        Axios.get(`http://localhost:3001/patient/getPatient/${patient_id}`, { 
            headers: {
                'x-access-token': sessionStorage.getItem("accessToken"),
              },
        }).then(results => {
            const {firstName, lastName, date_birth, bio_sex, gender, userId} = results.data;
            console.log(results.data)
            let patients = results.data.map((patient) => {
                return (                    
                    setPatient({
                        patient_id: patient.patient_id,
                        fname: patient.first_name,
                        lname:patient.last_name,
                        date_birth: patient.date_of_birth,
                        bio_sex: patient.biological_sex,
                        gender: patient.gender,
                        medical_record_number: patient.medical_record_number,
                        userId: patient.userId
                    }) 
                );
              })
            
        }).catch(function(error) {
            console.log(error);
          });

    }
        
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem active>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem>
                    History
                </BreadcrumbItem>
            </Breadcrumb>
            <PatientOverview patient={patient} />

            <AppBar position="static">
                    <Tabs id='tabs' style={{backgroundColor: '#89a9d0'}}>
                        <Tab id='dashboard' label="Dashboard" href={`/dashboard?patientID=${patient.patient_id}`}/>
                        <Tab id='history' class='activ' label="History" href={`/history?patientID=${patient.patient_id}`}/>
                        <Tab id='imaging' label="Imaging" href='/imaging'/>
                        <Tab id='labs' label="Labs" href='/labs'/>
                        <Tab id='care' label="Care Plan" href='/care'/>
                    </Tabs>
            </AppBar>

            <h4 style={{margin: '10px', overflow: 'hidden'}}> Chief Complaint</h4>
            <Field></Field>
            <AddComplaint></AddComplaint>

            <h4 style={{margin: '10px', overflow: 'hidden'}}>Medical History</h4>
            <GreyField></GreyField>
            <AddMedHistory></AddMedHistory>

            <h4 style={{margin: '10px', overflow: 'hidden'}}> Family History</h4>
            <Field></Field>
            <AddFamHistory></AddFamHistory>
            <h4 style={{margin: '10px', overflow: 'hidden'}}>Review of Symptoms</h4>
            <GreyField></GreyField>
            <AddSymptoms></AddSymptoms>
            
            <h4 style={{margin: '10px', overflow: 'hidden'}}> Progress Notes</h4>
            <Field></Field>
            <AddProgNotes></AddProgNotes>
            
            <h4 style={{margin: '10px', overflow: 'hidden'}}>Consultation Notes</h4>
            <GreyField></GreyField>
            <AddConsultNotes></AddConsultNotes>
            <Footer />
        </>
    )
};


export default HistoryTab;