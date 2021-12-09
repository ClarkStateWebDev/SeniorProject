// import statements
import React, { Component } from 'react';
import '../../css/Table.css';

class MultiTable extends Component {
    render() {

        return (
            <>
            {/* table */}
                <div id="multiTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{width: '100%', padding: '10px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col">What was Overridden?</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Nurse Name</th>
                                    <th scope="col">Reason for Override</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of override rows */}
                            <tbody>
                            <tr>
                                <td>Medications</td>
                                <td>11/20/2021</td>
                                <td>Lacey Owens</td>
                                <td>Wrong medication initially distributed</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
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
export default MultiTable;