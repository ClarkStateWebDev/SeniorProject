// import statements
import React, { Component } from 'react';
import '../../assets/styles/Table.css';
import CranialForm from './cranialForm';
import CranialTableForm from './cranialTableForm';

class CranialTable extends Component {
    render() {

        return (
            <>
            <div>
                <CranialForm></CranialForm>
            </div>
            {/* table */}
                <div id="singleTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{width: '100%', padding: '15px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                {/* table header rows */}
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope='col'>Nerve Number</th>
                                    <th scope="col">Nerve Name</th>
                                    <th scope='col'>Type</th>
                                    <th scope='col'>Functions</th>
                                    <th scope='col'>Method</th>
                                    <th scope='col'>Results</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of cranial rows */}
                            <tbody>
                            <tr>
                                <th scope='row'>CN 1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <th scope='row'>CN 2</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <th scope='row'>CN 3</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>CN 4</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>CN 5</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>CN 6</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>CN 7</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>CN 8</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>CN 9</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>CN 10</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>CN 11</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>CN 12</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><CranialTableForm></CranialTableForm></td>
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
export default CranialTable;