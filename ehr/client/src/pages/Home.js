import React, { Component ,useContext, useEffect, useState } from 'react';
import PatientOverview from './dashboard/patient-overview'
import Vitals from './dashboard/vitals'
import HospitalInfo from './dashboard/hospital-info'
import Health from './dashboard/health'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Footer from '../layout/footer'
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import AddHealth from './dashboard/healthForm';
import UserContext from '../context/UserContext';
import Axios from 'axios';
/* class Home extends Component { */
const Home = () => {
   /*  render() { */
        const { user } = useContext(UserContext);
        const { isAuth } = useContext(UserContext);
        const { isAdmin } = useContext(UserContext);
        const { userID } = useContext(UserContext);
        const { roles } = useContext(UserContext);
        
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
                        Dashboard
                    </BreadcrumbItem>
                </Breadcrumb>

                <PatientOverview patient={patient} />
                 <AppBar position="static">
                        <Tabs id='tabs' style={{backgroundColor: '#89a9d0'}}>
                            <Tab id='dashboard'class='activ' label="Dashboard" href={`/dashboard?patientID=${patient.patient_id}`}/>
                            <Tab id='history' label="History" href={`/history?patientID=${patient.patient_id}`} />
                            <Tab id='imaging' label="Imaging" href='/imaging'/>
                            <Tab id='labs' label="Labs" href='/labs'/>
                            <Tab id='care' label="Care Plan" href='/'/>
                        </Tabs>
                </AppBar>
                <Health patient={patient} />          
                <Vitals patient={patient} />        
                <HospitalInfo patient={patient} />
                
            </>
        )
    /* }    */
};
export default Home;