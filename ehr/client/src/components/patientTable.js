// import statements
import React, { Component } from 'react';
/* import '../../css/Table.css'; */
import '../assets/styles/Table.css';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Tab } from '@hospitalrun/components';
import Button from 'react-bootstrap/Button';
class PatientBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
           patientList: [],
           isChanged: false
        };
    }

    editPatient(patient_id){
        window.location.href = '/admin/editPatient?patientID='+patient_id;
    }

    deletePatient(patient_id) {
        console.log("Delete function");
        Axios.delete(`http://localhost:3001/admin/deletePatient/${patient_id}`, 
        { 
            headers: {
                'x-access-token': sessionStorage.getItem("accessToken"),
              },
        }).catch(function(error) {
            console.log(error);
        });
        this.setState({isChanged:true});
    };

    getAllPatients() {
        Axios.get("http://localhost:3001/patient/getAllPatients",
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
                    <td className="text-center">
                        <Button size="sm" variant="warning" className="editPatient" onClick={ () => { this.editPatient(patient.patient_id) } }>
                                 Edit
                        </Button> 
                    </td>
                    <td className="text-center">
                        <Button size="sm" variant="danger" data-patient_id={patient.patient_id} className="deletePatient" onClick={ () => { if (window.confirm('Are you sure you wish to delete this patient?')) this.deletePatient(patient.patient_id) } }>
                            Delete
                        </Button> 
                    </td>
                </tr>
            );
          })
          this.setState({patientList: patients});
          this.setState({isChanged:false});   
        })
        .catch(function(error) {
          console.log(error);

        });
    }
    componentDidUpdate() {
        // Typical usage (don't forget to compare props):
        if (this.state.isChanged == true) {
            this.getAllPatients()
        }
        
      }
    componentDidMount() {
        this.getAllPatients()
    }

    render() {
        return (
            <>
            {/* patient table */}
                <div id="patientTable" className="table-wrapper-scroll-y my-custom-scrollbar" style={{float: 'left', width: '49%',  padding: '10px', marginTop: '20px'}}>
                    <h4 style={{width:'100%'}}>Patient List</h4>
                        <Table striped bordered>
                            {/* table header */}
                            <thead>
                                <tr className="text-center" style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col" >Name</th>
                                    <th scope="col" >Medical ID</th>
                                    <th scope="col" colspan="2">Action</th>
                                </tr>
                            </thead>
                            {/* start of patient rows */}
                            <tbody>
                            {
                                this.state.patientList
                            }
                            {this.state.patientList.length > 0 ? ("") :
                                (
                                <tr>
                                    <td colSpan="5">
                                    No Patients
                                    </td>
                                </tr>
                                )
                            }                            
                            {/* <tr>
                                <td><img src="img/MichaelScott1.png" id='pic' />Michael Scott</td>
                                <td>1245783</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td><img src="img/original1.png" id='pic'/>Dwight Schrute</td>
                                <td>1654782</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td><img src="img/Jim.png" id='pic'/>Jim Halpert</td>
                                <td>1356987</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td><img src="img/pam.png" id='pic'/>Pam Beesly</td>
                                <td>1024503</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td><img src="img/kelly.png" id='pic'/>Kelly Kapoor</td>
                                <td>9752041</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr> */}
                            </tbody>
                        </Table>
                </div>
            </>
        )}   
};
// export statements
export default PatientBlock;