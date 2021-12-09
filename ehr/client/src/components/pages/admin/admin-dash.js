// import statements
import React, { Component } from 'react';
import TableBlock from '../../subcomponents/staffTable';
import PatientBlock from '../../subcomponents/patientTable';
import Search from '../../subcomponents/searchbar';
import Footer from '../../subcomponents/footer';
import '../../../css/footer.css';
import SearchRight from '../../subcomponents/searchbar-right';
import '../../../css/Tabs.css';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';

class Admin extends Component {

    render() {
        return (  
            <>
            <div class='main'>
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
                <button type="button" class="btn btn-warning" style={{float: 'left', marginTop: '50px', marginLeft: '15px', background: '#F5DE36'}}><a href="/admin/add">Add Medical Staff</a></button>
                {/* Add Patient Button */}
                <button type="button" class="btn btn-warning" style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36'}}>Add Patient</button>
                <br></br><br></br><br></br><br></br>

                {/* Staff Searchbar */}
                <Search/>
                {/* Patient Searchbar */}
                <SearchRight/>
                
                {/* Staff Table */}
                <TableBlock style={{padding: '10px'}}></TableBlock>
                {/* Patient Table */}
                <PatientBlock ></PatientBlock>
                
                {/* Footer */}
                </div>    
                
            </>
        )}   
};

/* Export Statement */
export default Admin;