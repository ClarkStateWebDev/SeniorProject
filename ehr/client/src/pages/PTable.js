import React, { Component, useContext, useState, useEffect } from 'react';
import '../assets/styles/Table.css';
import UserContext from '../context/UserContext';
import Axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

const SelectionTable = () =>{

        const {user} = useContext(UserContext);
        const [patientList , setPatientList]= useState([]); 
        
        
        useEffect(() => {
            getAllUserPatients();
          }, []);


        const patientSelect = (patient_id) =>{
            window.location.href = '/dashboard?patientID='+patient_id;
        }

        const getAllUserPatients = () => {
            let user_id = user.id

            Axios.get(`http://localhost:3001/patient/getUserPatient/${user_id}`,
            {
                headers: {
                    'x-access-token': sessionStorage.getItem("accessToken"),
                },
            })
            .then(results => {
                /* console.log(results) */
                return results;
            })
            .then(results => {
              /* console.log(results) */
              let patients = results.data.map((patient) => {
                return (
                    <tr key={patient.patient_id}>
                        <td>{patient.first_name} {patient.last_name}</td>
                        <td>{patient.medical_record_number}</td>
                        <td>{patient.date_of_birth}</td>
                        <td className="text-center">
                            <Button size="sm" variant="warning" className="editPatient" onClick={ () => { patientSelect(patient.patient_id) } } >
                                     Select
                            </Button> 
                        </td>
                    </tr>
                );
              })
              /* setPatientList= patients;  */  
              setPatientList(patients);
              console.log(patients);
            })
            .catch(function(error) {
              console.log(error);
    
            });
        }
 
        return (
            
            <>
            {/* patient table */}
                <div id="patientTable" class="table-wrapper-scroll-y my-custom-scrollbar">
                {/*<div style={{float: 'right'}}><td ><button type="button" class="btn btn-warning" >Add New Patient</button></td></div>*/}

                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                <tr style={{background: '#0065A0', color: 'white', float: 'center', width: '100%', padding: '10px'}}>
                                    <th scope="col">Name</th>
                                    <th scope="col">Patient Record</th>
                                    <th scope="col">Date Of Birth</th>
                                    <th scope="col" colspan="2" >Action</th>
                                </tr>
                            </thead>
                            {/* start of patient rows */}
                            <tbody>
                                {
                                   patientList
                                }
                                {patientList.length > 0 ? ("") :
                                    (
                                    <tr>
                                        <td colSpan="5">
                                        No Patients
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                </div>
            </>
        )}   

export default SelectionTable;