import React, { Component } from 'react';
import AddHealth from './healthForm';

class Health extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <>
            <div style={{ overflow: 'hidden'}}>
               <table class="table table-borderless" style={{ margin: '0 auto', display: 'table', backgroundColor: '#B0D1E0', maxWidth: '100%'}}>
                    <thead>
                    <tr>
                        <th scope="col" style={{color: '#006A99', fontWeight: 'bolder', fontSize: '20px'}}>Health</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <td>Updated: 9/9/2021</td>
                        <td>12:20pm</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Medical Number:</th>
                        <td>{this.props.patient.medical_record_number}</td>
                        <th>Diet:</th>
                        <td>Regular</td>
                        <th>Braden Scale:</th>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th>Allergies:</th>
                        <td>None</td>
                        <th>Fall Rate:</th>
                        <td>None</td>
                        
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                        <td>
                            <AddHealth patient={this.props.patient} />
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </>
        )}   
        
};
export default Health;