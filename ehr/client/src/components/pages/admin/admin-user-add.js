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
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            username: '',
            password: '',
            email: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
      }
    
    handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        alert('hi ' + this.state.fname);
        event.preventDefault();
    };

    handleReset(event) {
        this.setState({
            fname: '',
            lname: '',
            username: '',
            password: '',
            email: ''
        })
        event.preventDefault();
    }
    render() {
        return (  
            <>
            <div class='main'>
                {/* Breadcrumbs */}
                <Breadcrumb>
                    <BreadcrumbItem active>
                    {/* Home */}
                        <a href='/'>Home</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                    {/* Admin Dashboard */}    
                        <a href="/admin">Admin Dashboard</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                    {/* Admin Dashboard */}    
                        Patient Add
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Tabs */}
                <AppBar position="static">
                        <Tabs id='tabs' style={{backgroundColor: '#89a9d0'}}>
                            <Tab id='adminDash' class='activ' label="Admin Dashboard" href='/admin-dash'/>
                            <Tab id='medData' label="Medication Data" href='/med-data'/>
                            <Tab id='override' label="Override Data"/>
                        </Tabs>
                </AppBar>
                <h1>Add User</h1>
                <div class="container">
                 <form onSubmit={this.handleSubmit}>
                     <div class="row">
                        <div class="col">
                        <label for="fname">First Name</label>
                        <input type="text" name="fname" required value={this.state.fname} onChange={this.handleInputChange} />
                        </div>
                        <div class="col">
                        <label for="lname">Last Name</label>
                        <input type="text" name="lname" required value={this.state.lname} onChange={this.handleInputChange}></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="username">Username</label>
                            <input type="text" name="username" required value={this.state.username} onChange={this.handleInputChange}></input>
                        </div>
                        <div class="col">
                            <label for="password">Password</label>
                            <input type="password" name="password" required value={this.state.password} onChange={this.handleInputChange}></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <label for="email">Email Address</label>
                        <input type="email" name="email" required value={this.state.email} onChange={this.handleInputChange}></input>
                        </div>
                    </div>
                    <input type="submit" value="Submit"></input>
                    <input type="reset" value="Cancel" onClick={this.handleReset}></input>
                 </form>
                 </div>
                </div>    
                
            </>
        )}   
};

/* Export Statement */
export default Admin;