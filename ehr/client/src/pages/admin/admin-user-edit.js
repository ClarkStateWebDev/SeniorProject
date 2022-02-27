// import statements
import React, { Component } from 'react';
import '../../assets/styles/footer.css';
import '../../assets/styles/Tabs.css';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Axios from 'axios';
import queryString from 'query-string';
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
                password: '',
                email: '',
                isAdmin: false

        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.getUserID = this.getUserID.bind(this);
      }

    getUserID = () => {
        var query = window.location.search.substring(1);
        console.log(query)
        var vars = query.split("&");
        console.log(vars)
        let userId = 0
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    console.log(pair)
            if(pair[0] == "userId"){
                return userId = pair[1];
            }

        }
    }

    getUser = () => {
        const user_id = this.getUserID();
        Axios.get(`http://localhost:3001/user/getUser/${user_id}`, { 
            headers: {
                'x-access-token': sessionStorage.getItem("accessToken"),
              },
        }).then(results => {
            const {first_name, last_name, email, isAdmin} = results.data;
            let users = results.data.map((user) => {
                return (
                    this.setState({
                        user_id: user.user_id,
                        fname: user.first_name,
                        lname: user.last_name,
                        email: user.email,
                        isAdmin: user.isAdmin
                    }) 
                );
              })
            
        }).catch(function(error) {
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
        Axios.put("http://localhost:3001/user/updateUser/", 
            {
                user_id: this.state.user_id,
                firstName: this.state.fname, 
                lastName: this.state.lname, 
                email: this.state.email, 
                password: this.state.password,
                isAdmin: this.state.isAdmin
            },
            {
                headers: {
                    'x-access-token': sessionStorage.getItem("accessToken"),
                },
            }
            ).then(
                alert("User Updated")
            );
    };

    handleReset(event) {
        this.setState({
            user_id: 0,
            fname: '',
            lname: '',
            username: '',
            password: '',
            email: '',
            isAdmin: false
        })
        event.preventDefault();
    }
    componentDidMount() {
        this.getUser();
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
                    <h1 >Edit User</h1>
                    {this.state.isAdmin}
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
                    </Row>
                    <Row>
                        <Col sm={1} className="align-items-center">
                        <div className="mb-3">
                        <Form.Label>
                            Permissions:
                        </Form.Label>
                        <Form.Check inline type="radio" label="Admin" id="admin" name="isAdmin" value="1" checked={this.state.isAdmin === true} onChange={this.handleInputChange}/>
                        <Form.Check inline type="radio" label="Student" id="student" name="isAdmin" value="0" checked={this.state.isAdmin === false} onChange={this.handleInputChange}/>
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