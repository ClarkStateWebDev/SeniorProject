// import statements
import React, { Component } from 'react';
import '../../assets/styles/Table.css';
import PainForm from './painForm';
import PainTableForm from './painTableForm';

class PainTable extends Component {
    render() {

        return (
            <>
            <div>
                <PainForm></PainForm>
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
                                    <th scope='col'>Location</th>
                                    <th scope='col'>Frequency</th>
                                    <th scope='col'>Pain Quality</th>
                                    <th scope='col'>Behavior</th>
                                    <th scope='col'>Intervention Notes</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of pain rows */}
                            <tbody>
                            <tr>
                                <td>9/9/21</td>
                                <td>12:00pm</td>
                                <td>Nurse 1</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td><PainTableForm></PainTableForm></td>
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
                                <td><PainTableForm></PainTableForm></td>
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
                                <td><PainTableForm></PainTableForm></td>
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
                                <td><PainTableForm></PainTableForm></td>
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
                                <td><PainTableForm></PainTableForm></td>
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
                                <td><PainTableForm></PainTableForm></td>
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
                                <td><PainTableForm></PainTableForm></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};
// export statements
export default PainTable;