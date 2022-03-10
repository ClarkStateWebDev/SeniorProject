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
            date_birth: '',
            bio_sex: '',
            gender: '',
            userList: [],
            userId: 0
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
      }
    
    getAllUsers() {
        Axios.get("http://localhost:3001/user/getAll",
        {
            headers: {
                'x-access-token': sessionStorage.getItem("accessToken"),
            },
        })
        .then(results => {
            return results;
        })
        .then(results => {
          let users = results.data.map((user) => {
            return (
                <option value={user.user_id}>{user.first_name} {user.last_name}</option> 
            );
          })
          this.setState({userList: users});
          /* this.setState({isChanged:false});    */
        })
        .catch(function(error) {
          console.log(error);

        });
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
        Axios.post("http://localhost:3001/patient/createPatient", 
            {
                firstName: this.state.fname, 
                lastName: this.state.lname, 
                date_birth: this.state.date_birth, 
                bio_sex: this.state.bio_sex,
                gender: this.state.gender,
                userId: this.state.userId
            },
            {
                headers: {
                    'x-access-token': sessionStorage.getItem("accessToken"),
                },
            }
            ).then(
            alert("Patient Added")
        ).catch(err => {
            console.log(err);
        });
        this.handleReset();
    };

    handleReset(event) {
        this.setState({
            fname: '',
            lname: '',
            date_birth: '',
            bio_sex: '',
            gender: '',
            userId: 0
        })
        event.preventDefault();
    }

    componentDidMount() {
        this.getAllUsers();
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
                <Container>
                <div className="text-center mb-5">
                    <h1 >Add Patient</h1>
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
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" name="date_birth" required value={this.state.date_birth} onChange={this.handleInputChange} />
                        </Col>
                        <Col>
                            <Form.Label>Biological Sex</Form.Label>
                            <Form.Control type="text" name="bio_sex" required value={this.state.bio_sex} onChange={this.handleInputChange}/>
                        </Col> 
                        <Col>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" name="gender" required value={this.state.gender} onChange={this.handleInputChange}/>
                        </Col> 
                        <Col>
                                <Form.Label>Assign a student to this patient</Form.Label>
                                <Form.Select name="userId" onChange={this.handleInputChange}>
                                        <option>Select a student</option>
                                    {
                                        this.state.userList
                                    }
                                    {this.state.userList.length > 0 ? ("") :
                                        (
                                            <option>No Students to assign</option>
                                        )
                                    }
                                </Form.Select>
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