// import statements
import React, { Component } from 'react';
/* import '../../../css/footer.css';
import '../../../css/Tabs.css'; */
import '../../assets/styles/footer.css';
import '../../assets/styles/Tabs.css';
import { Breadcrumb, BreadcrumbItem} from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            username: '',
            password: '',
            email: '',
            isAdmin: true,
            roles: ''
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
        Axios.post("http://localhost:3001/user/create", 
            {
                firstName: this.state.fname, 
                lastName: this.state.lname, 
                email: this.state.email, 
                password: this.state.password,
                isAdmin: this.state.isAdmin,
                roles: this.state.roles,
            },
            {
                headers: {
                    'x-access-token': sessionStorage.getItem("accessToken"),
                },
            }
            ).then(
            alert("User Added")
        );
        this.handleReset();
    };

    handleReset(event) {
        this.setState({
            fname: '',
            lname: '',
            username: '',
            password: '',
            email: '',
            isAdmin: true,
            roles: ''
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
                        User Add
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
                <Container>
                <div className="text-center mb-5">
                    <h1 >Add User</h1>
                </div>
               
     
                 <Form onSubmit={this.handleSubmit} className="font-weight-bold">
                    <Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="fname" required value={this.state.fname} onChange={this.handleInputChange}/>
                        </Col>   
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lname" required value={this.state.lname} onChange={this.handleInputChange}/>
                        </Col> 
                    </Row>
                    
                    <Row className="mb-3"> 
                        <Col>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" required value={this.state.email} onChange={this.handleInputChange} />
                        </Col>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" required value={this.state.password} onChange={this.handleInputChange}/>
                        </Col> 
                    </Row>
                    <Row>
                        <Col sm={1} className="align-items-center">
                        <div className="mb-3">
                        <Form.Label>
                            Permissions:
                        </Form.Label>
                        <Form.Check inline type="radio" label="Admin" id="admin" name="roles" value="admin" onChange={this.handleInputChange}/>
                        <Form.Check inline type="radio" label="Student" id="student" name="isAdmin" value="0" onChange={this.handleInputChange}/>
                        </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">  
                        <Col sm={1} className="align-items-center"> 
                            <Button className="mb-3" variant="primary" type="submit">Submit</Button>
                        </Col>  
                    </Row>
                 </Form>

                 </Container>
            </div>
            </>
        )}   
};

/* Export Statement */
export default Admin;