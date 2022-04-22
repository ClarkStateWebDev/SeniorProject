// import statements
import React, { Component } from 'react';
import '../../assets/styles/Table.css';
import GastroForm from './gastroForm';
import GastroTableForm from './gastroTableForm';

class GastroTable extends Component {
    render() {

        return (
            <>
            <div>
                <GastroForm></GastroForm>
            </div>
            {/* table */}
                <div id="singleTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{width: '100%', padding: '15px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                {/* table header rows */}
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col">Date</th>
                                    <th scope='col'>Time</th>
                                    <th scope='col'>Entered By</th>
                                    <th scope='col'>Abdomen Inspection </th>
                                    <th scope='col'>Abdomen Auscultation</th>
                                    <th scope='col'>Last Bowel Movement</th>
                                    <th scope="col">Stool Type</th>
                                    <th scope="col">Ostomy</th>
                                    <th scope="col">Tubes</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Interventions</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of head rows */}
                            <tbody>
                            <tr>
                                <td>9/9/2021</td>
                                <td>12:00pm</td>
                                <td>Nurse 1</td>
                                <td>Symmetrical</td>
                                <td>Hyperactive</td>
                                <td>12:00pm</td>
                                <td>Formed</td>
                                <td>No</td>
                                <td>No</td>
                                <td>None</td>
                                <td>None</td>
                                {/* Edit form */}
                                <td><GastroTableForm></GastroTableForm></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><GastroTableForm></GastroTableForm></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><GastroTableForm></GastroTableForm></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><GastroTableForm></GastroTableForm></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><GastroTableForm></GastroTableForm></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><GastroTableForm></GastroTableForm></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><GastroTableForm></GastroTableForm></td>
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
export default GastroTable;