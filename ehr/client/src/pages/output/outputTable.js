// import statements
import React, { Component } from 'react';
import '../../assets/styles/Table.css';
import OutputForm from './outputForm';
import OutputTableForm from './outputTableForm';

class OutputTable extends Component {
    render() {

        return (
            <>
            <div>
                <OutputForm></OutputForm>
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
                                    <th scope='col'>Type</th>
                                    <th scope='col'>Amount</th>
                                    <th scope='col'>Comments</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of output rows */}
                            <tbody>
                            <tr>
                                <td>9/9/2021</td>
                                <td>12:00pm</td>
                                <td>Nurse 1</td>
                                <td>Urine</td>
                                <td>300ml</td>
                                <td>None</td>
                                <td><OutputTableForm></OutputTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><OutputTableForm></OutputTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><OutputTableForm></OutputTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><OutputTableForm></OutputTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><OutputTableForm></OutputTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><OutputTableForm></OutputTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><OutputTableForm></OutputTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};
// export statements
export default OutputTable;