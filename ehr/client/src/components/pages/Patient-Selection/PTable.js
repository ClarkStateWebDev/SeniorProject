// import statements
import React, { Component } from 'react';
import '../../../css/Table.css';

class SelectionTable extends Component {
    render() {

        return (
            <>
            {/* patient table */}
                <div id="patientTable" class="table-wrapper-scroll-y my-custom-scrollbar" c>
                {/*<div style={{float: 'right'}}><td ><button type="button" class="btn btn-warning" >Add New Patient</button></td></div>*/}

                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                <tr style={{background: '#0065A0', color: 'white', float: 'center', width: '100%', padding: '10px'}}>
                                    <th scope="col">Name</th>
                                    <th scope="col">Patient Record</th>
                                    <th scope="col">Date Of Birth</th>

                                </tr>
                            </thead>
                            {/* start of patient rows */}
                            <tbody>
                            <tr>
                                <td><img src="img/MichaelScott1.png" id='pic' />Michael Scott</td>
                                <td><button type="button" class="btn btn-warning" >View Patient</button></td>
                                <td>05/12/1966</td>
                            </tr>
                            <tr>
                                <td><img src="img/original1.png" id='pic'/>Dwight Schrute</td>
                                <td><button type="button" class="btn btn-warning" >View Patient</button></td>
                                <td>04/14/1966</td>
                            </tr>
                            <tr>
                                <td><img src="img/Jim.png" id='pic'/>Jim Halpert</td>
                                <td><button type="button" class="btn btn-warning" >View Patient</button></td>
                                <td>8/24/1986</td>
                            </tr>
                            <tr>
                                <td><img src="img/pam.png" id='pic'/>Pam Beesly</td>
                                <td><button type="button" class="btn btn-warning" >View Patient</button></td>
                                <td>12/8/1976</td>

                            </tr>
                            <tr>
                                <td><img src="img/kelly.png" id='pic'/>Kelly Kapoor</td>
                                <td><button type="button" class="btn btn-warning" >View Patient</button></td>
                                <td>01/24/1997</td>
                                 
                            </tr>
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};
// export statements
export default SelectionTable;
