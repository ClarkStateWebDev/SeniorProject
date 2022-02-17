// import statements
import React, { Component } from 'react';
import '../../../css/Table.css';
//import ImagingForm from './imagingForm';
//import ImagingFormTable from './imagingFormTable';
import VitalsForm from './vitalsForm';
import VitalsTableForm from './VitalsTableForm';

class VitalsTable extends Component {
    render() {

        return (
            <>
            <div>
                <VitalsForm></VitalsForm>
            </div>
            {/* table */}
                <div id="singleTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{width: '100%', padding: '15px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col">Date</th>
                                    <th scope='col'>Time</th>
                                    <th scope='col'>Entered By</th>
                                    <th scope='col'>BP</th>
                                    <th scope='col'>BP Site</th>
                                    <th scope='col'>BP Position</th>
                                    <th scope='col'>Pulse</th>
                                    <th scope='col'>Pulse Site</th>
                                    <th scope='col'>Rhythm</th>
                                    <th scope='col'>Amplitude</th>
                                    <th scope='col'>Respiratory Rate</th>
                                    <th scope='col'>Respiratory Quality</th>
                                    <th scope='col'>Temperature</th>
                                    <th scope='col'>Temperature Site</th>
                                    <th scope='col'>Oxygen Saturation</th>
                                    <th scope='col'>O2 Site</th>
                                    <th scope='col'>Comments</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of medication rows */}
                            <tbody>
                            <tr>
                                <td>9/9/2021</td>
                                <td>12:00pm</td>
                                <td>Nurse 1</td>
                                <td>120/80</td>
                                <td>Left arm</td>
                                <td>Sitting</td>
                                <td>70</td>
                                <td>Radial</td>
                                <td>Regular</td>
                                <td>+2</td>
                                <td>14</td>
                                <td>Unlabored</td>
                                <td>98.5</td>
                                <td>Temporal</td>
                                <td>95%</td>
                                <td>Finger</td>
                                <td>None</td>
                                <td><VitalsTableForm></VitalsTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><VitalsTableForm></VitalsTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><VitalsTableForm></VitalsTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><VitalsTableForm></VitalsTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><VitalsTableForm></VitalsTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><VitalsTableForm></VitalsTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><VitalsTableForm></VitalsTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};
// export statements
export default VitalsTable;