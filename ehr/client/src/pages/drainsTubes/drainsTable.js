// import statements
import React, { Component } from 'react';
import '../../assets/styles/Table.css';
import DrainsForm from './drainsForm';
import DrainsTableForm from './drainsTableForm';

class DrainsTable extends Component {
    render() {

        return (
            <>
            <div>
                <DrainsForm></DrainsForm>
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
                                    <th scope='col'>Type of Tube</th>
                                    <th scope='col'>Tube Size</th>
                                    <th scope='col'>Drainage Type</th>
                                    <th scope='col'>Suction</th>
                                    <th scope='col'>Suction Amount</th>
                                    <th scope='col'>Functionally Patent</th>
                                    <th scope='col'></th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            {/* start of drains and tubes rows */}
                            <tbody>
                            <tr>
                                <td>9/9/2021</td>
                                <td>12:00pm</td>
                                <td>Nurse 1</td>
                                <td>External Catheter</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>No</td>
                                <td>N/A</td>
                                <td>Yes</td>
                                {/* Edit form */}
                                <td><DrainsTableForm></DrainsTableForm></td>
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
                                {/* Edit form */}
                                <td><DrainsTableForm></DrainsTableForm></td>
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
                                {/* Edit form */}
                                <td><DrainsTableForm></DrainsTableForm></td>
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
                                {/* Edit form */}
                                <td><DrainsTableForm></DrainsTableForm></td>
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
                                {/* Edit form */}
                                <td><DrainsTableForm></DrainsTableForm></td>
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
                                {/* Edit form */}
                                <td><DrainsTableForm></DrainsTableForm></td>
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
                                {/* Edit form */}
                                <td><DrainsTableForm></DrainsTableForm></td>
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
export default DrainsTable;