import React, { Component } from 'react';

const PatientOverview = (props) =>{

    const birthYear = new Date(props.patient.date_birth).getFullYear();
    const age = new Date().getFullYear() - birthYear;

    

    return (
        <>
        <p>patient overview will be here</p>
        </>
)}   
        
export default PatientOverview;