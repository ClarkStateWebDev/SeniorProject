// import statements
import React, { Component } from 'react';
import '../../assets/styles/Table.css';
import AbdomenForm from './abdomenForm';
import AbdomenTableForm from './abdomenTableForm';

class AbdomenTable extends Component {
    render() {

        return (
            <>
            <div>
                <AbdomenForm></AbdomenForm>
            </div>
            {/* table */}
                <div id="singleTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{width: '100%', padding: '15px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                {/* table header rows */}
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope='col'></th>
                                    <th scope="col">RLQ</th>
                                    <th scope='col'>RUQ</th>
                                    <th scope='col'>LUQ</th>
                                    <th scope='col'>LLQ</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of abdomen rows */}
                            <tbody>
                            <tr>
                                <th scope='row'>Nontender</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><AbdomenTableForm></AbdomenTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <th scope='row'>Tender</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><AbdomenTableForm></AbdomenTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <th scope='row'>Painful</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><AbdomenTableForm></AbdomenTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>Soft</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><AbdomenTableForm></AbdomenTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>Firm</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><AbdomenTableForm></AbdomenTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>Rigid</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><AbdomenTableForm></AbdomenTableForm></td>
                                {/* Delete button */}
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <th scope='row'>Guarding</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Edit form */}
                                <td><AbdomenTableForm></AbdomenTableForm></td>
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
export default AbdomenTable;