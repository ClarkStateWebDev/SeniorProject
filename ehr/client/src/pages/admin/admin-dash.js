// import statements
import React, { Component, useState } from 'react';
import TableBlock from '../../components/staffTable';
import PatientBlock from '../../components/patientTable';
import Search from '../../components/searchbar';
import Footer from '../../layout/footer';
/* import '../../../css/footer.css'; */
import '../../assets/styles/footer.css';
import '../../assets/styles/Tabs.css';
import SearchRight from '../../components/searchbar-right';
/* import '../../../css/Tabs.css'; */

import { Breadcrumb, BreadcrumbItem, Container } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
//import { Container } from '@hospitalrun/components';
class Admin extends Component {
    
    render() {
        
        return (  
            <>
            <Container>
                {/* Breadcrumbs */}
                <Breadcrumb>
                    <BreadcrumbItem>
                    {/* Home */}
                        <a href='/'>Home</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                    {/* Admin Dashboard */}    
                        Admin Dashboard
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Tabs */}
                <AppBar position="static">
                        <Tabs id='tabs' style={{backgroundColor: '#89a9d0'}}>
                            <Tab id='adminDash' class='activ' label="Admin Dashboard" href='/admin'/>
                            <Tab id='medData' label="Medication Data" href='/med-data'/>
                            <Tab id='override' label="Override Data"/>
                        </Tabs>
                </AppBar>

                {/* Wristband Button */}
                <button type="button" class="btn btn-warning" style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36'}}>Generate New Wristband</button>
                <br></br><br></br><br></br><br></br>

                {/* Add Medical Staff Button */}
                <a href="/admin/addUser"><button type="button" class="btn btn-warning" style={{float: 'left', marginTop: '50px', marginLeft: '15px', background: '#F5DE36'}}>Add Medical Staff</button></a>
                {/* Add Patient Button */}
                <a href="/admin/addPatient"><button type="button" class="btn btn-warning" style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36'}}>Add Patient</button></a>
                <br></br><br></br><br></br><br></br>

                {/* Staff Searchbar */}
               {/*  <Search/> */}
                {/* Patient Searchbar */}
                <SearchRight/>
                
                {/* Staff Table */}
                <TableBlock style={{padding: '25px',marginTop:'15px'}}></TableBlock>
                {/* Patient Table */}
                <PatientBlock ></PatientBlock>
                
               
            </Container>   
            {/* <Footer/> */}
            </>
        )}   
};

/* Export Statement */
export default Admin;