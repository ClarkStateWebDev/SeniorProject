import React, { Component } from 'react';

const PatientOverview = (props) =>{

    const birthYear = new Date(props.patient.date_birth).getFullYear();
    const age = new Date().getFullYear() - birthYear;

    

    return (
        <>
        
        <div style={{maxWidth: '100%'}}> 
            <div style={{float: 'inherit', maxWidth: '75'}}>
                
                <table class="table table-borderless" style={{margin: '0 auto', display: 'table', backgroundColor: '#006A99'}}>
                {/* <img style={{maxWidth: '100%', float: 'left'}}src="img/MichaelScott.png" class="card-img-left"></img> */}
                    <thead style={{color: 'white'}}>
                    <tr>
                        <th scope="col" >Name</th> 
                        <th scope="col" >Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">MR#</th>
                        <th scope="col">Provider</th>
                    </tr>
                    </thead>
                    
                    <tbody style={{color: 'white'}}>
                        
                    <tr>
                        <td >{props.patient.fname} {props.patient.lname}</td>
                        <td>{age}</td>
                        <td>{props.patient.gender}</td>
                        <td>{props.patient.medical_record_number}</td>
                        <td>Health Insurance</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight: 'bold'}}>Room #</td>
                        <td style={{fontWeight: 'bold'}}>DOB</td>
                        <td style={{fontWeight: 'bold'}}>Admit Date</td>
                        <td style={{fontWeight: 'bold'}}>Code</td>
                        <td style={{fontWeight: 'bold'}}>Allergies</td>
                    </tr>
                    <tr>
                        <td>{props.patient.patient_id}</td>
                        <td>{props.patient.date_birth}</td>
                        <td>9/9/2021</td>
                        <td>Full Code</td>
                        <td>None</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>    
            
        </>
)}   
        
export default PatientOverview;