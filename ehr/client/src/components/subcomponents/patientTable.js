// import statements
import React, { Component } from 'react';
import '../../css/Table.css';

class PatientBlock extends Component {
    render() {

        return (
            <>
            {/* patient table */}
                <div id="patientTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{float: 'left', width: '49%', padding: '10px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                <tr>
                                    <th style={{maxwidth:'50%'}}>Patient List</th>
                                </tr>
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col">Name</th>
                                    <th scope="col">Medical ID</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of patient rows */}
                            <tbody>
                            <tr>
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
                            </tr>
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};
// export statements
export default PatientBlock;