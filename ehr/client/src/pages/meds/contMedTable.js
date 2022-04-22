// import statements
import React, { Component } from 'react';
import '../../assets/styles/Table.css';
import ContMedForm from './contMedForm';
import ContMedTableForm from './contMedTableForm';

class ContMedTable extends Component {
    render() {

        return (
            <>
            <div>
                <ContMedForm></ContMedForm>
            </div>
            {/* table */}
                <div id="singleTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{width: '100%', padding: '15px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                {/* table header rows */}
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col">Start Date</th>
                                    <th scope='col'>Time Due</th>
                                    <th scope='col'>Entered By</th>
                                    <th scope='col'>Drug</th>
                                    <th scope='col'>Dose</th>
                                    <th scope='col'>Route</th>
                                    <th scope='col'>Frequency</th>
                                    <th scope='col'>Comments</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of continuous medications rows */}
                            <tbody>
                            <tr>
                                <td>9/9/2021</td>
                                <td>12:00pm</td>
                                <td>Nurse 1</td>
                                <td>Lanoxin</td>
                                <td>0.25 mg</td>
                                <td>PO</td>
                                <td>Every day</td>
                                <td>N/A</td>
                                {/* Edit form */}
                                <td><ContMedTableForm></ContMedTableForm></td>
                                {/* Delete button */}
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
                                {/* Edit form */}
                                <td><ContMedTableForm></ContMedTableForm></td>
                                {/* Delete button */}
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
                                {/* Edit form */}
                                <td><ContMedTableForm></ContMedTableForm></td>
                                {/* Delete button */}
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
                                {/* Edit form */}
                                <td><ContMedTableForm></ContMedTableForm></td>
                                {/* Delete button */}
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
                                {/* Edit form */}
                                <td><ContMedTableForm></ContMedTableForm></td>
                                {/* Delete button */}
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
                                {/* Edit form */}
                                <td><ContMedTableForm></ContMedTableForm></td>
                                {/* Delete button */}
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
                                {/* Edit form */}
                                <td><ContMedTableForm></ContMedTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};
// export statements
export default ContMedTable;